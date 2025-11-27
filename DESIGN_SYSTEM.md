# Cogesto Design System

## 1. Overview

The design philosophy is a hybrid approach. It combines a BEM-like (Block, Element, Modifier) naming convention for component structures (e.g., `.body-copy-image__container`, `.tabbed__tabs-list-item`) with a set of global utility classes for layout, color, and typography. This structure is reminiscent of frameworks like Foundation CSS.

Components are designed to be self-contained and reusable, with dynamic content passed via Astro props. The system is built on a custom global CSS framework, **not** a utility-first library like Tailwind. All styling is derived from `styles.css`.

## 2. Color Palette

The color system is based on a set of semantic class names. True CSS variables are not used; direct hex codes are applied to these classes.

### Primary Colors
- **`.primary-color` / `.core-branding-rich-blue`**: `#010063`
  - **Usage**: The main brand color. Used for primary text, links, and dark backgrounds requiring a rich blue.
- **`.secondary-color` / `.core-branding-cobalt`**: `#0024ff`
  - **Usage**: The primary accent and highlight color. Used for secondary buttons, interactive element highlights, and underlines.

### Background Colors
- **`.bg-white`**: `#fff`
  - **Usage**: Standard page and component background.
- **`.bg-primary-color` / `.bg-core-branding-rich-blue`**: `#010063`
  - **Usage**: For dark-themed sections and components (`CardQuote`).
- **`.bg-secondary-color` / `.bg-core-branding-cobalt`**: `#0024ff`
  - **Usage**: For vibrant, attention-grabbing sections (`CardImageText`).
- **`.bg-light-grey-1`**: `#f7f7f7`
  - **Usage**: Subtle, off-white background for sectioning.
- **`.bg-product-light-color`**: `#f1f4ff`
  - **Usage**: A light blue tint used for specific product-related sections.
- **`.bg-dark-grey-3`**: `#282828`
  - **Usage**: A very dark grey, almost black, for alternative dark backgrounds.

### Text Colors
- **`.primary-color`**: `#010063` (Default body text color)
- **`.white`**: `#fff` (For use on dark backgrounds)
- **`.off-black`**: `#222`
- **`.dark-grey-1`**: `#5a5a5a`
- **`.dark-grey-2`**: `#4e4e4e`
- **`.dark-grey-3`**: `#282828`

### Status & Accent Colors
- **`.green`**: `#2dbe60` (Success status)
- **`.red`**: `#a8011e` (Error or danger status)
- **`.bg-yellow`**: `#eba912`

## 3. Typography

The primary font for the entire project is **Manrope**, served from Google Fonts. A comprehensive, responsive typographic scale is available through two sets of classes.

### Font Weights
- **`.font-light`**: `300`
- **Default (Regular)**: `400`
- **`.font-semibold` or `h1-h6` default**: `500` / `600`
- **`.font-bold` or `strong`**: `700`
- **`.font-black`**: `900`

### Semantic Typographic Scale
This is the preferred, modern scale for new components.
- **`.display50` / `.display100`**: `3.5rem` - `5.5rem`. For major hero section titles.
- **`.h100` - `.h700`**: A scale from `3.125rem` down to `1.125rem` for general page headings.
- **`.body100` - `.body400`**: A scale from `1.25rem` down to `.875rem` for all body copy.
- **`.subtitle100`, `.subtitle200`**: For subtitles, typically using `font-weight: 600`.
- **`.button-primary`**: `1rem`, `font-weight: 600`.

### Legacy Typographic Scale
This scale is also present and used in older components.
- **`.peta`**: `2rem` -> `2.6rem` (Primary page titles)
- **`.giga`**: `1.4rem` -> `1.9rem` (Sub-headings)
- **`.alpha`**: `1.1rem` -> `1.2rem` (Standard large body copy)
- **`.beta`**: `1.04rem` (Standard body copy)
- **`.gamma`**: `.875rem` (Small text, captions)

## 4. Spacing System

### Grid Layout
The project uses a responsive, 12-column, float-based grid system.
- **Container**: The main container is the `.wrap` class, which sets a `max-width` and centers the content.
- **Row**: A `.row` class is used to clear floats and contain columns.
- **Columns**: The grid is defined by classes that follow a `breakpoint-N` pattern:
  - **`.small-N`**: Applies to all screen sizes. `N` is a number from 1 to 12.
  - **`.medium-N`**: Applies to screens `48em` and wider.
  - **`.large-N`**: Applies to screens `60em` and wider.
  - **Example**: A 50/50 split on desktop that stacks on mobile would be:
    ```html
    <div class="row">
      <div class="col small-12 medium-6">...</div>
      <div class="col small-12 medium-6">...</div>
    </div>
    ```

### Spacing Utilities
Spacing is applied via utility classes using `rem` units.
- **Margins**: `.push--top`, `.push--bottom`, `.push-half--sides`, `.push-double--bottom`. The "half" unit is `.75rem` and the standard unit is `1.5rem`.
- **Padding**: No padding-specific utility classes were found; padding is applied directly within component styles. Common values are `.75rem`, `1.5rem`, `3rem`, `4.5rem`.

## 5. Component Styles

### Buttons
- **Primary Button**:
  - **HTML**: `<a href="..." class="btn btn--primary">...</a>`
- **Secondary Button**:
  - **HTML**: `<a href="..." class="btn btn--secondary">...</a>`
- **Arrow Button**: Add `btn--arrow` for a button with a right-facing arrow icon.
  - **HTML**: `<button class="btn btn--primary btn--arrow"><span>Learn more</span></button>`

### Accordion
- **Description**: A vertically collapsing accordion to hide and show content. It is a custom element (`<accordion-component>`) that encapsulates its own JavaScript for interactivity.
- **Astro Component**: `Accordion.astro`
- **Usage**:
  ```astro
  <Accordion
    client:load
    title="Frequently asked questions"
    description="Here you’ll find answers..."
    items={[
      { question: "Question 1?", answer: "<p>Answer 1.</p>" },
      { question: "Question 2?", answer: "<p>Answer 2.</p>" }
    ]}
  />
  ```

### ValuesTabs
- **Description**: A component that displays content in a tabbed interface. It automatically switches to a dropdown select menu on mobile devices. It is a custom element that handles its own state via an inline script.
- **Astro Component**: `ValuesTabs.astro`
- **Usage**:
  ```astro
  <ValuesTabs
    summaryTitle="Our values"
    summaryDescription="Our values guide our decisions..."
    tabs={[
      { id: "tab1", title: "Inclusive", content: "<p>Content for tab 1.</p>", active: true },
      { id: "tab2", title: "Trusting", content: "<p>Content for tab 2.</p>" }
    ]}
  />
  ```

## 6. Shadows & Elevation

The design system is predominantly flat. There is no significant or consistent use of `box-shadow` for elevation on primary components like cards or buttons.

## 7. Animations & Transitions

- **Standard Transition**: `transition: all .2s ease-in-out` is applied globally to buttons and links, affecting `color`, `background-color`, `opacity`, and `border`.
- **Image Hover**: Images within an `.img-overlay` container have a slight scale effect on hover: `transform: scale(1.03)` over `.8s`.
- **Fade-in Animations**: Utility classes apply entrance animations: `.fade-in-up` and `.fade-in`.

## 8. Border Radius

- **Standard**: `border-radius: 0`. Most elements like buttons and cards have sharp `90-degree` corners.
- **Circular Elements**: The `.circle` class creates circular shapes (`border-radius: 100px`), primarily used for avatars.

## 9. Opacity & Transparency

- **Image Overlay**: The `.img-overlay__blend` class creates a standard gradient overlay on images: `linear-gradient(to bottom, rgba(0,0,0,.3) 60%, rgba(0,0,0,.8) 100%)`.
- **Backdrops**: Utility classes are available for full-screen overlays, such as `.overlay-black-backdrop` (`rgba(0,0,0,.6)`).

## 10. Common CSS Usage

The framework relies heavily on a custom utility class system rather than a modern library like Tailwind.
- **Layout**: `.flexbox`, `.wrap`, `.row`, `.col`, `.small-12`, `.medium-6`.
- **Text Alignment**: `.text--center`, `.text-left`, `.text-right`.
- **Borders**: `.border`, `.border--top`, `.border--bottom`, `.border-top-blue`.
- **Dividers**: `.divider`, `.divider--blue`, `.divider--grey`.

## 11. Example Component Reference: "BodyCopyImage" Section

This recipe from `test-components/index.astro` shows how two `BodyCopyImage` components are assembled to create a flexible content section. The `reverseLayout` prop is used to alternate the image position.

```astro
<div class="body-copy-image" id="bodycopyimagecontainer">
  <div class="wrap body-copy-image__container">

    <BodyCopyImage
      title="Understand corporate challenges and opportunities"
      description="With corporate strategies evolving..."
      buttonText="Find out more"
      buttonHref="/industry/corporates/"
      imageUrl="path/to/image1.jpg"
      imageAlt="Description of image 1."
      reverseLayout={true}
    />

    <BodyCopyImage
      title="Bespoke consulting service"
      description="We leverage contemporary component-based cost metrics..."
      buttonText="Find out more"
      buttonHref="/products/consulting/"
      imageUrl="path/to/image2.jpg"
      imageAlt="Description of image 2."
    />

  </div>
</div>
```
This example demonstrates the use of a BEM-style wrapper (`.body-copy-image__container`) and the composition of reusable Astro components, configured via props like `reverseLayout` to control layout variations.