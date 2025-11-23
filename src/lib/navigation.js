// src/lib/navigation.js

function closeAllDropdowns(header) {
  // Close all open desktop dropdowns by removing their active classes
  header.querySelectorAll('.js-navigation__item.is--active').forEach(item => {
    item.classList.remove('is--active');
    const btn = item.querySelector('.desktop-nav[data-target]');
    if (btn) {
        btn.setAttribute('aria-expanded', 'false');
    }
  });
  header.querySelectorAll('.js-navigation__secondary.is-open').forEach(dropdown => {
    dropdown.classList.remove('is-open', 'is--active');
  });
}

// Toggle visibility of elements (mostly for mobile)
function toggleElement(targetId, button) {
  const target = document.querySelector(targetId);
  if (!target) {
    console.warn('Target not found:', targetId);
    return;
  }

  const isExpanded = button.getAttribute('aria-expanded') === 'true';
  const newState = !isExpanded;
  
  button.setAttribute('aria-expanded', newState);
  
  const navItem = button.closest('.js-navigation__item');
  
  if (newState) {
    target.classList.add('is-open');
    if (navItem) navItem.classList.add('active');
  } else {
    target.classList.remove('is-open');
    if (navItem) navItem.classList.remove('active');
  }
}

export function initializeNavigation() {
  if (typeof window === 'undefined') {
    return;
  }

  console.log('Navigation script initializing...');
  const header = document.getElementById('menu-header');
  if (!header) {
      console.error('#menu-header not found. Navigation script cannot run.');
      return;
  }

  // --- MOBILE AND GENERAL CLICK HANDLERS ---

  // Handles hamburger menu, search button, and other general toggles
  document.addEventListener('click', function(e) {
    const toggleBtn = e.target.closest('.js-toggle, .js-toggle-local, .js-toggle__header-group');
    if (!toggleBtn) return;

    // Do not interfere with other scripts that might use js-toggle
    if(toggleBtn.closest('.js-modal')) return;

    e.preventDefault();
    e.stopPropagation();
    
    let targetSelector = toggleBtn.getAttribute('data-target') || toggleBtn.getAttribute('href');
    if (!targetSelector) return;
    
    // Ensure it's a valid selector
    if (!targetSelector.startsWith('#')) {
      targetSelector = '#' + targetSelector;
    }

    // Special handler for main mobile navigation body class
    if (targetSelector === '#navigation') {
      const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      document.body.classList.toggle('on--navigation', !isExpanded);
      toggleBtn.setAttribute('aria-expanded', String(!isExpanded));
    } else {
      // Handle all other toggles, like mobile submenus
      toggleElement(targetSelector, toggleBtn);
    }
  });

  // --- DESKTOP HOVER LOGIC ---

  header.addEventListener('mouseover', (e) => {
    if (window.innerWidth < 1000) return; // Desktop only

    const navItem = e.target.closest('.js-navigation__item');
    if (navItem) {
      const desktopBtn = navItem.querySelector('.desktop-nav[data-target]');
      if (!desktopBtn) return;

      const targetId = desktopBtn.getAttribute('data-target');
      if (!targetId) return;
      
      // Close other menus before opening the new one
      closeAllDropdowns(header);

      const target = document.querySelector(targetId);
      if (target) {
        target.classList.add('is-open', 'is--active');
        navItem.classList.add('is--active');
        desktopBtn.setAttribute('aria-expanded', 'true');
      }
    }
  });

  header.addEventListener('mouseleave', (e) => {
    if (window.innerWidth < 1000) return; // Desktop only
    closeAllDropdowns(header);
  });

  // --- CLICK OUTSIDE HANDLER ---
  
  document.addEventListener('click', function(e) {
    // If the click is outside the header, close dropdowns.
    if (!header.contains(e.target)) {
      if (window.innerWidth >= 1000) { // Only run on desktop
        closeAllDropdowns(header);
      }
    }
  });


  // --- INITIALIZATION ---

  // Set initial state for all dropdowns by ensuring they are closed
  document.querySelectorAll('.js-navigation__secondary').forEach(dropdown => {
    dropdown.classList.remove('is-active', 'is-open');
  });
  document.querySelectorAll('.js-navigation__item').forEach(item => {
    item.classList.remove('active', 'is--active');
  });


  console.log('Navigation initialized successfully');
}
