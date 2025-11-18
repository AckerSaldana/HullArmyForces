/**
 * Hull Armed Force Forum - Interactive Scripts
 * Handles navigation, scroll effects, and user interactions
 */

// ===================================
// Utility Functions
// ===================================

/**
 * Debounce function to limit function execution rate
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

/**
 * Throttle function to limit function execution rate
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
const throttle = (func, limit) => {
    let inThrottle;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

// ===================================
// Navigation Functionality
// ===================================

class Navigation {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.navToggle = document.getElementById('navToggle');
        this.navMenu = document.getElementById('navMenu');
        this.navLinks = document.querySelectorAll('.nav-link');

        this.init();
    }

    init() {
        // Add scroll event listener for sticky navbar
        window.addEventListener('scroll', throttle(() => this.handleScroll(), 100));

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
        window.addEventListener('scroll', throttle(() => this.updateActiveLink(), 200));
    }

    handleScroll() {
        const scrollPosition = window.scrollY;

        if (scrollPosition > 100) {
            this.navbar.classList.add('scrolled');
        } else {
            this.navbar.classList.remove('scrolled');
        }
    }

    toggleMobileMenu() {
        const isActive = this.navMenu.classList.toggle('active');
        this.navToggle.setAttribute('aria-expanded', isActive);

        // Animate hamburger icon
        const hamburgers = this.navToggle.querySelectorAll('.hamburger');
        if (isActive) {
            hamburgers[0].style.transform = 'rotate(45deg) translateY(8px)';
            hamburgers[1].style.opacity = '0';
            hamburgers[2].style.transform = 'rotate(-45deg) translateY(-8px)';
        } else {
            hamburgers[0].style.transform = 'none';
            hamburgers[1].style.opacity = '1';
            hamburgers[2].style.transform = 'none';
        }
    }

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

    handleOutsideClick(e) {
        if (this.navMenu.classList.contains('active')) {
            if (!this.navMenu.contains(e.target) && !this.navToggle.contains(e.target)) {
                this.toggleMobileMenu();
            }
        }
    }

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

// ===================================
// Back to Top Button
// ===================================

class BackToTop {
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

// ===================================
// Scroll Animations (Fade-in on scroll)
// ===================================

class ScrollAnimations {
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
            '.quick-card, .service-card, .update-card, .who-grid, .emergency-content'
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

// ===================================
// Newsletter Form Handler
// ===================================

class NewsletterForm {
    constructor() {
        this.form = document.querySelector('.newsletter-form');
        this.init();
    }

    init() {
        if (!this.form) return;

        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    handleSubmit(e) {
        e.preventDefault();

        const input = this.form.querySelector('.newsletter-input');
        const email = input.value;

        if (this.validateEmail(email)) {
            // In a real application, you would send this to a server
            console.log('Newsletter signup:', email);

            // Show success message
            this.showMessage('Thank you for subscribing!', 'success');

            // Clear input
            input.value = '';
        } else {
            this.showMessage('Please enter a valid email address.', 'error');
        }
    }

    validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    showMessage(message, type) {
        // Create message element
        const messageEl = document.createElement('div');
        messageEl.textContent = message;
        messageEl.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 1rem 1.5rem;
            background-color: ${type === 'success' ? '#5a7a5a' : '#c94961'};
            color: white;
            border-radius: 4px;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            animation: slideIn 0.3s ease;
            font-family: var(--font-heading);
        `;

        // Add to body
        document.body.appendChild(messageEl);

        // Remove after 3 seconds
        setTimeout(() => {
            messageEl.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => messageEl.remove(), 300);
        }, 3000);
    }
}

// ===================================
// Smooth Scroll for All Internal Links
// ===================================

class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => this.handleClick(e));
        });
    }

    handleClick(e) {
        const href = e.target.getAttribute('href');

        // Skip if it's just "#" or handled by navigation
        if (!href || href === '#' || e.target.classList.contains('nav-link')) {
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

// ===================================
// Keyboard Navigation Enhancement
// ===================================

class KeyboardNavigation {
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

// ===================================
// Hero Corner Text Animation
// ===================================

class HeroAnimations {
    constructor() {
        this.init();
    }

    init() {
        const heroCorners = document.querySelectorAll('.hero-corner-text');

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
        const heroTitle = document.querySelector('.hero-title');
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
        const trustBadge = document.querySelector('.hero-trust-badge');
        if (trustBadge) {
            trustBadge.style.opacity = '0';
            trustBadge.style.transform = 'translateY(20px)';
            trustBadge.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

            setTimeout(() => {
                trustBadge.style.opacity = '1';
                trustBadge.style.transform = 'translateY(0)';
            }, 1000);
        }
    }
}

// ===================================
// Performance Monitoring
// ===================================

class PerformanceMonitor {
    constructor() {
        this.init();
    }

    init() {
        // Log page load time
        window.addEventListener('load', () => {
            if (window.performance) {
                const perfData = window.performance.timing;
                const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                console.log(`Page load time: ${pageLoadTime}ms`);
            }
        });
    }
}

// ===================================
// Initialize All Components
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    new Navigation();
    new BackToTop();
    new ScrollAnimations();
    new NewsletterForm();
    new SmoothScroll();
    new KeyboardNavigation();
    new HeroAnimations();

    // Only log performance in development
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        new PerformanceMonitor();
    }

    // Add animations for slide-in messages
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }

        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    console.log('Hull Armed Force Forum website initialized successfully');
});

// ===================================
// Export for Testing (if needed)
// ===================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        Navigation,
        BackToTop,
        ScrollAnimations,
        NewsletterForm,
        SmoothScroll,
        KeyboardNavigation,
        HeroAnimations
    };
}
