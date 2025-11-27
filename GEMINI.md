## Gemini Added Memories
- The user prefers to use npm instead of bun.
- The user has a development server running in another terminal tab, so I should not start one myself.
- The user does not want me to run the dev server.

---

## Comprehensive Guide to the Cogesto Website Codebase

### 1. Project Overview

The primary goal of this project is to build a modern, data-driven website for Cogesto Consulting using the Astro framework. The development process emphasizes a **content-first architecture**, where content is extracted from inspirational websites, structured into a clean JSON format, and then used to populate Astro components.

### 2. Core Technologies

-   **Framework:** [Astro](https://astro.build/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** Global CSS with BEM-like conventions. See `DESIGN_SYSTEM.md` and `src/styles/styles.css`.
-   **Content:** Content is managed in a single source of truth file: `src/content/fr.ts`.

### 3. Key Project Files & Directories

-   `astro.config.mjs`: The main configuration file for the Astro project.
-   `src/`: Contains all the source code for the website.
    -   `components/`: Reusable Astro components. Component development must follow the `COMPONENT_DEVELOPMENT_PROTOCOL.md`.
    -   `content/fr.ts`: The single source of truth for all page content.
    -   `layouts/`: Base layouts for pages, including `BaseLayout.astro` which is the main layout for all pages.
    -   `pages/`: The individual pages of the website.
    -   `styles/`: Global stylesheets.
-   `public/`: Static assets like images and fonts.
-   `webpage_to_markdown.py`: A Python script for extracting content from websites into a structured JSON format.
-   `COMPONENTS_INVENTORY.md`: A list of all components, their compliance status, and usage.
-   `COMPONENT_DEVELOPMENT_PROTOCOL.md`: The rules for creating and refactoring components.
-   `DESIGN_SYSTEM.md`: The guidelines for styling and design.
-   `Ref_html/`: A directory containing HTML files from inspirational websites.

### 4. The Content-First Workflow

This is the core workflow for creating new pages:

1.  **Extract Content:**
    -   Use the `webpage_to_markdown.py` script to extract content from a URL.
    -   **Example:** `python3 webpage_to_markdown.py "https://www.inspirational-website.com/about-us"`
    -   This will generate a `.json` file with the structured content of the page.

2.  **Refine and Structure the Content:**
    -   Open the generated JSON file and manually refine the structure. This may involve removing unnecessary sections, grouping elements, and ensuring the content is clean.
    -   The goal is to create a clean, hierarchical representation of the page's content.

3.  **Add Content to the Source of Truth:**
    -   Open `src/content/fr.ts`.
    -   Create a new variable for the page's content (e.g., `export const aboutPageContent = { ... };`).
    -   Copy the structured content from the refined JSON file into this variable.

4.  **Map Content to Components:**
    -   Analyze the structured content and identify the components needed to render it.
    -   Refer to `COMPONENTS_INVENTORY.md` to see if existing components can be used.
    -   If a component doesn't exist or is not compliant with the `COMPONENT_DEVELOPMENT_PROTOCOL.md`, create or refactor it.

5.  **Create the Page:**
    -   Create a new Astro file in `src/pages/`.
    -   Import the content from `src/content/fr.ts`.
    -   Use the content to populate the Astro components and build the page.

### 5. Current Task: Building the "About Us" Page

The current task is to build the "About Us" page for the Cogesto website.

-   **Inspiration:** The `Ref_html/About_page` file is the source of inspiration for the "About Us" page.
-   **Next Step:** The immediate next step is to manually analyze the `Ref_html/About_page` file, extract the relevant content, and structure it in the `src/content/fr.ts` file. This will involve creating a new `aboutPageContent` variable in `src/content/fr.ts` and populating it with the structured content. After that, we will proceed with mapping the content to components and building the page.
