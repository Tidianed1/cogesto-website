# PROJECT.md - Cogesto Consulting Website Development Guide

## 📋 Table of Contents
1. [Quick Start](#quick-start)
2. [Project Structure](#project-structure)
3. [Reference Files & How to Use Them](#reference-files--how-to-use-them)
4. [Working with Components](#working-with-components)
5. [Navigation System](#navigation-system)
6. [Styling & CSS](#styling--css)
7. [Page Creation Workflow](#page-creation-workflow)
8. [Troubleshooting](#troubleshooting)

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- npm or yarn
- Git

### Setup
```bash
cd Cogesto_website
npm install
npm run dev
```

### Development Server
- **Start**: `npm run dev`
- **Port**: Usually `http://localhost:4321` (Astro default)
- **Stop**: `Ctrl+C` or `pkill -f "astro dev"`

---

## 📁 Project Structure

```
Cogesto_website/
├── src/
│   ├── components/           # Reusable Astro components
│   │   ├── NewHeader.astro   # Main navigation header (matches header_complete.html)
│   │   ├── NewFooter.astro   # Site footer
│   │   ├── HeroSection.astro # Homepage hero component
│   │   ├── SubNavigation.astro # About pages sub-navigation
│   │   └── ...               # Other page-specific components
│   │
│   ├── pages/                # Astro pages (routing)
│   │   ├── index.astro       # Homepage (/)
│   │   ├── about/            # About pages (/about/*)
│   │   │   ├── overview.astro
│   │   │   ├── our-story.astro
│   │   │   └── ...
│   │   └── expertises/       # Expertise pages (/expertises/*)
│   │
│   ├── styles/               # Global styles
│   │   └── global.css        # Tailwind imports
│   │
│   ├── temp/                 # Reference HTML files from target website
│   │   ├── header_complete.html    # ⭐ PRIMARY HEADER REFERENCE
│   │   ├── sypplychainpages.html   # ⭐ PRIMARY PAGE STRUCTURE REFERENCE
│   │   ├── desktop_menu_exact.html # Desktop mega-menu structure
│   │   └── target_index.html       # Homepage structure reference
│   │
│   ├── content/              # Content files (translations, data)
│   │   └── fr.js            # French content
│   │
│   └── layouts/             # Page layouts (if any)
│
├── public/                  # Static assets (served as-is)
│   ├── js/
│   │   └── navigation.js    # ⭐ SHARED NAVIGATION SCRIPT (all pages use this)
│   ├── styles/
│   │   ├── screen.css       # Main stylesheet (from target website)
│   │   ├── inline.css       # Custom CSS overrides & fixes
│   │   ├── print.css        # Print media styles
│   │   └── versioned/       # ⭐ PRIMARY CSS REFERENCE FILES - DO NOT EDIT
│   │       ├── ?v=YfCRKR7N-ctmfG5btvdeUf1_h_ilfO7hBjW1IbqVNUg1 # Screen CSS (754KB, 27,973 lines)
│   │       └── ?v=vYR7kuamBcOnNX6rtnCC_-JxhnsAiNV0oRlFrulRqGE # Print CSS (95KB, 4,186 lines)
│   │
│   └── assets/              # Images, icons, etc.
│
└── Root directory/
    ├── navglobal.md         # Navigation HTML structure reference
    ├── Navref.md            # Navigation item example
    └── PROJECT.md           # This file
```

---

## 📚 Reference Files & How to Use Them

### ⭐ PRIMARY REFERENCES (Use These First)

#### 1. `src/temp/header_complete.html` ⭐ **PRIMARY HEADER REFERENCE**
- **Purpose**: Exact HTML structure for the navigation header
- **Use When**: 
  - Building or fixing `NewHeader.astro`
  - Verifying navigation HTML structure
  - Understanding how desktop mega-menus are positioned
- **Structure**: 
  - Starts with utility bar (no `<header>` wrapper)
  - Contains banner with navigation
  - Desktop mega-menus follow banner (siblings)
  - Ends with last desktop mega-menu
- **Key Points**:
  - NO `<header id="menu-header">` wrapper in this file
  - Pages wrap `<NewHeader />` in `<header id="menu-header">` when using it
  - Desktop mega-menus are siblings of `.new-mega-menu.banner`, NOT nested inside

#### 2. `src/temp/sypplychainpages.html` ⭐ **PRIMARY PAGE STRUCTURE REFERENCE**
- **Purpose**: Complete page structure showing how header is used in pages
- **Use When**:
  - Creating new pages
  - Understanding page structure
  - Verifying how header is wrapped
- **Key Structure**:
  ```html
  <header id="menu-header">
      <!-- Utility bar -->
      <!-- Banner with navigation -->
      <!-- Desktop mega-menus (inside header) -->
  </header>
  <!-- Post-header overlays (accounts, fake-bg, search-modal) are outside header -->
  ```
- **Line References**:
  - Line 670: `<header id="menu-header">` starts
  - Line 1186: Desktop mega-menus start (inside header)
  - Line 2247: `</header>` closes
  - Line 2249: `#accounts` starts (outside header)

#### 3. CSS Reference Files ⭐ **PRIMARY CSS SOURCE**

**`public/styles/versioned?v=YfCRKR7N-ctmfG5btvdeUf1_h_ilfO7hBjW1IbqVNUg1`** ⭐ **SCREEN CSS REFERENCE**
- **Purpose**: Actual compiled screen CSS from target website (754KB, 27,973 lines)
- **Use When**:
  - Looking for CSS classes
  - Verifying class names exist
  - Understanding CSS patterns
  - Finding styles for navigation, components, layouts
- **How to Search**:
  ```bash
  grep -n "nav-primary" public/styles/versioned\?v=YfCRKR7N-ctmfG5btvdeUf1_h_ilfO7hBjW1IbqVNUg1
  ```
- **Critical**: 
  - ⚠️ **DO NOT EDIT** - Reference file only
  - ⚠️ **DO NOT IMPORT** - Not a stylesheet
  - Always verify classes exist here before using them
  - **THIS IS THE ONLY SOURCE** for CSS class definitions

**`public/styles/versioned?v=vYR7kuamBcOnNX6rtnCC_-JxhnsAiNV0oRlFrulRqGE`** ⭐ **PRINT CSS REFERENCE**
- **Purpose**: Actual compiled print CSS from target website (95KB, 4,186 lines)
- **Use When**:
  - Looking for print-specific styles
  - Understanding print media queries
  - Verifying print class names
- **Critical**: 
  - ⚠️ **DO NOT EDIT** - Reference file only
  - ⚠️ **DO NOT IMPORT** - Not a stylesheet

**Important**: These are the **ONLY** CSS reference files. All CSS classes MUST exist in these files before using them.

### Secondary References

#### `navglobal.md` (Root directory)
- **Purpose**: Complete navigation HTML structure documentation
- **Use When**: Understanding navigation structure conceptually
- **Note**: Use `header_complete.html` for actual implementation

#### `Navref.md` (Root directory)
- **Purpose**: Single navigation item example
- **Use When**: Understanding navigation item structure

#### `src/temp/desktop_menu_exact.html`
- **Purpose**: Desktop mega-menu structure reference
- **Use When**: Building desktop mega-menus

#### `src/temp/target_index.html`
- **Purpose**: Homepage structure reference
- **Use When**: Building homepage components

---

## 🧩 Working with Components

### Component Pattern

All components are Astro components (`.astro` files) in `src/components/`.

#### Example: Using NewHeader Component

```astro
---
import NewHeader from '../components/NewHeader.astro';
---

<header id="menu-header">
    <NewHeader />
</header>
```

**Critical**: Always wrap `<NewHeader />` in `<header id="menu-header">` when using in pages.

### Main Components

#### `NewHeader.astro`
- **Purpose**: Site navigation header
- **Structure**: Matches `header_complete.html` exactly
- **Contains**:
  - Desktop utility bar
  - Mobile utility bar (inside nav)
  - Main navigation with desktop/mobile buttons
  - Desktop mega-menus (6 total)
  - Mobile dropdowns
  - Hamburger button
  - Search button
  - Post-header overlays (accounts, fake-bg, search-modal)
- **Usage**: Import and wrap in `<header id="menu-header">`

#### `SubNavigation.astro`
- **Purpose**: Sub-navigation for About pages
- **Props**: `items` array with `{ text, href, isActive }`
- **Usage**: Used on About pages below hero section

#### `NewFooter.astro`
- **Purpose**: Site footer
- **Usage**: Import and use at bottom of pages

### Component Best Practices

1. **Match Reference Files**: Components should match reference HTML exactly
2. **No Custom Classes**: Use only classes from reference CSS files
3. **Mobile & Desktop**: Always provide both mobile and desktop versions
4. **Accessibility**: Include proper ARIA attributes from references

---

## 🧭 Navigation System

### Architecture

The navigation system is based on Wood Mackenzie's reference website structure:

```
<header id="menu-header">
    <!-- Desktop utility bar -->
    <div class="nav-utility nav-utility--desktop">...</div>
    
    <!-- Main navigation container -->
    <div class="new-mega-menu banner sticky-desktop cobalt-theme">
        <!-- Logo, nav, hamburger, search -->
    </div>
    
    <!-- Desktop mega-menus (inside header) -->
    <div id="menuitem_802633-desktop" class="nav-secondary js-navigation__secondary">
        <!-- Desktop mega-menu content -->
    </div>
    <!-- ... more desktop mega-menus ... -->
</header>

<!-- Post-header overlays (outside header) -->
<div id="accounts" class="nav-accounts">...</div>
<div id="fake-bg" class="nav-primary__fake-bg">...</div>
<div id="search-modal" class="search-overlay">...</div>
```

### Key Files

#### `src/components/NewHeader.astro`
- **Purpose**: Main navigation component
- **Reference**: `src/temp/header_complete.html`
- **Structure**: Utility bar → Banner → Desktop mega-menus → Post-header overlays

#### `public/js/navigation.js`
- **Purpose**: Shared navigation JavaScript (ALL pages use this)
- **Features**:
  - Hamburger menu toggle (mobile)
  - Desktop mega-menu hover/click
  - Mobile submenu accordion
  - Search modal toggle
  - Account dropdown toggle
  - Outside click handlers
- **Usage**: Include on all pages:
  ```astro
  <script src="/js/navigation.js"></script>
  ```

### Navigation Classes Reference

#### Visibility Classes
- `.just-mobile`: Visible on mobile only (`max-width: 62.49875em`)
- `.just-desktop`: Visible on desktop only (`min-width: 62.5em`)
- `.desktop-nav`: Desktop navigation button (hidden on mobile)
- `.mobile-nav`: Mobile navigation button (hidden on desktop)

#### State Classes
- `.active`: Added to `.nav-primary__item` when mobile submenu is open
- `.is--active`: Added to `.nav-secondary` when desktop mega-menu is open
- `.is-open`: Alternative state class for open menus
- `.on--navigation`: Added to `<body>` when hamburger menu is open (mobile)

#### Structure Classes
- `.nav-primary`: Main navigation container
- `.nav-primary__item`: Navigation item container
- `.nav-primary__link`: Navigation link/button
- `.nav-secondary`: Mega-menu dropdown container
- `.js-navigation__item`: JavaScript hook for navigation items
- `.js-navigation__secondary`: JavaScript hook for mega-menus
- `.js-toggle-local`: Mobile toggle button
- `.js-toggle__header-group`: Header group toggle (hamburger, search)

### Breakpoints

- **Mobile**: `max-width: 62.49875em` (999.99px)
- **Desktop**: `min-width: 62.5em` (1000px)

### Navigation JavaScript Flow

1. **Page Load**: `navigation.js` initializes
   - Hides all dropdowns
   - Sets initial states
   - Attaches event listeners

2. **Mobile Hamburger Click**:
   - Toggles `.on--navigation` on `<body>`
   - CSS shows/hides `.nav-primary`

3. **Mobile Submenu Click**:
   - Adds `.active` to parent `.nav-primary__item`
   - CSS selector `.nav-primary__item.active > .nav-secondary` shows menu

4. **Desktop Mega-Menu Hover/Click**:
   - Adds `.is--active` to `.nav-secondary`
   - CSS shows mega-menu with absolute positioning

---

## 🎨 Styling & CSS

### CSS File Organization

#### Files You Edit

1. **`public/styles/inline.css`**
   - Custom CSS overrides ONLY
   - Fixes for navigation
   - Component-specific styles
   - **This is where you add custom CSS**
   - **IMPORTANT**: Verify classes exist in versioned CSS files before using

2. **`src/styles/global.css`**
   - Tailwind CSS imports
   - Global plugins
   - **Minimal edits - mainly Tailwind config**
   - Do not touch unless causing direct conflicts

#### Files You Reference (DO NOT EDIT)

1. **`public/styles/screen.css`**
   - Main stylesheet from target website
   - **Direct copy** of `src/styles/versioned?v=YfCRKR7N-ctmfG5btvdeUf1_h_ilfO7hBjW1IbqVNUg1`
   - **DO NOT EDIT** - Should match versioned file exactly

2. **`public/styles/print.css`**
   - Print media stylesheet
   - **Direct copy** of `src/styles/versioned?v=vYR7kuamBcOnNX6rtnCC_-JxhnsAiNV0oRlFrulRqGE`
   - **DO NOT EDIT** - Should match versioned file exactly

3. **`src/styles/versioned?v=YfCRKR7N-ctmfG5btvdeUf1_h_ilfO7hBjW1IbqVNUg1`** ⭐ **PRIMARY CSS SOURCE OF TRUTH**
   - Screen CSS reference (754KB, 27,973 lines)
   - **DO NOT EDIT** - Search for classes here
   - **THIS IS THE ONLY SOURCE** for CSS class definitions
   - **Source of truth** - All CSS classes must exist in this file

4. **`src/styles/versioned?v=vYR7kuamBcOnNX6rtnCC_-JxhnsAiNV0oRlFrulRqGE`** ⭐ **PRINT CSS SOURCE OF TRUTH**
   - Print CSS reference (95KB, 4,186 lines)
   - **DO NOT EDIT** - Search for print styles here
   - **Source of truth** for print media styles

### CSS Workflow

1. **Before Using a Class**:
   - Search for it in `src/styles/versioned?v=YfCRKR7N-ctmfG5btvdeUf1_h_ilfO7hBjW1IbqVNUg1` (screen CSS)
   - For print styles, search in `src/styles/versioned?v=vYR7kuamBcOnNX6rtnCC_-JxhnsAiNV0oRlFrulRqGE`
   - Verify it exists and understand its purpose
   - Check if it needs specific parent/context
   - **Never use a class that doesn't exist in these files**

2. **Adding Custom CSS**:
   - Add to `public/styles/inline.css` ONLY
   - Use `!important` only when necessary (overriding reference CSS)
   - Document why you're overriding with clear comments
   - Verify the base class exists in versioned CSS before overriding

3. **CSS File Roles**:
   - **Versioned files** (`src/styles/versioned?v=...`): Source of truth - READ ONLY
   - **screen.css** and **print.css**: Direct copies of versioned files - should match exactly
   - **inline.css**: Custom overrides only - loaded last

4. **CSS Patterns from Reference**:
   ```css
   /* Copy patterns from versioned files */
   /* Example: Desktop mega-menu positioning */
   @media (min-width: 62.5em) {
       .nav-secondary.js-navigation__secondary {
           position: absolute !important;
           width: 100vw !important;
           top: 4.875rem !important; /* 78px - header height */
           left: 50% !important;
           transform: translateX(-50%) !important;
           z-index: 99999 !important;
       }
   }
   ```

### Z-Index Hierarchy

- **Header**: `99998`
- **Mega-menus**: `99999`
- **Mobile nav**: `99999`
- **Sub-nav**: `99997`

---

## 📄 Page Creation Workflow

### Standard Page Structure

```astro
---
import NewHeader from '../components/NewHeader.astro';
import NewFooter from '../components/NewFooter.astro';
// Import other components as needed
---

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Page Title - Cogesto Consulting</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Manrope:300,400,500,600,700,800&amp;display=swap">
    <link rel="stylesheet" href="/styles/screen.css" media="screen">
    <link rel="stylesheet" href="/styles/print.css" media="print">
    <link rel="stylesheet" href="/styles/inline.css">
</head>
<body id="top-of-page" class="show-cart-toggle" data-cookiepro-enabled="true">

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5XN52HZ"
              height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<div class="skip">
    <a class="btn btn-skip" tabindex="0" href="#content">Skip to main content</a>
</div>

<!-- CRITICAL: Wrap NewHeader in header tag -->
<header id="menu-header">
    <NewHeader />
</header>

<main class="content start" id="content">
    <!-- Page content here -->
</main>

<footer>
    <NewFooter />
</footer>

<!-- CRITICAL: Use shared navigation script -->
<script src="/js/navigation.js"></script>

</body>
</html>
```

### Page Creation Checklist

- [ ] Import `NewHeader` and `NewFooter`
- [ ] Wrap `<NewHeader />` in `<header id="menu-header">`
- [ ] Include all CSS files (screen.css, print.css, inline.css)
- [ ] Include Google Fonts (Manrope)
- [ ] Add skip link
- [ ] Add Google Tag Manager noscript
- [ ] Include `<script src="/js/navigation.js"></script>` before `</body>`
- [ ] Use semantic HTML (`<main>`, `<section>`, etc.)
- [ ] Add proper page wrapper classes

### Page-Specific Components

#### About Pages
- Use `SubNavigation` component below hero
- Import from `../../components/SubNavigation.astro`
- Pass `items` prop with navigation items

#### Expertise Pages
- Use `PageNavigation` for sticky sub-navigation
- Use `HeroMultiTemplate` for hero sections
- Use `SectionIntro`, `NarrowBodyCopy`, etc. for content sections

---

## 🔧 Troubleshooting

### Navigation Not Working

#### Issue: Desktop navigation buttons look like mobile buttons
**Solution**: 
- Check CSS breakpoints (should be `62.5em` for desktop)
- Verify `.desktop-nav` has `display: block` on desktop
- Verify `.mobile-nav` has `display: none` on desktop
- Check `inline.css` for conflicting rules

#### Issue: Mobile menu doesn't open
**Solution**:
- Verify hamburger button has `href="#navigation"` or `aria-controls="navigation"`
- Check that `navigation.js` is loaded
- Verify `.on--navigation` is added to `<body>` when clicked
- Check browser console for JavaScript errors

#### Issue: Desktop mega-menus don't appear
**Solution**:
- Verify mega-menus are inside `<header id="menu-header">`
- Check CSS positioning (`position: absolute`, `top: 4.875rem`)
- Verify `.is--active` or `.is-open` class is added
- Check z-index (`99999`)
- Verify `width: 100vw` and `left: 50%; transform: translateX(-50%)`

#### Issue: Navigation not sticky/fixed
**Solution**:
- Verify `.new-mega-menu.banner` has `position: sticky; top: 0`
- Check that no parent has `overflow: hidden` or `overflow: auto`
- Verify z-index is `99998` or higher
- Check `inline.css` for sticky positioning rules

### CSS Issues

#### Issue: Classes not working
**Solution**:
- Search for class in versioned CSS file first
- Verify class name matches reference exactly
- Check if class needs specific parent/context
- Verify CSS specificity (may need `!important`)

#### Issue: Styles not applying
**Solution**:
- Check CSS file load order
- Verify `inline.css` is loaded after `screen.css`
- Check browser DevTools for overridden styles
- Verify no conflicting CSS rules

### JavaScript Issues

#### Issue: Navigation script not loading
**Solution**:
- Verify `<script src="/js/navigation.js"></script>` is included
- Check browser console for 404 errors
- Verify file exists at `public/js/navigation.js`
- Check Astro dev server is running

#### Issue: Script errors in console
**Solution**:
- Open browser DevTools console
- Check for JavaScript errors
- Verify DOM structure matches expected structure
- Check that all required classes exist

---

## 📝 File Usage Guide

### When to Use Each Reference File

| Task | Primary Reference | Secondary Reference |
|------|------------------|---------------------|
| Building/editing header | `header_complete.html` | `navglobal.md` |
| Creating new pages | `sypplychainpages.html` | `target_index.html` |
| Understanding CSS classes | Versioned screen CSS file | Versioned print CSS file |
| Desktop mega-menu structure | `desktop_menu_exact.html` | `header_complete.html` |
| Mobile navigation structure | `header_complete.html` | `navglobal.md` |
| Page layout patterns | `sypplychainpages.html` | `target_index.html` |

### Common Tasks

#### Adding a New Navigation Item
1. Open `src/components/NewHeader.astro`
2. Add `<li>` item following pattern from `header_complete.html`
3. Include both `.desktop-nav` and `.mobile-nav` buttons
4. Add mobile dropdown with `just-mobile` class
5. Add desktop mega-menu div (sibling of other mega-menus)
6. Test mobile and desktop behavior

#### Fixing Navigation CSS
1. Search for issue in `public/styles/versioned?v=YfCRKR7N-ctmfG5btvdeUf1_h_ilfO7hBjW1IbqVNUg1`
2. Copy relevant CSS pattern to `inline.css`
3. Add `!important` if needed to override
4. Document why override is needed
5. Test on mobile and desktop

#### Creating a New Page
1. Copy structure from `about/overview.astro`
2. Wrap `<NewHeader />` in `<header id="menu-header">`
3. Include `<script src="/js/navigation.js"></script>`
4. Match CSS file includes
5. Test navigation works

---

## 🎯 Key Principles

1. **Match Reference Files Exactly**: Components should match reference HTML structure exactly
2. **Use Only Reference Classes**: Never create custom CSS classes - use classes from reference files
3. **Mobile & Desktop**: Always provide both mobile and desktop versions
4. **Shared Scripts**: Use shared `navigation.js` on all pages - no inline scripts
5. **Reference First**: Always check reference files before implementing
6. **Document Changes**: When overriding CSS, document why in comments

## 📋 Golden Rules

**See `GOLDEN_RULES.md` for complete documentation.**

The three mandatory rules are:

1. **NO new CSS classes** - Every class must exist in versioned CSS files
2. **HTML structure must match reference files exactly** - Use `src/temp/` HTML files as exact templates
3. **Custom CSS overrides in inline.css only** - All custom CSS goes in `public/styles/inline.css` with clear comments

All components must follow the same principle as `NewFooter.astro` - based on Woodmac references.

---

## 📖 Additional Documentation

- **Navigation Consistency**: See `NAVIGATION_CONSISTENCY.md`
- **Navigation Audit**: See `NAVIGATION_AUDIT.md`
- **Navigation Rebuild**: See `NAVIGATION_REBUILD_SUMMARY.md`
- **Homepage Layout**: See `HOMEPAGE_LAYOUT_MAP.md`
- **Page Creation**: See `PAGE_CREATION_WORKFLOW.md`
- **Golden Rules**: See `GOLDEN_RULES.md` ⭐ **MANDATORY READING**
- **Validation Checklist**: See `VALIDATION_CHECKLIST.md` ⭐ **USE BEFORE COMMITS**

---

## 🔄 Recent Changes

### Navigation Fix & CSS Consolidation (2025-01-04)
- **Phase 1 Completed**: Static navigation replica created
  - `NewHeader.astro` now matches `header_complete.html` exactly
  - Copied exact HTML structure without modifications
  - All desktop mega-menus included
  - Mobile navigation structure preserved
- **CSS Files Consolidated**:
  - `public/styles/screen.css` is now direct copy of versioned screen CSS
  - `public/styles/print.css` is now direct copy of versioned print CSS
  - `public/styles/inline.css` emptied - ready for custom overrides only
- **Golden Rules Established**:
  - Created `GOLDEN_RULES.md` documenting three mandatory rules
  - Created `VALIDATION_CHECKLIST.md` for code verification
- **CSS Source of Truth**:
  - Versioned files in `src/styles/` are the ONLY source of truth
  - All CSS classes MUST exist in these files before using
  - `public/styles/screen.css` and `print.css` should match versioned files exactly

### Navigation Structure Fix (2025-01-04)
- Updated `NewHeader.astro` to match `header_complete.html` exactly
- Removed `<header>` wrapper from component (pages wrap it)
- Desktop mega-menus are now inside `<header id="menu-header">` when used in pages
- All pages updated to wrap `<NewHeader />` in `<header id="menu-header">`

### CSS Reference Update (2025-01-04)
- **ONLY** CSS reference files are now:
  - `src/styles/versioned?v=YfCRKR7N-ctmfG5btvdeUf1_h_ilfO7hBjW1IbqVNUg1` (Screen CSS - 27,973 lines) ⭐ SOURCE OF TRUTH
  - `src/styles/versioned?v=vYR7kuamBcOnNX6rtnCC_-JxhnsAiNV0oRlFrulRqGE` (Print CSS - 4,186 lines) ⭐ SOURCE OF TRUTH
- All CSS classes MUST exist in these versioned files before using them
- These files are READ-ONLY - never edit them

---

**Last Updated**: 2025-01-04
**Status**: Active Development - Phase 1 (Static Replica) Complete
**Next Phase**: Phase 2 - Astro-fication (convert static HTML to dynamic Astro component)
**Maintainer**: Development Team
