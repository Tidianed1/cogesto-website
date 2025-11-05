# Navigation Consistency Guide

## Overview
All pages MUST use the shared navigation script (`/js/navigation.js`) for consistent behavior across the site.

## Implementation Standard

### ✅ Correct Pattern
```astro
<footer>
  <NewFooter />
</footer>

<!-- Use shared navigation script for consistency -->
<script src="/js/navigation.js"></script>
```

### ❌ Anti-Pattern - DO NOT USE
```astro
<script is:inline>
  // Inline navigation scripts - causes inconsistency
  // ...
</script>
```

## Standardized Pages

All pages have been updated to use the shared script:
- ✅ `/about/overview/`
- ✅ `/about/our-story/`
- ✅ `/about/our-people/`
- ✅ `/about/our-values/`
- ✅ `/about/our-culture/`
- ✅ `/about/our-customers/`
- ✅ `/expertises/fonctionnelles/strategie-entreprises/`

## Benefits

1. **Consistency**: Same navigation behavior on all pages
2. **Maintainability**: Single source of truth for navigation logic
3. **Performance**: Shared script can be cached by browser
4. **Clean Code**: No code duplication across pages

## Navigation Features

The shared `navigation.js` includes:
- ✅ Desktop mega-menu support (hover & click)
- ✅ Mobile hamburger menu toggle
- ✅ Mobile submenu accordion
- ✅ Search modal toggle
- ✅ Account dropdown toggle
- ✅ Outside click handlers
- ✅ Keyboard navigation support

## File Structure

```
public/js/navigation.js          # Shared navigation script (ALL pages use this)
src/pages/about/*.astro          # All use <script src="/js/navigation.js"></script>
src/pages/expertises/**/*.astro  # All use <script src="/js/navigation.js"></script>
```

