# Page Creation Protocol (The "Golden Path")

This document outlines the standardized, reliable workflow for creating new content pages for the Cogesto website. Following this protocol ensures visual consistency, technical compliance, and high-quality content.

## 1. The "Blueprint + Compliant Components" Strategy

Instead of inventing layouts from scratch, we build pages by mapping high-quality content to a predefined JSON structure ("Blueprint") that strictly uses **verified, compliant Astro components**.

### Core Principles:
*   **Data-Driven:** All page content lives in a JSON file in `src/content/pages/`.
*   **Component-Strict:** Only use components listed as "✅ Fully Compliant" in `COMPONENTS_INVENTORY.md`.
*   **No Scoped Styles:** Components must rely on global CSS.
*   **No Sanity:** The project does NOT use Sanity CMS. Avoid all legacy Sanity references.
*   **Navigation as Data:** Sub-navigation is defined as a section within the JSON to allow precise placement control.

## 2. The Workflow

### Step 1: Content Extraction & Synthesis
1.  **Identify Source Material:** Select 1-2 reference URLs (competitors or inspiration) and the relevant context from the existing Cogesto site.
2.  **Extract Content:** Use the `webpage_to_markdown.py` script to scrape raw, detailed content from the sources.
    ```bash
    python3 webpage_to_markdown.py "https://source-url.com" output_filename.json
    ```
3.  **Synthesize:** Combine the best insights from the sources with Cogesto's brand voice (`cogesto_context.txt`) to create a cohesive narrative (600-900 words).

### Step 2: Blueprint Selection & Mapping
Select a page blueprint (e.g., Service Page, About Page) and map your content to its sections.

**Standard Service Page Blueprint (8-Section Model):**
1.  **Hero:**
    *   `HeroService` (or `HeroMultiTemplate` if compliant): Title, engaging subtitle, high-quality background image.
2.  **SubNavigation:**
    *   `SubNavigation`: Placed immediately after the Hero for context. Items array links to sibling pages.
3.  **Introduction:**
    *   `BodyCopyImage`: A strong value proposition ("Why this matters") with a relevant image.
4.  **Key Stats:**
    *   `StatsSideSection`: Hard numbers to build authority ("+30% Growth", "15 Years").
5.  **Services List:**
    *   `ProductListBlock`: A clean list of service offerings with descriptions.
6.  **Methodology/Approach:**
    *   `TextOnlySection`: Explaining "How we work" or "The Cogesto Difference".
7.  **Insights/Thought Leadership:**
    *   `BlogArticleShowcase`: A visual grid of related articles ("Points de vue").
8.  **Call to Action (CTA):**
    *   `CardImageText`: A final conversion band inviting contact.

### Step 3: JSON Creation
Create a new JSON file in `src/content/pages/[category]/[slug].json`.

**Example Structure:**
```json
{
  "title": "Page SEO Title",
  "description": "Meta description for SEO.",
  "slug": "category/page-slug",
  "breadcrumbs": {
    "component": "Breadcrumbs",
    "items": [
      { "text": "Home", "href": "/" },
      { "text": "Category", "href": "/category/" },
      { "text": "Page", "href": "/category/page-slug" }
    ]
  },
  "sections": [
    {
      "component": "HeroService",
      "title": "Main Title",
      "introduction": "Subtitle...",
      "imageUrl": "/path/to/image.jpg"
    },
    {
      "component": "SubNavigation",
      "currentPage": "/category/page-slug",
      "items": [
        { "text": "Sibling 1", "href": "/category/sibling-1" },
        { "text": "This Page", "href": "/category/page-slug" }
      ]
    },
    {
      "component": "ProductListBlock",
      "title": "Our Services",
      "products": [
        { "name": "Service 1", "description": "...", "href": "..." }
      ]
    }
    // ... other sections
  ]
}
```

### Step 4: Verification
1.  **Build Check:** Ensure `npm run dev` runs without errors.
2.  **Visual Check:** Verify the page at `http://localhost:4321/category/page-slug`.
3.  **Compliance Check:** Ensure no legacy components (Sanity-tied) were accidentally used.

## 3. Key Components Reference

| Component | Usage | Props |
| :--- | :--- | :--- |
| **HeroService** | Main page header | `title`, `introduction`, `imageUrl` |
| **SubNavigation** | Section tabs | `items` (array of text, href), `currentPage` |
| **BodyCopyImage** | Text + Image content block | `title`, `description`, `imageUrl`, `buttonText`, `reverseLayout` |
| **ProductListBlock** | List of service offerings | `title`, `products` (array of name, description, href) |
| **StatsSideSection** | Key metrics + intro text | `title`, `content`, `stats` (array of value, description) |
| **TextOnlySection** | Text blocks/Methodology | `title`, `content` |
| **BlogArticleShowcase** | Insights grid | `title`, `titleHref`, `articles` (array of title, badge, date, etc.) |
| **CardImageText** | CTA bands | `title`, `description`, `buttonText`, `imageUrl`, `backgroundColorClass` |
| **Breadcrumbs** | Top navigation path | `items` (array of text, href) |

---
*Last Updated: 2025-11-27*