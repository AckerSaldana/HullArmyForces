/**
 * Keyboard Navigation Module
 * Handles keyboard accessibility
 */

export class KeyboardNavigation {
  constructor() {
    this.init();
  }

  init() {
    // Add keyboard support for custom interactive elements
    document.addEventListener('keydown', (e) => this.handleKeyDown(e));
  }

  handleKeyDown(e) {
    // ESC key to close mobile menu
    if (e.key === 'Escape') {
      const navMenu = document.getElementById('navMenu');
      const navToggle = document.getElementById('navToggle');

      if (navMenu && navMenu.classList.contains('active')) {
        navToggle.click();
      }
    }
  }
}
