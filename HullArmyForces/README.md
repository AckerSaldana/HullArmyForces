# Hull Armed Force Forum Website

A sophisticated, responsive website for the Hull Armed Force Forum - supporting Armed Forces members transition to civilian life in Hull, UK.

## Overview

This website brings together over 70 organizations to provide comprehensive support for Armed Forces members transitioning to civilian life. The design emphasizes dignity, professionalism, and warmth with a sophisticated dark aesthetic.

## Features

### Design
- **Sophisticated Dark Aesthetic**: Elegant design with warm tones and generous whitespace
- **Fully Responsive**: Mobile-first approach, optimized for all devices
- **Accessibility**: WCAG AAA compliant with proper contrast ratios and keyboard navigation
- **Performance Optimized**: Fast loading with optimized images and efficient code

### Sections
1. **Fixed Navigation**: Sticky header with smooth scrolling and mobile hamburger menu
2. **Hero Section**: Full-viewport hero with elegant typography and trust badges
3. **Quick Access Cards**: Four service categories with hover animations
4. **Comprehensive Services**: Six detailed service offerings
5. **Who We Serve**: Two-column layout with imagery and bullet points
6. **Latest Updates**: Three news/resource cards
7. **Emergency Support**: 24/7 crisis support section
8. **Footer**: Complete information with newsletter signup

### Interactive Features
- Smooth scroll navigation
- Mobile menu toggle
- Scroll-triggered animations
- Back-to-top button
- Active link highlighting
- Newsletter form validation
- Keyboard navigation support

## Technology Stack

- **HTML5**: Semantic markup with ARIA labels
- **CSS3**: Modern features (Grid, Flexbox, Custom Properties)
- **Vanilla JavaScript**: No frameworks, pure ES6+
- **Google Fonts**: Playfair Display, Montserrat, Open Sans

## Color Palette

### Primary Colors
- Deep Charcoal (backgrounds): `#2a2420`
- Warm Charcoal: `#3d3530`
- Rich Brown: `#5c4a3a`

### Accent Colors
- Antique Gold: `#c9a961`
- Warm Amber: `#d4a574`
- Soft Cream: `#f5ede1`

### Neutral Colors
- Pure White: `#ffffff`
- Warm Cream (text): `#fef9f3`
- Light Beige: `#e8dcc8`
- Medium Grey: `#9b8b7e`

### Trust/Action Colors
- Navy Accent: `#2d4356`
- Success Green: `#5a7a5a`

## Typography

- **Display/Hero**: Playfair Display (serif) - 72px, Bold, 2px letter-spacing
- **Headings**: Montserrat (sans-serif) - H1: 48px, H2: 36px, H3: 24px
- **Body Text**: Open Sans (sans-serif) - 16px, Regular, 1.7 line-height

## File Structure

```
HullArmyForces/
├── index.html          # Main HTML file
├── styles.css          # Complete stylesheet
├── script.js           # Interactive functionality
└── README.md          # This file
```

## Setup Instructions

### Quick Start (Static Hosting)

1. **Download Files**
   ```bash
   # All files are in the HullArmyForces directory
   cd HullArmyForces
   ```

2. **Open Locally**
   - Simply open `index.html` in a modern web browser
   - No build process required

3. **Deploy to Any Static Host**
   - Upload all files to your hosting provider
   - Compatible with: GitHub Pages, Netlify, Vercel, AWS S3, etc.

### Deployment Options

#### Option 1: GitHub Pages

```bash
# Initialize git repository
git init
git add .
git commit -m "Initial commit: Hull Armed Force Forum website"

# Create GitHub repository and push
git remote add origin https://github.com/yourusername/haff.git
git branch -M main
git push -u origin main

# Enable GitHub Pages in repository settings
# Select main branch and root directory
```

#### Option 2: Netlify

1. Drag and drop the folder to [Netlify Drop](https://app.netlify.com/drop)
2. Or connect your Git repository for continuous deployment

#### Option 3: Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

#### Option 4: Traditional Web Hosting

1. Use FTP/SFTP to upload all files to your web server
2. Ensure files maintain their directory structure
3. Point your domain to the hosting directory

### Local Development Server

For development with live reload:

```bash
# Using Python (Python 3)
python -m http.server 8000

# Using Node.js (install http-server globally)
npm install -g http-server
http-server

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## Customization Guide

### Updating Content

#### Change Hero Text
Edit `index.html` lines 67-69:
```html
<h1 class="hero-title">
    SUPPORT<br>THAT STAYS
</h1>
```

#### Update Contact Information
Edit `index.html` lines 420-440 in the footer section.

#### Modify Services
Update the services grid in `index.html` starting at line 172.

### Changing Colors

Edit CSS custom properties in `styles.css` (lines 17-36):
```css
:root {
    --deep-charcoal: #2a2420;
    --antique-gold: #c9a961;
    /* ... update as needed */
}
```

### Adding New Sections

1. Add HTML markup following the existing section pattern
2. Add corresponding styles in `styles.css`
3. Update navigation links if needed

### Replacing Images

Current images use Unsplash placeholders. Replace URLs in `index.html`:
- Hero image: line 55
- Who We Serve image: line 261
- Update cards: lines 318, 330, 342

**Recommended Image Specifications:**
- Hero: 2070x1380px (3:2 ratio)
- Updates: 2070x1380px
- Who We Serve: 1974x1316px

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility Features

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators on all interactive elements
- Alt text for all images
- Proper heading hierarchy
- Color contrast ratios meet WCAG AAA standards

## Performance Optimization

- Minimal external dependencies (only Google Fonts)
- Optimized images with lazy loading
- Efficient CSS with minimal specificity
- Throttled scroll event handlers
- No render-blocking JavaScript

## SEO Considerations

- Semantic HTML structure
- Meta descriptions
- Proper heading hierarchy
- Alt text for images
- Clean URL structure (when deployed)

**Recommended Next Steps:**
1. Add `robots.txt`
2. Add `sitemap.xml`
3. Configure Open Graph tags
4. Add Twitter Card meta tags
5. Set up Google Analytics

## Security Best Practices

- All external resources use HTTPS
- Newsletter form includes basic email validation
- No inline JavaScript (CSP-friendly)
- No sensitive data in client-side code

## Future Enhancements

Consider adding:
1. **CMS Integration**: Connect to WordPress, Strapi, or Contentful
2. **Form Backend**: Integrate newsletter with Mailchimp or SendGrid
3. **Search Functionality**: Add site search
4. **Blog Section**: Expand updates section into full blog
5. **User Authentication**: For member-only resources
6. **Multilingual Support**: Add language switcher

## Testing

### Manual Testing Checklist

- [ ] Navigation links work correctly
- [ ] Mobile menu toggles properly
- [ ] All buttons and links are clickable
- [ ] Smooth scrolling functions
- [ ] Back to top button appears/disappears
- [ ] Newsletter form validates email
- [ ] Responsive design works on mobile, tablet, desktop
- [ ] Images load correctly
- [ ] Accessibility (keyboard navigation, screen readers)

### Automated Testing

```bash
# Lighthouse audit (in Chrome DevTools)
# - Performance
# - Accessibility
# - Best Practices
# - SEO

# HTML validation
# Visit: https://validator.w3.org/
# Upload index.html

# CSS validation
# Visit: https://jigsaw.w3.org/css-validator/
# Upload styles.css
```

## Troubleshooting

### Images Not Loading
- Check image URLs are accessible
- Ensure proper CORS headers if using external images
- Replace Unsplash URLs with your own hosted images

### Fonts Not Loading
- Check internet connection (Google Fonts require online access)
- Consider hosting fonts locally for offline use

### Mobile Menu Not Working
- Ensure JavaScript is enabled
- Check browser console for errors
- Verify script.js is properly linked

### Smooth Scrolling Not Working
- Check if browser supports `scroll-behavior: smooth`
- JavaScript fallback should handle older browsers

## Support & Contact

For issues or questions:
- Email: info@haff.org.uk
- Phone: 01482 XXX XXX

## License

Copyright 2025 Hull Armed Force Forum. All rights reserved.

## Credits

- **Design**: Inspired by sophisticated restaurant websites
- **Images**: Unsplash (placeholder images - replace with licensed photos)
- **Fonts**: Google Fonts (Playfair Display, Montserrat, Open Sans)
- **Icons**: Custom SVG icons

## Changelog

### Version 1.0.0 (2025-11-17)
- Initial release
- Complete responsive homepage
- All core features implemented
- Accessibility compliant
- Performance optimized

---

**Built with dignity, designed for impact.**

*Support that lasts.*
