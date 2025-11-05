# Navigation Visibility Fix

## Problem
- Mega-menus not appearing on hover despite `is--active` class being added
- Sticky navigation not working on scroll

## Root Cause

### Mega-Menu Visibility
CSS specificity conflict:
- `.nav-secondary.is--active` exists (line 21704) with correct properties
- `.new-mega-menu .nav-secondary` (line 21609) sets `visibility: hidden` and `clip: rect(0 0 0 0)` on desktop
- Both have same specificity (0,0,2,0), so later rule wins

### Sticky Navigation
`position: sticky` requires `overflow: visible` on all ancestors. Any parent with `overflow: hidden/scroll/auto` breaks sticky positioning.

## Solution

### Fix 1: Mega-Menu Visibility
```css
.nav-secondary.js-navigation__secondary.is--active {
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
    clip: auto !important;
    z-index: 99999 !important;
}
```
- Uses more specific selector (0,0,3,0) to override base rule
- `!important` ensures override of conflicting rules

### Fix 2: Sticky Navigation
```css
body,
header#menu-header {
    overflow: visible !important;
}
```
- Forces visible overflow on parent elements

## Files Changed
- `public/styles/inline.css`

## Verification
After hard refresh:
- Mega-menus appear on desktop hover
- Navigation bar sticks to top on scroll
- Background turns white on scroll (script handles)

