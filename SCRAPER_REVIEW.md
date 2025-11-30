# Webpage Scraper Script Review (`webpage_to_markdown.py`)

## 1. Purpose & Functionality
This script is a **lightweight, heuristic-based scraper** designed to extract content from a URL and map it to "suggested" components.

*   **Input:** A target URL (e.g., a Bain or Woodmac service page).
*   **Processing:**
    *   Fetches HTML using `requests`.
    *   Cleans "clutter" (nav, footer, scripts) using `BeautifulSoup`.
    *   **Hero Extraction:** Looks for `<h1>` and subsequent text.
    *   **Section Extraction:** Iterates through `<h2>` (or `<h3>`) tags, gathering text, images, and lists until the next heading.
    *   **Component Guessing:** Uses simple rules (e.g., "If text > 100 chars AND has image -> `BodyCopyImage`") to suggest an Astro component.
*   **Output:** A JSON file containing a list of "blocks", each with content and a `suggested_component`.

## 2. Strengths
*   **Simple & Fast:** It doesn't require complex AI dependencies (no DSPy or OpenAI keys needed). It's purely deterministic python code.
*   **Structure-Aware:** It attempts to respect the semantic hierarchy of the source page (H1 -> H2 -> Content), which is crucial for maintaining the narrative flow.
*   **JSON Output:** The output format is easy for us to read and manually refine, which fits the "Human-in-the-Loop" workflow perfectly.

## 3. Weaknesses & Risks
*   **Brittle Heuristics:** The logic `if block.images and text_length > 100` is very basic. It might misclassify complex sections.
*   **"Clean" Soup:** The `clean_soup` function is aggressive (`tag.decompose()`). It might accidentally remove valuable content if it's nested inside a `<header>` or `<footer>` tag that isn't strictly the global page header/footer (e.g., a card header).
*   **Image Extraction:** It simply grabs `src` attributes. Relative URLs (e.g., `/images/pic.jpg`) will break unless resolved to absolute URLs (using `urljoin` which is imported but not fully utilized for all image sources).

## 4. Verdict & Recommendation
**This is the correct tool for the "Scrape -> Refine -> Implement" workflow.** It provides the raw material without over-engineering.

**Next Steps:**
1.  **Run this script** on your target "About" page URL.
2.  **Review the JSON output.** You will see "suggested components".
3.  **Refine the JSON:**
    *   Correct any wrong component suggestions.
    *   Rewrite the text content to match Cogesto's tone (referencing `cogesto_context.txt`).
4.  **Build the Page:** Use the refined JSON to populate `src/content/fr.ts` and build the `.astro` page.

I am ready to run this script. **Please provide the URL you want to scrape for the About page.**