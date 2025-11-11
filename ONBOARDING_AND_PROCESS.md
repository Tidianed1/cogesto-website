# Project Onboarding & Component Workflow

This document summarizes the key findings from our initial session and defines the standard process for building new components for the Cogesto website.

## 1. Project Goal

To build Astro components that are exact replicas of the sections from the reference Woodmac website, using the provided HTML and CSS.

## 2. The Core Problem: CSS Conflicts

Our primary challenge was a series of CSS conflicts caused by the project's styling architecture.

- **Multiple, Conflicting Stylesheets:** The project uses at least two large, independent stylesheets: `styles.css` and `screen.css`.
- **Content of Files:** Through extensive debugging, we determined the following:
    - `styles.css` contains the **layout styles** (e.g., `.flexbox`, `.medium-6`).
    - `screen.css` contains the **theming styles** (e.g., button colors, text colors, fonts).
- **The Conflict:** When both files are loaded, their rules clash, causing unpredictable behavior. For example, the layout breaks. When only one is loaded, the component is missing critical styles.

## 3. The Solution: A Single Source of Truth with Overrides

To solve the conflicts, we have established the following architecture:

1.  **Load All Stylesheets:** The main layout file (`src/layouts/BaseLayout.astro`) must load all the necessary global stylesheets in a specific order.
2.  **Use `inline.css` for Overrides:** Any conflicts that arise between the main stylesheets must be resolved by adding a high-specificity override rule to the `public/styles/inline.css` file. This file is loaded last and acts as the final say on any style disputes.

The correct, final `<head>` configuration in `src/layouts/BaseLayout.astro` is:

```html
<head>
    ...
    <link rel="stylesheet" href="/styles/global.css">
    <link rel="stylesheet" href="/styles/styles.css">
    <link rel="stylesheet" href="/styles/screen.css">
    <link rel="stylesheet" href="/styles/print.css" media="print">
    <link rel="stylesheet" href="/styles/inline.css">
</head>
```

## 4. Component Creation Workflow

All new components will be built following this strict process:

1.  **Start with HTML:** Begin with the raw HTML provided from the reference website.
2.  **Create Clean Astro Component:** Create a new `.astro` file in `src/components/`. This component must be "clean" - it should contain **no `<style>` blocks**. It should be composed of the HTML structure and use `Astro.props` to manage dynamic content.
3.  **Add to Test Page:** Place the new component in `src/pages/test-components/index.astro` for visual verification.
4.  **Identify Conflicts:** Observe the rendered component. If there are any styling issues (e.g., incorrect layout, colors, or fonts), it is due to a conflict in the global stylesheets.
5.  **Fix with `inline.css`:** Add a new, specific, and well-commented CSS rule to `public/styles/inline.css` to override the conflicting style and force the correct appearance.

## 5. Current Status

- **`BodyCopyImage.astro`:** This component has been built according to the process. Its HTML and props are correct.
- **Layout Issue:** The component currently suffers from a layout conflict. The `reverse` class is not being applied correctly because of fighting global styles.
- **`BaseLayout.astro`:** It is correctly configured to load all necessary stylesheets.

## 6. Immediate Next Step

The very next action for our new session is to **add the layout override rules for `BodyCopyImage` to the `public/styles/inline.css` file** to fix the `reverse` layout issue.

---

## Session Update: 2025-11-08

**Current Status:**
- The `BodyCopyImage.astro` component has been reverted to a state where its button and title elements rely on global CSS classes (`.btn`, `.btn--secondary`, and `.core-branding-cobalt`).
- The goal is to make `BodyCopyImage.astro` fully self-contained by moving the styles associated with these global classes into the component's own scoped `<style>` block.
- Previous attempts to extract these styles were challenging due to the complexity of the global `screen.css` and difficulties in obtaining precise CSS rule blocks from browser inspections.

**Next Steps:**
- The immediate next action is to accurately extract the complete CSS rule blocks for `.btn`, `.btn--secondary` (including hover states), and `.core-branding-cobalt` from `public/styles/screen.css`.
- Once these precise rules are obtained, they will be integrated into `BodyCopyImage.astro`'s `<style>` block, and the corresponding global classes will be removed from its HTML.
- The user has explicitly instructed to ask for reference code when needed to ensure a disciplined approach.

