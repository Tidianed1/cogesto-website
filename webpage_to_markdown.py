#!/usr/bin/env python3
"""
Webpage to Markdown Converter

This script fetches HTML content from a URL and converts it to Markdown format
with YAML frontmatter containing title and description.

Usage:
    python webpage_to_markdown.py <URL>
    python webpage_to_markdown.py https://www.cogestoconsulting.com/notre-expertise/#expertises-fonctionnelles

Requirements:
    pip install requests beautifulsoup4
"""

import sys
import re
import requests
from pathlib import Path
from bs4 import BeautifulSoup
import urllib.parse


def fetch_webpage_content(url):
    """
    Fetch HTML content from the given URL.
    
    Args:
        url (str): The URL to fetch content from
        
    Returns:
        BeautifulSoup: Parsed HTML content
        
    Raises:
        requests.RequestException: If the URL cannot be fetched
    """
    try:
        response = requests.get(url, timeout=30)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.content, 'html.parser')
        return soup
        
    except requests.RequestException as e:
        raise requests.RequestException(f"Failed to fetch {url}: {str(e)}")


def extract_metadata(soup):
    """
    Extract title and description from the BeautifulSoup object.
    
    Args:
        soup (BeautifulSoup): The full parsed HTML
        
    Returns:
        dict: A dictionary containing the title and description
    """
    title = ""
    description = ""
    
    # 1. Try to get title from the <title> tag
    if soup.title and soup.title.string:
        title = soup.title.string.strip()
    
    # 2. Fallback to the first <h1> tag if <title> is empty or missing
    if not title:
        h1_tag = soup.find('h1')
        if h1_tag:
            title = h1_tag.get_text(strip=True)
    
    # 3. If still no title, use a default
    if not title:
        title = "Untitled Page"

    # 1. Try to get description from <meta name="description">
    head = soup.find('head')
    if head:
        meta_desc = head.find('meta', attrs={'name': 'description'})
        if meta_desc and meta_desc.get('content'):
            description = meta_desc['content'].strip()
    
    # 2. Fallback to the first <p> tag if meta description is missing
    if not description:
        first_p = soup.find('p')
        if first_p:
            p_text = first_p.get_text(strip=True)
            description = (p_text[:197] + '...') if len(p_text) > 200 else p_text
    
    # 3. If still no description, provide a default
    if not description:
        description = "No description available"
    
    return {
        "title": title,
        "description": description
    }


def parse_element(element, processed_texts=None):
    """
    Recursively parse a BeautifulSoup element into a structured JSON block.
    """
    if processed_texts is None:
        processed_texts = set()

    block = None

    # Ignore non-visible elements and specific tags
    if not element.name or element.name in ['script', 'style', 'meta', 'link', 'head', 'nav', 'aside', 'form']:
        return None

    # Handle simple text-based elements
    if element.name in ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']:
        text = element.get_text(strip=True)
        if text and text not in processed_texts:
            block = {"type": "heading", "level": int(element.name[1]), "text": text}
            processed_texts.add(text)
    elif element.name == 'p':
        content = []
        for child in element.children:
            if child.name == 'a':
                href = child.get('href')
                text = child.get_text(strip=True)
                if href and text:
                    content.append({"type": "link", "href": href, "text": text})
            elif child.string:
                text = child.string.strip()
                if text:
                    content.append({"type": "text", "value": text})
        
        if content:
            # Create a unique key for the paragraph to avoid duplicates
            para_key = "".join([c.get('text') or c.get('value', '') for c in content])
            if para_key and para_key not in processed_texts:
                block = {"type": "paragraph", "content": content}
                processed_texts.add(para_key)
    elif element.name in ['ul', 'ol']:
        items = [li.get_text(strip=True) for li in element.find_all('li', recursive=False) if li.get_text(strip=True)]
        if items:
            # Create a unique key for the list to avoid duplicates
            list_key = " ".join(items)
            if list_key not in processed_texts:
                block = {"type": "list", "style": "ordered" if element.name == 'ol' else "unordered", "items": items}
                processed_texts.add(list_key)
    elif element.name == 'img':
        src = element.get('src')
        alt = element.get('alt', '')
        if src and src not in processed_texts:
            block = {"type": "image", "src": src, "alt": alt}
            processed_texts.add(src)
    
    # Handle container elements by recursion
    elif element.name in ['div', 'section', 'article', 'main', 'header', 'footer']:
        content = []
        for child in element.children:
            child_block = parse_element(child, processed_texts)
            if child_block:
                content.append(child_block)
        if content:
            block = {
                "type": "container",
                "tag": element.name,
                "attributes": dict(element.attrs),
                "content": content
            }

    elif not hasattr(element, 'name') and element.string and element.string.strip():
        pass
        
    return block

def parse_content_to_structured_data(soup):
    """
    Parse the main content of the page into a structured list of content blocks.
    """
    # Find the main content container
    main_content = soup.find('main')
    if not main_content:
        # A more robust selector strategy might be needed for different sites
        main_content = soup.find('article') or soup.find('body')

    if not main_content:
        print("⚠️ Could not find a main content container. Using the whole body.")
        main_content = soup.find('body') or soup

    # Start the recursive parsing from the main content container's children
    content = []
    for child in main_content.children:
        child_block = parse_element(child)
        if child_block:
            content.append(child_block)
    
    return content


def generate_filename_from_url(url):
    """
    Generate a filename slug from the URL.
    
    Args:
        url (str): The URL to create filename from
        
    Returns:
        str: Generated filename with .json extension
    """
    # Parse URL and extract path
    parsed_url = urllib.parse.urlparse(url)
    path_parts = parsed_url.path.strip('/').split('/')
    
    # Remove fragments and empty parts
    path_parts = [part for part in path_parts if part]
    
    # Create slug from path parts
    if path_parts:
        slug = '-'.join(path_parts)
    else:
        # Fallback to domain name if no path
        domain = parsed_url.netloc.replace('www.', '')
        slug = domain.replace('.', '-')
    
    # Clean slug
    slug = re.sub(r'[^a-zA-Z0-9\-]', '', slug)
    slug = re.sub(r'-+', '-', slug)  # Replace multiple dashes with single
    slug = slug.strip('-')  # Remove leading/trailing dashes
    
    return f"{slug}.json"


def convert_webpage_to_json(url, output_dir="."):
    """
    Main function to convert webpage to a structured JSON file.
    
    Args:
        url (str): URL to convert
        output_dir (str): Directory to save the output file
        
    Returns:
        str: Path to the generated JSON file
    """
    # Create output directory if it doesn't exist
    output_path = Path(output_dir)
    output_path.mkdir(exist_ok=True)
    
    # Fetch webpage content
    soup = fetch_webpage_content(url)
    
    # Extract metadata
    metadata = extract_metadata(soup)
    metadata['source_url'] = url
    
    # Parse content into structured blocks
    content_blocks = parse_content_to_structured_data(soup)
    
    # Combine into a single JSON object
    final_structure = {
        "metadata": metadata,
        "content_blocks": content_blocks
    }
    
    # Generate filename
    filename = generate_filename_from_url(url)
    filepath = output_path / filename
    
    # Save to file
    import json
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(final_structure, f, indent=4, ensure_ascii=False)
    
    print(f"✅ Successfully converted {url}")
    print(f"📄 Saved to: {filepath}")
    print(f"📝 Title: {metadata['title']}")
    print(f"📖 Description: {metadata['description'][:100]}{'...' if len(metadata['description']) > 100 else ''}")
    
    return str(filepath)


def main():
    """Main function to handle command line arguments and run the converter."""
    if len(sys.argv) != 2:
        print("Usage: python webpage_to_markdown.py <URL>")
        print("Example: python webpage_to_markdown.py https://www.cogestoconsulting.com/notre-expertise/#expertises-fonctionnelles")
        sys.exit(1)
    
    url = sys.argv[1]
    
    # Validate URL format
    if not url.startswith(('http://', 'https://')):
        print("❌ Error: URL must start with http:// or https://")
        sys.exit(1)
    
    try:
        # Convert webpage to JSON
        output_file = convert_webpage_to_json(url)
        print(f"\n🎉 Conversion completed! Output file: {output_file}")
        
    except requests.RequestException as e:
        print(f"❌ Network Error: {str(e)}")
        sys.exit(1)
    except ValueError as e:
        print(f"❌ Content Error: {str(e)}")
        sys.exit(1)
    except Exception as e:
        print(f"❌ Unexpected Error: {str(e)}")
        sys.exit(1)


if __name__ == "__main__":
    main()