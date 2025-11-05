# Validation Checklist

Use this checklist to verify code quality and adherence to project standards before committing changes.

## CSS Class Verification

### Before Using Any CSS Class

- [ ] Search for the class in `src/styles/versioned?v=YfCRKR7N-ctmfG5btvdeUf1_h_ilfO7hBjW1IbqVNUg1`
- [ ] Verify the class exists and understand its purpose
- [ ] Check if it needs specific parent/context classes
- [ ] Document any required parent classes or context

### Verification Commands

```bash
# Search for a class in screen CSS
grep -n "\.class-name" "src/styles/versioned?v=YfCRKR7N-ctmfG5btvdeUf1_h_ilfO7hBjW1IbqVNUg1"

# Extract all classes from a component
grep -oE 'class="[^"]*"' src/components/ComponentName.astro | sed 's/class="//;s/"//g' | tr ' ' '\n' | sort -u
```

## HTML Structure Verification

### Component Creation Checklist

- [ ] Found corresponding section in reference HTML file (`src/temp/`)
- [ ] Copied HTML structure exactly as-is
- [ ] Preserved all class names exactly
- [ ] Preserved all data attributes exactly
- [ ] Preserved all IDs exactly
- [ ] Preserved nesting structure exactly
- [ ] Preserved whitespace and formatting
- [ ] Verified no custom modifications made

### Reference Files

- **Header**: `src/temp/header_complete.html`
- **Page Structure**: `src/temp/sypplychainpages.html`
- **Desktop Menus**: `src/temp/desktop_menu_exact.html`
- **Homepage**: `src/temp/target_index.html`

## Navigation Functionality Test Checklist

### Desktop Testing (min-width: 62.5em / 1000px)

- [ ] Desktop utility bar visible
- [ ] Desktop navigation buttons visible (not mobile buttons)
- [ ] Desktop mega-menus appear on hover
- [ ] Desktop mega-menus appear on click
- [ ] Only one mega-menu opens at a time
- [ ] Mega-menus close when clicking outside
- [ ] Mega-menus close when hovering over another nav item
- [ ] Search button works
- [ ] Account dropdown works

### Mobile Testing (max-width: 62.49875em / 999.99px)

- [ ] Mobile utility bar visible
- [ ] Mobile navigation buttons visible (not desktop buttons)
- [ ] Hamburger menu opens/closes navigation
- [ ] Mobile submenus expand/collapse on click
- [ ] Only one submenu open at a time
- [ ] Search modal works
- [ ] Account dropdown works
- [ ] Navigation closes when clicking outside

### Cross-Browser Testing

- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

## Component Creation Criteria

### Requirements for New Components

- [ ] Component is based on Woodmac HTML reference from `src/temp/`
- [ ] All CSS classes exist in versioned CSS files
- [ ] HTML structure matches reference exactly
- [ ] Custom CSS (if any) is in `inline.css` with comments
- [ ] Component follows same pattern as `NewFooter.astro`

### Components That Follow This Pattern

- ✅ `NewFooter.astro` - Perfect example
- ✅ `NewHeader.astro` - Static replica from `header_complete.html`

### Components That Need Review

All other components should be reviewed to ensure they:
- Are based on Woodmac references
- Use only classes from versioned CSS files
- Match reference HTML structure exactly

## File Location Verification

### CSS Files

- [ ] Custom CSS only in `public/styles/inline.css`
- [ ] No inline styles in components (`<style>` tags)
- [ ] No style attributes on HTML elements
- [ ] All overrides documented with comments

### JavaScript Files

- [ ] Navigation script in `public/js/navigation.js`
- [ ] No inline scripts in components
- [ ] Script loaded before `</body>` tag

## Pre-Commit Checklist

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

### Functionality Verification
- [ ] Navigation works on desktop
- [ ] Navigation works on mobile
- [ ] No console errors
- [ ] No broken links
- [ ] Images load correctly

## Component Re-Introduction Process

If moving a component from `_needs_review/` back to active use:

1. **Verify Reference Source**:
   - [ ] Identify corresponding HTML in `src/temp/` files
   - [ ] Document which reference file was used

2. **Verify CSS Classes**:
   - [ ] Extract all classes from component
   - [ ] Verify each class exists in versioned CSS
   - [ ] Document any missing classes (should not exist)

3. **Verify HTML Structure**:
   - [ ] Compare component HTML to reference HTML
   - [ ] Verify exact match (classes, IDs, structure)
   - [ ] Document any differences (should not exist)

4. **Verify Custom CSS**:
   - [ ] Check if component has custom CSS
   - [ ] Move custom CSS to `inline.css` if needed
   - [ ] Document why override is needed

5. **Test Functionality**:
   - [ ] Test on desktop
   - [ ] Test on mobile
   - [ ] Verify no console errors

6. **Documentation**:
   - [ ] Update component documentation
   - [ ] Note which reference file was used
   - [ ] Document any required context

---

**Last Updated**: 2025-01-04
**Status**: Active - Use before every commit
