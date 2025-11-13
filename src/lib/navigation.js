// src/lib/navigation.js

function closeAllDropdowns() {
  // Close all open desktop dropdowns
  document.querySelectorAll('.js-navigation__secondary.is-open').forEach(dropdown => {
    dropdown.classList.remove('is-open', 'is--active');
    dropdown.style.visibility = 'hidden';
    dropdown.style.clip = 'rect(0, 0, 0, 0)';
    dropdown.style.opacity = '0';

    const btn = document.querySelector(`[data-target="#${dropdown.id}"]`);
    if (btn) {
      btn.setAttribute('aria-expanded', 'false');
      btn.closest('.js-navigation__item')?.classList.remove('is--active');
    }
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

    e.preventDefault();
    e.stopPropagation();
    
    let targetId = toggleBtn.getAttribute('data-target') || toggleBtn.getAttribute('href') || toggleBtn.getAttribute('aria-controls');
    if (!targetId) return;

    if (!targetId.startsWith('#')) {
      targetId = '#' + targetId;
    }

    // Special handler for hamburger body class
    if (targetId === '#navigation') {
      const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      document.body.classList.toggle('on--navigation', !isExpanded);
      toggleBtn.setAttribute('aria-expanded', !isExpanded);
    } else {
      toggleElement(targetId, toggleBtn);
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
      closeAllDropdowns();

      const target = document.querySelector(targetId);
      if (target) {
        target.classList.add('is-open', 'is--active');
        target.style.visibility = 'visible';
        target.style.clip = 'auto';
        target.style.opacity = '1';
        navItem.classList.add('is--active');
        desktopBtn.setAttribute('aria-expanded', 'true');
      }
    }
  });

  header.addEventListener('mouseleave', (e) => {
    if (window.innerWidth < 1000) return; // Desktop only
    closeAllDropdowns();
  });

  // --- CLICK OUTSIDE HANDLER ---
  
  document.addEventListener('click', function(e) {
    // If the click is outside the header, close dropdowns.
    if (!header.contains(e.target)) {
      closeAllDropdowns();
    }
  });


  // --- INITIALIZATION ---

  // Set initial state for all dropdowns
  document.querySelectorAll('.js-navigation__secondary').forEach(dropdown => {
    dropdown.classList.remove('is-active', 'is-open');
    dropdown.style.visibility = 'hidden';
    dropdown.style.clip = 'rect(0 0 0 0)';
    dropdown.style.opacity = '0';
  });

  console.log('Navigation initialized successfully');
}
