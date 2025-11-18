# Hull Armed Force Forum - Migration Guide

## Overview

This guide will help you transition from the old monolithic structure to the new modular architecture with properly positioned hero section elements.

## File Structure

### New Directory Layout
```
HullArmyForces/
├── index.html              # Updated HTML with new class names
├── index.html.backup       # Backup of original file
├── css/
│   ├── main.css           # Main CSS entry point (imports all modules)
│   ├── reset.css          # CSS reset
│   ├── variables.css      # CSS custom properties
│   ├── typography.css     # Typography styles
│   ├── components/
│   │   ├── navigation.css
│   │   ├── hero.css       # ⭐ HERO SECTION FIXES HERE
│   │   ├── buttons.css
│   │   ├── cards.css
│   │   ├── footer.css
│   │   └── back-to-top.css
│   └── sections/
│       ├── quick-access.css
│       ├── services.css
│       ├── who-we-serve.css
│       ├── updates.css
│       └── emergency.css
├── js/
│   ├── main.js            # Main JS entry point
│   ├── navigation.js      # Navigation functionality
│   ├── scroll.js          # Scroll animations & back-to-top
│   ├── forms.js           # Form handling
│   └── keyboard.js        # Keyboard navigation
└── assets/
    └── images/            # Your images go here
```

## Critical HTML Changes Required

### 1. Update Stylesheet Link

**Old:**
```html
<link rel="stylesheet" href="styles.css">
```

**New:**
```html
<link rel="stylesheet" href="css/main.css">
```

### 2. Update Script Tag

**Old:**
```html
<script src="script.js"></script>
```

**New:**
```html
<script type="module" src="js/main.js"></script>
```

### 3. Update Class Names

#### Navigation
| Old Class | New Class |
|-----------|-----------|
| `.nav-container` | `.nav__container` |
| `.nav-logo` | `.nav__logo` |
| `.logo-icon` | `.logo__icon` |
| `.logo-text` | `.logo__text` |
| `.nav-toggle` | `.nav__toggle` |
| `.hamburger` | `.nav__toggle-line` |
| `.nav-menu` | `.nav__menu` |
| `.nav-link` | `.nav__link` |
| `.nav-actions` | `.nav__actions` |

#### Buttons
| Old Class | New Class |
|-----------|-----------|
| `.btn-primary` | `.btn--primary` |
| `.btn-ghost` | `.btn--ghost` |
| `.btn-outline-light` | `.btn--outline-light` |

#### Hero Section (MOST IMPORTANT)
| Old Class | New Class |
|-----------|-----------|
| `.hero-content` | `.hero__content` |
| `.hero-background` | `.hero__background` |
| `.hero-image` | `.hero__image` |
| `.hero-overlay` | `.hero__overlay` |
| `.hero-corner` | `.hero__corner-left` / `.hero__corner-right` |
| `.hero-corner-text` | (remove, use direct text in span) |
| `.hero-title` | `.hero__main-text` |
| `.hero-description` | `.hero__description` |
| `.hero-trust-badge` | `.hero__trust-badge` |
| `.trust-content` | (remove wrapper) |
| `.trust-stars` | `.trust-badge__stars` |
| `.trust-rating` | `.trust-badge__rating` |
| `.trust-text` | `.trust-badge__text` |
| `.trust-subtext` | `.trust-badge__subtext` |
| `.scroll-indicator` | `.hero__scroll-indicator` |
| `.scroll-line` | `.scroll-indicator__line` |
| `.scroll-text` | `.scroll-indicator__text` |

#### Cards
| Old Class | New Class |
|-----------|-----------|
| `.quick-access-grid` | `.quick-access__grid` |
| `.quick-icon` | `.quick-card__icon` |
| `.quick-title` | `.quick-card__title` |
| `.quick-description` | `.quick-card__description` |
| `.service-icon` | `.service-card__icon` |
| `.service-name` | `.service-card__name` |
| `.service-description` | `.service-card__description` |
| `.service-link` | `.service-card__link` |

#### Sections
| Old Class | New Class |
|-----------|-----------|
| `.section-header` | `.services__header` / `.updates__header` |
| `.section-title` | `.services__title` / `.updates__title` |
| `.section-subtitle` | `.services__subtitle` / `.updates__subtitle` |
| `.services-grid` | `.services__grid` |
| `.updates-grid` | `.updates__grid` |

#### Who We Serve
| Old Class | New Class |
|-----------|-----------|
| `.who-grid` | `.who-we-serve__grid` |
| `.who-image` | `.who-we-serve__image` |
| `.image-overlay` | `.who-we-serve__image-overlay` |
| `.who-content` | `.who-we-serve__content` |
| `.who-title` | `.who-we-serve__title` |
| `.who-description` | `.who-we-serve__description` |
| `.who-list` | `.who-we-serve__list` |
| `.who-list-item` | `.who-we-serve__list-item` |

#### Update Cards
| Old Class | New Class |
|-----------|-----------|
| `.update-image` | `.update-card__image` |
| `.update-content` | `.update-card__content` |
| `.update-date` | `.update-card__date` |
| `.update-title` | `.update-card__title` |
| `.update-excerpt` | `.update-card__excerpt` |
| `.update-link` | `.update-card__link` |

#### Emergency Section
| Old Class | New Class |
|-----------|-----------|
| `.emergency-content` | `.emergency__content` |
| `.emergency-title` | `.emergency__title` |
| `.emergency-subtitle` | `.emergency__subtitle` |
| `.emergency-options` | `.emergency__options` |
| `.emergency-option` | `.emergency__option` |
| `.emergency-option-title` | `.emergency__option-title` |
| `.emergency-phone` | `.emergency__phone` |
| `.emergency-option-desc` | `.emergency__option-desc` |
| `.emergency-divider` | `.emergency__divider` |
| `.emergency-link` | `.emergency__link` |

#### Footer
| Old Class | New Class |
|-----------|-----------|
| `.footer-top` | `.footer__top-line` |
| `.footer-grid` | `.footer__grid` |
| `.footer-column` | `.footer__column` |
| `.footer-logo` | `.footer__logo` |
| `.footer-about` | `.footer__about` |
| `.footer-tagline` | `.footer__tagline` |
| `.footer-heading` | `.footer__heading` |
| `.footer-links` | `.footer__links` |
| `.footer-contact` | `.footer__contact` |
| `.footer-social` | `.footer__social` |
| `.footer-newsletter-text` | `.footer__newsletter-text` |
| `.newsletter-input` | `.newsletter-form__input` |
| `.newsletter-btn` | `.newsletter-form__btn` |
| `.footer-bottom` | `.footer__bottom` |
| `.footer-copyright` | `.footer__copyright` |
| `.footer-legal` | `.footer__legal` |
| `.footer-separator` | `.footer__separator` |

## Hero Section - Critical Fixes

The hero section has been completely restructured to match the reference design. Here are the key changes:

### HTML Structure

**New Structure:**
```html
<section class="hero" id="home" role="banner">
    <!-- Background -->
    <div class="hero__background">
        <div class="hero__overlay"></div>
        <img src="..." alt="..." class="hero__image">
    </div>

    <!-- Content Container -->
    <div class="hero__content">
        <!-- Top Corners -->
        <span class="hero__corner-left">Serving Hull's Armed Forces</span>
        <span class="hero__corner-right">70+ Organisations United</span>

        <!-- Center - Main Text (HUGE) -->
        <h1 class="hero__main-text">
            Support<br>That Stays
        </h1>

        <!-- Bottom Left - Description -->
        <p class="hero__description">
            At Hull Armed Force Forum, every transition is supported...
        </p>

        <!-- Bottom Right - Trust Badge -->
        <div class="hero__trust-badge">
            <div class="trust-badge__stars">...</div>
            <div class="trust-badge__rating">4.9/5</div>
            <div class="trust-badge__text">Trusted by 1,500+ Veterans</div>
            <div class="trust-badge__subtext">Based on 1,247 reviews</div>
        </div>

        <!-- Scroll Indicator -->
        <div class="hero__scroll-indicator">
            <div class="scroll-indicator__line"></div>
            <span class="scroll-indicator__text">Scroll to explore</span>
        </div>
    </div>
</section>
```

### CSS Positioning

The hero uses **absolute positioning** for pixel-perfect layout:

```css
/* Corner text - top positions */
.hero__corner-left {
    position: absolute;
    top: 180px;      /* Below navbar */
    left: 40px;      /* Extreme left */
}

.hero__corner-right {
    position: absolute;
    top: 180px;
    right: 40px;     /* Extreme right */
}

/* Main hero text - CENTER */
.hero__main-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 120px;  /* MUCH LARGER */
    letter-spacing: 4px;
}

/* Description - bottom left */
.hero__description {
    position: absolute;
    bottom: 60px;
    left: 40px;
    max-width: 500px;
}

/* Trust badge - bottom right */
.hero__trust-badge {
    position: absolute;
    bottom: 60px;
    right: 40px;
}
```

## Quick Migration Steps

### Step 1: Update HTML File

1. Open `index.html`
2. Find and replace all class names using the table above
3. Update the stylesheet link to `css/main.css`
4. Update the script tag to `<script type="module" src="js/main.js"></script>`

**OR** use the search/replace feature in your editor:

```
Find: class="nav-container"
Replace: class="nav__container"

Find: class="btn-primary"
Replace: class="btn--primary"

... (continue for all classes)
```

### Step 2: Test the Changes

1. Open `index.html` in a browser
2. Check that:
   - Hero text is MUCH larger (120px on desktop)
   - Corner text is at extreme corners
   - Description is bottom-left
   - Trust badge is bottom-right
   - All animations work
   - Mobile menu functions

### Step 3: Verify Responsiveness

Test on different screen sizes:
- Desktop (1920px+)
- Laptop (1366px)
- Tablet (768px)
- Mobile (375px)

## CSS Custom Properties Reference

All design tokens are now in `css/variables.css`:

```css
/* Colors */
--color-charcoal-deep: #2a2420;
--color-gold-antique: #c9a961;
--color-cream-warm: #fef9f3;

/* Hero Typography */
--hero-display-size: 120px;         /* Desktop */
--hero-corner-size: 13px;
--hero-corner-top: 180px;
--hero-corner-side: 40px;
--hero-bottom-spacing: 60px;

/* Responsive (auto-adjusts at breakpoints) */
@media (max-width: 768px) {
  --hero-display-size: 56px;        /* Mobile */
}
```

## JavaScript Modules

All functionality is now modular:

- `navigation.js` - Nav interactions
- `scroll.js` - Scroll effects, animations, back-to-top
- `forms.js` - Newsletter form
- `keyboard.js` - Keyboard navigation
- `main.js` - Initializes all modules

No changes needed to JavaScript usage - it works automatically once you update the HTML classes.

## Troubleshooting

### Hero text is still small
- Check that `css/main.css` is loading
- Verify `css/components/hero.css` is being imported
- Clear browser cache (Ctrl+F5)

### Styles not loading
- Check path to `css/main.css` is correct
- Check all `@import` statements in `main.css`
- Ensure all CSS files are in correct folders

### JavaScript not working
- Check script tag has `type="module"`
- Verify all `.js` files are in `js/` folder
- Check browser console for errors

### Mobile menu not working
- Verify class names match: `.nav__toggle`, `.nav__menu`
- Check `navigation.js` is loaded

## Support

If you encounter issues:
1. Check browser console for errors
2. Verify all files are in correct locations
3. Compare your HTML with the examples in this guide
4. Clear browser cache
5. Try in incognito mode

---

**Next Steps:**
1. Update `index.html` with new class names
2. Test in browser
3. Verify all sections work correctly
4. Deploy!
