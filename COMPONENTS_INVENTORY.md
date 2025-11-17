# Component Inventory & Protocol Adherence

This document provides a detailed inventory of the reusable components in the Cogesto website project. Each component is analyzed for its purpose, props, and adherence to the official **Component Development Protocol (CDP)**.

The goal is to create a clear guide for developers to understand which components are ready for use, which require refactoring, and how to use them correctly when building new pages.

## Core Principles of the CDP

-   **✅ No Scoped Styles**: Components must not contain `<style>` blocks. All styling must come from the global stylesheet (`src/styles/styles.css`).
-   **✅ Data-Driven Props**: Components must be made reusable and dynamic through `Astro.props`. Hardcoded content is not allowed in reusable components.
-   **✅ Structural Integrity**: The HTML structure should be a clean and semantic replica of the intended design blueprint.
-   **✅ Centralized Interactivity**: Client-side scripts should be managed globally (e.g., in `BaseLayout.astro` or a global script file) rather than with inline `<script>` tags within components, unless using Astro's island architecture (`client:*`) correctly.

---

## Core Layout Components

### `NewHeader.astro`

-   **File Path:** `src/components/NewHeader.astro`
-   **Purpose:** Renders the main site navigation, including the top utility bar, primary navigation, desktop mega-menus, and mobile hamburger menu.
-   **Props:** None.
-   **Protocol Adherence:**
    -   ❌ **Styling:** No scoped styles, which is good. However, its complexity means it's tightly coupled to the global CSS.
    -   ❌ **Props:** Fails the data-driven principle. All navigation links, menu structures, and content are hardcoded directly into the component.
    -   ❌ **Interactivity:** Contains a non-standard and likely non-functional `<script>` tag attempting to import from `lib/navigation.js`. Component-level scripting like this violates the protocol. Interactivity is intended to be handled by a global script loaded by the page.
-   **Usage:** `import NewHeader from '@components/NewHeader.astro';`
-   **Refactoring Notes:** This is a **high-priority refactor candidate**. The entire component needs to be rebuilt to accept navigation data from props (e.g., from `src/content/navigation.ts`). The hardcoded HTML should be replaced with loops that generate the navigation structure dynamically. The internal `<script>` tag must be removed.

### `NewFooter.astro`

-   **File Path:** `src/components/NewFooter.astro`
-   **Purpose:** Renders the main site footer, including newsletter signup, link columns, legal links, and social media icons.
-   **Props:** `tagline`, `newsletterTitle`, `newsletterCtaText`, `newsletterCtaHref`, `discoverLinks`, `resourcesLinks`, `aboutLinks`, `legalLinks`, `socialLinks`.
-   **Protocol Adherence:**
    -   ✅ **Styling:** Compliant. Uses global CSS classes with no scoped `<style>` block.
    -   ✅ **Props:** Compliant. The component is fully data-driven and accepts all its content via a well-defined `Props` interface.
    -   ✅ **Interactivity:** The mobile view uses a `js-accordion` class, which correctly hooks into the global site JavaScript for interactivity without needing an inline script.
-   **Usage:** Import and pass the `footerData` object from `src/content/fr.ts`.
    ```astro
    <NewFooter {...footerData} />
    ```
-   **Refactoring Notes:** None. This component is a good example of protocol adherence.

---

## Page & Section Components

### `BodyCopyImage.astro`

-   **File Path:** `src/components/BodyCopyImage.astro`
-   **Purpose:** A flexible two-column component for displaying a block of text alongside an image. The layout order can be reversed.
-   **Props:** `preTitle`, `title`, `description`, `buttonText`, `buttonHref`, `imageUrl`, `imageAlt`, `reverseLayout`, `titleColorClass`, `buttonClass`, `backgroundColor`.
-   **Protocol Adherence:**
    -   ✅ **Styling:** Compliant. No scoped styles.
    -   ✅ **Props:** Compliant. Fully data-driven.
    -   ✅ **Structure:** Excellent. Uses the mandatory "Manual Reorder" pattern (Astro ternary operator) to handle the `reverseLayout` logic, which is the gold standard for this project.
-   **Usage:** Ideal for feature sections, content blocks, and calls to action.
-   **Refactoring Notes:** None. This is the blueprint for how to build robust, reusable components.

### `ValuesTabs.astro`

-   **File Path:** `src/components/ValuesTabs.astro`
-   **Purpose:** Renders a tabbed interface with a summary on the left and interactive tabs on the right. Shows a dropdown on mobile.
-   **Props:** `summaryTitle`, `summaryDescription`, `tabs`.
-   **Protocol Adherence:**
    -   ✅ **Styling:** Compliant. No scoped styles.
    -   ✅ **Props:** Compliant. Fully data-driven.
    -   ❌ **Interactivity:** Contains a non-compliant inline `<script is:inline>` tag to manage tab state. While functional, the protocol prefers interactivity to be handled by global scripts or Astro islands (`client:load`).
-   **Usage:** Used on the "Our Values" page to display company values.
-   **Refactoring Notes:** The inline script should be removed. The tab functionality can be rebuilt using a small, dedicated Astro island component (`client:load`) or by integrating it into the global `navigation.js` if appropriate.

### `OutcomesBlock.astro`

-   **File Path:** `src/components/OutcomesBlock.astro`
-   **Purpose:** Displays a sophisticated tabbed interface for the homepage, showing different "outcomes" with text and images.
-   **Props:** None.
-   **Protocol Adherence:**
    -   ❌ **Styling:** Contains a large, non-compliant `<style>` block.
    -   ❌ **Props:** All tab content is hardcoded, making it completely non-reusable.
    -   ❌ **Interactivity:** Uses a non-compliant inline `<script is:inline>` for tab functionality.
-   **Usage:** Currently used only on the homepage (`new_index.astro`).
-   **Refactoring Notes:** **High-priority refactor candidate.** This component needs a complete overhaul. All styles must be moved to the global stylesheet. All content should be passed in via props (similar to `ValuesTabs.astro`). The inline script should be replaced with a compliant solution.

### Hero Components (`AboutHero`, `OurStoryHero`, `OurPeopleHero`, `HeroMultiTemplate`)

-   **File Paths:** `src/components/AboutHero.astro`, `src/components/OurStoryHero.astro`, `src/components/OurPeopleHero.astro`, `src/components/HeroMultiTemplate.astro`
-   **Purpose:** Render hero sections for various pages.
-   **Protocol Adherence:**
    -   ❌ **Styling:** All of these components contain large, non-compliant, and often duplicated `<style>` blocks.
    -   ❌ **Props:** `AboutHero`, `OurStoryHero`, and `OurPeopleHero` are completely static with hardcoded content. `HeroMultiTemplate` is data-driven, which is good.
-   **Refactoring Notes:** **High-priority refactor candidate.** The three static hero components (`AboutHero`, `OurStoryHero`, `OurPeopleHero`) should be **deleted**. They should be replaced by a single, reusable hero component (like `HeroMultiTemplate` or a new `StandardHero.astro`). All styles must be extracted to the global stylesheet.

### Content & List Components (`StatsSection`, `QuoteSection`, `LeadershipTeamSection`, etc.)

This category includes: `StatsSection.astro`, `QuoteSection.astro`, `LeadershipTeamSection.astro`, `TwoColumnContent.astro`, `CulturePillarSection.astro`, `VideoTestimonial.astro`, `PageNavigation.astro`, `SectionIntro.astro`, `ServicesBlock.astro`.

-   **Purpose:** Various section-level components for displaying specific content formats (e.g., stats, quotes, team grids).
-   **Protocol Adherence:**
    -   ❌ **Styling:** Nearly all of these components contain non-compliant `<style>` blocks.
    -   ✅ **Props:** Most of these components are correctly data-driven via props.
-   **Refactoring Notes:** **Medium-priority refactor candidates.** The primary task for this group is to systematically extract all styles from the `<style>` blocks and move them into `src/styles/styles.css`, ensuring they use the project's class naming conventions. The component logic and props are generally well-structured. `ServicesBlock.astro` should also be checked for its responsive behavior.

### Compliant Components

The following components are well-structured, data-driven, and adhere to the development protocol. They can be used as-is and serve as excellent examples for future development.

-   ✅ **`NewFooter.astro`**
-   ✅ **`BodyCopyImage.astro`**
-   ✅ **`SubNavigation.astro`**
-   ✅ **`TextOnlySection.astro`**
-   ✅ **`ArticleCard.astro`**
-   ✅ **`PointsDeVue.astro`** (as an aggregator)
-   ✅ **`NarrowBodyCopy.astro`**
-   ✅ **`ServicesCard.astro`**
-   ✅ **`VideoTextSection.astro`**

---

## Summary & Action Plan

1.  **High-Priority Refactors:**
    -   `NewHeader.astro`: Make it fully data-driven.
    -   `OutcomesBlock.astro`: Make it data-driven and remove all inline styles and scripts.
    -   Hero Components: Consolidate the various static hero components into one or two reusable, data-driven components and remove all inline styles.

2.  **Medium-Priority Refactors (Style Extraction):**
    -   Go through the list of components marked with "❌ Styling" and move all CSS from their `<style>` blocks into the global `src/styles/styles.css`. This is a critical step for maintainability.

3.  **Low-Priority Refactors (Scripting):**
    -   `ValuesTabs.astro`: Replace the inline script with an Astro island.

By following this plan, we can bring the entire component library in line with the development protocol, making the codebase more stable, maintainable, and easier to work with.