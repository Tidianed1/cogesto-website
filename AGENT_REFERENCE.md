# Agent Reference: Homepage Development Files Map

**Purpose**: This document maps all active files used in the homepage (`/new_index`) development to help agents understand the codebase structure and continue development efficiently.

**Last Updated**: Based on current active development state

---

## 📄 **Entry Point: Main Page**

### `src/pages/new_index.astro`
**Purpose**: Main homepage entry point  
**Route**: `/new_index`  
**Status**: ✅ Active development

**What it does**:
- Imports and assembles all homepage components
- Links CSS files (screen.css, print.css, inline.css)
- Loads Google Fonts (Manrope)
- Contains temporary section mapping overlays for visual debugging
- Wraps components in semantic structure (header, main, footer)

**Key Dependencies**:
```astro
import NewHeader from '../components/NewHeader.astro';
import HeroSection from '../components/HeroSection.astro';
import MainContent from '../components/MainContent.astro';
import NewFooter from '../components/NewFooter.astro';
```

**CSS Files Linked**:
- `/styles/screen.css` - Main stylesheet
- `/styles/print.css` - Print media styles
- `/styles/inline.css` - Custom homepage styles

---

## 🧩 **Component Files (Active)**

### Header & Navigation

#### `src/components/NewHeader.astro`
**Purpose**: Site header with navigation, mega-menus, search, and sign-in  
**Status**: ✅ Active - Working on desktop/mobile separation

**Contains**:
- Desktop utility bar (Contact, Registration, Sign in)
- Logo
- Primary navigation (About Us, Industries & Services, Market Insights, Events, Online Reports, Lens Platform)
- Desktop mega-menu divs (3-column grid layouts) - **Positioned as siblings of `<nav>`, not nested**
- Mobile hamburger menu with accordion-style dropdowns
- Search modal trigger
- Post-header overlays (`#accounts`, `#fake-bg`, `#search-modal`)

**Important Notes**:
- Desktop mega-menus are **direct siblings** of `<nav>` element, not children
- Mobile menus use `just-mobile` class, desktop use `just-desktop`
- Navigation is **sticky/fixed** on scroll (handled in `inline.css`)

---

### Hero Section

#### `src/components/HeroSection.astro`
**Purpose**: Full-screen hero section with 3D helix animation  
**Status**: ✅ Active - Uses React Three.js component

**Contains**:
- React component: `HelixHero` from `./ui/helix-hero.tsx`
- Hero title: "Intelligence connected"
- Hero introduction text
- CTA button: "Discover our products" (positioned below description)
- 3D animated helix rings background

**Dependencies**:
- React integration (`@astrojs/react`)
- Three.js (`three`, `@react-three/fiber`)
- Post-processing (`@react-three/postprocessing`, `postprocessing`)
- Progressive blur (`react-progressive-blur`)

**Styling**:
- Full viewport height (`min-height: 100vh`)
- 3D helix animation with bloom effects
- White text with drop shadows
- Text positioned bottom-left
- Green CTA button matching design system

**React Component**: Uses `client:load` directive for client-side rendering

---

### Main Content Sections

#### `src/components/MainContent.astro`
**Purpose**: Container for all main homepage content sections  
**Status**: ✅ Active

**Contains** (in order):
1. **Box Cards** (`#promopanel`) - 3 feature cards:
   - "Think beyond the silos"
   - "Uncover deep relationships"
   - "See with absolute clarity"

2. **Message Block** (`#HomePageMessageBlock`):
   - "The future of energy data and insights"
   - Large "Synoptic" title (12rem on desktop)
   - "Find out more" link

3. **Energy Transition Section** (`#bodycopyimage`):
   - 2-column layout (text left, image right)
   - White background, dark text
   - Green CTA button

4. **Outcomes Block** (`#HomePageOutcomesBlock`):
   - Imported from `OutcomesBlock.astro` component
   - Desktop: Tabbed 2-column interface
   - Mobile: Separate mobile outcomes block (hidden on desktop via CSS)

5. **Book/Connected Section** (`#bodycopyimage-book`):
   - 2-column layout matching Energy Transition
   - White background, dark text

6. **News Grid** (`#latest-thinking`):
   - Grid of news cards using `NewsCard.astro`
   - Responsive: 1 → 2 → 3 columns
   - Placeholder data structure ready for Sanity CMS

**Key Imports**:
```astro
import OutcomesBlock from './OutcomesBlock.astro';
import NewsCard from './NewsCard.astro';
```

**Data Structure** (placeholder):
```javascript
const newsArticles = [
  { category, date, readTime, title, href, imageUrl },
  // ...
];
```

---

### Specialized Components

#### `src/components/ui/helix-hero.tsx`
**Purpose**: 3D animated helix hero component (React/Three.js)  
**Status**: ✅ Active - New component

**Technology**:
- React component with Three.js
- Uses `@react-three/fiber` for 3D rendering
- Post-processing effects (Bloom)
- Progressive blur effects

**Props**:
```typescript
interface HeroProps {
  title: string;
  description: string;
}
```

**Features**:
- Rotating helix rings animation
- Bloom/post-processing effects
- Progressive blur gradients (top/bottom)
- White text with drop shadows
- Fully responsive

**Usage**:
```astro
<HelixHero 
  client:load
  title="Intelligence connected"
  description="Energy data and analytics solutions..."
/>
```

**Note**: Requires React integration in Astro config. Uses `client:load` directive.

---

#### `src/components/OutcomesBlock.astro`
**Purpose**: Sophisticated tabbed outcomes block (desktop only)  
**Status**: ✅ Active - Well-implemented component

**Features**:
- 3 tabs: "Trusted data", "Market experts", "Proprietary methodology"
- 2-column grid per tab (text/links left, image right)
- White background, dark text
- Tab switching via JavaScript
- Uses Shadcn UI Tabs component principles

**Tab Data Structure**:
```javascript
const tabs = [
  {
    id: 'trusted-data',
    label: 'Trusted data',
    preTitle, title, description,
    links: [{ text, href }],
    imageSrc
  },
  // ...
];
```

**Styling**: Self-contained with `<style>` block

---

#### `src/components/NewsCard.astro`
**Purpose**: Reusable news article card component  
**Status**: ✅ Active

**Props**:
```typescript
interface Props {
  category: string;
  date: string;
  readTime: string;
  title: string;
  href: string;
  imageUrl?: string;
}
```

**Usage**: Rendered in a grid via `.map()` in `MainContent.astro`

---

### Footer

#### `src/components/NewFooter.astro`
**Purpose**: Site footer with links, social media, and newsletter signup  
**Status**: ✅ Active - Cleaned of privacy preference center

**Contains**:
- Newsletter signup section
- 3-column link sections (DISCOVER, RESOURCES, ABOUT WOODMAC)
- Mobile accordion navigation
- Footer bottom: Terms, Privacy, Policies, Cookie policy
- Social media icons (X, LinkedIn, Bluesky, Youtube)

**Important**: 
- Footer ends cleanly at `</footer>` tag
- All privacy preference center content removed
- No scripts or external dependencies

---

## 🎨 **Style Files**

### `public/styles/screen.css`
**Purpose**: Main screen stylesheet (copied from target website)  
**Status**: ✅ Active

**Content**:
- All base styles from target website
- Navigation styles (`.nav-primary`, `.nav-secondary`, `.mega-menu`)
- Grid and flexbox utilities
- Responsive breakpoints
- Asset paths rewritten to `/assets/...`

**Key Styles**:
- `.just-mobile` / `.just-desktop` - Responsive visibility utilities
- `.nav-secondary.is-open` - Dropdown visibility
- Desktop/mobile navigation separation

---

### `public/styles/inline.css`
**Purpose**: Custom styles for homepage sections  
**Status**: ✅ Active - Continuously updated

**Contains**:

1. **Fixed/Sticky Navigation**:
   ```css
   #menu-header {
     position: sticky !important;
     top: 0 !important;
     z-index: 1000 !important;
   }
   ```

2. **Hero Section**:
   - Full viewport height (`min-height: 100vh`)
   - Background image with blue overlay gradient
   - Responsive typography
   - Text positioning

3. **Message Block (Prompt 2)**:
   - Massive "Synoptic" typography (12rem on desktop)
   - Blue background (`#0024ff`)

4. **Energy & Book Sections (Prompt 3)**:
   - White background (`#ffffff`)
   - Dark text (`#010063`)
   - Green CTA buttons (`#90ee90`)

5. **Outcomes Block (Prompt 4)**:
   - White background override
   - Text color overrides

6. **News Grid (Prompt 5)**:
   - Responsive CSS Grid layout

7. **Mobile Outcomes Block**:
   - Hidden on desktop (`display: none !important` at `min-width: 62.5em`)

---

### `public/styles/print.css`
**Purpose**: Print media stylesheet  
**Status**: ✅ Active (copied from target, paths rewritten)

---

### `src/styles/global.css`
**Purpose**: Global Tailwind CSS and Shadcn UI variables  
**Status**: ✅ Active

**Content**:
- CSS variables for colors, spacing, etc.
- Tailwind base styles
- Shadcn UI theming

---

## 📦 **Asset Directory**

### `public/assets/`
**Purpose**: Static assets (images, icons, fonts)  
**Status**: ✅ Active - 144+ assets downloaded

**Key Assets**:
- `pexels-david-alberto-carmona-coto-434794-1151418.jpg` - Hero background
- `icon-arrow--cobalt.svg` - Arrow icon used in navigation/links
- `navigation-bar.png` - Navigation promo image
- Various section images (trusted-data-1.jpg, expert-advice-1.jpg, etc.)
- Book cover image (`jason-book---hard-back-2.png`)
- Energy transition image (`eto_keyvisual_final-four.png`)

**Path Convention**: All assets referenced as `/assets/filename.ext`

---

## ⚙️ **Configuration Files**

### `tsconfig.json`
**Purpose**: TypeScript configuration with path aliases  
**Status**: ✅ Active

**Key Settings**:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

**Aliases Available**:
- `@/components` → `src/components`
- `@/lib` → `src/lib`
- `@/styles` → `src/styles`

---

### `components.json`
**Purpose**: Shadcn UI configuration  
**Status**: ✅ Active

**Settings**:
- Style: `new-york`
- CSS: `src/styles/global.css`
- Tailwind config: `tailwind.config.mjs`
- Path aliases configured

---

## 📚 **Reference Files**

### `src/temp/target_index_rendered.html`
**Purpose**: Rendered HTML from target website (DevTools copy)  
**Status**: 📖 Reference only - Do not edit

**Content**: Complete rendered HTML structure from Wood Mackenzie website  
**Usage**: Reference for component extraction and structure mapping

**Structure Boundaries**:
- Line ~626: Header start
- Line ~2287: Main/Hero start
- Line ~2753: Footer start

---

## 🔄 **Data Flow & Component Hierarchy**

```
new_index.astro (Page Entry)
├── NewHeader.astro
│   ├── Desktop mega-menus (siblings of <nav>)
│   ├── Mobile menus (nested in <nav>)
│   └── Post-header overlays
│
├── HeroSection.astro
│   └── Background image, title, intro, CTA
│
├── MainContent.astro
│   ├── Box Cards (3 cards)
│   ├── Message Block (Synoptic)
│   ├── Energy Transition Section
│   ├── OutcomesBlock.astro (imported)
│   │   └── Tabbed interface with 3 tabs
│   ├── Mobile Outcomes (hidden on desktop)
│   ├── Book/Connected Section
│   └── News Grid
│       └── NewsCard.astro (mapped over array)
│
└── NewFooter.astro
    ├── Newsletter signup
    ├── 3-column links (desktop)
    ├── Accordion navigation (mobile)
    └── Social links
```

---

## 🎯 **Development Status**

### ✅ Completed Sections:
1. Header/Navigation - Fully functional, desktop/mobile separated
2. Hero Section - Full viewport, image background, proper styling
3. Box Cards - 3 feature cards
4. Message Block - Massive typography, blue background
5. Energy Transition Section - White background, 2-column layout
6. Outcomes Block - Tabbed interface (desktop), mobile hidden
7. Book/Connected Section - Matching Energy Transition
8. News Grid - Responsive grid with NewsCard component
9. Footer - Cleaned, no privacy preference center

### 🚧 TODO / Next Steps:
1. Connect to Sanity CMS (replace placeholder data)
2. Add actual news article images
3. Replace placeholder hero title with Cogesto content
4. Remove temporary section markers when ready
5. Add animations (as mentioned, separate from target site)

---

## 📝 **Important Notes for Agents**

1. **Mobile vs Desktop Separation**:
   - Use `.just-mobile` and `.just-desktop` classes
   - Desktop mega-menus are **siblings** of `<nav>`, not nested
   - Mobile outcomes block is hidden on desktop via CSS

2. **CSS Priority**:
   - `screen.css` - Base styles from target
   - `inline.css` - Custom overrides for homepage
   - `global.css` - Tailwind/Shadcn variables

3. **Component Naming**:
   - `NewHeader.astro` / `NewFooter.astro` - New styled components
   - `OutcomesBlock.astro` / `NewsCard.astro` - Specialized components
   - Old components (e.g., `Header.astro`, `Footer.astro`) are **NOT used** in new_index

4. **Path Aliases**:
   - Use `@/components/...` for imports when appropriate
   - Assets use `/assets/...` (root-relative)

5. **Section Markers** (Temporary):
   - Red dashed borders with section names
   - Remove when ready for production

6. **Sanity CMS Integration** (Future):
   - News articles structure is ready in `MainContent.astro`
   - Replace placeholder `newsArticles` array with Sanity data
   - Props can be added to components for dynamic content

---

## 🗂️ **File Locations Summary**

```
Cogesto_website/
├── src/
│   ├── pages/
│   │   └── new_index.astro          ← ENTRY POINT
│   ├── components/
│   │   ├── NewHeader.astro           ← Header/Nav
│   │   ├── HeroSection.astro         ← Hero
│   │   ├── MainContent.astro        ← Main sections
│   │   ├── OutcomesBlock.astro       ← Tabbed outcomes
│   │   ├── NewsCard.astro            ← News card
│   │   ├── NewFooter.astro           ← Footer
│   │   └── ui/
│   │       └── tabs.tsx              ← Shadcn tabs (if needed)
│   ├── styles/
│   │   └── global.css                ← Tailwind/Shadcn
│   └── temp/
│       └── target_index_rendered.html ← REFERENCE ONLY
│
├── public/
│   ├── styles/
│   │   ├── screen.css                ← Main stylesheet
│   │   ├── print.css                 ← Print styles
│   │   └── inline.css                ← Custom homepage styles
│   └── assets/                       ← All images/icons (144+ files)
│
├── tsconfig.json                     ← TypeScript config
└── components.json                   ← Shadcn config
```

---

## 🚨 **Common Issues & Solutions**

1. **Mobile outcomes showing on desktop**: Check `inline.css` has media query hiding `.homepage-outcomes-block-mobile__container`

2. **Desktop mega-menu not showing**: Verify menus are siblings of `<nav>`, not nested in `<li>`

3. **Styles not applying**: Check CSS file links in `new_index.astro` head section

4. **Assets not loading**: Ensure paths use `/assets/...` format (root-relative)

5. **Navigation not sticky**: Check `inline.css` has `#menu-header { position: sticky }`

---

**End of Reference Document**

