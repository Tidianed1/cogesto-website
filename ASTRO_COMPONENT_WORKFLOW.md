# Astro Component Building Workflow: Self-Contained & Scoped Styles

## Purpose
This document outlines the revised, Astro-idiomatic workflow for building new components for the Cogesto website. The goal is to create robust, maintainable, and conflict-free components by leveraging Astro's scoped styling capabilities, moving away from reliance on large, external stylesheets.

## Problem with the Previous Approach
Our initial strategy involved importing the entire Woodmac website's CSS (`styles.css`, `screen.css`) directly into our Astro project. This led to significant challenges:
- **CSS Conflicts:** Global and often overly specific rules from the Woodmac stylesheets clashed, causing unpredictable layouts and styling issues (e.g., the `BodyCopyImage` component's `reverse` class not functioning correctly).
- **Brittleness & Maintainability:** Components were not truly independent, making debugging difficult and changes prone to breaking other parts of the site.
- **Negating Astro's Benefits:** This approach bypassed Astro's core strength of component-level styling and encapsulation.

## New Approach: Astro-Idiomatic Component Building

The new strategy focuses on creating self-contained Astro components where each component manages its own structure and styling.

### Workflow for Building a New Component:

1.  **Identify Component:** Choose a specific section or element from the target (Woodmac) website to replicate as an Astro component.
2.  **Extract HTML Structure:** Using browser developer tools, copy the clean, semantic HTML structure for that component.
3.  **Create Astro Component File:**
    *   Create a new `.astro` file (e.g., `src/components/MyNewComponent.astro`).
    *   Paste the extracted HTML into the component's template section.
    *   Define `Astro.props` for any dynamic content or configuration the component needs.
4.  **Extract Specific CSS Rules:**
    *   **Crucially, do NOT copy "Computed Styles".** Instead, use the browser's DevTools "Styles" or "Rules" tab.
    *   Inspect the component on the Woodmac site. Identify *only the CSS rules (selectors and properties)* that are directly responsible for styling that specific component and its immediate children.
    *   Focus on rules that target the component's unique class names (e.g., `.my-component__container`, `.my-component__title`).
5.  **Integrate Scoped Styles:**
    *   At the bottom of your `.astro` component file, add a `<style>` block.
    *   Paste the extracted, component-specific CSS rules into this `<style>` block.
    *   Astro will automatically scope these styles, ensuring they only apply to this component and do not interfere with other parts of your website.
6.  **Test and Refine:** Place the new component on a test page (e.g., `src/pages/test-components/index.astro`) and verify its appearance. Adjust the scoped CSS as needed.

### Handling Global Styles:

*   **Lean Global CSS:** For truly universal styles (e.g., font families, basic color variables, CSS resets), create a new, minimal `src/styles/global.css` file.
*   **Phased Removal of Old CSS:** As more components are refactored using this new approach, the reliance on the large Woodmac CSS files (`public/styles/styles.css`, `public/styles/screen.css`) will diminish. Eventually, these files can be completely removed from `src/layouts/BaseLayout.astro`.

## Benefits of this Approach:

*   **No More CSS Conflicts:** Astro's scoped styles prevent unintended style interactions.
*   **Truly Reusable Components:** Each component becomes a self-contained unit with its own structure, logic, and styles.
*   **Improved Maintainability:** Styles are co-located with the component they affect, making them easy to find, understand, and modify without side effects.
*   **Better Performance:** Only the CSS relevant to the components on a given page is loaded, leading to smaller file sizes and faster page loads.
*   **Leverages Astro's Strengths:** This workflow aligns with the best practices for building modern, component-driven websites with Astro.

---
*Example: The `BodyCopyImage.astro` component was refactored using this process, moving its layout and styling rules into its own scoped `<style>` block, resolving previous layout conflicts.*
