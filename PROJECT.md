# PROJECT.md - Cogesto Consulting Website Development Guide

## 📋 Table of Contents
1. [Quick Start](#quick-start)
2. [Project Structure](#project-structure)
3. [Core Principles & Workflow](#core-principles--workflow)
4. [Styling & Design System](#styling--design-system)
5. [Key Components](#key-components)
6. [Troubleshooting](#troubleshooting)

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- npm

### Setup
```bash
cd Cogesto_website
npm install
npm run dev
```

### Development Server
- **Start**: `npm run dev`
- **Port**: `http://localhost:4321` (Astro default)
- **Stop**: In the terminal, press `Ctrl+C`

---

## 📁 Project Structure

```
Cogesto_website/
├── src/
│   ├── components/           # Reusable Astro components (.astro)
│   ├── content/              # Data and text content for components (.ts)
│   ├── layouts/              # Core page layouts (BaseLayout.astro)
│   ├── pages/                # Site pages (defines routes)
│   ├── styles/               # Global CSS files
│   │   ├── styles.css        # Main stylesheet from reference site
│   │   └── components.css    # Additional component-specific styles
│   └── utils/                # Utility functions (e.g., Sanity client)
│
├── public/                   # Static assets (images, fonts, etc.)
│   ├── assets/
│   ├── img/
│   └── ...
│
└── PROJECT.md                # This file
```

---

## 🎯 Core Principles & Workflow

This project adheres to a strict **Component Development Protocol (CDP)** to ensure consistency and maintainability. All development must follow these rules.

### Core Principles
1.  **Single CSS Source of Truth**: All styling is derived from global stylesheets in `src/styles/`. Components **MUST NOT** contain their own `<style>` blocks.
2.  **Structure from Blueprint**: The HTML structure of any component must be an exact replica of its counterpart on the reference (Woodmac) website.
3.  **Data-Driven via Props**: Components are made dynamic and reusable through `Astro.props`. Hardcoded content is forbidden in reusable components.
4.  **Centralized Layout**: All pages **MUST** use `src/layouts/BaseLayout.astro` to ensure a consistent HTML shell, stylesheet loading, and global script execution.
5.  **Centralized Interactivity**: All client-side JavaScript is managed globally from within `BaseLayout.astro`. Components should not contain their own `<script>` tags.

### Development Workflow
1.  **Blueprint**: Analyze the target component on the reference website. Note its HTML structure, class names, and responsive behavior.
2.  **Scaffold**: Create a new `.astro` file in `src/components/`. Define its `Props` interface based on the dynamic content needed.
3.  **Implement**: Build the HTML structure, replacing static content with `Astro.props`. Use the "Manual Reorder" pattern (ternary operators in Astro) for responsive layout changes, as seen in `BodyCopyImage.astro`.
4.  **Validate**: Add the new component to a test page (e.g., `src/pages/test-components/`) to validate its appearance and behavior in isolation.

For the complete, detailed protocol, refer to **`COMPONENT_DEVELOPMENT_PROTOCOL.md`**.

---

## 🎨 Styling & Design System

### Overview
The design philosophy is a hybrid approach, combining a **BEM-like naming convention** for component structures (e.g., `.body-copy-image__container`) with a set of **global utility classes** for layout and typography, similar to a framework like Foundation CSS. The system is built on a custom global CSS framework, **not** a utility-first library like Tailwind.

### CSS Files
- **`src/styles/styles.css`**: The primary stylesheet, containing the vast majority of layout, typography, and component styles derived from the reference website.
- **`src/styles/components.css`**: Contains additional styles for newer components that were not present in the original reference stylesheet.
- **`public/styles/header-transparency.css`**: A small, special-purpose stylesheet for handling the transparent-to-solid effect of the main header on the video hero page.

### Key Design System Concepts
- **Color Palette**: Colors are applied via semantic class names (e.g., `.primary-color`, `.bg-light-grey-1`). Refer to `DESIGN_SYSTEM.md` for the full palette.
- **Typography**: The primary font is **Manrope**. A responsive typographic scale is available through global classes (e.g., `.h100`, `.body100`).
- **Grid System**: The project uses a responsive, 12-column, float-based grid (`.row`, `.col`, `.small-12`, `.medium-6`, etc.).
- **No Scoped Styles**: Components inherit all their styles from these global files. This is a strict rule.

For a complete guide to colors, typography, spacing, and available utility classes, refer to **`DESIGN_SYSTEM.md`**.

---

## 🧩 Key Components

### `BaseLayout.astro`
- **Location**: `src/layouts/BaseLayout.astro`
- **Purpose**: The foundational layout for every page. It provides the `<html>` and `<body>` shell, loads all global stylesheets, and contains the centralized JavaScript for interactivity (like the navigation).
- **Critical**: Every new page must be wrapped in this layout.

### `NewHeader.astro`
- **Location**: `src/components/NewHeader.astro`
- **Purpose**: Renders the main site navigation.
- **Props**: 
    - `theme?: 'transparent' | 'cobalt'`: Determines the header's appearance. Use `'transparent'` for hero sections.
- **Notes**: The navigation links are currently hardcoded. A future refactor will make this component fully data-driven.

### `NewFooter.astro`
- **Location**: `src/components/NewFooter.astro`
- **Purpose**: Renders the main site footer.
- **Props**: This component is fully data-driven. It accepts all its content via props, typically sourced from `src/content/fr.ts`.
- **Notes**: A good example of a component that adheres to the CDP.

For a complete list of all components and their status, refer to **`COMPONENTS_INVENTORY.md`**.

---

## 🔧 Troubleshooting

### Navigation Not Working
- **Is the page using `BaseLayout.astro`?** The global navigation script is loaded there.
- **Is the header wrapped in `<header id="menu-header">`?** The script targets this ID.
- **Check the Browser Console for JavaScript errors.**

### Styles Look Incorrect
- **Is the page using `BaseLayout.astro`?** The layout loads all necessary stylesheets.
- **Are you using the correct class names?** Verify class names against the `DESIGN_SYSTEM.md` and the components in `src/components/`.
- **Check for conflicting styles** using browser DevTools. The issue may be a global style that needs a more specific override.

---

## 🔄 Recent Changes (As of 2025-11-22)

- **Transparent Header Implementation**:
  - `NewHeader.astro` now accepts a `theme` prop to handle a transparent state.
  - The scroll and hover effects for the transparent header are now globally managed in `BaseLayout.astro`.
  - The old, temporary `TransparentHeader.astro` component has been deleted.

- **Documentation Overhaul**:
  - This `PROJECT.md` file has been significantly updated to be an accurate, high-level guide to the project.
  - `ONBOARDING_AND_PROCESS.md` was merged into `COMPONENT_DEVELOPMENT_PROTOCOL.md` to create a single source of truth for development standards. The old onboarding file was deleted.
  - `COMPONENTS_INVENTORY.md` has been updated to reflect the latest component changes.

**Status**: Active Development
**Maintainer**: Gemini Agent & Development Team