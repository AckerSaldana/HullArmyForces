/**
 * Main JavaScript Entry Point
 * Hull Armed Force Forum
 *
 * This file imports and initializes all modules
 */

import { Navigation } from './navigation.js';
import { BackToTop, ScrollAnimations, SmoothScroll, HeroAnimations } from './scroll.js';
import { NewsletterForm } from './forms.js';
import { KeyboardNavigation } from './keyboard.js';

/**
 * Initialize all components when DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Navigation
  new Navigation();

  // Initialize Scroll Features
  new BackToTop();
  new ScrollAnimations();
  new SmoothScroll();
  new HeroAnimations();

  // Initialize Forms
  new NewsletterForm();

  // Initialize Keyboard Navigation
  new KeyboardNavigation();

  // Log initialization (only in development)
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('🎯 Hull Armed Force Forum - All modules initialized');
  }
});

/**
 * Performance Monitoring (Development Only)
 */
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
  window.addEventListener('load', () => {
    if (window.performance) {
      const perfData = window.performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
      console.log(`⚡ Page load time: ${pageLoadTime}ms`);
    }
  });
}
