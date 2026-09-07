(function () {
  'use strict';

  function getCurrentYear(date = new Date()) {
    return String(date.getFullYear());
  }

  function getMenuState(isOpen) {
    return {
      expanded: String(isOpen),
      label: isOpen ? 'Cerrar menú' : 'Abrir menú'
    };
  }

  function initPage(documentRef = document) {
    const button = documentRef.querySelector('[data-menu-button]');
    const menu = documentRef.querySelector('[data-menu]');
    const year = documentRef.querySelector('[data-year]');

    if (year) year.textContent = getCurrentYear();

    if (button && menu) {
      const setMenu = (isOpen) => {
        const state = getMenuState(isOpen);
        button.setAttribute('aria-expanded', state.expanded);
        button.querySelector('.sr-only').textContent = state.label;
        menu.classList.toggle('open', isOpen);
      };
      button.addEventListener('click', () => setMenu(button.getAttribute('aria-expanded') !== 'true'));
      menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
    }

    const reveals = documentRef.querySelectorAll('.reveal');
    if ('IntersectionObserver' in globalThis) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      reveals.forEach((element) => observer.observe(element));
    } else {
      reveals.forEach((element) => element.classList.add('visible'));
    }
  }

  if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => initPage(document));
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { getCurrentYear, getMenuState };
  }
})();
