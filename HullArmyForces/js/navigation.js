/**
 * Navigation Module
 * Handles navbar interactions, mobile menu, and scroll effects
 */

export class Navigation {
  constructor() {
    this.navbar = document.getElementById('navbar');
    this.navToggle = document.getElementById('navToggle');
    this.navMenu = document.getElementById('navMenu');
    this.navLinks = document.querySelectorAll('.nav__link');
    this.scrollIndicator = document.querySelector('.scroll-indicator');
    this.lastScrollPosition = 0;
    this.scrollThreshold = 100; // Distance from top before showing navbar

    this.init();
  }

  init() {
    // Add scroll event listener for sticky navbar
    window.addEventListener('scroll', () => this.handleScroll());

    // Mobile menu toggle
    if (this.navToggle) {
      this.navToggle.addEventListener('click', () => this.toggleMobileMenu());
    }

    // Close mobile menu when clicking on a link
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => this.handleNavLinkClick(e));
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => this.handleOutsideClick(e));

    // Update active link on scroll
    window.addEventListener('scroll', () => this.updateActiveLink());

    // Handle initial scroll position
    this.handleScroll();
  }

  /**
   * Handle scroll event for navbar visibility and direction
   */
  handleScroll() {
    const currentScrollPosition = window.scrollY;
    const showNavbarThreshold = 200; // Show navbar with background only after 200px

    // Handle scroll indicator visibility (works on both desktop and mobile)
    if (this.scrollIndicator) {
      if (currentScrollPosition < 50) {
        // At very top - show scroll indicator
        this.scrollIndicator.classList.remove('hidden');
      } else {
        // Scrolled down - hide scroll indicator
        this.scrollIndicator.classList.add('hidden');
      }
    }

    // At top of page - transparent
    if (currentScrollPosition < this.scrollThreshold) {
      this.navbar.classList.add('at-top');
      this.navbar.classList.remove('visible', 'hidden');
    }
    // Scrolling down - hide navbar
    else if (currentScrollPosition > this.lastScrollPosition && currentScrollPosition > this.scrollThreshold) {
      this.navbar.classList.remove('at-top', 'visible');
      this.navbar.classList.add('hidden');
    }
    // Scrolling up - show navbar only if far enough from top
    else if (currentScrollPosition < this.lastScrollPosition && currentScrollPosition > showNavbarThreshold) {
      this.navbar.classList.remove('at-top', 'hidden');
      this.navbar.classList.add('visible');
    }
    // In between zone (100-200px) when scrolling up - keep hidden
    else if (currentScrollPosition >= this.scrollThreshold && currentScrollPosition <= showNavbarThreshold) {
      this.navbar.classList.remove('at-top', 'visible');
      this.navbar.classList.add('hidden');
    }

    this.lastScrollPosition = currentScrollPosition;
  }

  /**
   * Toggle mobile menu visibility
   */
  toggleMobileMenu() {
    const isActive = this.navMenu.classList.toggle('active');
    this.navToggle.setAttribute('aria-expanded', isActive);
    this.navToggle.classList.toggle('active');

    // Prevent body scroll when menu is open
    if (isActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  /**
   * Handle navigation link clicks
   */
  handleNavLinkClick(e) {
    const href = e.target.getAttribute('href');

    // Only handle internal links (starting with #)
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Close mobile menu if open
        if (this.navMenu.classList.contains('active')) {
          this.toggleMobileMenu();
        }

        // Smooth scroll to target
        const navHeight = this.navbar.offsetHeight;
        const targetPosition = targetElement.offsetTop - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  }

  /**
   * Close mobile menu when clicking outside
   */
  handleOutsideClick(e) {
    if (this.navMenu.classList.contains('active')) {
      if (!this.navMenu.contains(e.target) && !this.navToggle.contains(e.target)) {
        this.toggleMobileMenu();
      }
    }
  }

  /**
   * Update active link based on scroll position
   */
  updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const navHeight = this.navbar.offsetHeight;
    const scrollPosition = window.scrollY + navHeight + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        this.navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
}
