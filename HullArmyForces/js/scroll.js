/**
 * Scroll Module
 * Handles smooth scrolling, scroll animations, and back-to-top button
 */

/**
 * Throttle function to limit execution rate
 */
function throttle(func, limit) {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Back to Top Button
 */
export class BackToTop {
  constructor() {
    this.button = document.getElementById('backToTop');
    this.init();
  }

  init() {
    if (!this.button) return;

    // Show/hide button on scroll
    window.addEventListener('scroll', throttle(() => this.handleScroll(), 100));

    // Scroll to top on click
    this.button.addEventListener('click', () => this.scrollToTop());
  }

  handleScroll() {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 500) {
      this.button.classList.add('visible');
    } else {
      this.button.classList.remove('visible');
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}

/**
 * Scroll Animations (Fade-in on scroll)
 */
export class ScrollAnimations {
  constructor() {
    this.observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    this.init();
  }

  init() {
    // Create intersection observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => this.handleIntersection(entries),
      this.observerOptions
    );

    // Observe cards and sections
    const elements = document.querySelectorAll(
      '.quick-card, .service-card, .update-card, .who-we-serve__grid, .emergency__content'
    );

    elements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }

  handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }
}

/**
 * Smooth Scroll for All Internal Links
 */
export class SmoothScroll {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => this.handleClick(e));
    });
  }

  handleClick(e) {
    const href = e.currentTarget.getAttribute('href');

    // Skip if it's just "#" or handled by navigation
    if (!href || href === '#' || e.target.classList.contains('nav__link')) {
      return;
    }

    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const navbar = document.getElementById('navbar');
      const navHeight = navbar ? navbar.offsetHeight : 0;
      const targetPosition = targetElement.offsetTop - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }
}

/**
 * Hero Animations
 */
export class HeroAnimations {
  constructor() {
    this.init();
  }

  init() {
    const heroCorners = document.querySelectorAll('.hero__corner-left, .hero__corner-right');

    heroCorners.forEach((corner, index) => {
      corner.style.opacity = '0';
      corner.style.transform = 'translateY(-20px)';
      corner.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

      setTimeout(() => {
        corner.style.opacity = '1';
        corner.style.transform = 'translateY(0)';
      }, 500 + (index * 200));
    });

    // Animate hero title
    const heroTitle = document.querySelector('.hero__main-text');
    if (heroTitle) {
      heroTitle.style.opacity = '0';
      heroTitle.style.transform = 'translateY(30px)';
      heroTitle.style.transition = 'opacity 1s ease, transform 1s ease';

      setTimeout(() => {
        heroTitle.style.opacity = '1';
        heroTitle.style.transform = 'translateY(0)';
      }, 300);
    }

    // Animate trust badge
    const trustBadge = document.querySelector('.hero__trust-badge');
    if (trustBadge) {
      trustBadge.style.opacity = '0';
      trustBadge.style.transform = 'translateY(20px)';
      trustBadge.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

      setTimeout(() => {
        trustBadge.style.opacity = '1';
        trustBadge.style.transform = 'translateY(0)';
      }, 1000);
    }

    // Animate description
    const description = document.querySelector('.hero__description');
    if (description) {
      description.style.opacity = '0';
      description.style.transform = 'translateY(20px)';
      description.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

      setTimeout(() => {
        description.style.opacity = '1';
        description.style.transform = 'translateY(0)';
      }, 800);
    }
  }
}
