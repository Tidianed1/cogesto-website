# Content Migration Workflow

## 1. Architecture Overview

This workflow is designed to automate the repurposing of content from legacy consulting websites into our new Cogesto Astro website. It follows a "Content-First, Component-Aware" philosophy.

### The Pipeline
1.  **Source URLs:** We define a list of source URLs (e.g., "Operations" pages from Roland Berger, KEA, Bain).
2.  **`attachments` Library:** Fetches the HTML, captures screenshots (for visual context), and cleans the text.
3.  **AI Content Factory (`factory.py`):**
    *   Uses `dspy` (Declarative Self-improving Language Programs) to process the content.
    *   **Signature:** A strict set of instructions (`ContentMerger`) tells the AI to:
        *   Synthesize content from multiple sources.
        *   Write in French.
        *   Adopt a high-end consulting tone.
        *   Create a comprehensive, detailed guide (not a summary).
    *   **Pydantic Models:** The AI's output is forced into a strict JSON structure that maps 1:1 with our Astro components.
4.  **JSON Output:** Structured data is saved to `src/content/pages/[slug].json`.
5.  **Astro Rendering:** The `src/pages/[...slug].astro` file dynamically reads the JSON and renders the corresponding Astro components.

## 2. Setup & Dependencies

### Python Environment
Ensure you are in the `content_factory/.venv` virtual environment:
```bash
source content_factory/.venv/bin/activate
```

Required libraries:
- `attachments`
- `dspy-ai`
- `pydantic`
- `openai`
- `playwright` (and browsers installed via `playwright install chromium`)

### API Keys
You need an `OPENROUTER_API_KEY` in your `.env` file.

## 3. Component Inventory & Mapping

The Factory is aware of the following components. When the AI analyzes content, it decides which component best fits the information.

| Component | Pydantic Model | Purpose |
| :--- | :--- | :--- |
| **HeroMultiTemplate** | `HeroMultiTemplate` | Main page hero with title, subtitle, and background image. |
| **BodyCopyImage** | `BodyCopyImage` | Detailed text section with a side image. Good for explaining specific services. |
| **CardImageText** | `CardImageText` | Feature highlight with image and text, often with a colored background. |
| **CardQuote** | `CardQuote` | A quote combined with an image/video. |
| **LeftTitledIntro** | `LeftTitledIntro` | Intro text with a title on the left. Good for "Our Purpose" or high-level summaries. |
| **CenteredTextSection** | `CenteredTextSection` | Centered text block for impactful statements. |
| **ValuesTabs** | `ValuesTabs` | Tabbed content for organizing related information (e.g., "Our Approach", "Key Benefits"). |
| **FeatureGrid** | `CardGrid` | A grid of cards for listing services, features, or advantages. |
| **Accordion** | `Accordion` | FAQs or collapsible details. |
| **QuoteSection** | `QuoteSection` | Standalone quote section. |
| **StatsSection** | `StatsSection` | Key statistics display. |
| **TextOnlySection** | `TextOnlySection` | Simple block of text. |

## 4. Usage Guide

### Step 1: Configure Sources
Edit `content_factory/migration_map.py`:
```python
PAGE_MAPPING = {
    "slug-of-new-page": [
        "https://source-url-1.com",
        "https://source-url-2.com"
    ]
}
```

### Step 2: Run the Factory
```bash
python content_factory/factory.py
```

### Step 3: Verify
1.  Check `src/content/pages/slug-of-new-page.json`.
2.  Start Astro: `npm run dev`.
3.  Visit `http://localhost:4321/slug-of-new-page`.

## 5. Prompt Engineering Strategy

The "brain" of the operation is the `ContentMerger` signature in `factory.py`. To improve content quality, we refine the docstring instructions:

*   **Explicit Language:** "Write ONLY in French."
*   **Tone Instructions:** "Professional, authoritative, Cogesto style."
*   **Structural Instructions:** "Use `LeftTitledIntro` for the main overview. Use `CardGrid` for lists of services. Use `BodyCopyImage` for detailed explanations."

## 6. Future Improvements
-   **Image Handling:** Currently, the factory passes image URLs from the source. We will need a step to download these images to our own asset management or finding stock replacements.
-   **Manual Override:** We can manually edit the generated JSON files to polish the content before publishing.
