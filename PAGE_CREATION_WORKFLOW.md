# Cogesto Consulting - Page Creation Workflow

## Overview

This document outlines the workflow for creating new pages based on screenshots and design inspiration, following our established component architecture and Sanity CMS integration.

## Component Architecture

Our project follows atomic design principles with three levels:

### Atoms (`src/components/atoms/`)
- **Logo.astro** - Company logo component
- **NavLink.astro** - Navigation link component  
- **IconButton.astro** - Icon button component

### Molecules (`src/components/molecules/`)
- **Navigation.astro** - Navigation menu
- **IconGroup.astro** - Group of icon buttons
- **Card.astro** - Reusable card component (multiple styles)
- **BlogCard.astro** - Blog post card
- **AdvantageItem.astro** - Single advantage item

### Organisms (`src/components/organisms/`)
- **Header.astro** - Site header with navigation
- **Hero.astro** - Hero section with image/text split
- **BrandTagline.astro** - Brand tagline bar
- **ContentWithLinks.astro** - Content with navigation links
- **ImageTextSplit.astro** - Alternating image/text sections
- **CardGrid.astro** - Grid of cards (statistics, services)
- **BlogShowcase.astro** - Blog posts showcase
- **Advantages.astro** - Three-column advantages section
- **Footer.astro** - Site footer

## Page Creation Workflow

### Step 1: Analyze Page Structure

When you receive screenshots of a new page:

1. **Identify Sections**: Break down the page into logical sections
2. **Map to Existing Components**: Check if existing organisms can be reused
3. **Identify Gaps**: Note any new component patterns needed
4. **Document Requirements**: List all content, images, and interactions needed

### Step 2: Component Reusability Assessment

#### Highly Reusable (Use as-is):
- **Header** - Always reuse with site navigation
- **Footer** - Always reuse with site links
- **BaseLayout** - Page wrapper with HTML structure
- **Hero** - For main page introductions
- **BrandTagline** - For brand messaging bars
- **ImageTextSplit** - For alternating content sections
- **CardGrid** - For statistics, services, features
- **Advantages** - For benefit/value propositions

#### Customizable (Extend with props):
- **ContentWithLinks** - Can become "ContentWithTabs", "ContentWithAccordion"
- **Card** - Already supports multiple styles (primary, light, image, default)

#### Create New (When needed):
- **Timeline** - For company history, project phases
- **TeamGrid** - For team member showcases
- **ContactForm** - For contact pages
- **CaseStudyLayout** - For detailed case studies
- **TestimonialCarousel** - For client testimonials

### Step 3: Create Static Page First

1. **Create Page File**: `src/pages/[page-name].astro`
2. **Import Components**: Import needed organisms and layouts
3. **Define Data**: Create data objects matching component props
4. **Use Placeholder Images**: Use placehold.co with brand colors
5. **Test Layout**: Verify responsiveness and styling

#### Example Page Structure:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro'
import Header from '../components/organisms/Header.astro'
import Hero from '../components/organisms/Hero.astro'
// ... import other needed components
import Footer from '../components/organisms/Footer.astro'

// Define page data
const pageData = {
  // Extract from screenshots
}

const headerData = {
  // Site-wide header data
}
---

<BaseLayout title="Page Title - Cogesto Consulting">
  <Header {...headerData} />
  
  <main>
    {/* Page sections based on screenshot analysis */}
  </main>
  
  <Footer {...footerData} />
</BaseLayout>
```

### Step 4: Create/Update Sanity Schemas (if needed)

If new section types are needed:

1. **Create Section Schema**: `sanity-studio/schemas/sections/[section-name].ts`
2. **Update Page Schema**: Add new section to `pageBuilder` array
3. **Test in Studio**: Verify schema works in Sanity Studio

#### Example New Section Schema:

```typescript
import {defineType} from 'sanity'

export const newSectionSchema = defineType({
  name: 'newSection',
  title: 'New Section',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
      validation: (Rule) => Rule.required(),
    },
    // ... other fields
  ],
  preview: {
    select: {
      title: 'heading',
    },
  },
})
```

### Step 5: Add Sanity Queries (if dynamic)

1. **Update sanityClient.ts**: Add GROQ queries for new sections
2. **Add TypeScript Types**: Define interfaces for new data structures
3. **Test Queries**: Verify data fetching works correctly

### Step 6: Make Page Dynamic (optional)

1. **Convert to Dynamic**: Replace static data with Sanity queries
2. **Add Error Handling**: Include fallback data for offline scenarios
3. **Test Content Editing**: Verify Sanity Studio integration

## Content Guidelines

### Placeholder Images
- Use `placehold.co` with brand colors:
  - Primary: `https://placehold.co/WIDTHxHEIGHT/055bf8/ffffff?text=TEXT`
  - Navy: `https://placehold.co/WIDTHxHEIGHT/091138/ffffff?text=TEXT`
  - Light: `https://placehold.co/WIDTHxHEIGHT/f2f5f4/5d5a59?text=TEXT`

### Brand Colors
- **Sick Blue**: `#055bf8` (primary actions, highlights)
- **Sick Navy**: `#091138` (dark sections, text)
- **Sick Light**: `#f2f5f4` (light backgrounds)
- **Sick Gray**: `#5d5a59` (secondary text)

### Typography
- **Headings**: Bold, clear hierarchy
- **Body Text**: Readable, appropriate line height
- **Links**: Hover states with brand color transitions

## Example: Creating "About" Page

### 1. Screenshot Analysis
- Hero section with company story
- Timeline of company milestones
- Team member grid
- Values/advantages section

### 2. Component Mapping
- **Hero** ✓ (reuse with company story)
- **Timeline** ✗ (create new component)
- **TeamGrid** ✗ (create new component)
- **Advantages** ✓ (reuse for values)

### 3. Implementation Steps
1. Create `src/pages/apropos.astro`
2. Create `src/components/organisms/Timeline.astro`
3. Create `src/components/organisms/TeamGrid.astro`
4. Create `src/components/molecules/TeamMember.astro`
5. Test static version
6. Add Sanity schemas if needed
7. Make dynamic if required

## Best Practices

### Component Design
- **Single Responsibility**: Each component has one clear purpose
- **Prop Validation**: Use TypeScript interfaces for props
- **Responsive Design**: Mobile-first approach with Tailwind
- **Accessibility**: Proper semantic HTML and ARIA labels

### Content Management
- **Structured Data**: Use consistent data structures
- **Image Optimization**: Always include alt text
- **SEO Friendly**: Proper heading hierarchy and meta tags

### Performance
- **Lazy Loading**: Images load as needed
- **Minimal Dependencies**: Keep components lightweight
- **Caching**: Leverage Sanity CDN for images

## Troubleshooting

### Common Issues
1. **Component Not Rendering**: Check prop names match exactly
2. **Styling Issues**: Verify Tailwind classes are correct
3. **Image Problems**: Ensure placeholder URLs are valid
4. **Sanity Errors**: Check environment variables and queries

### Debug Steps
1. Check browser console for errors
2. Verify component props in Astro dev tools
3. Test individual components in isolation
4. Validate Sanity queries in Studio

## Next Steps

When creating new pages:
1. Follow this workflow step by step
2. Start with static implementation
3. Test thoroughly before making dynamic
4. Document any new components created
5. Update this guide with new patterns discovered

This workflow ensures consistency, maintainability, and scalability as the Cogesto website grows.

