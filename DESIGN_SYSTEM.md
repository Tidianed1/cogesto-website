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
  - **Usage**: The primary accent and highlight color. Used for secondary buttons, interactive element highlights, and underlines. **Note:** Use sparingly for large backgrounds; prefer Dark Blue.

### Background Colors
- **`.bg-white`**: `#fff`
  - **Usage**: Standard page and component background.
- **`.bg-primary-color` / `.bg-core-branding-rich-blue`**: `#010063`
  - **Usage**: For dark-themed sections and components (`CardQuote`, `StatsBlock`).
- **`.bg-secondary-color` / `.bg-core-branding-cobalt`**: `#0024ff`
  - **Usage**: For vibrant, attention-grabbing sections (`CardImageText`). Use with caution to avoid visual fatigue.
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

## 5. Component Inventory & Guidelines

### Image & Layout Guidelines
-   **✅ Strict Placeholder Fit**: Images must strictly fit their container's aspect ratio. Do not rely on CSS to "fix" a wrongly sized image if it breaks the component's shape.
-   **✅ Layout Integrity**: Changing an image should never break the overall component layout. Components must use `object-fit: cover` or proper container queries to handle various image sizes gracefully.
-   **✅ Professional Aesthetics**: When selecting components, prioritize a comprehensive and beautiful layout. Pages should look professional and homogeneous, especially for a consulting firm.

### Core Components

#### `BodyCopyImage.astro`
-   **Description**: A flexible two-column component for displaying text alongside an image.
-   **Props**: `title`, `description`, `imageUrl`, `imageAlt`, `reverseLayout` (boolean).
-   **Usage**: Ideal for detailing a specific service, explaining a company value, or introducing a team member. Use reversed layout to alternate rhythm.

#### `HeroMultiTemplate.astro`
-   **Description**: A flexible, data-driven hero component for interior pages.
-   **Props**: `title`, `subtitle`, `imageUrl`, `theme` ('cobalt' or 'white').
-   **Usage**: The standard hero for service pages, expertise deep-dives, and articles. Use 'cobalt' for high impact, 'white' for hub pages.

#### `StatsBlock.astro`
-   **Description**: A grid of statistics or key figures.
-   **Props**: `title`, `description`, `stats` (array of heading/text), `backgroundColorClass`.
-   **Usage**: Excellent for "Key Figures" or "Impact" sections. Use `bg-primary-color` (Dark Blue) for strong contrast.

#### `StatsSideSection.astro`
-   **Description**: A section with title/intro on the left and stats list on the right.
-   **Props**: `title`, `content`, `stats` (array of value/description).
-   **Usage**: Good for displaying team credentials or specific ROI metrics without a full grid.

#### `ProductListBlock.astro`
-   **Description**: A clean list of services or products with titles and descriptions.
-   **Props**: `title`, `products` (array of name/description/href).
-   **Usage**: The standard "Menu" for listing sub-services on an expertise page.

#### `WallLister.astro`
-   **Description**: An interactive grid of items that expand on click to reveal details.
-   **Props**: `title`, `description`, `items` (array of id/title/imageUrl/expandedText/button).
-   **Usage**: Perfect for Industry Hubs or detailing complex service portfolios visually.

#### `ServicesCarousel.astro`
-   **Description**: A carousel of service/product highlights with a sticky text introduction.
-   **Props**: `title`, `introText`, `slides` (array of title/description/image).
-   **Usage**: For "Case Studies", "Impact", or "Discover our solutions". Adds dynamic motion.

#### `ValuesTabs.astro`
-   **Description**: An interactive tabbed interface (Tabs on desktop, Dropdown on mobile).
-   **Props**: `summaryTitle`, `summaryDescription`, `tabs` (array of id/title/content/active).
-   **Usage**: Excellent for "Challenges vs Solutions", "Values", or "Process Steps".

#### `Accordion.astro`
-   **Description**: A vertically collapsing accordion.
-   **Props**: `title`, `description`, `items` (array of question/answer).
-   **Usage**: Best for "Methodology" steps, FAQs, or detailing complex processes cleanly.

#### `RelatedContent.astro`
-   **Description**: A grid of related content cards (news, opinions, articles).
-   **Props**: `title`, `items` (array of title/badge/date/image).
-   **Usage**: Used at the bottom of pages to show "Insights" or "More News".

#### `FullWidthCta.astro`
-   **Description**: A full-width call to action banner with a badge and link.
-   **Props**: `title`, `badgeText`, `linkText`, `linkHref`.
-   **Usage**: A strong inter-section breaker or final call to action.

#### `CardImageText.astro` (Final CTA)
-   **Description**: A section with an image on one side and text content on the other.
-   **Props**: `title`, `description`, `buttonText`, `buttonHref`, `imageUrl`, `backgroundColorClass`.
-   **Usage**: **Primary use:** As the final Call to Action (CTA) at the bottom of a page.
-   **Note**: Use `bg-primary-color`. Ensure image fits container (e.g., `moroccoan-style door_2.jpg`).

#### `BoxCards.astro`
-   **Description**: A grid of "boxed" cards with icons, titles, and descriptions.
-   **Props**: `title`, `description`, `cards` (array of iconUrl/title/text).
-   **Usage**: For "How we help" sections, highlighting pillars of service.

#### `QuestionsGrid.astro`
-   **Description**: A grid of questions with icons.
-   **Props**: `title`, `introText`, `questions` (array of iconUrl/text).
-   **Usage**: To highlight key client challenges or "Questions we answer".

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
