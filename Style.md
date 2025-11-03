 Design System Style Guide

## Overview

 design system embodies a modern, technology-forward visual language that communicates expertise in data analytics and energy intelligence. The design leverages bold electric blue as the primary brand color, creating strong visual impact while maintaining professional credibility. The system emphasizes clean layouts, generous whitespace, and sophisticated geometric visualizations that represent interconnected data networks.

### Design Philosophy
- **Bold & Confident**: Strong color choices and typography convey authority and expertise
- **Data-Driven**: Visual elements reference networks, connections, and analytical systems
- **Clean & Modern**: Minimalist approach with purposeful use of space
- **Professional**: Maintains corporate credibility while appearing innovative
- **Accessible**: High contrast and clear hierarchy ensure usability

---

## Implementation Approach & Working Methodology

### CSS Organization
- **File Structure**:
  - `public/styles/screen.css`: Main stylesheet from target website
  - `public/styles/inline.css`: Custom overrides and component-specific styles
  - `public/styles/print.css`: Print media styles

### Component-Based Architecture
- **Astro Components**: Built as `.astro` files in `src/components/`
- **Page Assembly**: Pages in `src/pages/` import and compose components
- **Separation**: Each major section is a separate component (Header, Hero, MainContent, Footer)

### Layout Principles
1. **Full-Width, Edge-to-Edge**: No white space on sides, sections fill 100% viewport width
2. **Seamless Merging**: Sections flow into each other without gaps (matching backgrounds)
3. **No Container Constraints**: Removed `.wrap` classes that create max-width limitations where full-width is desired
4. **Background Color Fallbacks**: Always set background-color to match section theme to eliminate white gaps

### Navigation Bar Integration
- **Sticky Positioning**: `position: sticky; top: 0; z-index: 1000;`
- **Background Matching**: Nav bar background matches hero section background (#0000FF) for seamless merge
- **No Gaps**: Explicit `margin: 0; padding: 0;` on nav and hero to eliminate spacing

### Hero Section Implementation (Current)
- **Split Layout**: 55% content (left), 45% image (right)
- **Full Width**: `width: 100%; max-width: 100%; margin: 0; padding: 0;`
- **No White Space**: Hero container background set to #0000FF, image area also has blue fallback
- **Diagonal Edge**: Clip-path creates diagonal transition on image section
- **Image Fit**: `background-size: cover` fills space, `background-color: #0000FF` eliminates white

### CSS Override Strategy
- **Inline CSS File**: Use `inline.css` for component-specific overrides
- **Important Flags**: Use `!important` sparingly, only when needed to override target CSS
- **Specificity**: Target IDs and classes directly (`#homepage-hero-cobalt`) for reliability
- **Responsive**: Mobile-first approach with `@media (max-width: 47.99em)` for mobile

### Color & Background Strategy
- **Primary Blue**: #0000FF (Electric Blue) used consistently
- **Background Fallbacks**: Always set matching background-color to prevent white space showing
- **Seamless Sections**: Adjacent sections should share background colors or have transparent overlaps

### Working Iteratively
- **Section by Section**: Focus on one section at a time for refinement
- **Visual Testing**: Check full-width rendering, gap elimination, background merging
- **Documentation**: Update this Style.md as patterns are established and refined
- **Component Extraction**: Build components from rendered HTML (target_index_rendered.html)

---

## Color Palette

### Primary Colors

#### Electric Blue
- **Hex Value**: #0000FF
- **RGB**: 0, 0, 255
- **Usage**: Primary brand color, hero section backgrounds, major CTAs, key headers
- **Application**: Full-width hero sections, navigation bars, accent sections
- **Emotional Impact**: Conveys innovation, technology, trust, and energy
- **Accessibility**: 8.6:1 contrast ratio with white text (AAA compliant)

#### Deep Navy
- **Hex Value**: #000033 / #0A0A2E
- **RGB**: 0, 0, 51 / 10, 10, 46
- **Usage**: Footer backgrounds, testimonial sections, dark contrast areas
- **Application**: Quote blocks, footer, alternative section backgrounds
- **Emotional Impact**: Professional, sophisticated, corporate authority
- **Contrast**: Creates depth when paired with electric blue

### Secondary Colors

#### Bright Cyan
- **Hex Value**: #00D4FF / #00F0FF
- **RGB**: 0, 212, 255 / 0, 240, 255
- **Usage**: Data visualizations, orbital diagrams, network illustrations, hover effects
- **Application**: Interactive elements, diagram highlights, animated components
- **Characteristics**: Represents connectivity and digital intelligence

#### Lime Green (Accent)
- **Hex Value**: #A3FF85 / #BFFF6B
- **RGB**: 163, 255, 133 / 191, 255, 107
- **Usage**: Primary CTA buttons, success states, important highlights
- **Application**: "Contact us", "Find out more", "Sign up" buttons
- **Emotional Impact**: Energy, action, growth, positivity
- **Contrast**: Creates vibrant contrast against blue backgrounds

#### Magenta/Pink (Accent)
- **Hex Value**: #FF00FF / #E800FF
- **RGB**: 255, 0, 255 / 232, 0, 255
- **Usage**: Secondary highlights in diagrams, accent points in visualizations
- **Application**: Minimal use for visual interest in data graphics
- **Purpose**: Adds diversity to technical visualizations

### Neutral Colors

#### Pure White
- **Hex Value**: #FFFFFF
- **RGB**: 255, 255, 255
- **Usage**: Text on dark backgrounds, card backgrounds, clean section backgrounds
- **Application**: Content cards, main body backgrounds, text on blue

#### Light Gray
- **Hex Value**: #F5F5F5 / #FAFAFA
- **RGB**: 245, 245, 245 / 250, 250, 250
- **Usage**: Subtle backgrounds, section separators, alternate row colors
- **Application**: Active navigation states, subtle section distinction

#### Charcoal/Text Dark
- **Hex Value**: #1A1A1A / #2D2D2D
- **RGB**: 26, 26, 26 / 45, 45, 45
- **Usage**: Primary text on light backgrounds, body copy
- **Application**: Paragraph text, headings on white sections

#### Medium Gray
- **Hex Value**: #666666 / #808080
- **RGB**: 102, 102, 102 / 128, 128, 128
- **Usage**: Secondary text, labels, metadata
- **Application**: Timestamps, captions, helper text

### Gradient Applications

#### Network Glow Gradient
- **Colors**: Cyan to Blue with transparency
- **Application**: Network visualizations, glowing effects on hero graphics
- **Direction**: Radial from center or linear diagonal

#### Button Hover Gradients
- **Colors**: Subtle shift within green spectrum (#A3FF85 to #92EE74)
- **Application**: CTA button hover states
- **Effect**: Creates depth and interactivity

#### Card Overlay Gradients
- **Colors**: Transparent to semi-transparent white/blue
- **Application**: Card hover states, image overlays
- **Opacity**: 0% to 10-20%

---

## Typography

### Font System

#### Primary Typeface
- **Family**: System font stack for optimal performance and native feel
- **Stack Order**: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
- **Reasoning**: Ensures fast loading, native appearance across platforms, excellent readability
- **Fallback**: Sans-serif

### Font Weight Usage

#### Light (300)
- **Usage**: Minimal - occasional use in large quotes or special headings
- **Application**: Blockquote text in testimonials
- **Avoid**: Body text, small sizes

#### Regular (400)
- **Usage**: All body text, paragraph content, descriptions
- **Application**: Main content areas, card descriptions, general text
- **Line Height**: 1.6-1.7 for optimal readability

#### Medium (500)
- **Usage**: Sub-headings, navigation items, emphasized text
- **Application**: Navigation links, labels, card titles, small headings
- **Purpose**: Creates subtle hierarchy without heavy boldness

#### Semi-Bold (600)
- **Usage**: Section headings, button text, emphasized labels
- **Application**: H3-H4 headings, CTA button text, important labels
- **Purpose**: Strong emphasis while maintaining readability

#### Bold (700)
- **Usage**: Major headings, hero titles, primary emphasis
- **Application**: H1, H2 headings, hero section titles
- **Purpose**: Maximum impact and hierarchy

### Heading Hierarchy

#### H1 - Hero/Page Titles
- **Desktop Size**: 48-72px (3-4.5rem)
- **Mobile Size**: 32-40px (2-2.5rem)
- **Weight**: 700 (Bold)
- **Line Height**: 1.1-1.2 (tight for impact)
- **Color**: White on blue backgrounds, dark (#1A1A1A) on light
- **Letter Spacing**: -0.02em (slightly tighter for large sizes)
- **Usage Examples**: "Synoptic: your new data and analytics superpower", "Our story"
- **Max Width**: 800-900px for readability
- **Margin Bottom**: 24-32px

#### H2 - Section Headings
- **Desktop Size**: 40-56px (2.5-3.5rem)
- **Mobile Size**: 28-36px (1.75-2.25rem)
- **Weight**: 700 (Bold)
- **Line Height**: 1.2
- **Color**: Electric Blue (#0000FF) or Dark on light, White on dark
- **Usage Examples**: "Not all AI is created equal", "Business as usual is over", "Our purpose"
- **Margin Bottom**: 20-24px
- **Decorative Element**: Optional 4px × 24px underline in brand color

#### H3 - Sub-Section Headings
- **Desktop Size**: 28-36px (1.75-2.25rem)
- **Mobile Size**: 22-28px (1.375-1.75rem)
- **Weight**: 600-700 (Semi-Bold to Bold)
- **Line Height**: 1.3
- **Color**: Primary dark or blue
- **Usage Examples**: "Intelligence connected", "The future of energy data and analytics"
- **Margin Bottom**: 16-20px

#### H4 - Component Headings
- **Size**: 20-24px (1.25-1.5rem)
- **Weight**: 600 (Semi-Bold)
- **Line Height**: 1.4
- **Color**: Dark or blue
- **Usage**: Card titles, feature headings, smaller section titles
- **Margin Bottom**: 12-16px

#### H5 - Small Headings
- **Size**: 16-18px (1-1.125rem)
- **Weight**: 600 (Semi-Bold)
- **Line Height**: 1.4
- **Color**: Dark gray
- **Usage**: Subtle section labels, card sub-headings
- **Text Transform**: Sometimes uppercase

### Body Text

#### Large Body
- **Size**: 18-20px (1.125-1.25rem)
- **Weight**: 400 (Regular)
- **Line Height**: 1.7
- **Color**: Dark (#2D2D2D) on light, White on dark
- **Usage**: Hero descriptions, introductory paragraphs, important content
- **Max Width**: 700px for optimal readability
- **Opacity**: 90-95% on colored backgrounds

#### Standard Body
- **Size**: 16-18px (1-1.125rem)
- **Weight**: 400 (Regular)
- **Line Height**: 1.6
- **Color**: Dark (#2D2D2D) on light, White on dark
- **Usage**: Main paragraph content, descriptions, general text
- **Max Width**: 650px for optimal readability
- **Margin Bottom**: 16px between paragraphs

#### Small Body
- **Size**: 14-15px (0.875-0.9375rem)
- **Weight**: 400 (Regular)
- **Line Height**: 1.5
- **Color**: Medium gray (#666666)
- **Usage**: Captions, helper text, metadata, fine print
- **Application**: Image captions, footer text, disclaimers

### Label & Metadata Text

#### Uppercase Labels
- **Size**: 12-14px (0.75-0.875rem)
- **Weight**: 600 (Semi-Bold)
- **Line Height**: 1.4
- **Letter Spacing**: 0.5-1px (0.03-0.06em)
- **Text Transform**: Uppercase
- **Color**: Blue or medium gray
- **Usage Examples**: "AI POWERED INSIGHTS YOU CAN TRUST", section eyebrows
- **Margin Bottom**: 8-12px

#### Navigation Text
- **Size**: 16px (1rem)
- **Weight**: 500 (Medium)
- **Line Height**: 1.5
- **Color**: White on blue nav, Dark on white subnav
- **Hover State**: 80% opacity or color change
- **Active State**: Full opacity, underline or background change

### Quote/Testimonial Text
- **Size**: 20-28px (1.25-1.75rem)
- **Weight**: 300-400 (Light to Regular)
- **Line Height**: 1.5-1.6 (looser for readability)
- **Color**: White (typically on dark backgrounds)
- **Style**: Sometimes italic
- **Usage**: Customer quotes, testimonials, featured statements
- **Max Width**: 600-700px

---

## Spacing System

### Base Unit
- **Foundation**: 8px base unit
- **Reasoning**: Creates consistent rhythm, aligns with 4/8px grid systems
- **Scaling**: All spacing values are multiples of 4 or 8

### Spacing Scale

#### Extra Small (XS)
- **Value**: 4px (0.25rem)
- **Usage**: Tight element spacing, icon gaps, minimal padding
- **Application**: Space between icon and text, tight list items

#### Small (SM)
- **Value**: 8px (0.5rem)
- **Usage**: Compact spacing, form field gaps, button icon spacing
- **Application**: Input field internal spacing, tight card gaps

#### Medium (MD)
- **Value**: 16px (1rem)
- **Usage**: Default element spacing, paragraph margins, card padding
- **Application**: Space between paragraphs, button padding, moderate gaps

#### Large (LG)
- **Value**: 24px (1.5rem)
- **Usage**: Section element spacing, card padding, comfortable gaps
- **Application**: Card internal padding, space between content blocks

#### Extra Large (XL)
- **Value**: 32px (2rem)
- **Usage**: Significant spacing, large card padding, section gaps
- **Application**: Large card padding, space between major elements

#### 2XL
- **Value**: 48px (3rem)
- **Usage**: Section separation, generous padding
- **Application**: Space between content sections, large container padding

#### 3XL
- **Value**: 64px (4rem)
- **Usage**: Major section padding, hero section vertical spacing
- **Application**: Section top/bottom padding, hero content spacing

#### 4XL
- **Value**: 96px (6rem)
- **Usage**: Large section vertical padding
- **Application**: Major section separations on desktop

#### 5XL
- **Value**: 128px (8rem)
- **Usage**: Extra large section spacing
- **Application**: Maximum vertical spacing between major page sections

### Common Spacing Patterns

#### Section Padding
- **Desktop Vertical**: 64-128px (4-8rem)
- **Mobile Vertical**: 48-64px (3-4rem)
- **Horizontal**: 16-32px (1-2rem), contained by max-width container

#### Card Padding
- **Internal Padding**: 24-32px (1.5-2rem)
- **Compact Cards**: 16-20px (1-1.25rem)
- **Large Feature Cards**: 32-48px (2-3rem)

#### Button Padding
- **Vertical**: 12-16px (0.75-1rem)
- **Horizontal**: 24-32px (1.5-2rem)
- **Compact**: 8px vertical, 16px horizontal
- **Large**: 16px vertical, 40px horizontal

#### Element Spacing
- **Related Elements**: 16-24px (1-1.5rem)
- **Section Elements**: 32-48px (2-3rem)
- **Major Sections**: 80-120px (5-7.5rem)

#### Grid Gaps
- **Card Grids**: 24-32px (1.5-2rem)
- **Tight Grids**: 16px (1rem)
- **Loose Grids**: 40-48px (2.5-3rem)

---

## Component Styles

### Buttons

#### Primary CTA Button
- **Background**: Lime Green (#A3FF85 / #BFFF6B)
- **Text Color**: Dark gray/black (#1A1A1A)
- **Padding**: 14-16px vertical, 28-32px horizontal
- **Border Radius**: 4px
- **Font Size**: 16px
- **Font Weight**: 600 (Semi-Bold)
- **Border**: None
- **Shadow**: None in default state
- **Icon**: Right-pointing arrow (→) with 8px left spacing

**Hover State**:
- Background: Slightly darker green (#92EE74)
- Transform: translateY(-2px) - subtle lift
- Shadow: 0 4px 12px rgba(163, 255, 133, 0.3)
- Transition: 300ms ease all properties
- Icon: Shift right 2-4px

**Active/Pressed State**:
- Transform: translateY(0)
- Shadow: Reduced or none
- Background: Even darker shade

**Disabled State**:
- Opacity: 50%
- Cursor: not-allowed
- No hover effects

#### Secondary Button
- **Background**: Transparent
- **Text Color**: White on dark, Blue (#0000FF) on light
- **Border**: 2px solid currentColor
- **Padding**: 12px vertical, 24-28px horizontal
- **Border Radius**: 4px
- **Font Size**: 16px
- **Font Weight**: 600

**Hover State**:
- Background: Fills with currentColor
- Text Color: Inverts (white if button was blue, blue if button was white)
- Transition: 300ms ease

#### Text/Link Button
- **Background**: None
- **Text Color**: Blue (#0000FF) or white
- **Padding**: Minimal or none
- **Font Weight**: 600
- **Underline**: None default, appears on hover
- **Icon**: Arrow (→) adjacent

**Hover State**:
- Underline appears
- Icon shifts right
- Opacity: 80%

### Cards

#### Standard Content Card
- **Background**: White (#FFFFFF)
- **Padding**: 28-32px all sides
- **Border Radius**: 8px
- **Border**: None or 1px solid rgba(0,0,0,0.06)
- **Shadow Default**: 0 2px 8px rgba(0, 0, 0, 0.08)
- **Shadow Hover**: 0 8px 24px rgba(0, 0, 0, 0.12)
- **Transform Hover**: translateY(-4px)
- **Transition**: 300ms ease all

**Content Structure**:
- Label/eyebrow at top (optional)
- Heading (H3 or H4)
- Body text
- CTA link or button (optional)

#### Feature Card on Blue Background
- **Background**: rgba(255, 255, 255, 0.1) - semi-transparent white
- **Backdrop Filter**: blur(10px) - glassmorphism effect
- **Border**: 1px solid rgba(255, 255, 255, 0.2)
- **Padding**: 24-28px
- **Border Radius**: 8px
- **Text Color**: White
- **Shadow**: Minimal or none

**Hover State**:
- Background: rgba(255, 255, 255, 0.15)
- Border: rgba(255, 255, 255, 0.3)
- Transform: translateY(-2px)

#### Highlighted Card
- **Background**: Electric Blue (#0000FF) or gradient
- **Text Color**: White
- **Padding**: 32-40px
- **Border Radius**: 8-12px
- **Shadow**: 0 4px 16px rgba(0, 0, 255, 0.2)

### Navigation

#### Primary Navigation Bar
- **Background**: Electric Blue (#0000FF)
- **Height**: 64-72px
- **Position**: Sticky top: 0
- **Z-index**: 100
- **Padding**: 0 24-32px horizontal
- **Backdrop Filter**: None needed (solid color)

**Logo**:
- Height: 32-40px
- Position: Left aligned
- Clickable area: Full height of nav

**Navigation Links**:
- Color: White
- Font Size: 16px
- Font Weight: 500
- Padding: 8-12px vertical, 16-20px horizontal
- Hover: Opacity 80% or subtle background
- Active: Slight background tint or underline

**Utility Links** (Contact, Registration, Sign In):
- Position: Right side
- Same styling as nav links
- May have button styling for primary action

#### Secondary Navigation (Sub-menu)
- **Background**: White (#FFFFFF)
- **Border Bottom**: 1px solid rgba(0, 0, 0, 0.1)
- **Position**: Sticky below primary nav (top: 64px)
- **Z-index**: 90
- **Height**: Auto (content height)
- **Padding**: 0 16-24px

**Navigation Items**:
- Display: Inline-block or flex
- Padding: 14-16px vertical, 16-20px horizontal
- Font Size: 15-16px
- Font Weight: 500
- Color: Dark gray (#2D2D2D)
- Border Bottom: 2px solid transparent

**Hover State**:
- Color: Blue (#0000FF)
- Border Bottom: Blue

**Active State**:
- Background: Light gray (#F5F5F5)
- Border Bottom: 2px solid Blue
- Color: Dark
- Font Weight: 600 (optional)

**Mobile Behavior**:
- Horizontal scroll if needed
- Touch-friendly padding
- No wrap text

### Forms

#### Input Fields
- **Height**: 44-48px
- **Padding**: 12-14px horizontal
- **Border**: 1px solid rgba(0, 0, 0, 0.2)
- **Border Radius**: 4px
- **Font Size**: 16px
- **Background**: White

**Focus State**:
- Border: 2px solid Blue (#0000FF)
- Outline: None (replaced by border)
- Shadow: 0 0 0 3px rgba(0, 0, 255, 0.1)

**Error State**:
- Border: 2px solid Red (#E74C3C or similar)
- Background: Light red tint (optional)

#### Search Input
- **Icon**: Magnifying glass, left positioned
- **Padding Left**: 40-48px (to accommodate icon)
- **Border**: Often lighter or styled differently
- **Background**: Sometimes subtle gray

### Images

#### Standard Images
- **Border Radius**: 8px (standard), 12-16px (large features)
- **Aspect Ratio**: Maintained, no distortion
- **Object Fit**: Cover for backgrounds, contain for logos
- **Loading**: Lazy load below fold

#### Hero Images
- **Treatment**: Often with diagonal clip-path or overlay
- **Positioning**: Cover, centered
- **Overlay**: Optional gradient or color overlay for text contrast

#### Card Images
- **Aspect Ratio**: Often 16:9 or 4:3
- **Border Radius**: Match card (8px)
- **Position**: Top of card or side-by-side with content

### Dividers & Borders

#### Section Dividers
- **Style**: Often none (whitespace sufficient)
- **When Used**: 1px solid rgba(0, 0, 0, 0.08) on light backgrounds
- **Color on Dark**: rgba(255, 255, 255, 0.15)

#### Border Widths
- **Standard**: 1px
- **Emphasized**: 2px (buttons, focus states, active tabs)
- **Decorative**: 4px (heading underlines)

#### Border Radius Scale
- **Small**: 4px - buttons, inputs, small elements
- **Medium**: 8px - cards, standard containers
- **Large**: 12-16px - feature cards, hero sections
- **Circular**: 50% - avatars, icon containers, badges

---

## Shadows & Elevation

### Elevation System
Four-level shadow system creates depth and hierarchy

#### Level 1 - Resting Cards
- **Shadow**: 0 2px 8px rgba(0, 0, 0, 0.08)
- **Usage**: Default card state, subtle separation
- **Blur**: 8px
- **Spread**: 0
- **Color**: Black at 8% opacity

#### Level 2 - Hover States
- **Shadow**: 0 8px 24px rgba(0, 0, 0, 0.12)
- **Usage**: Card hover, interactive elements
- **Blur**: 24px
- **Spread**: 0
- **Y-offset**: 8px (lifted appearance)
- **Color**: Black at 12% opacity

#### Level 3 - Modals & Overlays
- **Shadow**: 0 16px 48px rgba(0, 0, 0, 0.16)
- **Usage**: Modal dialogs, popovers, important overlays
- **Blur**: 48px
- **Spread**: 0
- **Y-offset**: 16px
- **Color**: Black at 16% opacity

#### Level 4 - Dropdown Menus
- **Shadow**: 0 4px 16px rgba(0, 0, 0, 0.1)
- **Usage**: Dropdown menus, tooltips, small floating elements
- **Blur**: 16px
- **Spread**: 0
- **Y-offset**: 4px

### Colored Shadows
Used for special emphasis on colored elements

#### Green Button Shadow
- **Shadow**: 0 4px 12px rgba(163, 255, 133, 0.3)
- **Usage**: Green CTA button hover state
- **Creates**: Glow effect matching button color

#### Blue Card Shadow
- **Shadow**: 0 4px 16px rgba(0, 0, 255, 0.2)
- **Usage**: Highlighted blue cards
- **Creates**: Brand-color glow

---

## Animations & Transitions

### Standard Transitions
- **Duration**: 300ms (0.3s) for most interactions
- **Easing**: ease or ease-in-out for natural feel
- **Properties**: all or specific (transform, opacity, background, color)

### Hover Interactions

#### Lift Effect
- **Transform**: translateY(-2px) for subtle, translateY(-4px) for cards
- **Duration**: 300ms
- **Accompanies**: Shadow increase
- **Usage**: Buttons, cards, interactive elements

#### Opacity Change
- **From**: 100% (default)
- **To**: 80% (hover)
- **Duration**: 200-300ms
- **Usage**: Links, transparent buttons, subtle interactions

#### Shadow Growth
- **From**: Level 1 shadow
- **To**: Level 2 shadow
- **Duration**: 300ms
- **Usage**: Cards on hover

#### Icon Movement
- **Transform**: translateX(2-4px) for arrows
- **Duration**: 200-300ms
- **Easing**: ease-out
- **Usage**: Arrow icons in buttons/links

### Page Animations

#### Scroll Behavior
- **Property**: scroll-behavior: smooth
- **Usage**: Anchor link navigation, smooth page scrolling
- **Duration**: Browser default (typically 400-600ms)

#### Fade In
- **Opacity**: 0 to 1
- **Duration**: 400-600ms
- **Usage**: Page load, content reveal
- **May Include**: translateY(20px) to 0 for slide-up effect

### Special Effects

#### Network Glow Animation
- **Effect**: Pulsing glow on network visualization nodes
- **Duration**: 2-3 seconds per cycle
- **Iteration**: Infinite
- **Easing**: ease-in-out
- **Property**: Opacity or shadow intensity

#### Gradient Animation
- **Effect**: Subtle gradient position shift on hover
- **Duration**: 400ms
- **Usage**: Background gradients on hover
- **Property**: background-position

#### Loading States
- **Effect**: Skeleton screens or pulse animation
- **Duration**: 1.5s infinite
- **Easing**: ease-in-out
- **Color**: Light gray pulsing

### Animation Performance
- **Use**: transform and opacity for performance (GPU accelerated)
- **Avoid**: Animating width, height, top, left when possible
- **Will-change**: Use sparingly for elements that will definitely animate
- **Reduced Motion**: Respect prefers-reduced-motion media query

---

## Opacity & Transparency

### Standard Opacity Values

#### Full Opacity
- **Value**: 100% (1.0)
- **Usage**: Primary content, default state

#### Reduced Opacity
- **Value**: 80-90% (0.8-0.9)
- **Usage**: Text on colored backgrounds, hover states, secondary content

#### Medium Opacity
- **Value**: 60-70% (0.6-0.7)
- **Usage**: Disabled text, subtle elements

#### Disabled State
- **Value**: 50% (0.5)
- **Usage**: Disabled buttons, inactive elements
- **Accompanies**: Cursor: not-allowed

#### Subtle Overlay
- **Value**: 10-20% (0.1-0.2)
- **Usage**: Background overlays on colored sections (white on blue)
- **Creates**: Glassmorphism effects, subtle depth

#### Modal Backdrop
- **Value**: 90-95% (0.9-0.95)
- **Usage**: Dark backdrop behind modals
- **Color**: Usually black or dark navy

### Transparency in Backgrounds

#### Glassmorphism Cards
- **Background**: rgba(255, 255, 255, 0.1)
- **Backdrop Filter**: blur(10px)
- **Border**: 1px solid rgba(255, 255, 255, 0.2)
- **Effect**: Frosted glass appearance

#### Colored Overlays
- **Background**: rgba(0, 0, 255, 0.8) - blue at 80%
- **Usage**: Over images for text contrast
- **Blend Mode**: Sometimes multiply or overlay

---

## Layout Patterns

### Hero Sections

#### Full-Width Hero with Diagonal Split Design (PRIMARY PATTERN - CURRENTLY IMPLEMENTED)
- **Structure**: Left content area (55%), Right image area (45%)
- **Background**: Solid Electric Blue (#0000FF) on left, full-bleed image on right
- **Diagonal Transition**: Clip-path creates diagonal edge on image section
- **Height**: 500-600px desktop, auto mobile
- **Mobile**: Stacks vertically, text above image
- **Full Width**: No white space, edge-to-edge layout

**Content Area** (Left):
- Flex: 55% width
- Background: #0000FF (Electric Blue)
- Padding: 48-80px (desktop), 64-120px (large desktop), 40px 24px (mobile)
- Vertical centering with flexbox
- Color: White text
- Z-index: 2 (above image)
- No margins or gaps

**Image Area** (Right):
- Flex: 45% width
- Background-size: cover (fills space without cropping visible areas)
- Background-position: center center
- Background-color: #0000FF (blue fallback eliminates white space)
- Clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%)
- Creates diagonal entrance from left side
- Z-index: 1 (behind content)
- Overflow: hidden
- No margins or gaps

**Typography**:
- Title: 2.5-3.5rem (responsive), Bold (700), White
- Description: 1.125-1.25rem (responsive), Regular (400), White, Line-height: 1.7
- CTA: Lime Green button (#A3FF85), "Find out more" text

**Layout Constraints**:
- Hero container: width: 100%, max-width: 100%, margin: 0, padding: 0
- Flex container: gap: 0 (no space between sections)
- Background: #0000FF on hero container to eliminate white space
- Seamless merge with navigation bar above (same blue background)

**Mobile Behavior**:
- Stacks vertically (flex-direction: column)
- Text section first, image second
- Removes diagonal clip-path on mobile
- Image min-height: 300px
- Responsive padding adjustments

#### Centered Hero
- **Alignment**: Center text, center container
- **Max Width**: 800-900px
- **Padding**: 80-120px vertical
- **Background**: Often solid blue or gradient

### Content Sections

#### Two-Column Layout (Text + Image)
- **Grid**: 50/50 or 60/40 split
- **Gap**: 48-64px
- **Alignment**: Vertical center
- **Variants**: Text left/image right, or reverse
- **Mobile**: Stack vertically

#### Three-Column Grid
- **Usage**: Feature cards, service offerings
- **Gap**: 24-32px
- **Card Consistency**: Equal height preferred
- **Mobile**: Single column or 2-column

#### Content with Sidebar
- **Main Content**: 65-70% width
- **Sidebar**: 30-35% width
- **Gap**: 32-48px
- **Sticky Sidebar**: Common pattern

### Quote/Testimonial Sections

#### Split Layout
- **Left**: Quote text on solid dark background (50%)
- **Right**: Image (50%)
- **Height**: Min 400px, often equal height
- **Quote Padding**: 48-64px
- **Mobile**: Stack with quote on top

#### Full-Width with Background
- **Background**: Image with dark overlay
- **Quote**: Centered, white text
- **Max Width**: 800px
- **Padding**: 80-120px vertical

### Call-to-Action Sections

#### Split CTA with Image
- **Left**: Blue background with text and button (40-50%)
- **Right**: Full-height image (50-60%)
- **Height**: 400-600px
- **Content**: Centered vertically in blue section
- **Mobile**: Stack or image as background

#### Centered CTA
- **Background**: Solid blue or image with overlay
- **Content**: Centered, max-width 700px
- **Padding**: 64-96px vertical
- **Includes**: Heading, description, CTA button

### Grid Systems

#### Container
- **Max Width**: 1200-1400px
- **Horizontal Padding**: 16-32px
- **Centering**: margin: 0 auto

#### Column Gaps
- **Standard**: 24-32px
- **Tight**: 16px
- **Loose**: 40-48px

#### Responsive Breakpoints
- **Mobile**: < 640px (1 column)
- **Tablet**: 640-1024px (2 columns often)
- **Desktop**: > 1024px (3+ columns)

---

## Page-Specific Patterns

### About Page Hero
- **Layout**: Diagonal split (blue left, image right)
- **Blue Section**: 55-60% width
- **Heading**: Large (56-64px)
- **Description**: 18-20px, comfortable line-height
- **CTA**: Green button
- **Image**: Diagonal clip-path entry from left side
- **Height**: 480-560px

### Secondary Navigation
- **Position**: Below main navigation
- **Background**: White
- **Border**: Bottom border only
- **Scroll**: Horizontal scroll on mobile
- **Sticky**: Sticks below main nav when scrolling
- **Items**: 7-10 navigation items typical

### Two-Column Content Sections
- **Pattern**: Alternating image/text sides
- **First Section**: Often text left, image right
- **Second Section**: Image left, text right
- **Third Section**: Text left, image right (alternates)
- **Vertical Spacing**: 64-96px between sections
- **Images**: Rounded corners (8px)

### Quote Block with Image