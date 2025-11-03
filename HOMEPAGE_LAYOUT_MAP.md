# Homepage Layout Contour Map

**Document Version:** 1.0  
**Last Updated:** Current  
**Page File:** `src/pages/new_index.astro`

---

## Visual Layout Structure

```
┌─────────────────────────────────────────────────────────────────┐
│                      [1] HEADER / NAVIGATION                     │
│  Component: NewHeader.astro                                    │
│  ID: #menu-header                                               │
│  Classes: .new-mega-menu, .banner, .sticky-desktop              │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │  • Logo                                                   │  │
│  │  • Desktop Navigation (mega-menus)                       │  │
│  │  • Mobile Navigation (hamburger)                         │  │
│  │  • Search Icon                                           │  │
│  │  • Sign In / Account                                     │  │
│  └─────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                     [2] HERO SECTION                             │
│  Component: HeroSection.astro                                   │
│  ID: #homepage-hero-cobalt                                      │
│  Classes: .hero-homepage-cobalt-template__container            │
│  Background: Image + subtle blue gradient overlay               │
│  Height: 100vh (full viewport)                                  │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │  Position: Center-left (vertically centered, left-aligned)│ │
│  │                                                          │  │
│  │  Title: "Intelligence connected"                         │  │
│  │  Introduction: Descriptive paragraph                    │  │
│  │  CTA Button: "Discover our products"                     │  │
│  └─────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
         ↓ (Seamless gradient transition)
┌─────────────────────────────────────────────────────────────────┐
│              [3] BOX CARDS SECTION                               │
│  Component: MainContent.astro (first section)                  │
│  ID: #promopanel                                                │
│  Classes: .box-cards, .homepage-gradients--panel-container-block │
│  Background: Transparent (merges with hero gradient)             │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │  Title: "Get an interconnected view" (centered)         │  │
│  │  Link: "Find out more" (centered, underlined)           │  │
│  └─────────────────────────────────────────────────────────┘  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │ COLUMN 1     │  │ COLUMN 2     │  │ COLUMN 3     │          │
│  │              │  │              │  │              │          │
│  │ "Think       │  │ "Uncover     │  │ "See with    │          │
│  │  beyond the  │  │  deep        │  │  absolute    │          │
│  │  silos"      │  │  relationships"│ │  clarity"    │          │
│  │              │  │              │  │              │          │
│  │ Description │  │ Description  │  │ Description  │          │
│  │ text         │  │ text         │  │ text         │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│            [4] MESSAGE BLOCK SECTION                             │
│  Component: MainContent.astro                                   │
│  ID: #HomePageMessageBlock                                      │
│  Classes: .homepage-message-block                               │
│  Background: Gradient continuation                               │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │  Subtitle: "The future of energy data and insights"      │  │
│  │  Title: "Synoptic"                                        │  │
│  │  Link: "Find out more →"                                  │  │
│  │  Canvas: Animation canvas element                         │  │
│  └─────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│         [5] BODY COPY IMAGE SECTION (Energy Transition)          │
│  Component: MainContent.astro                                   │
│  ID: #bodycopyimage (first instance)                            │
│  Classes: .body-copy-image__section, .bg-core-branding-cobalt    │
│  Layout: 2-column (text left, image right)                      │
│  ┌──────────────────────┐  ┌──────────────────────┐           │
│  │ TEXT COLUMN          │  │ IMAGE COLUMN         │           │
│  │                      │  │                      │           │
│  │ Title: "Energy       │  │ Image: ETO visual    │           │
│  │  transition outlook" │  │  (eto_keyvisual)     │           │
│  │                      │  │                      │           │
│  │ Description:         │  │                      │           │
│  │  2 paragraphs        │  │                      │           │
│  │                      │  │                      │           │
│  │ Button: "Explore     │  │                      │           │
│  │  the outlook"        │  │                      │           │
│  └──────────────────────┘  └──────────────────────┘           │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│              [6] OUTCOMES BLOCK SECTION                          │
│  Component: MainContent.astro                                   │
│  ID: #HomePageOutcomesBlock                                     │
│  Classes: .homepage-outcomes-block                              │
│  Layout: Tabbed interface (desktop) / Stacked (mobile)           │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │  TAB NAVIGATION (Desktop)                                 │  │
│  │  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐    │  │
│  │  │ Trusted data │ │Market experts│ │Proprietary    │    │  │
│  │  │  (active)    │ │              │ │methodology    │    │  │
│  │  └──────────────┘ └──────────────┘ └──────────────┘    │  │
│  └─────────────────────────────────────────────────────────┘  │
│  ┌──────────────────────┐  ┌──────────────────────┐            │
│  │ TEXT COLUMN          │  │ IMAGE COLUMN         │            │
│  │                      │  │                      │            │
│  │ Pre-title: "Trusted  │  │ Image switches      │            │
│  │  data"               │  │  based on active tab│            │
│  │                      │  │                      │            │
│  │ Title: "Access the   │  │ 3 images:           │            │
│  │  data others wish    │  │ • trusted-data-1.jpg│            │
│  │  they had"           │  │ • expert-advice-1.jpg│            │
│  │                      │  │ • predictive-       │            │
│  │ Description:         │  │   decisions-1.jpg   │            │
│  │  Paragraph           │  │                      │            │
│  │                      │  │                      │            │
│  │ Product Links:       │  │                      │            │
│  │  • Lens Subsurface   │  │                      │            │
│  │  • Lens Metals &     │  │                      │            │
│  │    Mining            │  │                      │            │
│  │  • Commodity Trading │  │                      │            │
│  │  • Power Trading     │  │                      │            │
│  │  • Supply Chain      │  │                      │            │
│  └──────────────────────┘  └──────────────────────┘            │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │  MOBILE VERSION (Stacked sections)                       │  │
│  │  Each tab as separate section with image below          │  │
│  └─────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│       [7] BODY COPY IMAGE SECTION (Book/Connected)               │
│  Component: MainContent.astro                                   │
│  ID: #bodycopyimage (second instance)                          │
│  Classes: .body-copy-image__section, .bg-core-branding-cobalt   │
│  Layout: 2-column (text left, image right - reversed order)     │
│  ┌──────────────────────┐  ┌──────────────────────┐           │
│  │ TEXT COLUMN          │  │ IMAGE COLUMN         │           │
│  │                      │  │                      │           │
│  │ Title: "Business as  │  │ Image: Book cover    │           │
│  │  usual is over"      │  │  (jason-book)        │           │
│  │                      │  │                      │           │
│  │ Description:         │  │                      │           │
│  │  2 paragraphs about  │  │                      │           │
│  │  "Connected" book    │  │                      │           │
│  │                      │  │                      │           │
│  │ Button: "Find out    │  │                      │           │
│  │  more"               │  │                      │           │
│  └──────────────────────┘  └──────────────────────┘           │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│              [8] NEWS GRID SECTION                                │
│  Component: MainContent.astro                                   │
│  ID: #latest-thinking                                           │
│  Classes: .news-grid-container, .latest-thinking-block          │
│  Background: Light grey (.bg-light-grey-1)                      │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │  Title: "Explore news and thought leadership"            │  │
│  │  ┌────────────────────────────────────────────────────┐ │  │
│  │  │  GRID LAYOUT (Masonry/Vertical)                     │ │  │
│  │  │                                                      │ │  │
│  │  │  [Card 1]  [Card 2]  [Card 3]  [Card 4]            │ │  │
│  │  │                                                      │ │  │
│  │  │  [Card 5]  [Card 6]  [Card 7]  [Card 8]            │ │  │
│  │  │                                                      │ │  │
│  │  │  Status: Currently shows "Loading..."               │ │  │
│  │  │  Data source: API endpoint (needs implementation)   │ │  │
│  │  └────────────────────────────────────────────────────┘ │  │
│  └─────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                      [9] FOOTER                                  │
│  Component: NewFooter.astro                                     │
│  Classes: .site-footer                                          │
│  Background: Primary color (#0024ff)                            │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │  LEFT COLUMN              │  RIGHT COLUMNS (3 columns)  │  │
│  │                           │                              │  │
│  │  Heading: "Inspiring      │  DISCOVER │ RESOURCES │   │  │
│  │    natural resources      │  ABOUT WOODMAC              │  │
│  │    decisions."            │                              │  │
│  │                           │  • Links                    │  │
│  │  Subheading: Newsletter   │  • Links                    │  │
│  │    signup                  │  • Links                    │  │
│  │                           │                              │  │
│  │  Button: "Sign up for     │                              │  │
│  │    weekly insights"       │                              │  │
│  └─────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘

```

---

## Section Details Reference

### [1] Header / Navigation
- **Component File:** `src/components/NewHeader.astro`
- **Key IDs:** `#menu-header`, `#navigation`, `#accounts`, `#search-modal`, `#fake-bg`
- **Desktop Mega-Menus:** `#menuitem_802633-desktop`, `#menuitem_802635-desktop`, etc.
- **Mobile Menus:** `#menuitem_802633`, `#menuitem_802635`, etc.
- **Features:** Sticky positioning, dropdown mega-menus, search overlay, sign-in overlay

### [2] Hero Section
- **Component File:** `src/components/HeroSection.astro`
- **ID:** `#homepage-hero-cobalt`
- **Background Image:** `/assets/pexels-david-alberto-carmona-coto-434794-1151418.jpg`
- **Styling:** Full viewport height (100vh), blue gradient overlay, centered vertically
- **Content:** Title, introduction paragraph, CTA button

### [3] Box Cards Section
- **Component File:** `src/components/MainContent.astro` (lines 7-66)
- **ID:** `#promopanel`
- **Layout:** 3 equal-width columns
- **Content:**
  - Column 1: "Think beyond the silos"
  - Column 2: "Uncover deep relationships"
  - Column 3: "See with absolute clarity"
- **Styling:** Merges with hero gradient, white text, left-aligned columns on desktop

### [4] Message Block Section
- **Component File:** `src/components/MainContent.astro` (lines 68-79)
- **ID:** `#HomePageMessageBlock`
- **Content:** "The future of energy data and insights" + "Synoptic" + link
- **Special:** Contains animation canvas element

### [5] Body Copy Image Section (Energy Transition)
- **Component File:** `src/components/MainContent.astro` (lines 82-109)
- **ID:** `#bodycopyimage` (first instance)
- **Layout:** 2-column (text left, image right)
- **Image:** `/assets/eto_keyvisual_final-four.png`
- **Content:** "Energy transition outlook" with description and CTA button

### [6] Outcomes Block Section
- **Component File:** `src/components/MainContent.astro` (lines 111-364)
- **ID:** `#HomePageOutcomesBlock`
- **Layout:** Tabbed interface (desktop) / Stacked sections (mobile)
- **Tabs:**
  1. Trusted data (`#section-90acd8d8cb3a4aad9446faf3de2cf306`)
  2. Market experts (`#section-367983ee699140d9b3e1240f9fabf1e6`)
  3. Proprietary methodology (`#section-2460c57976eb4f97b099a397d9a0205e`)
- **Images:** 
  - `trusted-data-1.jpg`
  - `expert-advice-1.jpg`
  - `predictive-decisions-1.jpg`
- **Status:** Tab functionality needs JavaScript implementation

### [7] Body Copy Image Section (Book/Connected)
- **Component File:** `src/components/MainContent.astro` (lines 366-393)
- **ID:** `#bodycopyimage` (second instance)
- **Layout:** 2-column (text left, image right - reversed order from section 5)
- **Image:** `/assets/jason-book---hard-back-2.png`
- **Content:** "Business as usual is over" about the Connected book

### [8] News Grid Section
- **Component File:** `src/components/MainContent.astro` (lines 396-428)
- **ID:** `#latest-thinking`
- **Status:** Currently shows "Loading..." placeholder
- **Needs:** API integration or static content cards
- **Layout:** Masonry/vertical grid layout

### [9] Footer
- **Component File:** `src/components/NewFooter.astro`
- **Classes:** `.site-footer`
- **Layout:** Left column (newsletter) + 3 right columns (links)
- **Background:** Primary blue (#0024ff)

---

## Component File Structure

```
src/pages/
  └── new_index.astro
      ├── Imports: NewHeader, HeroSection, MainContent, NewFooter
      ├── <NewHeader />
      ├── <main class="content start">
      │   └── <div class="homepage-gradients-wrapper">
      │       ├── <HeroSection />
      │       └── <MainContent />
      └── <NewFooter />

src/components/
  ├── NewHeader.astro        → [1] Header/Navigation
  ├── HeroSection.astro      → [2] Hero Section
  ├── MainContent.astro      → [3-8] All content sections
  └── NewFooter.astro        → [9] Footer
```

---

## Key Styling Files

- **Main CSS:** `public/styles/screen.css`
- **Inline CSS:** `public/styles/inline.css` (hero and box-cards overrides)
- **Print CSS:** `public/styles/print.css`

---

## Current Status & Next Steps

### ✅ Completed
- [1] Header structure and navigation HTML
- [2] Hero section with gradient overlay
- [3] Box cards section structure (needs styling refinement)
- [9] Footer structure

### 🔄 In Progress
- [3] Box cards styling and gradient merge
- [6] Outcomes block tab functionality (JavaScript needed)

### ❌ Needs Work
- [4] Message block canvas animation
- [6] Outcomes block tab switching JavaScript
- [8] News grid content (currently placeholder)
- [5], [7] Image paths need to be updated to local assets

---

## Quick Reference: Section IDs & Classes

| Section | ID | Primary Classes |
|---------|-----|----------------|
| Header | `#menu-header` | `.new-mega-menu`, `.banner`, `.sticky-desktop` |
| Hero | `#homepage-hero-cobalt` | `.hero-homepage-cobalt-template__container` |
| Box Cards | `#promopanel` | `.box-cards`, `.homepage-gradients--panel-container-block` |
| Message Block | `#HomePageMessageBlock` | `.homepage-message-block` |
| Energy Transition | `#bodycopyimage` (first) | `.body-copy-image__section`, `.bg-core-branding-cobalt` |
| Outcomes Block | `#HomePageOutcomesBlock` | `.homepage-outcomes-block` |
| Book Section | `#bodycopyimage` (second) | `.body-copy-image__section`, `.bg-core-branding-cobalt` |
| News Grid | `#latest-thinking` | `.news-grid-container`, `.latest-thinking-block` |
| Footer | N/A | `.site-footer` |

---

**Note:** This map reflects the current state of the codebase. Update as sections are refined or new features are added.

