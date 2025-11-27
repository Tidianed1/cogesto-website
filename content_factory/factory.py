import json
import os
import dspy
from typing import Literal, List, Optional, Union
from pydantic import BaseModel, Field, field_validator
from attachments.dspy import Attachments
from migration_map import PAGE_MAPPING

# -------------------------------------------------------------------------
# 1. SETUP DSPy
# -------------------------------------------------------------------------
# Using OpenAI reasoning model parameters as requested/discovered
lm = dspy.LM(
    model='openai/gpt-5-mini', 
    api_key=os.environ.get("OPENROUTER_API_KEY"),
    api_base="https://openrouter.ai/api/v1",
    max_tokens=16000,
    temperature=1.0
)
dspy.configure(lm=lm)

# -------------------------------------------------------------------------
# 2. DEFINE YOUR ASTRO COMPONENT PROTOCOL (Strict Schema)
# -------------------------------------------------------------------------

class BreadcrumbItem(BaseModel):
    text: str
    href: str

class Breadcrumbs(BaseModel):
    component: Literal["Breadcrumbs"] = "Breadcrumbs"
    items: List[BreadcrumbItem]

class NavItem(BaseModel):
    text: str
    href: str

class SubNavigation(BaseModel):
    component: Literal["SubNavigation"] = "SubNavigation"
    items: List[NavItem]
    currentPage: str = Field(description="The active path, e.g., '/operations/'")

class BoxCardItem(BaseModel):
    title: str
    description: str
    
    @field_validator('title')
    @classmethod
    def check_title_length(cls, v: str) -> str:
        words = v.split()
        if len(words) > 5:
             return " ".join(words[:5])
        return v

class BoxCards(BaseModel):
    component: Literal["BoxCards"] = "BoxCards"
    title: str
    description: str
    cards: List[BoxCardItem]

class HeroMultiTemplate(BaseModel):
    component: Literal["HeroMultiTemplate"] = "HeroMultiTemplate"
    title: str
    introduction: str = Field(description="Subheadline or intro text")
    ctaText: Optional[str] = "Get in touch"
    ctaHref: Optional[str] = "/contact/"
    imageUrl: Optional[str] = Field(description="Background image URL")
    backgroundColor: Optional[Literal["secondary-color", "cobalt"]] = "secondary-color"

class BodyCopyImage(BaseModel):
    component: Literal["BodyCopyImage"] = "BodyCopyImage"
    title: str
    description: str
    imageUrl: Optional[str] = Field(description="URL of the image")
    imageAlt: Optional[str] = Field(description="Alt text for image", default="")
    buttonText: Optional[str]
    buttonHref: Optional[str]
    reverseLayout: bool = False

class CardItem(BaseModel):
    heading: str
    text: str
    link: Optional[str]
    style: Literal["primary", "light", "image"] = "light"
    imageUrl: Optional[str] = Field(description="Background image URL for image style cards")

class CardGrid(BaseModel):
    """Used for lists of services, features, or advantages."""
    component: Literal["CardGrid"] = "CardGrid"
    heading: Optional[str]
    items: List[CardItem]

class LeftTitledIntro(BaseModel):
    component: Literal["LeftTitledIntro"] = "LeftTitledIntro"
    title: str
    content: str = Field(description="The intro text content")

class CenteredTextSection(BaseModel):
    component: Literal["CenteredTextSection"] = "CenteredTextSection"
    title: str
    content: str

class TextOnlySection(BaseModel):
    component: Literal["TextOnlySection"] = "TextOnlySection"
    title: str
    content: str

class AccordionItem(BaseModel):
    question: str = Field(alias="trigger") 
    answer: str = Field(alias="content")

class Accordion(BaseModel):
    component: Literal["Accordion"] = "Accordion"
    title: str
    description: Optional[str]
    items: List[AccordionItem]

class QuoteImage(BaseModel):
    src: str
    alt: str

class QuoteSection(BaseModel):
    component: Literal["QuoteSection"] = "QuoteSection"
    quote: str
    attribution: str
    image: QuoteImage

class StatItem(BaseModel):
    number: str
    label: str

class StatsSection(BaseModel):
    component: Literal["StatsSection"] = "StatsSection"
    intro: Optional[str]
    stats: List[StatItem]

class CardImageText(BaseModel):
    component: Literal["CardImageText"] = "CardImageText"
    title: str
    description: str
    buttonText: Optional[str]
    buttonHref: Optional[str]
    imageUrl: str = Field(description="URL of the image")
    imageAlt: str
    videoPosition: Literal["left", "right"] = "right"
    backgroundColorClass: Optional[str] = "bg-secondary-color"

class CardQuote(BaseModel):
    component: Literal["CardQuote"] = "CardQuote"
    quote: str
    author: str
    imageUrl: str = Field(description="URL of the image")
    imageAlt: str
    videoPosition: Literal["left", "right"] = "right"
    backgroundColorClass: Optional[str] = "bg-primary-color"

class TabItem(BaseModel):
    id: str
    title: str
    content: str

    @field_validator('title')
    @classmethod
    def check_title_length(cls, v: str) -> str:
        words = v.split()
        if len(words) > 3:
            return " ".join(words[:3])
        return v

class ValuesTabs(BaseModel):
    component: Literal["ValuesTabs"] = "ValuesTabs"
    summaryTitle: str
    summaryDescription: str
    tabs: List[TabItem]

class ImageObject(BaseModel):
    src: str
    alt: str
    position: Optional[Literal['left', 'right']] = 'right'

class CtaButton(BaseModel):
    text: str
    href: str
    variant: Optional[Literal['primary', 'secondary']] = 'primary'

class TwoColumnContent(BaseModel):
    component: Literal["TwoColumnContent"] = "TwoColumnContent"
    title: str
    paragraphs: List[str]
    image: Optional[ImageObject] = None
    ctaButtons: Optional[List[CtaButton]] = None
    backgroundColor: Optional[Literal['white', 'light']] = 'white'
    imagePosition: Optional[Literal['left', 'right']] = 'right'

# The Union of ALL allowed components in your system
ComponentUnion = Union[
    Breadcrumbs,
    SubNavigation,
    HeroMultiTemplate, 
    LeftTitledIntro,
    BoxCards,
    ValuesTabs,
    CardGrid,
    BodyCopyImage,
    CardImageText,
    CardQuote,
    TwoColumnContent,
    CenteredTextSection,
    TextOnlySection, 
    Accordion,
    QuoteSection,
    StatsSection
]

class NewPageStructure(BaseModel):
    title: str = Field(description="The SEO title for the new merged page")
    description: str = Field(description="The SEO meta description")
    breadcrumbs: Optional[Breadcrumbs] = Field(description="Breadcrumbs navigation")
    subNavigation: Optional[SubNavigation] = Field(description="Sub-navigation for the section")
    sections: List[ComponentUnion] = Field(description="The ordered list of content sections.")

# -------------------------------------------------------------------------
# 3. DEFINE THE DSPy SIGNATURES (The Logic)
# -------------------------------------------------------------------------

class ContentAnalyzer(dspy.Signature):
    """
    Analyze the provided source websites to extract their "Content DNA".
    1. EXACT TERMINOLOGY: List the exact names of services, phases, and methodologies used in the source.
    2. KEY THEMES: List the major consulting themes, methodologies, and service offerings found.
    3. VOCABULARY: Extract specific industry terms used in French.
    """
    sources_context: Attachments = dspy.InputField(description="Raw content from source URLs")
    exact_terminology: str = dspy.OutputField(description="List of specific terms/headers found in the source")
    key_themes: str = dspy.OutputField(description="List of major themes to cover")

class PageBuilder(dspy.Signature):
    """
    Act as a Senior Editor at 'Cogesto Consulting'. 
    Synthesize a new, high-impact page using the provided Terminology and Key Themes.
    
    MANDATORY PAGE STRUCTURE (Service Page Blueprint):
    1. **Hero:** `HeroMultiTemplate` (Title: 'Transformation & Performance', Theme: 'white').
    2. **Intro:** `BodyCopyImage` (Heading: 'Notre Approche', Position: 'right').
    3. **Services Overview:** `CardGrid` (Heading: 'Nos Expertises', Items: 4-6 key services).
    4. **Value Proposition:** `TextOnlySection` (Title: 'Pourquoi nous choisir?', Content: centered).
    5. **Benefits:** `CardGrid` (Heading: 'Les Bénéfices', Items: 6-8 benefits with icons/short text).
    6. **Closing:** `BodyCopyImage` (Heading: 'Prêt à transformer?', Position: 'left').
    7. **CTA:** `TwoColumnContent` (Left: 'Contact', Right: 'Newsletter').
    
    INSTRUCTIONS:
    1. **Source Grounding:** Use the `exact_terminology` for headers and service names.
    2. **Merge & Expand:** Combine insights from all sources. Do not summarize; expand into rich, detailed copy (600+ words total).
    3. **Language:** WRITE ONLY IN FRENCH.
    """
    sources_context: Attachments = dspy.InputField()
    exact_terminology: str = dspy.InputField()
    key_themes: str = dspy.InputField()
    merged_page: NewPageStructure = dspy.OutputField(description="The structured JSON for the new Astro page")

# -------------------------------------------------------------------------
# 4. THE AUTOMATION LOOP
# -------------------------------------------------------------------------

def run_content_factory():
    # Initialize Predictors
    analyze = dspy.ChainOfThought(ContentAnalyzer)
    build = dspy.ChainOfThought(PageBuilder) 
    
    # Ensure output directory exists
    output_dir = "src/content/pages"
    os.makedirs(output_dir, exist_ok=True)

    print(f"🏭 Starting Content Factory (2-Step Pipeline)...")
    print(f"📋 Processing {len(PAGE_MAPPING)} pages defined in config.")

    for slug, urls in PAGE_MAPPING.items():
        print(f"\n⚙️  Building: '{slug}'")
        print(f"   🔗 Sources: {urls}")
        
        try:
            # A. SCRAPING
            clean_urls = [f"{u}" for u in urls]
            context = Attachments(*clean_urls)
            
            # B. ANALYSIS STEP
            print("   🕵️  Analyzing tone, style, and structure...")
            analysis = analyze(sources_context=context)
            print(f"      -> Style Blueprint extracted.")
            
            # C. BUILD STEP
            print("   🏗️  Synthesizing and mapping content...")
            prediction = build(
                sources_context=context,
                exact_terminology=analysis.exact_terminology,
                key_themes=analysis.key_themes
            )
            
            # D. OUTPUT GENERATION
            final_data = prediction.merged_page.model_dump()
            final_data['slug'] = slug
            
            filename = f"{slug.replace('/', '-')}.json"
            filepath = os.path.join(output_dir, filename)
            
            with open(filepath, 'w', encoding='utf-8') as f:
                json.dump(final_data, f, indent=2, ensure_ascii=False)
                
            print(f"   ✅ Saved: {filepath}")
            
        except Exception as e:
            print(f"   ❌ FAILED: {slug} - {str(e)}")

if __name__ == "__main__":
    run_content_factory()