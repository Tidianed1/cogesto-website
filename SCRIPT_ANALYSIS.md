# Content Factory Script Review & Analysis

## 1. Overview
The `content_factory/` directory contains the automation logic for the "Content-First" workflow. It utilizes **DSPy** (Declarative Self-Improving Language Programs) to orchestrate Large Language Models (LLMs) for scraping, analyzing, and restructuring web content into Astro-compliant JSON data.

## 2. Script Analysis

### A. `factory.py` (Primary Engine)
*   **Status:** ✅ **Active / Advanced**
*   **Purpose:** The main sophisticated pipeline. It employs a 2-step reasoning process:
    1.  **`ContentAnalyzer`**: Extracts "DNA" (terminology, themes) from source URLs.
    2.  **`PageBuilder`**: Synthesizes a new page using the extracted DNA and strict Pydantic models.
*   **Key Features:**
    *   **Strict Typing:** Uses `pydantic.BaseModel` to define the schema for every Astro component (`HeroMultiTemplate`, `CardGrid`, etc.). This ensures the LLM output is *structurally valid* JSON that the Astro build can consume.
    *   **Component Protocol:** The models defined here act as the "Contract" between the AI and the Frontend.
    *   **Multi-Source Merging:** Designed to take a list of URLs (from `migration_map.py`) and synthesize them into one cohesive narrative.
*   **Critique:**
    *   **Model Config:** Currently set to `openai/gpt-5-mini`. This model name might need adjustment depending on the actual API provider (OpenRouter supports it, but it's cutting edge/experimental).
    *   **Component Mapping:** Includes `BoxCards` and `SubNavigation` which are present in the codebase but listed as having "High Priority" refactor needs in the inventory. The script assumes these components are data-ready.

### B. `migration_factory.py` (Secondary / Legacy)
*   **Status:** ⚠️ **Redundant / Deprecated**
*   **Purpose:** A simpler, single-step implementation of the factory.
*   **Key Difference:** It skips the "Analysis" phase and goes straight to "Content Merger". It uses a slightly different set of Pydantic models (subset of `factory.py`).
*   **Recommendation:** **Deprecate this file.** Consolidate any unique logic into `factory.py` to avoid maintaining two diverging "truth" sources for component schemas.

### C. `migration_map.py` (Configuration)
*   **Status:** ✅ **Active**
*   **Purpose:** The control file defining *what* to build.
*   **Structure:** A simple Python dictionary mapping `slug` -> `[list_of_source_urls]`.
*   **Current State:** Configured for a "transformation-consulting" page using sources from Oliver Wyman, Roland Berger, etc.

## 3. Strategic "Takes" & Observations

1.  **The "Schema Contract" is Critical:** The `factory.py` file defines Pydantic models (e.g., `HeroMultiTemplate`). If the actual `.astro` component expects a prop named `backgroundImage` but the Python model calls it `imageUrl`, the build will break.
    *   *Action:* We must treat `factory.py` as the "Source of Truth" for component props. Any refactoring in `src/components/` must align with these Pydantic models (or vice versa).

2.  **Context Injection:** The current scripts use `Attachments` to fetch URL content. To make this truly "Cogesto", we should inject the content of `cogesto_context.txt` into the `PageBuilder` signature.
    *   *Improvement:* Add a `cogesto_context` field to the `PageBuilder` signature in `factory.py` so the AI knows *who* it is writing for.

3.  **Refactoring Opportunity:** Since `factory.py` expects data-driven components, it reinforces the need to refactor components like `HeroMultiTemplate` (currently flagged as non-compliant) to accept these exact props.

## 4. Questions to Unblock "About" Page

1.  **Target URLs:** What are the specific URLs we should add to `migration_map.py` for the **About** page? (e.g., Woodmac's About page, Bain's About page?)
2.  **Structure Selection:** Should we create a new `page_structure/about_pagestructure.md` blueprint first, or should the `PageBuilder` in `factory.py` derive the structure dynamically from the `Ref_html/About_page` analysis?
    *   *My take:* We should stick to the `page_structure` file as a blueprint to ensure layout consistency.

I am ready to update `migration_map.py` with your target URLs and run `factory.py` to generate the About page content.