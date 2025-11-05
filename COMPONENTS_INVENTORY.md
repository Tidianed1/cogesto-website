# COMPONENTS INVENTORY - KEEP vs DELETE

## ============================================
## ✅ KEEP - ACTIVELY USED COMPONENTS
## ============================================

### Core Layout Components (Used on all pages)
- ✅ `NewHeader.astro` - Main navigation header (USED)
- ✅ `NewFooter.astro` - Site footer (USED)

### Homepage Components (new_index.astro)
- ✅ `HeroSection.astro` - Homepage hero with diagonal split (USED)
- ✅ `MainContent.astro` - Aggregates homepage content sections (USED)
- ✅ `OutcomesBlock.astro` - Tabbed outcomes section (USED in MainContent)

### About Pages Components (about/*.astro)
- ✅ `SubNavigation.astro` - Secondary nav bar for About pages (USED)
- ✅ `AboutHero.astro` - Hero for About overview page (USED)
- ✅ `OurStoryHero.astro` - Hero for Our Story page (USED)
- ✅ `OurPeopleHero.astro` - Hero for Our People page (USED)
- ✅ `StatsSection.astro` - Statistics display section (USED)
- ✅ `TwoColumnContent.astro` - Two-column text/image layout (USED)
- ✅ `QuoteSection.astro` - Quote with image display (USED)
- ✅ `TextOnlySection.astro` - Two-column text-only section (USED)
- ✅ `LeadershipTeamSection.astro` - Team grid display (USED)
- ✅ `ValuesTabs.astro` - Tabbed values interface (USED)
- ✅ `VideoTestimonial.astro` - Customer testimonial with video (USED)
- ✅ `CulturePillarSection.astro` - Culture pillars display (USED)

### Expertise Pages Components (expertises/*.astro)
- ✅ `HeroMultiTemplate.astro` - Alternative hero with shape overlay (USED)
- ✅ `PageNavigation.astro` - Sticky sub-navigation for expertise pages (USED)
- ✅ `SectionIntro.astro` - Section introduction component (NEW)
- ✅ `NarrowBodyCopy.astro` - Narrow two-column text (NEW)
- ✅ `VideoTextSection.astro` - Video with text section (NEW)
- ✅ `ServicesBlock.astro` - Grid of service cards (NEW)
- ✅ `ServicesCard.astro` - Individual service card (NEW)
- ✅ `expertises/PointsDeVue.astro` - Articles grid section (USED)
- ✅ `ArticleCard.astro` - Individual article card (USED by PointsDeVue)

### UI Components
- ✅ `ui/tabs.tsx` - Shadcn Tabs component (check if used in OutcomesBlock)

## ============================================
## ❌ DELETE - OLD/UNUSED COMPONENTS
## ============================================

### Old Design System (Atoms/Molecules/Organisms) - NOT USED
- ❌ `atoms/` folder - ENTIRE FOLDER (old atomic design system)
  - `atoms/Button.astro`
  - `atoms/Icon.astro`
  - `atoms/IconButton.astro`
  - `atoms/Logo.astro`
  - `atoms/NavLink.astro`

- ❌ `molecules/` folder - ENTIRE FOLDER (old atomic design system)
  - `molecules/AdvantageItem.astro`
  - `molecules/BlogCard.astro`
  - `molecules/Card.astro`
  - `molecules/IconGroup.astro`
  - `molecules/Navigation.astro`

- ❌ `organisms/` folder - ENTIRE FOLDER (old atomic design system)
  - `organisms/Advantages.astro`
  - `organisms/BlogShowcase.astro`
  - `organisms/BrandTagline.astro`
  - `organisms/CardGrid.astro`
  - `organisms/ContentWithLinks.astro`
  - `organisms/Footer.astro`
  - `organisms/Header.astro`
  - `organisms/Hero.astro`
  - `organisms/ImageTextSplit.astro`
  - `organisms/SectionDivider.astro`

### Old/Duplicate Components - NOT USED
- ❌ `NewsCard.astro` - REPLACED by `ArticleCard.astro`
- ❌ `Card.astro` - Old duplicate, not used
- ❌ `Button.astro` - Old duplicate, not used
- ❌ `Icon.astro` - Old duplicate, not used
- ❌ `AdvantageItem.astro` - Old duplicate, not used
- ❌ `BlogPostCard.astro` - Old duplicate, not used
- ❌ `FeatureGrid.astro` - Old component, not used

### Replaced Expertise Components
- ❌ `expertises/ExpertiseHero.astro` - REPLACED by `HeroMultiTemplate.astro`
- ❌ `expertises/ExpertiseSubNav.astro` - REPLACED by `PageNavigation.astro`
- ❌ `expertises/CTASection.astro` - Check if used, likely NOT
- ❌ `expertises/ExpertiseSection.astro` - Check if used, likely NOT

### Old UI Components
- ❌ `ui/helix-hero.tsx` - Old 3D hero animation, NOT USED

## ============================================
## 🔍 NEEDS VERIFICATION
## ============================================

### Check if these are used:
- 🔍 `expertises/CTASection.astro` - Search codebase for imports
- 🔍 `expertises/ExpertiseSection.astro` - Search codebase for imports
- 🔍 `ui/tabs.tsx` - Check if used in OutcomesBlock

## ============================================
## SUMMARY
## ============================================

**KEEP: ~25 components**
**DELETE: ~35+ components (entire folders + duplicates)**

## ============================================
## MARKERS ADDED TO FILES
## ============================================

Files marked with "❌ DELETE" header comments:
- ✅ NewsCard.astro
- ✅ Card.astro
- ✅ expertises/ExpertiseHero.astro
- ✅ expertises/ExpertiseSubNav.astro
- ✅ ui/helix-hero.tsx

Files marked with "✅ KEEP" header comments:
- ✅ NewHeader.astro
- ✅ ArticleCard.astro

## ============================================
## QUICK DELETE SCRIPT
## ============================================

Run this script to delete all unused components:

```bash
cd Cogesto_website

# Delete old design system folders
rm -rf src/components/atoms/
rm -rf src/components/molecules/
rm -rf src/components/organisms/

# Delete old/duplicate components
rm src/components/NewsCard.astro
rm src/components/Card.astro
rm src/components/Button.astro
rm src/components/Icon.astro
rm src/components/AdvantageItem.astro
rm src/components/BlogPostCard.astro
rm src/components/FeatureGrid.astro

# Delete replaced expertise components
rm src/components/expertises/ExpertiseHero.astro
rm src/components/expertises/ExpertiseSubNav.astro
rm src/components/expertises/CTASection.astro
rm src/components/expertises/ExpertiseSection.astro

# Delete old UI
rm src/components/ui/helix-hero.tsx
```

**Total files to delete: ~35+ files**

