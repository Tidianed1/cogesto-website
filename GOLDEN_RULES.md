# Golden Rules for Cogesto Consulting Website Development

These three rules are **MANDATORY** for all development work on this project. They ensure consistency, maintainability, and adherence to the Woodmac reference design.

## Rule #1: NO New CSS Classes

**Every CSS class used in any `.astro` component MUST exist in the versioned CSS reference files.**

### Source of Truth
- **Screen CSS**: `src/styles/versioned?v=YfCRKR7N-ctmfG5btvdeUf1_h_ilfO7hBjW1IbqVNUg1` (27,973 lines)
- **Print CSS**: `src/styles/versioned?v=vYR7kuamBcOnNX6rtnCC_-JxhnsAiNV0oRlFrulRqGE` (4,186 lines)

### Verification Process
1. Before using any CSS class, search for it in the versioned CSS files
2. Use `grep` or code search to verify the class exists:
   ```bash
   grep -n "class-name" src/styles/versioned\?v=YfCRKR7N-ctmfG5btvdeUf1_h_ilfO7hBjW1IbqVNUg1
   ```
3. If the class doesn't exist, **DO NOT USE IT**
4. If you need custom styling, add it to `public/styles/inline.css` using existing classes as base

### Custom CSS Overrides
- All custom CSS MUST go in `public/styles/inline.css`
- Always comment why you're overriding
- Verify the base class exists in reference CSS before overriding

---

## Rule #2: HTML Structure Must Match Reference Files Exactly

**The HTML structure of any component must EXACTLY match the corresponding section in the `.html` files located in `src/temp/` directory.**

### Reference Files
- **Header Navigation**: `src/temp/header_complete.html` ⭐ PRIMARY HEADER REFERENCE
- **Page Structure**: `src/temp/sypplychainpages.html` ⭐ PRIMARY PAGE STRUCTURE REFERENCE
- **Desktop Menus**: `src/temp/desktop_menu_exact.html`
- **Homepage**: `src/temp/target_index.html`

### Verification Process
1. Find the corresponding section in the reference HTML file
2. Copy the HTML structure EXACTLY as-is:
   - Same class names
   - Same HTML tags
   - Same data attributes
   - Same IDs
   - Same nesting structure
3. Preserve whitespace and formatting
4. DO NOT modify:
   - Class names
   - HTML structure
   - Data attributes
   - IDs
   - Any HTML elements

### Example
If building a navigation component, copy the exact HTML from `src/temp/header_complete.html` - do not restructure or rename classes.

---

## Rule #3: Custom CSS Overrides in inline.css Only

**All custom CSS overrides MUST go into `public/styles/inline.css` and MUST be clearly commented.**

### File Location
- `public/styles/inline.css` - Loaded last in HTML `<head>`

### Requirements
1. All custom CSS goes in `inline.css` only
2. Every override must have a comment explaining:
   - Why you're overriding
   - Which reference CSS rule you're overriding
   - Line number or context from reference CSS (if applicable)
3. Use `!important` only when necessary to override reference CSS
4. Verify the base class exists in reference CSS before overriding

### Example
```css
/* Custom CSS overrides only - verify classes exist in versioned CSS files before using */

/* Override: Desktop navigation button visibility
   Reference CSS: versioned screen CSS, line ~26815-26837
   Reason: Ensuring correct display on desktop/mobile breakpoints */
.desktop-nav {
    display: none !important;
}
```

---

## Component Creation Criteria

All components must follow the same principle as `NewFooter.astro`:

1. **Based on Woodmac References**: Extract HTML structure from `src/temp/` HTML files
2. **Use Only Reference Classes**: Verify all CSS classes exist in versioned CSS files
3. **Exact Match**: HTML structure must match reference exactly
4. **Custom Overrides**: Any custom CSS in `inline.css` with clear comments

### Components That Follow This Pattern
- ✅ `NewFooter.astro` - Perfect example, based on Woodmac footer reference

### Components That Need Review
- All other components should be reviewed to ensure they follow this pattern
- Components not based on Woodmac references will be removed in cleanup phase

---

## Verification Checklist

Before committing any code:

### CSS Verification
- [ ] All CSS classes used exist in `src/styles/versioned?v=YfCRKR7N-ctmfG5btvdeUf1_h_ilfO7hBjW1IbqVNUg1`
- [ ] No custom CSS classes created
- [ ] Custom overrides documented in `inline.css` with comments

### HTML Structure Verification
- [ ] HTML structure matches reference file in `src/temp/`
- [ ] Class names match exactly
- [ ] Data attributes match exactly
- [ ] IDs match exactly
- [ ] Nesting structure matches exactly

### File Location Verification
- [ ] Custom CSS only in `public/styles/inline.css`
- [ ] No inline styles in components
- [ ] No style tags in components

---

## Enforcement

These rules are non-negotiable. Code that violates these rules will be rejected in code review.

**Remember**: The goal is to maintain exact parity with the Woodmac reference design. Any deviation must be justified and documented.

---

**Last Updated**: 2025-01-04
**Status**: Active - All developers must follow these rules
