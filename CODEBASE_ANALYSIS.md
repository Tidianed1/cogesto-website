# Cogento Consulting Website - Codebase Analysis

*Generated: November 6, 2025*
*Analysis Method: Explore Agent with very thoroughness*

---

## 🏗️ Project Architecture

- **Framework**: Astro 5.14.6 with React integration
- **Styling**: Tailwind CSS + Wood Mackenzie reference CSS (strict adherence required)
- **Build Tool**: Vite
- **Language**: TypeScript/JavaScript
- **Package Manager**: npm

---

## 📁 Project Structure

```
Cogento_website/
├── src/
│   ├── components/           # 40 components total
│   │   ├── expertise/       # Expertise-specific components
│   │   └── [40 .astro files]
│   ├── pages/               # 9 pages
│   │   ├── about/          # About section pages
│   │   ├── expertises/     # Expertise pages
│   │   └── [page files]
│   ├── content/            # French translations
│   │   ├── fr.ts          # Main French content (327 lines)
│   │   └── navigation.ts   # Navigation structure
│   ├── styles/            # Global CSS
│   ├── temp/              # HTML reference files from Woodmac
│   │   ├── header_complete.html
│   │   ├── sypplychainpages.html
│   │   └── [reference files]
│   └── layouts/           # Base layouts
├── public/
│   ├── styles/            # Versioned CSS files
│   │   ├── screen.css     # Main stylesheet
│   │   ├── inline.css     # Custom overrides (2,681 lines)
│   │   ├── print.css      # Print styles
│   │   └── versioned/     # Reference CSS files
│   ├── js/                # Shared navigation scripts
│   │   ├── navigation.js
│   │   └── woodmac.scripts.js
│   └── assets/            # Images, media
└── Documentation/         # Multiple .md files
```

---

## 🧩 Component Inventory (40 total)

### Navigation Components (5)
- `NewHeader.astro` - Main navigation (1,579 lines)
- `MobileNav.astro` - Mobile navigation
- `DesktopNav.astro` - Desktop navigation
- `SubNavigation.astro` - Sub-navigation
- `PageNavigation.astro` - Page-specific navigation

### Hero & Layout Components (6)
- `HeroSection.astro`
- `HeroMultiTemplate.astro` ✅ **Used in strategie page**
- `AboutHero.astro`
- `OurStoryHero.astro`
- `OurPeopleHero.astro`
- `MainContent.astro`

### Content Section Components (8)
- `TextOnlySection.astro` ✅ **Used in strategie page**
- `TwoColumnContent.astro` ✅ **Used in strategie page**
- `QuoteSection.astro`
- `StatsSection.astro`
- `CulturePillarSection.astro`
- `ValuesTabs.astro`
- `ServicesBlock.astro`
- `OutcomesBlock.astro`

### Cards & UI Components (8)
- `Card.astro`
- `ArticleCard.astro`
- `NewsCard.astro`
- `ServicesCard.astro`
- `AdvantageItem.astro`
- `Icon.astro`
- `Button.astro`
- `FeatureGrid.astro`

### Specialized Components (5)
- `VideoTestimonial.astro`
- `VideoTextSection.astro`
- `LeadershipTeamSection.astro`
- `NarrowBodyCopy.astro`
- `PostHeaderModals.astro`

### Expertise Components (5)
Located in `src/components/expertises/`:
- `PointsDeVue.astro` ✅ **Used in strategie page**
- `ExpertiseHero.astro`
- `ExpertiseSection.astro`
- `ExpertiseSubNav.astro`
- `CTASection.astro`

### Layout Components (3)
- `BaseLayout.astro`
- `Header.astro` (Tailwind-based, different from NewHeader)
- `Footer.astro`

---

## 📄 Page Structure & Routing

### Homepage (2 versions)
- `/pages/index.astro` - Main homepage
- `/pages/new_index.astro` - Alternative version

### About Section (6 pages)
```
/about/
├── overview.astro
├── our-story.astro
├── our-people.astro
├── our-values.astro
├── our-culture.astro
└── our-customers.astro
```

### Expertise Section (1 page currently)
```
/expertises/
└── fonctionnelles/
    └── strategie-entreprises.astro ✅ **Target page**
```

---

## 🎨 CSS Architecture

### Reference CSS (Source of Truth)
- `src/styles/versioned?v=YfCRKR7N-ctmfG5btvdeUf1_h_ilfO7hBjW1IbqVNUg1` (754KB, 27,973 lines)
- `src/styles/versioned?v=vYR7kuamBcOnNX6rtnCC_-JxhnsAiNV0oRlFrulRqGE` (95KB, 4,186 lines)

### Public CSS Files
- `public/styles/screen.css` - Main stylesheet
- `public/styles/inline.css` - Custom overrides (2,681 lines)
- `public/styles/print.css` - Print styles

### Styling Rules (Golden Rules)
1. **NO new CSS classes** - Every class must exist in versioned CSS files
2. **HTML structure must match reference files exactly** - Use `src/temp/` HTML files as exact templates
3. **Custom CSS overrides only in inline.css** - All custom CSS goes in `public/styles/inline.css` with clear comments

### Tailwind Custom Colors
- `sick-blue`, `sick-navy`, `sick-light`, `sick-gray`
- SICK Synergy design system integration

### CSS Workflow
1. Before using a class: Search in versioned CSS files
2. Add custom CSS: Only in `inline.css` with comments
3. Reference files: Always check `src/temp/` first
4. Never create new classes - use existing ones only

---

## 📝 Content Structure

### French Content (`src/content/fr.ts`)
- **Navigation labels**: About, Services, Contact, etc.
- **About section**: Hero, stats, who we are, why Cogento, culture
- **Expertise content**: Complete strategy section including:
  - Hero (title, description, CTA)
  - Overview (intro, description)
  - Challenges (title, description, conclusion, items)
  - Expertise (title, description, items)
  - Strengths (title, description, items)
  - CTA (title, description, button)

### Navigation Structure (`src/content/navigation.ts`)
- Main navigation hierarchy
- Sub-navigation items
- Footer links

---

## 🧭 Navigation System Status

### Current Status ✅
- Navigation structure matches reference files exactly
- Header wrapper (`<header id="menu-header">`) properly implemented
- Desktop mega-menus positioned correctly as siblings of header
- Mobile navigation functional
- Shared navigation script (`/js/woodmac.scripts.js`) working
- All CSS classes from reference files verified

### Known Issues ⚠️
- Some Wood Mackenzie branding still present in navigation
- Account links reference external Wood Mackenzie systems
- Build generates warning about empty chunk for PageNavigation script

### Navigation Classes Reference
- `.just-mobile`: Mobile only (max-width: 62.49875em)
- `.just-desktop`: Desktop only (min-width: 62.5em)
- `.desktop-nav`: Desktop navigation button
- `.mobile-nav`: Mobile navigation button
- `.active`: Mobile submenu open state
- `.is--active`: Desktop mega-menu open state
- `.on--navigation`: Mobile hamburger menu open

---

## ⚠️ Issues & Warnings

### Build Issues
- **Warning**: Empty chunk for PageNavigation script (non-critical)
- **Port conflicts**: Multiple dev servers can cause port conflicts
- **Missing assets**: Some Wood Mackenzie logo references may 404

### Content Issues
- **Branding**: Some Wood Mackenzie text still present in navigation
- **External links**: Account links point to Wood Mackenzie systems
- **Image URLs**: Some reference images may need Cogento replacements

---

## ✅ Build Status

### Successful Build ✅
- **9 pages generated** successfully
- **No critical errors** in build process
- **All dependencies installed** and working
- **Development server** running on port 4323

### Generated Pages
1. Homepage (`/index.html`)
2. Alternative homepage (`/new_index/index.html`)
3. About pages (6 variants)
4. Expertise page (`/expertises/fonctionnelles/strategie-entreprises/index.html`)

---

## 🎯 Strategie-Entreprises Page Analysis

### Components Used ✅
- `HeroMultiTemplate.astro` - Hero section with image and CTA
- `PageNavigation.astro` - Sticky navigation with anchor links
- `TextOnlySection.astro` - Text-only content sections
- `TwoColumnContent.astro` - Content with images (left/right aligned)
- `PointsDeVue.astro` - Expertise-specific points of view section

### Content Structure ✅
```javascript
strategy: {
  hero: { title, description, cta }
  overview: { intro, description }
  challenges: { title, description, conclusion, items[] }
  expertise: { title, description, items[] }
  strengths: { title, description, items[] }
  cta: { title, description, button, buttonHref }
}
```

### Page Sections ✅
1. **Hero Section** - Title, description, CTA button
2. **Page Navigation** - Sticky nav with anchor links
3. **Notre activité** - Overview, challenges, expertise, strengths
4. **Points de vue** - Expertise perspectives
5. **Notre Impact** - Impact section (added)
6. **Notre équipe** - Team section (added)
7. **CTA Section** - Contact call-to-action

### Navigation Links ✅
- `#notre-activite` ✅
- `#points-de-vue` ✅
- `#notre-impact` ✅
- `#notre-equipe` ✅ (matches URL)

---

## 🔧 Development Workflow

### Best Practices
1. **Reference First**: Always check `src/temp/` HTML files before implementation
2. **CSS Verification**: Search classes in versioned CSS files before use
3. **Component Reuse**: Use existing components when possible
4. **Golden Rules**: Never create new CSS classes or modify reference files
5. **Content Integration**: Use `src/content/fr.ts` for all text content

### File Usage Guide
| Task | Primary Reference | Secondary Reference |
|------|------------------|---------------------|
| Building header | `header_complete.html` | `navglobal.md` |
| Creating pages | `sypplychainpages.html` | `target_index.html` |
| Understanding CSS | Versioned screen CSS | Versioned print CSS |
| Desktop mega-menus | `desktop_menu_exact.html` | `header_complete.html` |
| Component styling | `inline.css` (custom only) | Versioned CSS files |

---

## 🚀 Current Status Summary

### ✅ What's Working
- All required components exist and are functional
- Strategie-entreprises page builds successfully
- Navigation system working properly
- French content properly integrated
- Development server running cleanly

### 📈 Next Steps Potential
1. **Content Updates**: Replace Wood Mackenzie branding with Cogento
2. **Additional Expertise Pages**: Create more expertise area pages
3. **Image Optimization**: Update reference images to Cogento assets
4. **Navigation Updates**: Update account links to Cogento systems
5. **SEO Optimization**: Add metadata and improve page titles

### 📚 Documentation Files
- `PROJECT.md` - Main project documentation (comprehensive)
- `GOLDEN_RULES.md` - Development rules (deleted, needs recreation)
- `NAVIGATION_CONSISTENCY.md` - Navigation guidelines
- `HOMEPAGE_LAYOUT_MAP.md` - Homepage structure

---

## 💡 Key Insights

1. **Mature Codebase**: Well-structured with 40+ reusable components
2. **Strict CSS Governance**: Reference CSS files prevent inconsistencies
3. **Component Architecture**: Modular design allows easy page creation
4. **Content System**: Centralized French content management
5. **Reference-Driven**: HTML reference files ensure accuracy

The codebase is **production-ready** and provides all necessary tools for building additional pages following the established patterns.

---

*Last Updated: November 6, 2025*
*Analysis Method: Explore Agent with very thoroughness*
*Status: Active Development - Phase 1 Complete*