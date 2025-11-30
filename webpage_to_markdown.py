#!/usr/bin/env python3
"""
Smart Webpage to Content Component Mapper (Multi-Page Version)
--------------------------------------------------------------
This script fetches one or more webpages and groups their content into 
logical blocks that map to our Astro Component System.

It groups content by "Sections" (Headings) and attempts to identify:
- Text Blocks (TextOnlySection)
- Text + Image combinations (BodyCopyImage)
- Lists/Grids of items (CardGrid)
- Hero sections (HeroMultiTemplate)

Usage:
    python webpage_to_markdown.py <URL1> <URL2> ... [output_filename]

Output:
    A JSON file containing structured content blocks from ALL pages, merged.
"""

import sys
import json
import re
import requests
from bs4 import BeautifulSoup, Tag, NavigableString
from urllib.parse import urljoin
from dataclasses import dataclass, field, asdict
from typing import List, Optional, Dict, Any

# --- Configuration ---
MIN_SECTION_WORDS = 20  # Skip sections with less than this words
USER_AGENT = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36"

@dataclass
class ContentBlock:
    type: str  # 'hero', 'section', 'grid', 'text', 'image'
    heading: Optional[str] = None
    content: List[str] = field(default_factory=list)
    images: List[Dict[str, str]] = field(default_factory=list)
    links: List[Dict[str, str]] = field(default_factory=list)
    suggested_component: Optional[str] = None
    word_count: int = 0
    source_url: Optional[str] = None # Track where this block came from

def fetch_html(url: str) -> BeautifulSoup:
    try:
        headers = {'User-Agent': USER_AGENT}
        response = requests.get(url, headers=headers, timeout=15)
        response.raise_for_status()
        return BeautifulSoup(response.content, 'html.parser')
    except Exception as e:
        print(f"❌ Error fetching URL {url}: {e}")
        return None

def clean_soup(soup: BeautifulSoup):
    """Remove clutter (nav, footer, ads, scripts)."""
    for tag in soup(['script', 'style', 'noscript', 'iframe', 'svg', 'header', 'footer', 'nav', 'form']):
        tag.decompose()
    
    # Remove hidden elements
    for tag in soup.find_all(style=re.compile(r'display:\s*none')):
        tag.decompose()

def extract_hero(soup: BeautifulSoup, url: str) -> Optional[ContentBlock]:
    """Attempt to find the Hero section (H1 + Intro)."""
    h1 = soup.find('h1')
    if not h1:
        return None

    block = ContentBlock(type='hero', heading=h1.get_text(strip=True), source_url=url)
    
    # Look for intro text immediately after H1
    current = h1.next_sibling
    while current and len(block.content) < 1: # Just get the first paragraph/intro
        if isinstance(current, Tag):
            if current.name in ['p', 'div'] and current.get_text(strip=True):
                block.content.append(current.get_text(strip=True))
            elif current.name in ['h2', 'section']: # Stop at next section
                break
        current = current.next_sibling
    
    block.suggested_component = 'HeroMultiTemplate'
    return block

def resolve_image_url(base_url: str, img_src: str) -> str:
    return urljoin(base_url, img_src)

def get_section_content(start_node: Tag, url: str) -> ContentBlock:
    """Gather content under a heading until the next heading."""
    heading_text = start_node.get_text(strip=True)
    block = ContentBlock(type='section', heading=heading_text, source_url=url)
    
    current = start_node.next_sibling
    
    while current:
        if isinstance(current, Tag):
            # Stop at next major heading
            if current.name in ['h1', 'h2', 'header', 'footer']:
                break
            
            # Identify Content
            if current.name in ['p', 'div', 'span']:
                text = current.get_text(strip=True)
                if len(text) > 10: # Filter noise
                    block.content.append(text)
            
            # Identify Images
            if current.name == 'img':
                src = current.get('src')
                if src: 
                    abs_src = resolve_image_url(url, src)
                    block.images.append({'src': abs_src, 'alt': current.get('alt', '')})
            for img in current.find_all('img'):
                src = img.get('src')
                if src: 
                    abs_src = resolve_image_url(url, src)
                    block.images.append({'src': abs_src, 'alt': img.get('alt', '')})
                
            # Identify Lists (potential Grids)
            if current.name in ['ul', 'ol']:
                items = [li.get_text(strip=True) for li in current.find_all('li') if li.get_text(strip=True)]
                if len(items) > 2:
                    block.type = 'grid_candidate'
                    block.content.extend(items)
            
        current = current.next_sibling
    
    # Heuristics for Component Suggestion
    text_length = sum(len(s) for s in block.content)
    block.word_count = text_length // 5
    
    if block.images and text_length > 100:
        block.suggested_component = 'BodyCopyImage'
    elif block.type == 'grid_candidate':
        block.suggested_component = 'CardGrid'
    elif text_length > 0:
        block.suggested_component = 'TextOnlySection'
        
    return block

def process_urls(urls: List[str], output_file: Optional[str] = None):
    all_blocks = []
    processed_count = 0

    print(f"🚀 Starting multi-page scrape for {len(urls)} URLs...")

    for url in urls:
        print(f"🔍 Scraping: {url}")
        soup = fetch_html(url)
        if not soup:
            continue
            
        clean_soup(soup)
        
        # 1. Extract Hero
        hero = extract_hero(soup, url)
        if hero:
            all_blocks.append(asdict(hero))
        
        # 2. Extract Sections by Headings (H2)
        headings = soup.find_all('h2')
        if not headings:
            # Fallback to H3 if no H2s
            headings = soup.find_all('h3')
            
        for h2 in headings:
            block = get_section_content(h2, url)
            if block.word_count >= MIN_SECTION_WORDS: # Filter empty/tiny sections
                all_blocks.append(asdict(block))
        
        processed_count += 1

    # 3. Output
    result = {
        "source_urls": urls,
        "total_blocks": len(all_blocks),
        "blocks": all_blocks
    }
    
    if not output_file:
        if len(urls) == 1:
             # Generate filename from first URL if only one
            slug = re.sub(r'[^a-z0-9]', '-', urls[0].split('//')[1].split('/')[1].lower())
            if not slug: slug = "scraped_content"
            output_file = f"{slug}.json"
        else:
            output_file = "merged_scraped_content.json"
        
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(result, f, indent=2, ensure_ascii=False)
        
    print(f"✅ Successfully processed {processed_count}/{len(urls)} URLs.")
    print(f"📦 Extracted {len(all_blocks)} total content blocks.")
    print(f"📄 Saved to: {output_file}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python webpage_to_markdown.py <URL1> [URL2] ... [output_filename]")
        sys.exit(1)
    
    # Simple arg parsing: last arg is filename if it doesn't look like a URL, otherwise default
    args = sys.argv[1:]
    urls = []
    outfile = None
    
    if not args[-1].startswith('http'):
        outfile = args[-1]
        urls = args[:-1]
    else:
        urls = args
        
    if not urls:
        print("❌ No URLs provided.")
        sys.exit(1)

    process_urls(urls, outfile)