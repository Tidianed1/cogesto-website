# Process Documentation: Creating the "Organisation & Gouvernance" Page
**Date:** November 29, 2025

## 1. Context & Objective
The goal was to create a new expertise page for "Organisation & Gouvernance" (`/expertises/organisation`) that mirrors the structure and quality of the existing "Stratégie" page (`/expertises/strategie`). This page is dynamically generated via `src/pages/[...slug].astro`, meaning no physical `.astro` file is needed for the page itself—only a JSON content file in `src/content/pages/`.

## 2. Analysis of the Reference (`src/content/pages/expertises/strategie.json`)
The reference page uses a specific schema handled by the dynamic router. The key components used are:
*   `HeroService`: For the hero section.
*   `SubNavigation`: For navigating between expertise areas.
*   `BodyCopyImage`: For introduction and "Proof" sections.
*   `StatsSideSection`: For displaying impact metrics.
*   `ProductListBlock`: For listing the specific services/offerings.
*   `TextOnlySection`: For methodology or approach.
*   `BlogArticleShowcase`: For related insights.
*   `CardImageText`: For the final CTA.

## 3. Content Creation Process
1.  **Scraping & Synthesis:** Content was originally scraped from reference sites (Kea, Roland Berger, Bain) to understand the domain "Organization & Governance".
2.  **Adaptation:** This raw content was then adapted to Cogesto's tone and specific context (`cogesto_context.txt`), emphasizing "agile structures", "governance efficiency", and "cultural transformation".
3.  **Schema Mapping:** The adapted content was mapped strictly to the JSON schema identified in step 2.

## 4. Implementation Steps
1.  **Clean Up:** Deleted the incorrect manual page `src/pages/expertises/fonctionnelles/organisation.astro` which was blocking the dynamic route.
2.  **JSON Creation:** Created `src/content/pages/expertises/organisation.json`.
    *   **Slug:** Set to `expertises/organisation` to match the URL structure.
    *   **Sections:** Populated the `sections` array with the mapped content objects (`HeroService`, `ProductListBlock`, etc.).

## 5. Final Output
The file `src/content/pages/expertises/organisation.json` now contains the full page definition. The dynamic router `src/pages/[...slug].astro` automatically picks this up and renders the page at `http://localhost:4321/expertises/organisation`.

## 6. Key Learnings
*   **Dynamic Routing:** The project relies on `[...slug].astro` for these content pages. Creating manual `.astro` files for standard content pages is an anti-pattern here.
*   **Component Usage:** The JSON defines the component usage. `ProductListBlock` is the standard way to list services (not `CardGrid` or `TwoColumnContent` as initially attempted).
*   **Compliance:** By using the existing dynamic route and its supported components, we ensure full compliance with the design system automatically.
