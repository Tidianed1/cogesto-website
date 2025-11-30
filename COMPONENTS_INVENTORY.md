# Component Inventory & Protocol Adherence

This document provides a detailed inventory of the reusable components in the Cogesto website project. Each component is analyzed for its purpose, props, and adherence to the official **Component Development Protocol (CDP)**.

The goal is to create a clear guide for developers to understand which components are ready for use, which require refactoring, and how to use them correctly when building new pages.

## Core Principles of the CDP

-   **✅ No Scoped Styles**: Components must not contain `<style>` blocks. All styling must come from the global stylesheet (`src/styles/styles.css`).
-   **✅ Data-Driven Props**: Components must be made reusable and dynamic through `Astro.props`. Hardcoded content is not allowed in reusable components.
-   **✅ Structural Integrity**: The HTML structure should be a clean and semantic replica of the intended design blueprint.
-   **✅ Centralized Interactivity**: Client-side scripts should be managed globally (e.g., in `BaseLayout.astro`) or via Astro Islands (`client:*`).

---

## 1. Core Layout & Global Components

### `NewHeader.astro`
-   **File Path:** `src/components/NewHeader.astro`
-   **Purpose:** Renders the main site navigation. Supports a standard (`cobalt`) and transparent theme for hero sections.
-   **Business Use Case:** The single global header for the entire website.
-   **Protocol Adherence:**
    -   ✅ **Styling & Interactivity:** Compliant.
    -   ❌ **Props (Content):** Non-compliant. All navigation links are hardcoded.
-   **Refactoring Notes:** High-priority. Refactor to accept navigation links from a central data file (e.g., `src/content/fr.ts`).

### `NewFooter.astro`
-   **File Path:** `src/components/NewFooter.astro`
-   **Purpose:** Renders the main site footer.
-   **Business Use Case:** The single global footer for the entire website. Contains newsletter signups, contact links, and legal information.
-   **Protocol Adherence:** ✅ Fully Compliant.
-   **Refactoring Notes:** None. This component is a model for CDP adherence.

### `DesktopNav.astro`
-   **File Path:** `src/components/DesktopNav.astro`
-   **Purpose:** Renders the desktop version of the mega-menu navigation.
-   **Business Use Case:** Part of the main header.
-   **Protocol Adherence:** 
    -   ❌ **Props (Content):** Non-compliant. All navigation links are hardcoded.
-   **Refactoring Notes:** High-priority. To be refactored along with `NewHeader.astro`.

### `MobileNav.astro`
-   **File Path:** `src/components/MobileNav.astro`
-   **Purpose:** Renders the mobile version of the mega-menu navigation.
-   **Business Use Case:** Part of the main header.
-   **Protocol Adherence:**
    -   ❌ **Props (Content):** Non-compliant. All navigation links are hardcoded.
-   **Refactoring Notes:** High-priority. To be refactored along with `NewHeader.astro`.

### `NavAccounts.astro`
-   **File Path:** `src/components/NavAccounts.astro`
-   **Purpose:** Renders the "Sign in" section of the navigation.
-   **Business Use Case:** Part of the main header.
-   **Protocol Adherence:** ✅ Fully Compliant.
-   **Refactoring Notes:** None.

### `PostHeaderModals.astro`
-   **File Path:** `src/components/PostHeaderModals.astro`
-   **Purpose:** Contains the content for the "Sign in" and "Search" modals.
-   **Business Use Case:** Part of the main header.
-   **Protocol Adherence:** 
    -   ❌ **Props (Content):** Non-compliant. All content is hardcoded.
-   **Refactoring Notes:** High-priority. To be refactored along with `NewHeader.astro`.

### `FullWidthCta.astro`
-   **File Path:** `src/components/FullWidthCta.astro`
-   **Purpose:** Renders a full-width call to action banner with a badge, animated title, and link button.
-   **Business Use Case:** Used for high-visibility engagement banners, typically with a "cobalt" blue background.
-   **Protocol Adherence:** ✅ Fully Compliant.
-   **Refactoring Notes:** None.

### `Breadcrumbs.astro`
-   **File Path:** `src/components/Breadcrumbs.astro`
-   **Purpose:** Renders a breadcrumb navigation trail.
-   **Business Use Case:** Used at the top of pages to show the user their location in the site hierarchy.
-   **Protocol Adherence:** ✅ Fully Compliant.
-   **Refactoring Notes:** None.

---

## 2. Hero & Header Components

### `HomepageVideoHero.astro`
-   **File Path:** `src/components/HomepageVideoHero.astro`
-   **Purpose:** Renders a full-screen video background with a content overlay.
-   **Business Use Case:** Creates a high-impact, dynamic landing page entrance to immediately grab user attention.
-   **Protocol Adherence:** ✅ Fully Compliant.
-   **Refactoring Notes:** None.

### `BainInspiredHero.astro`
-   **File Path:** `src/components/BainInspiredHero.astro`
-   **Purpose:** Renders a hero section inspired by the Bain website.
-   **Business Use Case:** A visually striking hero for key landing pages.
-   **Protocol Adherence:** ✅ Fully Compliant.
-   **Refactoring Notes:** None.

### `SecondaryBlueHero.astro`
-   **File Path:** `src/components/SecondaryBlueHero.astro`
-   **Purpose:** A simple, blue hero section with a title and introduction.
-   **Business Use Case:** A simple, clean hero for pages that need a strong title but not a full hero section.
-   **Protocol Adherence:** ✅ Fully Compliant.
-   **Refactoring Notes:** None.

### `HeroBlock.astro`
-   **File Path:** `src/components/HeroBlock.astro`
-   **Purpose:** Renders a hero section with a button that opens a modal with a form.
-   **Business Use Case:** A lead-generation hero for product or service pages.
-   **Protocol Adherence:** ✅ Fully Compliant.
-   **Refactoring Notes:** None.

### `HeroProduct.astro`
-   **File Path:** `src/components/HeroProduct.astro`
-   **Purpose:** Renders a hero section specifically for a product.
-   **Business Use Case:** The main hero for a product page.
-   **Protocol Adherence:** ✅ Fully Compliant.
-   **Refactoring Notes:** None.

### `HeroSection.astro`
-   **File Path:** `src/components/HeroSection.astro`
-   **Purpose:** Renders a hero section with a diagonal split design.
-   **Business Use Case:** A visually interesting hero for key landing pages.
-   **Protocol Adherence:** 
    -   ❌ **Props (Content):** Non-compliant. All content is hardcoded.
-   **Refactoring Notes:** High-priority. Refactor to accept content via props.

### `MasonryGrid.astro`
-   **File Path:** `src/components/MasonryGrid.astro`
-   **Purpose:** Renders a flexible masonry-like grid for mixed content tiles (vertical, regular, wide). Supports labels, images, and text descriptions.
-   **Business Use Case:** For displaying a mix of featured studies, articles, and global topics in a dynamic grid layout.
-   **Protocol Adherence:** ❌ **Non-Compliant (Visuals & Spacing).**
-   **Refactoring Notes:** High-priority. The current implementation has spacing issues, clashing elements, and does not fully respect the typographic scale and overall visual identity of the Cogesto Design System. Requires a comprehensive review and adjustment of utility classes and component-specific styling to align with `DESIGN_SYSTEM.md`.

### `HeroService.astro`
-   **File Path:** `src/components/HeroService.astro`
-   **Purpose:** Renders a hero section for a service.
-   **Business Use Case:** The main hero for a service page.
-   **Protocol Adherence:** ✅ Fully Compliant.
-   **Refactoring Notes:** None.

### `TabsTextMedia.astro`
-   **File Path:** `src/components/TabsTextMedia.astro`
-   **Purpose:** Renders a complex interactive component with a sidebar navigation (tabs) and a content area (text + large image) that changes based on the selected tab.
-   **Business Use Case:** For showcasing different industries or service areas in a compact, interactive way.
-   **Protocol Adherence:** ✅ Fully Compliant.
-   **Refactoring Notes:** None.

### `TabsTextMedia.astro`
-   **File Path:** `src/components/TabsTextMedia.astro`
-   **Purpose:** Renders a complex interactive component with a sidebar navigation (tabs) and a content area (text + large image) that changes based on the selected tab.
-   **Business Use Case:** For showcasing different industries or service areas in a compact, interactive way.
-   **Protocol Adherence:** ✅ Fully Compliant.
-   **Refactoring Notes:** None.

### `HeroMultiTemplate.astro`
-   **File Path:** `src/components/HeroMultiTemplate.astro`
-   **Purpose:** A flexible, data-driven hero component for interior pages.
-   **Business Use Case:** The standard hero for service pages, expertise deep-dives, and articles.
-   **Protocol Adherence:** ❌ **Non-Compliant (Styling).** Contains a `<style>` block.
-   **Refactoring Notes:** High-priority. Extract all styles to the global stylesheet.

### `AboutHero.astro`
-   **Status:** 💀 **DELETION CANDIDATE.** Static and should be replaced by `HeroMultiTemplate.astro`.

### `OurStoryHero.astro`
-   **Status:** 💀 **DELETION CANDIDATE.** Static and should be replaced by `HeroMultiTemplate.astro`.

### `OurPeopleHero.astro`
-   **Status:** 💀 **DELETION CANDIDATE.** Static and should be replaced by `HeroMultiTemplate.astro`.

### `SignInHero.astro`
-   **File Path:** `src/components/SignInHero.astro`
-   **Purpose:** Renders a hero section for the sign-in page.
-   **Business Use Case:** For the sign-in page.
-   **Protocol Adherence:** 
    -   ❌ **Props (Content):** Non-compliant. All content is hardcoded.
-   **Refactoring Notes:** High-priority. Refactor to accept content via props.

---

## 3. Content & Section Components

### `BodyCopyImage.astro`
-   **File Path:** `src/components/BodyCopyImage.astro`
-   **Purpose:** A flexible two-column component for displaying text alongside an image.
-   **Business Use Case:** Ideal for detailing a specific service, explaining a company value, or introducing a team member.
-   **Protocol Adherence:** ✅ Fully Compliant.
-   **Refactoring Notes:** None.

### `TextOnlySection.astro`
-   **File Path:** `src/components/TextOnlySection.astro`
-   **Purpose:** A simple section for displaying a title and a block of text.
-   **Business Use Case:** For any page that needs a simple text block.
-   **Protocol Adherence:** ✅ Fully Compliant.
-   **Refactoring Notes:** None.

### `CenteredTextSection.astro`
-   **File Path:** `src/components/CenteredTextSection.astro`
-   **Purpose:** Renders a section with a centered title and text content.
-   **Business Use Case:** For simple text sections with a centered layout.
-   **Protocol Adherence:** ✅ Fully Compliant.
-   **Refactoring Notes:** None.

### `LeftTitledIntro.astro`
-   **File Path:** `src/components/LeftTitledIntro.astro`
-   **Purpose:** Renders a section with a title on the left and content on the right.
-   **Business Use Case:** For introductory sections.
-   **Protocol Adherence:** ✅ Fully Compliant.
-   **Refactoring Notes:** None.

### `NarrowBodyCopy.astro`
-   **File Path:** `src/components/NarrowBodyCopy.astro`
-   **Purpose:** A component for displaying a narrow block of text.
-   **Business Use Case:** For text-heavy pages that need a more readable column width.
-   **Protocol Adherence:** ✅ Fully Compliant.
-   **Refactoring Notes:** None.

### `SectionIntro.astro`
-   **File Path:** `src/components/SectionIntro.astro`
-   **Purpose:** An introductory section with a title and content.
-   **Business Use Case:** To introduce a new section on a page.
-   **Protocol Adherence:** ❌ **Non-Compliant (Styling).** Contains a `<style>` block.
-   **Refactoring Notes:** High-priority. Extract all styles to the global stylesheet.

### `ValuesTabs.astro`
-   **File Path:** `src/components/ValuesTabs.astro`
-   **Purpose:** Renders an interactive tabbed interface.
-   **Business Use Case:** Excellent for showcasing distinct but related pieces of information, such as company values, service tiers, or project phases.
-   **Protocol Adherence:**
    -   ❌ **Interactivity:** Non-compliant. Uses an inline `<script>` tag.
-   **Refactoring Notes:** Low-priority. The inline script should be extracted into an Astro Island (`client:load`) when time permits.

### `ServicesCarousel.astro`
-   **File Path:** `src/components/ServicesCarousel.astro`
-   **Purpose:** Renders a carousel of services or products with a sticky text introduction on the left and slides on the right.
-   **Business Use Case:** For "Discover our energy consulting solutions" sections.
-   **Protocol Adherence:** ✅ Fully Compliant.
-   **Refactoring Notes:** None. Uses Swiper.js.

### `BenefitsBlock.astro`
-   **File Path:** `src/components/BenefitsBlock.astro`
-   **Purpose:** Renders a grid of statistics or benefits with icons, numbers, and text.
-   **Business Use Case:** For displaying key metrics or benefits (e.g., "CCUS in numbers").
-   **Protocol Adherence:** ✅ Fully Compliant.
-   **Refactoring Notes:** None.

### `OutcomesBlock.astro`
-   **File Path:** `src/components/OutcomesBlock.astro`
-   **Purpose:** Displays a sophisticated tabbed interface for the homepage.
-   **Business Use Case:** Can be adapted to show "Challenge -> Solution -> Outcome" case studies, or to feature different industry reports.
-   **Protocol Adherence:** ❌ **Non-Compliant.** Contains inline styles, hardcoded content, and an inline script.
-   **Refactoring Notes:** High-priority. Requires a complete overhaul to become data-driven and compliant.

### `Accordion.astro`
-   **File Path:** `src/components/Accordion.astro`
-   **Purpose:** Renders a vertically stacked set of interactive headings that each reveal a section of content.
-   **Business Use Case:** For FAQs, or other content that can be collapsed.
-   **Protocol Adherence:**
    -   ❌ **Interactivity:** Non-compliant. Uses an inline `<script>` tag.
-   **Refactoring Notes:** High-priority. The inline script should be replaced with a compliant solution, like an Astro island (`client:load`).

### `MainContent.astro`
-   **File Path:** `src/components/MainContent.astro`
-   **Purpose:** A collection of different sections that make up the main content of the homepage. Not a reusable component.
-   **Business Use Case:** A temporary container for the homepage content.
-   **Protocol Adherence:** ❌ **Non-Compliant.** All content is hardcoded.
-   **Refactoring Notes:** High-priority. This component should be broken down into smaller, reusable components.

---

## 4. Card & Item Components

### `LeadershipTeamSection.astro`
-   **File Path:** `src/components/LeadershipTeamSection.astro`
-   **Purpose:** Renders a grid of team member profiles with headshots, names, and titles.
-   **Business Use Case:** Used on "Our People" or "Leadership" pages to showcase the executive team.
-   **Protocol Adherence:** ✅ Fully Compliant.
-   **Refactoring Notes:** None.

### `BlogArticleShowcase.astro`
-   **File Path:** `src/components/BlogArticleShowcase.astro`
-   **Purpose:** Renders a featured content section with one large highlighted article on the left and a list of secondary articles on the right.
-   **Business Use Case:** For showcasing "Recent Articles" or "Insights" on the homepage or expertise pages.
-   **Protocol Adherence:** ❌ **Non-Compliant (Visuals & Spacing).**
-   **Refactoring Notes:** High-priority. The current implementation has spacing issues, clashing elements, and does not fully respect the typographic scale and overall visual identity of the Cogesto Design System. Requires a comprehensive review and adjustment of utility classes and component-specific styling to align with `DESIGN_SYSTEM.md`.

### `RelatedContent.astro`
-   **File Path:** `src/components/RelatedContent.astro`
-   **Purpose:** Renders a grid of related content cards (news, opinions, articles). Supports a 3-column standard layout and a 2-column variant.
-   **Business Use Case:** Used at the bottom of pages to show "Related content" or "More News".
-   **Protocol Adherence:** ✅ Fully Compliant.
-   **Refactoring Notes:** None.

### `Card.astro`
-   **File Path:** `src/components/Card.astro`
-   **Purpose:** Renders a generic card component.
-   **Business Use Case:** A versatile component for displaying content in a card format.
-   **Protocol Adherence:** ✅ Fully Compliant.
-   **Refactoring Notes:** None.

### `ArticleCard.astro`
-   **File Path:** `src/components/ArticleCard.astro`
-   **Purpose:** Renders a card for a single article.
-   **Business Use Case:** For displaying articles in a list or grid.
-   **Protocol Adherence:** ✅ Fully Compliant.
-   **Refactoring Notes:** None.

### `NewsCard.astro`
-   **File Path:** `src/components/NewsCard.astro`
-   **Purpose:** Renders a card for a news article.
-   **Business Use Case:** For displaying news articles in a list or grid.
-   **Protocol Adherence:** ❌ **Non-Compliant (Styling).** Contains a `<style>` block.
-   **Refactoring Notes:** High-priority. Extract all styles to the global stylesheet.

### `CommoditySelector.astro`
-   **File Path:** `src/components/CommoditySelector.astro`
-   **Purpose:** Renders a complex interactive component with a thumbnail slider controlling a main content slider.
-   **Business Use Case:** Originally for commodities, but refactored to be a generic "Selector" for case studies, partners, or product suites.
-   **Protocol Adherence:** ❌ **Non-Compliant (Layout, Responsiveness, Interaction).**
-   **Refactoring Notes:** High-priority. The component exhibits layout issues, responsiveness problems, and/or interaction failures that prevent it from being stable and fully compliant with the Cogesto Design System. Requires further debugging and styling adjustments.

### `ServicesBlock.astro`
-   **File Path:** `src/components/ServicesCard.astro`
-   **Purpose:** Renders a card for a single service.
-   **Business Use Case:** For displaying services in a list or grid.
-   **Protocol Adherence:** ✅ Fully Compliant.
-   **Refactoring Notes:** None.

### `CardImageText.astro`
-   **File Path:** `src/components/CardImageText.astro`
-   **Purpose:** Renders a section with an image on one side and text content on the other.
-   **Business Use Case:** For feature sections and calls to action.
-   **Protocol Adherence:** ✅ Fully Compliant.
-   **Refactoring Notes:** The component is named `CardImageText.astro` but the internal classes and props refer to `video`. This should be made consistent.

### `CardQuote.astro`
-   **File Path:** `src/components/CardQuote.astro`
-   **Purpose:** Renders a section with an image on one side and a quote on the other.
-   **Business Use Case:** For displaying quotes with an accompanying image.
-   **Protocol Adherence:** ✅ Fully Compliant.
-   **Refactoring Notes:** The component is named `CardQuote.astro` but the internal classes and props refer to `video`. This should be made consistent.

### `AdvantageItem.astro`
-   **File Path:** `src/components/AdvantageItem.astro`
-   **Purpose:** Displays a single "advantage" or feature.
-   **Business Use Case:** For showcasing a list of advantages or features.
-   **Protocol Adherence:** ✅ Fully Compliant.
-   **Refactoring Notes:** None.

### `BlogPostCard.astro`
-   **File Path:** `src/components/BlogPostCard.astro`
-   **Purpose:** Renders a card for a single blog post.
-   **Business Use Case:** For displaying a blog post in a list or grid.
-   **Protocol Adherence:** ✅ Fully Compliant.
-   **Refactoring Notes:** None.

---

## 5. Deprecated & Unused Components

-   `HomepageHero.astro`: 💀 **DELETED.**
-   `TransparentHeader.astro`: 💀 **DELETED.**
-   `NewHeader.old.astro`: 💀 **DELETION CANDIDATE.**
-   `expertises/ExpertiseHero.astro`: 💀 **DELETION CANDIDATE.**
-   `expertises/ExpertiseSubNav.astro`: 💀 **DELETION CANDIDATE.**
-   `FeatureGrid.astro`: Empty component, needs to be implemented or deleted.
-   `HeaderScripts.astro`: Obsolete, should be deleted.
-   `PaymentSuccessCard.astro`: Not currently used.
-   `expertises/CTASection.astro`: Not currently used.
-   `expertises/ExpertiseSection.astro`: Not currently used.
-   `TwoColumnContent.astro`: 💀 **DELETED.** Replaced by `BodyCopyImage.astro`.

---
This inventory provides a clear overview of the current state of our component library. By focusing on refactoring the non-compliant components as we build out pages, we can progressively improve the quality and maintainability of the codebase.
