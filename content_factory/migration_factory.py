import json
import os
import dspy
from typing import Literal, List, Optional, Union
from pydantic import BaseModel, Field
from attachments.dspy import Attachments

# -------------------------------------------------------------------------
# CONFIGURATION
# -------------------------------------------------------------------------

# Configure OpenAI (GPT-4o is required for high-quality merging and vision)
lm = dspy.OpenAI(model='gpt-4o', max_tokens=4000)
dspy.settings.configure(lm=lm)

# MAPPING: "New_Page_Slug": ["Source_URL_1", "Source_URL_2"]
# This tells the factory which source pages combine to make a new page.
PAGE_MAPPING = {
    # Example: Merging an old About page + a Team page into one new About page
    "about": [
        "https://www.cogestoconsulting.com/a-propos/", 
        # Add second URL here if needed
    ],
    # Example: Expertise page
    "expertise": [
        "https://www.cogestoconsulting.com/notre-expertise/"
    ],
    # Add more pages here...
}

# -------------------------------------------------------------------------
# ASTRO COMPONENT PROTOCOL (Pydantic Models)
# -------------------------------------------------------------------------
# These models MIRROR the props available in the Astro project.

class HeroMultiTemplate(BaseModel):
    component: Literal["HeroMultiTemplate"] = "HeroMultiTemplate"
    title: str = Field(desc="Main hero headline")
    subtitle: Optional[str] = Field(desc="Subheadline or intro text")
    theme: Literal["blue", "white", "transparent"] = Field(default="blue")
    backgroundImage: Optional[str] = Field(desc="URL of background image if present")

class BodyCopyImage(BaseModel):
    component: Literal["BodyCopyImage"] = "BodyCopyImage"
    heading: str = Field(desc="Section title")
    text_content: str = Field(desc="Body paragraph text. Markdown allowed.")
    imageSrc: Optional[str] = Field(desc="URL of the image")
    imagePosition: Literal["left", "right"] = Field(default="left")

class TextOnlySection(BaseModel):
    component: Literal["TextOnlySection"] = "TextOnlySection"
    title: Optional[str]
    content: str = Field(desc="The text content")
    alignment: Literal["center", "left"] = "left"

class CardItem(BaseModel):
    title: str
    description: str
    icon_or_image: Optional[str]
    link: Optional[str]

class CardGrid(BaseModel):
    """Maps to 'Card' or 'AdvantageItem' components in a grid layout"""
    component: Literal["CardGrid"] = "CardGrid"
    heading: Optional[str]
    items: List[CardItem]

class AccordionItem(BaseModel):
    trigger: str
    content: str

class Accordion(BaseModel):
    component: Literal["Accordion"] = "Accordion"
    items: List[AccordionItem]

# The Union of allowed components
ComponentUnion = Union[
    HeroMultiTemplate, 
    BodyCopyImage, 
    CardGrid, 
    TextOnlySection, 
    Accordion
]

class PageStructure(BaseModel):
    title: str = Field(desc="SEO Title for the new page")
    description: str = Field(desc="SEO Meta description")
    sections: List[ComponentUnion] = Field(desc="Ordered list of page components")

# -------------------------------------------------------------------------
# DSPY LOGIC
# -------------------------------------------------------------------------

class ContentMerger(dspy.Signature):
    """
    Act as a Content Architect.
    1. Analyze the text and visual structure from the provided `sources_context`.
    2. Synthesize content from all sources into a single, cohesive narrative.
    3. Structure the output into the defined Astro Components.
    4. Ensure tone is professional and 'Cogesto' style.
    """
    sources_context: Attachments = dspy.InputField(desc="Scraped content from source URLs")
    mapped_page: PageStructure = dspy.OutputField(desc="Structured JSON for Astro")

def run_factory():
    predictor = dspy.TypedPredictor(ContentMerger)
    output_dir = "src/content/pages"
    os.makedirs(output_dir, exist_ok=True)
    
    print(f"🏭 Starting Migration Factory for {len(PAGE_MAPPING)} pages...")

    for slug, urls in PAGE_MAPPING.items():
        print(f"\n⚙️  Processing: {slug}")
        
        # [select:main] isolates main content, removing nav/footer noise
        # [viewport:1280x800] ensures we capture desktop layout intent
        clean_urls = [f"{u}[select:main][viewport:1280x800]" for u in urls]
        
        try:
            # Attachments fetches and merges contexts automatically
            context = Attachments(*clean_urls)
            
            print("   🧠 DSPy analyzing & mapping...")
            prediction = predictor(sources_context=context)
            
            # Save to JSON
            final_data = prediction.mapped_page.model_dump()
            final_data['slug'] = slug # Add slug for Astro reference
            
            filepath = os.path.join(output_dir, f"{slug.replace('/', '-')}.json")
            with open(filepath, 'w', encoding='utf-8') as f:
                json.dump(final_data, f, indent=2, ensure_ascii=False)
                
            print(f"   ✅ Saved: {filepath}")
            
        except Exception as e:
            print(f"   ❌ Error on {slug}: {e}")

if __name__ == "__main__":
    run_factory()
