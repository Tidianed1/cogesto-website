# Component Development Protocol (CDP)

This document outlines the official, non-negotiable protocol for creating reusable Astro components for the Cogesto website. This process ensures all components are perfect structural and stylistic replicas of their counterparts on the Woodmac reference website, are highly reusable, and are built on a stable, maintainable foundation.

## 1. Core Principles

1.  **No Scoped Styles**: Components MUST NOT contain `<style>` blocks. All styling is derived from the global stylesheet.
2.  **Single Source of Truth**: The `src/styles/styles.css` file is the **only** source for CSS classes. All necessary layout and theming classes must exist in this file.
3.  **No CSS Overrides**: The use of `public/styles/inline.css` is deprecated. We do not use overrides or "quick fixes". The component must be made to work using the existing framework classes.
4.  **Structure from Blueprint**: The HTML structure of a component must be an exact replica of the reference component on the Woodmac website.
5.  **Reusable Through Props**: Components are made dynamic and reusable through `Astro.props`.

## 2. The Development Workflow

This workflow is to be followed for every new component. We use `BodyCopyImage.astro` as the successful pilot case.

### Phase 1: Blueprinting & Deconstruction

**Objective**: To analyze the live reference component and create a blueprint for our Astro component.

1.  **Target Acquisition**: Navigate to the live Woodmac website and locate the component to be replicated.
2.  **Structural Analysis (Browser DevTools)**:
    *   Right-click and "Inspect" the target component.
    *   Identify the single, outermost `<div>` that contains the entire component. Note its exact class names. This will be the root element of your `.astro` file.
    *   Drill down into the structure. Note the exact nesting, element types, and class names of all children. Pay close attention to classes that define layout (e.g., `flexbox`, `medium-6`).
3.  **Identify Responsive Patterns**:
    *   Toggle the browser's device mode to view the component on mobile.
    *   Observe how the layout changes. Does it stack? Do elements change order?
    *   Identify the classes responsible for this responsive behavior. **This is the most critical step.**
    *   In the case of `BodyCopyImage`, we discovered that the `reverse` class was a blunt tool that broke mobile stacking. The correct solution was to use the framework's responsive modifier classes: `stack-for-small` on the parent container, and `medium-order-1`/`medium-order-2` on the children.
    *   **Never assume a simple class is correct for responsive layouts.** Always look for the framework's built-in responsive tools (e.g., classes prefixed with `medium-`, `large-`, or suffixed with `-for-medium`, etc.).
4.  **Define the Data Interface (Props)**:
    *   Based on your analysis, define the component's props. Identify every piece of content that needs to be dynamic.
    *   For `BodyCopyImage`, the props were: `title`, `description`, `buttonText`, `buttonHref`, `imageUrl`, `imageAlt`, and the crucial `reverseLayout: boolean` to control the responsive ordering.

### Phase 2: Component Scaffolding & Implementation

**Objective**: To write the Astro component code based on the blueprint from Phase 1.

1.  **File Creation**: Create a new `.astro` file in `src/components/`.
2.  **Props Interface**: At the top of the file, define the `Props` interface.
3.  **HTML Structure Replication**:
    *   Build out the HTML structure inside the component, using the exact nesting and class names from your blueprint.
    *   Replace hardcoded content with Astro props (e.g., `src={imageUrl}`, `>{title}<`). Use `set:html` for props that may contain rich text.
#### 4. Implement Responsive Logic: The "Manual Reorder" Strategy

This is the most critical and robust method for handling different layouts on desktop vs. mobile. Our investigation revealed that relying on CSS ordering classes from the framework (e.g., `.reverse`, `medium-order-*`) was fragile and created unsolvable conflicts.

The definitive, mandatory solution is to **control the layout order directly in the Astro template.**

**The "Manual Reorder" Golden Pattern:**

This pattern, perfected in `BodyCopyImage.astro`, is the mandatory way to handle responsive column ordering.

1.  **Identify the component's children** that need to be reordered (e.g., a text block and an image block).
2.  **Use a boolean prop** (e.g., `reverseLayout`) to control the desired desktop order.
3.  **In the Astro template, use a ternary operator** to conditionally render the children in the correct order.
4.  **Do not** use any CSS classes for reordering. Rely on the natural document flow and the container's `flex-wrap` property for mobile stacking.

**Example from `BodyCopyImage.astro`:**

```astro
---
// imports and props interface...

const { reverseLayout = false, ... } = Astro.props;

// Define classes for containers...
---
<div class="body-copy-image__section ...">
    <div class="wrap">
        <div class="body-copy-image__content-container flexbox ...">
            {/* 
              This ternary operator is the core of the solution.
              It manually changes the HTML source order, which is the
              most reliable way to control layout.
            */}
            {reverseLayout ? (
                <>
                    {/* Image block comes first in the code for reverse layout */}
                    <div class="image-container...">...</div>
                    {/* Text block comes second */}
                    <div class="text-container...">...</div>
                </>
            ) : (
                <>
                    {/* Text block comes first in the code for standard layout */}
                    <div class="text-container...">...</div>
                    {/* Image block comes second */}
                    <div class="image-container...">...</div>
                </>
            )}
        </div>
    </div>
</div>
```

**Why This Works:** This approach is superior because it avoids CSS specificity wars. The mobile layout relies on the default, predictable behavior of flexbox wrapping, which is highly reliable. The desktop layout is achieved by changing the source order, which is explicit and easy to debug.

### Phase 3: Testing and Validation

1.  **Create a Test Page**: Use `src/pages/test-components/index.astro` as a sandbox.
2.  **Replicate Page Context**: On the test page, build the necessary "frame" or parent containers that the component expects to live in, as identified in your blueprint. For `BodyCopyImage`, this was the `<div class="body-copy-image" id="bodycopyimagecontainer">`.
3.  **Instantiate and Verify**: Place multiple instances of your component on the test page with different prop combinations to test all variants (e.g., `reverseLayout={true}` and `reverseLayout={false}`).
4.  **Validate**: Verify that the component is a pixel-perfect match to the reference on both desktop and mobile.

## 3. Font Integration

The Woodmac website uses the "Manrope" font, served from Google Fonts. To ensure our components have the correct typography, we must load this font globally.

**Action**: The font is loaded in `src/layouts/BaseLayout.astro` by adding the following `<link>` tag to the `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

This ensures the font is available to all pages and components that use the `BaseLayout`.

## 4. Current Status: Accordion Component Debugging

The `Accordion.astro` component is currently not interactive despite implementing a scoped script and using the `client:load` directive.

**Problem:** The accordion panels do not open or close on click.

**Investigation Steps:**

1.  **Verify JavaScript Loading:** Confirm that the browser is receiving and executing the JavaScript for the `Accordion` component.
2.  **Verify DOM Elements:** Ensure the JavaScript is correctly selecting the `js-accordion__trigger` elements.
3.  **Verify CSS:** Check for any conflicting CSS rules (e.g., `max-height`, `overflow`) that might be preventing the accordion animation or visibility.
4.  **Astro Hydration:** Re-evaluate how Astro handles client-side interactivity for components, especially with `client:load` and potential interactions with View Transitions.

## 5. Technical Debt / To-Do

*   **`NewHeader.astro` Instability**: The `NewHeader.astro` component is currently under development and is not stable. The mega menu and mobile menu interactivity are not yet functional.
*   **Placeholder Icons**: The icons `icon-arrow--dark-blue.svg` and `icon-plus-blue.svg` in `public/img/icons/` are temporary placeholders. They need to be replaced with the correct SVG assets.
*   **Accordion Arrow CSS**: CSS for an arrow icon was added to `src/styles/styles.css` and then requested to be reverted. The user will handle the removal of this CSS to keep the component stable for now.
*   **CommoditySelector Stability**: The `CommoditySelector.astro` component is complex due to its reliance on the third-party Swiper.js library. It is not currently considered stable. We will revisit this component later to stabilize its functionality and ensure it perfectly matches the user's expectations.
*   **Build Warning: PostCSS `@import` order**: A PostCSS warning `[@import must precede all other statements]` is present for `swiper/swiper-bundle.css` in `src/styles/styles.css`. This needs to be moved to the top of the file.
*   **`ServicesBlock.astro` Layout Issue**: The component is only rendering the mobile (accordion) view, even on desktop screens. The responsive visibility classes (`show-for-medium-up` and `show-for-small-only`) are not behaving as expected. This needs to be debugged.
*   **`HeroService.astro` Refinement**: The initial build of the services hero component is not a pixel-perfect match to the reference design. It requires further styling adjustments to achieve visual parity.

## 6. Debugging Case Study: The `ValuesTabs` Incident

The resolution of issues with the `ValuesTabs` component serves as a critical reminder of our core development principles.

### The Problem

The `ValuesTabs` component, when placed on the `/about/our-values` page, exhibited two major failures:
1.  **Build Error**: The Astro build failed with a `TypeError`, indicating that the `tabs` prop was `undefined`, even though the data appeared to be correctly structured and imported from `src/content/fr.ts`.
2.  **Rendering & Interactivity Failure**: After applying a temporary workaround (hardcoding the data into the page), the build passed, but the component rendered incorrectly. All tab content was visible simultaneously, and the tabs were not interactive.

### The Investigation

Initial debugging focused on the component's data flow and JavaScript, with attempts to use `client:load` directives and other Astro features. These were incorrect assumptions. The root cause was much simpler and more fundamental.

The "all text appear at once" symptom was the key clue. It meant that the CSS rule responsible for hiding non-active tabs (`.tabbed__content-container:not(.active) { display: none; }`) was not being applied.

### The Root Cause & Solution

A comparison between the failing page (`/about/our-values.astro`) and a working test page (`/pages/test-components/index.astro`) revealed a critical architectural deviation:

*   The **working** test page used the project's standard `src/layouts/BaseLayout.astro`.
*   The **failing** `our-values.astro` page did **not** use the `BaseLayout`. It had its own standalone `<html>` and `<head>` structure.

By not using `BaseLayout`, the `our-values` page was linking to a deprecated stylesheet (`/styles/screen.css`) instead of the project's single source of truth, `src/styles/styles.css`, which is correctly imported by `BaseLayout`.

The fix was to refactor `/about/our-values.astro` to wrap its content in the `<BaseLayout>` component. This single change ensured the correct stylesheet was loaded, which simultaneously:
1.  **Fixed the rendering issue**: The `display: none` rule was now present, and the component's initial state rendered correctly.
2.  **Fixed the interactivity issue**: The component's simple inline JavaScript worked as intended once the foundational CSS was in place.
3.  **Fixed the original build error**: With the page properly structured and all necessary styles and scripts loaded correctly via the layout, the data import from `fr.ts` no longer caused a `TypeError` during the build.

### The Lesson

**Always use the `BaseLayout.astro` for all new pages.** Deviating from this standard introduces inconsistencies that lead to complex, hard-to-diagnose bugs. The problem often lies not in the component itself, but in the environment and structure of the page it is placed on. Adherence to the project's established architecture is paramount.