# Melissa Ambrosini Design System - Complete Documentation

## Executive Summary

This design system represents a premium, conversion-focused personal brand website optimized for author/speaker positioning. The aesthetic combines sophisticated typography, warm neutral tones with gold accents, generous whitespace, asymmetrical layouts, and strategic social proof placement to create a high-end editorial feel while driving conversions.

---

## 1. Color System

### Primary Palette

```css
/* Core Brand Colors */
--color-dark-charcoal: #3a3f42;     /* Primary text, buttons, dark accents */
--color-gold-tan: #ad895b;          /* Primary accent, highlights, links */
--color-warm-beige: #bca289;        /* Secondary accent, hover states */
--color-dusty-sage: #a39687;        /* Tertiary accent */

/* Neutrals */
--color-white: #ffffff;             /* Primary background */
--color-off-white: #fcfcfc;         /* Secondary background */
--color-cream: #dbd8d5;             /* Light backgrounds, borders */
--color-soft-beige: #d9dbd5;        /* Mobile menu backgrounds */
--color-medium-gray: #687277;       /* Secondary text */
--color-light-gray: #dedede;        /* Divider lines */
--color-black: #000000;             /* Deep shadows, footer */
```

### Semantic Colors

```css
/* Text Colors */
--text-primary: rgba(58, 63, 66, 1);
--text-secondary: rgba(104, 114, 119, 1);
--text-meta: rgba(219, 216, 213, 1);
--text-inverse: rgba(255, 255, 255, 1);

/* Background Overlays (with opacity variations) */
--bg-overlay-70: rgba(219, 216, 213, 0.7);
--bg-overlay-40: rgba(219, 216, 213, 0.4);
--bg-overlay-20: rgba(219, 216, 213, 0.2);
--bg-overlay-15: rgba(0, 0, 0, 0.15);

/* Interactive States */
--hover-opacity: 0.7;
--disabled-opacity: 0.5;
```

### Color Usage Guidelines

- **Primary Actions**: Dark charcoal (#3a3f42) with white text
- **Secondary Actions**: Gold/tan (#ad895b) or outlined charcoal
- **Section Backgrounds**: Alternating white, cream tints (20-40% opacity), and full gold/beige
- **Accent Elements**: Gold for badges, awards, featured content
- **Video Overlays**: Black at 60-70% opacity over video backgrounds

---

## 2. Typography System

### Font Families

```css
/* Primary Display Font - Serif */
@font-face {
  font-family: 'Joane Light';
  src: url('w_foundry_-_joane_light.woff') format('woff');
  font-weight: 300;
  font-display: auto;
}

@font-face {
  font-family: 'Joane Regular';
  src: url('w_foundry_-_joane_regular.woff') format('woff');
  font-weight: 400;
  font-display: auto;
}

@font-face {
  font-family: 'Joane Semi';
  src: url('w_foundry_-_joane_semibold.woff') format('woff');
  font-weight: 600;
  font-display: auto;
}

/* Secondary Display Font - Serif Italic */
@font-face {
  font-family: 'Freight Big Pro Italic';
  src: url('freightbigprobookitalic_copy.woff') format('woff');
  font-weight: 400;
  font-display: auto;
}

/* Body Text Font - Serif */
@font-face {
  font-family: 'Droid Serif';
  src: url('droidserif-regular.woff') format('woff');
  font-weight: 400;
  font-display: auto;
}

/* UI Font - Sans Serif */
@font-face {
  font-family: 'Montserrat';
  font-weight: 500;
  font-weight: 600;
}

@font-face {
  font-family: 'Commuters Regular';
  src: url('commuterssans-regular.woff') format('woff');
  font-weight: 400;
}
```

### Type Scale & Hierarchy

```css
/* Hero Headings */
.heading-hero {
  font-family: 'Joane Light', serif;
  font-size: 50px;        /* Desktop */
  font-size: 38px;        /* Mobile */
  font-weight: 300;
  line-height: 1.1;
  letter-spacing: 0.02em;
  color: #3a3f42;
}

/* Section Headings H2 */
.heading-section {
  font-family: 'Joane Regular', serif;
  font-size: 36px;        /* Desktop */
  font-size: 28px;        /* Mobile */
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 0.01em;
}

/* Section Subheadings H3 */
.heading-subsection {
  font-family: 'Freight Big Pro Italic', serif;
  font-size: 19px;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0.02em;
  font-style: italic;
}

/* Uppercase Labels/Eyebrows */
.label-uppercase {
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.0;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

/* Body Text */
.body-text {
  font-family: 'Droid Serif', serif;
  font-size: 17px;        /* Desktop */
  font-size: 14px;        /* Mobile */
  font-weight: 400;
  line-height: 2.0;       /* Desktop */
  line-height: 1.6;       /* Mobile */
  letter-spacing: 0.025em;
  color: #627c73;
}

/* Navigation */
.nav-link {
  font-family: 'Joane Regular', serif;
  font-size: 11px;        /* Small nav */
  font-size: 20px;        /* Large nav items */
  font-weight: 400;
  letter-spacing: 0.05em;
}

/* Meta Text (dates, captions) */
.meta-text {
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  font-weight: 400;
  line-height: 1.4;
  color: rgba(219, 216, 213, 1);
}

/* Pull Quotes */
.pull-quote {
  font-family: 'Joane Light', serif;
  font-size: 32px;        /* Desktop */
  font-size: 24px;        /* Mobile */
  line-height: 1.4;
  font-style: italic;
}
```

### Typography Usage Patterns

- **Hero Section**: Joane Light (50px) + Freight Big Pro Italic subheading (19px)
- **Content Sections**: Joane Regular headings + Droid Serif body
- **Buttons/CTAs**: Montserrat uppercase (12px, 0.2em tracking)
- **Navigation**: Joane variants (11-20px depending on context)
- **Testimonials**: Joane Light italic for quotes, Droid Serif for attribution

---

## 3. Spacing & Layout System

### Responsive Breakpoints

```css
/* Mobile First Approach */
--breakpoint-mobile: 320px;   /* Mobile design width */
--breakpoint-tablet: 768px;   /* Breakpoint transition */
--breakpoint-desktop: 1200px; /* Desktop design width */

@media (max-width: 768px) {
  /* Mobile styles */
}

@media (min-width: 769px) {
  /* Desktop styles */
}
```

### Spacing Scale

```css
/* Base Spacing Units */
--space-1: 5px;
--space-2: 10px;
--space-3: 15px;
--space-4: 20px;
--space-5: 24px;
--space-6: 30px;
--space-8: 40px;
--space-10: 50px;
--space-12: 60px;
--space-16: 80px;
--space-20: 100px;

/* Section Padding */
--section-padding-mobile: 30px 20px;
--section-padding-desktop: 80px 50px;

/* Component Spacing */
--component-gap-small: 16px;
--component-gap-medium: 24px;
--component-gap-large: 40px;

/* Text Margins */
--text-margin-bottom: 16px;
--heading-margin-bottom: 24px;
--paragraph-margin-bottom: 30px;
```

### Section Heights (Reference)

```css
/* Common Section Heights */
--hero-height-desktop: 893px;
--hero-height-mobile: 768px;

--offering-section-desktop: 650px - 850px;  /* Variable */
--offering-section-mobile: 679px - 884px;

--resources-section-desktop: 1195px - 1835px;
--resources-section-mobile: 1271px - 1308px;

--footer-section-desktop: 562px - 805px;
--footer-section-mobile: 589px - 667px;
```

### Grid System

```css
/* Desktop Grid */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 50px;
}

/* Mobile Grid */
@media (max-width: 768px) {
  .container {
    max-width: 320px;
    padding: 0 20px;
  }
}

/* Column Layouts */
.grid-2-col { display: grid; grid-template-columns: repeat(2, 1fr); gap: 40px; }
.grid-3-col { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
.grid-4-col { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }

/* Mobile: Stack all grids */
@media (max-width: 768px) {
  .grid-2-col,
  .grid-3-col,
  .grid-4-col {
    grid-template-columns: 1fr;
  }
}
```

---

## 4. UI Components

### Buttons

```css
/* Primary Button */
.button-primary {
  background-color: #3a3f42;
  color: #ffffff;
  padding: 10px 14px;
  border-radius: 10px;
  border: none;

  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;

  transition: all 0.5s ease;
  cursor: pointer;
}

.button-primary:hover {
  opacity: 0.7;
}

/* Secondary Button (Outlined) */
.button-secondary {
  background-color: transparent;
  color: #3a3f42;
  padding: 10px 14px;
  border: 2px solid #3a3f42;
  border-radius: 10px;

  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;

  transition: all 0.5s ease;
  cursor: pointer;
}

.button-secondary:hover {
  opacity: 0.7;
}

/* Large CTA Button */
.button-cta-large {
  padding: 15px 30px;
  font-size: 14px;
}

/* Button with Icon */
.button-icon {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
```

### Navigation

```css
/* Desktop Navigation */
.nav-desktop {
  position: sticky;
  top: 0;
  height: 85px;
  background-color: rgba(255, 255, 255, 0);
  transition: background-color 0.3s ease;
  z-index: 1000;
}

.nav-desktop.scrolled {
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.nav-menu {
  display: flex;
  gap: 40px;
  list-style: none;
}

.nav-link {
  font-family: 'Joane Regular', serif;
  font-size: 11px;
  color: #3a3f42;
  text-decoration: none;
  transition: opacity 0.25s ease;
}

.nav-link:hover {
  opacity: 0.5;
}

/* Mobile Navigation */
.nav-mobile {
  position: fixed;
  top: 0;
  left: 0;
  width: 320px;
  height: 50px;
  background-color: #ffffff;
  z-index: 1001;
}

.nav-mobile.open {
  height: 648px;
  background-color: #d9dbd5;
}

.hamburger-icon {
  width: 27px;
  height: 24px;
  cursor: pointer;
}

/* Mobile Menu Items */
.mobile-menu-item {
  padding: 20px 34px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-family: 'Joane Regular', serif;
  font-size: 20px;
}
```

### Cards (Product/Offering)

```css
.offering-card {
  display: flex;
  align-items: center;
  gap: 60px;
  padding: 80px 100px;
}

/* Alternating Layouts */
.offering-card.image-left {
  flex-direction: row;
}

.offering-card.image-right {
  flex-direction: row-reverse;
}

@media (max-width: 768px) {
  .offering-card {
    flex-direction: column;
    padding: 40px 20px;
    gap: 30px;
  }
}

/* Card Image */
.offering-image {
  flex: 0 0 45%;
  transform: rotate(-6deg);  /* Or -2deg, 5deg, 10deg for variety */
}

.offering-image img {
  width: 100%;
  height: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

/* Card Content */
.offering-content {
  flex: 1;
}

.offering-eyebrow {
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #ad895b;
  margin-bottom: 12px;
}

.offering-title {
  font-family: 'Joane Regular', serif;
  font-size: 36px;
  line-height: 1.2;
  margin-bottom: 20px;
  color: #3a3f42;
}

.offering-description {
  font-family: 'Droid Serif', serif;
  font-size: 17px;
  line-height: 2.0;
  margin-bottom: 30px;
  color: #627c73;
}

.offering-divider {
  width: 100%;
  height: 1px;
  background-color: #dedede;
  margin: 30px 0;
}

.offering-cta {
  margin-top: 30px;
}
```

### Testimonials / Pull Quotes

```css
.testimonial-section {
  padding: 80px 100px;
  background-color: rgba(219, 216, 213, 0.2);
  text-align: center;
}

@media (max-width: 768px) {
  .testimonial-section {
    padding: 60px 30px;
  }
}

.testimonial-quote {
  font-family: 'Joane Light', serif;
  font-size: 32px;
  line-height: 1.4;
  font-style: italic;
  color: #3a3f42;
  margin-bottom: 30px;
}

@media (max-width: 768px) {
  .testimonial-quote {
    font-size: 24px;
  }
}

.testimonial-author {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.testimonial-avatar {
  width: 106px;
  height: 106px;
  border-radius: 50%;
  object-fit: cover;
}

.testimonial-attribution {
  text-align: left;
}

.testimonial-name {
  font-family: 'Joane Regular', serif;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 5px;
}

.testimonial-title {
  font-family: 'Droid Serif', serif;
  font-size: 14px;
  color: #687277;
}
```

### Forms

```css
/* Form Container */
.form-section {
  padding: 80px 100px;
  background-color: #ffffff;
}

.form-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

@media (max-width: 768px) {
  .form-layout {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

/* Form Inputs */
.form-input {
  width: 100%;
  padding: 15px 20px;
  border: 1px solid #dedede;
  border-radius: 5px;
  font-family: 'Droid Serif', serif;
  font-size: 14px;
  margin-bottom: 10px;
}

.form-input:focus {
  outline: none;
  border-color: #ad895b;
}

/* Textarea */
.form-textarea {
  width: 100%;
  height: 100px;
  padding: 15px 20px;
  border: 1px solid #dedede;
  border-radius: 5px;
  font-family: 'Droid Serif', serif;
  font-size: 14px;
  resize: vertical;
}

/* Submit Button */
.form-submit {
  background-color: #bca289;
  border: none;
  color: #ffffff;
  padding: 10px 30px;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.form-submit:hover {
  opacity: 0.8;
}

/* iPhone Mockup (for email signup) */
.iphone-mockup {
  width: 317px;
  height: 550px;
  background-image: url('iphone-frame.png');
  background-size: contain;
  padding: 60px 20px;
}

@media (max-width: 768px) {
  .iphone-mockup {
    width: 206px;
    height: 410px;
  }
}
```

### Blog Post Previews

```css
.blog-post-card {
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.blog-post-card:hover {
  transform: translateY(-5px);
}

.blog-post-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  filter: grayscale(50%);
  transition: filter 0.3s ease;
}

.blog-post-card:hover .blog-post-image {
  filter: grayscale(0%);
}

.blog-post-content {
  padding: 30px;
}

.blog-post-date {
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  color: rgba(219, 216, 213, 1);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 10px;
}

.blog-post-title {
  font-family: 'Joane Regular', serif;
  font-size: 24px;
  line-height: 1.3;
  margin-bottom: 15px;
  color: #3a3f42;
}

.blog-post-excerpt {
  font-family: 'Droid Serif', serif;
  font-size: 14px;
  line-height: 1.8;
  color: #687277;
}
```

### Social Proof Badges

```css
.badge-container {
  display: inline-block;
  padding: 8px 16px;
  background-color: #ad895b;
  border-radius: 20px;
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.award-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.award-icon {
  width: 30px;
  height: 30px;
}

/* Logo Cloud */
.logo-cloud {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
  padding: 50px 0;
}

.publication-logo {
  height: 40px;
  width: auto;
  opacity: 0.6;
  filter: grayscale(100%);
  transition: all 0.3s ease;
}

.publication-logo:hover {
  opacity: 1;
  filter: grayscale(0%);
}
```

### Icons

```css
.icon {
  width: 24px;
  height: 24px;
  fill: #3a3f42;
  transition: opacity 0.25s ease;
}

.icon:hover {
  opacity: 0.5;
}

/* Social Icons */
.social-icon {
  width: 22px;
  height: 22px;
  fill: #3a3f42;
}

/* Large Icons (50px) */
.icon-large {
  width: 50px;
  height: 50px;
}
```

---

## 5. Layout Patterns

### Hero Section

```css
.hero-section {
  height: 893px;  /* Desktop */
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  padding: 0 100px;
  position: relative;
  overflow: hidden;
}

@media (max-width: 768px) {
  .hero-section {
    height: 768px;
    grid-template-columns: 1fr;
    padding: 60px 30px;
  }
}

/* Hero Background */
.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.hero-background video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.7;
}

.hero-background::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}

/* Hero Content */
.hero-content {
  max-width: 600px;
}

.hero-eyebrow {
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #ad895b;
  margin-bottom: 20px;
}

.hero-title {
  font-family: 'Joane Light', serif;
  font-size: 50px;
  line-height: 1.1;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 38px;
  }
}

.hero-subtitle {
  font-family: 'Freight Big Pro Italic', serif;
  font-size: 19px;
  line-height: 1.6;
  font-style: italic;
  margin-bottom: 40px;
}

.hero-cta {
  margin-top: 30px;
}

/* Hero Image/Gallery */
.hero-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
}
```

### Content Section (Alternating)

```css
.content-section {
  padding: 100px;
  background-color: #ffffff;
}

@media (max-width: 768px) {
  .content-section {
    padding: 60px 30px;
  }
}

/* Alternating Background Colors */
.content-section:nth-child(even) {
  background-color: rgba(219, 216, 213, 0.2);
}

.content-section:nth-child(odd) {
  background-color: rgba(163, 150, 135, 0.1);
}

/* Two-column layout with image */
.content-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

@media (max-width: 768px) {
  .content-layout {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

/* Reverse layout (image on right) */
.content-layout.reverse {
  direction: rtl;
}

.content-layout.reverse > * {
  direction: ltr;
}
```

### Footer

```css
.footer {
  background-color: #000000;
  color: #ffffff;
  padding: 80px 100px 40px;
}

@media (max-width: 768px) {
  .footer {
    padding: 60px 30px 30px;
  }
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
  margin-bottom: 60px;
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

.footer-heading {
  font-family: 'Joane Regular', serif;
  font-size: 24px;
  margin-bottom: 20px;
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-link {
  font-family: 'Droid Serif', serif;
  font-size: 14px;
  line-height: 2.0;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #ad895b;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

@media (max-width: 768px) {
  .footer-bottom {
    flex-direction: column;
    gap: 20px;
  }
}

.footer-social {
  display: flex;
  gap: 20px;
}
```

---

## 6. Visual Effects & Animations

### Transitions

```css
/* Fade In on Scroll */
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Hover Opacity */
.hover-opacity {
  transition: opacity 0.25s ease;
}

.hover-opacity:hover {
  opacity: 0.5;
}

/* Zoom on Hover */
.zoom-hover {
  overflow: hidden;
}

.zoom-hover img {
  transition: transform 0.5s ease;
}

.zoom-hover:hover img {
  transform: scale(1.1);
}

/* Large Zoom Effect */
.large-zoom-hover img {
  transition: transform 0.7s ease;
}

.large-zoom-hover:hover img {
  transform: scale(1.8);
}

/* Button Transitions */
.button {
  transition: all 0.5s ease;
}
```

### Image Effects

```css
/* Grayscale to Color */
.grayscale-hover {
  filter: grayscale(50%);
  transition: filter 0.3s ease;
}

.grayscale-hover:hover {
  filter: grayscale(0%);
}

/* Full Grayscale */
.grayscale-full {
  filter: grayscale(80%);
}

/* Rotation for Dynamic Layouts */
.rotate-neg-6 {
  transform: rotate(-6deg);
}

.rotate-neg-2 {
  transform: rotate(-2deg);
}

.rotate-5 {
  transform: rotate(5deg);
}

.rotate-10 {
  transform: rotate(10deg);
}

/* Shadow on Hover */
.shadow-hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.shadow-hover:hover {
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}
```

### Video Backgrounds

```css
.video-background {
  position: relative;
  width: 100%;
  height: 630px;  /* Desktop */
  overflow: hidden;
}

@media (max-width: 768px) {
  .video-background {
    height: 237px;
  }
}

.video-background video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  object-fit: cover;
  z-index: 1;
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 2;
}

.video-content {
  position: relative;
  z-index: 3;
  color: #ffffff;
  text-align: center;
  padding: 100px 50px;
}
```

### Borders & Dividers

```css
/* Divider Line */
.divider {
  width: 100%;
  height: 1px;
  background-color: #dedede;
  margin: 30px 0;
}

/* Thick Divider */
.divider-thick {
  height: 2px;
  background-color: #ad895b;
}

/* Border Radius */
.radius-small {
  border-radius: 5px;
}

.radius-medium {
  border-radius: 10px;
}

.radius-large {
  border-radius: 20px;
}

.radius-full {
  border-radius: 50%;
}

/* Subtle Shadows */
.shadow-subtle {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.shadow-medium {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.shadow-large {
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
}
```

---

## 7. Image Guidelines

### Aspect Ratios

```css
/* Standard Landscape */
.image-landscape {
  aspect-ratio: 1.5;
}

/* Portrait */
.image-portrait {
  aspect-ratio: 0.66667;
}

/* Video Ratio */
.image-video {
  aspect-ratio: 1.77778;  /* 16:9 */
}

/* Square */
.image-square {
  aspect-ratio: 1;
}
```

### Image Treatment

```css
/* Background Images */
.bg-image {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;  /* or fixed for parallax */
}

/* Parallax Background */
.bg-parallax {
  background-attachment: fixed;
}

/* Overlay Patterns */
.image-overlay::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.15);
}

/* Specific Opacity Overlays */
.overlay-70::after {
  background-color: rgba(0, 0, 0, 0.7);
}

.overlay-60::after {
  background-color: rgba(0, 0, 0, 0.6);
}

.overlay-15::after {
  background-color: rgba(0, 0, 0, 0.15);
}
```

---

## 8. Conversion-Focused Elements

### Email Opt-In Section

```css
.opt-in-section {
  padding: 80px 100px;
  background-color: #ffffff;
  text-align: center;
}

@media (max-width: 768px) {
  .opt-in-section {
    padding: 60px 30px;
  }
}

.opt-in-headline {
  font-family: 'Joane Regular', serif;
  font-size: 42px;
  line-height: 1.2;
  margin-bottom: 20px;
  color: #3a3f42;
}

@media (max-width: 768px) {
  .opt-in-headline {
    font-size: 32px;
  }
}

.opt-in-description {
  font-family: 'Droid Serif', serif;
  font-size: 17px;
  line-height: 1.8;
  color: #687277;
  max-width: 600px;
  margin: 0 auto 40px;
}

.opt-in-form {
  display: flex;
  gap: 20px;
  max-width: 500px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .opt-in-form {
    flex-direction: column;
  }
}

.opt-in-input {
  flex: 1;
  padding: 15px 20px;
  border: 1px solid #dedede;
  border-radius: 5px;
  font-size: 14px;
}

.opt-in-submit {
  background-color: #3a3f42;
  color: #ffffff;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
}
```

### CTA Patterns

```css
/* Inline CTA */
.cta-inline {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #ad895b;
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.cta-inline:hover {
  opacity: 0.7;
}

.cta-inline::after {
  content: '→';
  font-size: 16px;
}

/* Large CTA Block */
.cta-block {
  padding: 60px 80px;
  background-color: #ad895b;
  text-align: center;
  border-radius: 10px;
}

.cta-block-headline {
  font-family: 'Joane Regular', serif;
  font-size: 36px;
  color: #ffffff;
  margin-bottom: 30px;
}

.cta-block-button {
  background-color: #ffffff;
  color: #ad895b;
  padding: 15px 40px;
  border: none;
  border-radius: 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.cta-block-button:hover {
  transform: translateY(-3px);
}
```

### Social Proof Display

```css
.social-proof-section {
  padding: 60px 100px;
  background-color: rgba(219, 216, 213, 0.1);
  text-align: center;
}

@media (max-width: 768px) {
  .social-proof-section {
    padding: 40px 30px;
  }
}

.social-proof-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #687277;
  margin-bottom: 40px;
}

.logo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 40px;
  align-items: center;
  justify-items: center;
}

@media (max-width: 768px) {
  .logo-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
}
```

### Resource/Product Cards

```css
.resource-card {
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.resource-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.resource-card-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.resource-card-content {
  padding: 30px;
}

.resource-card-badge {
  display: inline-block;
  padding: 5px 12px;
  background-color: #ad895b;
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  border-radius: 15px;
  margin-bottom: 15px;
}

.resource-card-title {
  font-family: 'Joane Regular', serif;
  font-size: 24px;
  line-height: 1.3;
  margin-bottom: 15px;
  color: #3a3f42;
}

.resource-card-description {
  font-family: 'Droid Serif', serif;
  font-size: 14px;
  line-height: 1.8;
  color: #687277;
  margin-bottom: 20px;
}

.resource-card-cta {
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #ad895b;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.resource-card-cta::after {
  content: '→';
  transition: transform 0.3s ease;
}

.resource-card-cta:hover::after {
  transform: translateX(5px);
}
```

---

## 9. Accessibility Guidelines

### Semantic HTML

```html
<!-- Use proper heading hierarchy -->
<h1>Main Page Title</h1>
<h2>Section Heading</h2>
<h3>Subsection Heading</h3>

<!-- Use semantic elements -->
<header>...</header>
<nav>...</nav>
<main>...</main>
<article>...</article>
<aside>...</aside>
<footer>...</footer>

<!-- Proper button vs link usage -->
<button>Submit Form</button>
<a href="/page">Navigate to Page</a>
```

### ARIA Patterns

```html
<!-- Skip Navigation -->
<a href="#main-content" class="skip-link">Skip to main content</a>

<!-- Navigation Landmarks -->
<nav aria-label="Main navigation">...</nav>
<nav aria-label="Footer navigation">...</nav>

<!-- Buttons -->
<button aria-label="Open mobile menu" aria-expanded="false">
  <span class="hamburger-icon"></span>
</button>

<!-- Forms -->
<label for="email">Email Address</label>
<input type="email" id="email" name="email" required aria-required="true">

<!-- Images -->
<img src="portrait.jpg" alt="Melissa Ambrosini headshot">

<!-- Videos -->
<video aria-label="About Melissa Ambrosini" controls>
  <source src="video.mp4" type="video/mp4">
  <track kind="captions" src="captions.vtt" srclang="en">
</video>
```

### Color Contrast

```css
/* Ensure WCAG AA compliance (4.5:1 for normal text, 3:1 for large text) */

/* Good Examples */
.text-on-white {
  color: #3a3f42;  /* Passes AA for all sizes */
  background-color: #ffffff;
}

.text-on-dark {
  color: #ffffff;  /* Passes AA for all sizes */
  background-color: #3a3f42;
}

/* Check contrast for gold accent */
.accent-text {
  color: #ad895b;
  background-color: #ffffff;  /* May need AA Large (18px+) */
}
```

### Keyboard Navigation

```css
/* Focus States */
*:focus {
  outline: 2px solid #ad895b;
  outline-offset: 2px;
}

/* Custom Focus for Buttons */
.button:focus {
  outline: 2px solid #ad895b;
  outline-offset: 3px;
}

/* Skip Link */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background-color: #3a3f42;
  color: #ffffff;
  padding: 10px 20px;
  text-decoration: none;
  z-index: 10000;
}

.skip-link:focus {
  top: 0;
}
```

---

## 10. Performance Optimization

### Image Optimization

```html
<!-- Responsive Images -->
<picture>
  <source media="(max-width: 768px)" srcset="image-mobile.jpg">
  <source media="(min-width: 769px)" srcset="image-desktop.jpg">
  <img src="image-desktop.jpg" alt="Description" loading="lazy">
</picture>

<!-- Lazy Loading -->
<img src="image.jpg" alt="Description" loading="lazy">

<!-- Modern Formats -->
<picture>
  <source type="image/webp" srcset="image.webp">
  <source type="image/jpeg" srcset="image.jpg">
  <img src="image.jpg" alt="Description">
</picture>
```

### Font Loading

```css
/* Font Display Strategy */
@font-face {
  font-family: 'Joane Light';
  src: url('joane-light.woff2') format('woff2'),
       url('joane-light.woff') format('woff');
  font-display: swap;  /* Show fallback font while loading */
  font-weight: 300;
}
```

### CSS Optimization

```css
/* Use CSS Custom Properties for consistency and performance */
:root {
  --color-primary: #3a3f42;
  --color-accent: #ad895b;
  --font-display: 'Joane Light', serif;
  --font-body: 'Droid Serif', serif;
  --spacing-unit: 8px;
}

/* Reduce repaints with transform instead of top/left */
.animated-element {
  transform: translateY(30px);  /* Better performance */
  /* Instead of: top: 30px; */
}

/* Use will-change for animations */
.smooth-animation {
  will-change: transform, opacity;
  transition: transform 0.3s ease, opacity 0.3s ease;
}
```

---

## 11. Design System Usage Guide

### Color Application

**Primary Use Cases:**
- **#3a3f42 (Dark Charcoal)**: Primary buttons, headlines, body text, navigation
- **#ad895b (Gold Tan)**: Accent badges, hover states, awards, eyebrows
- **#bca289 (Warm Beige)**: Submit buttons, secondary accents
- **#ffffff (White)**: Main backgrounds, button text, footer text

**Background Tinting Strategy:**
- Alternate sections between pure white and 20-40% beige/cream overlays
- Use darker overlays (60-70%) for video backgrounds
- Footer and dramatic sections use pure black (#000000)

### Typography Pairing

**Hierarchy Pattern:**
1. **Eyebrow**: Montserrat 12px uppercase (0.2em tracking)
2. **Headline**: Joane Light 50px (desktop) / 38px (mobile)
3. **Subheading**: Freight Big Pro Italic 19px
4. **Body**: Droid Serif 17px (desktop) / 14px (mobile)
5. **CTA**: Montserrat 12px uppercase

**Best Practices:**
- Never use more than 3 font families per section
- Maintain consistent line-height ratios (1.1 for headlines, 2.0 for body)
- Use italic sparingly for emphasis and subheadings

### Spacing Rhythm

**Vertical Rhythm:**
- Section padding: 80-100px (desktop), 60px (mobile)
- Element spacing: 30-40px between major elements
- Text spacing: 16-24px between paragraphs
- Component gaps: 40-60px in grids

**Horizontal Rhythm:**
- Container padding: 50-100px (desktop), 20-30px (mobile)
- Grid gaps: 40-60px (2-column), 30px (3-column), 20px (4-column)
- Button padding: 10-15px vertical, 14-40px horizontal

### Component Selection

**When to Use:**
- **Primary Button**: Main CTAs, form submissions, key actions
- **Secondary Button**: Alternative actions, "Learn More" links
- **Text Link**: Navigation, inline references, footer links
- **Card**: Product offerings, blog posts, resources
- **Pull Quote**: Testimonials, featured quotes, social proof

### Responsive Strategy

**Mobile-First Approach:**
1. Design for 320px width first
2. Single-column layouts on mobile
3. Stack all grids vertically
4. Reduce font sizes by 20-30%
5. Adjust spacing to 50-70% of desktop values

**Breakpoint Behavior:**
- **< 768px**: Full mobile experience
- **≥ 768px**: Transition to desktop layout
- **1200px**: Optimal desktop viewing width

---

## 12. Brand Voice & Aesthetic

### Visual Identity

**Core Attributes:**
- Premium yet approachable
- Editorial sophistication
- Warm, inviting neutrals
- Asymmetrical, dynamic layouts
- Generous whitespace
- Soft, organic shapes

### Design Philosophy

**Principles:**
1. **Clarity**: Clear visual hierarchy guides users to conversion points
2. **Authenticity**: Real photography, genuine testimonials, personal touch
3. **Elegance**: Refined typography and restrained color palette
4. **Dynamism**: Rotated elements and alternating layouts create visual interest
5. **Trust**: Social proof, awards, and publication logos build credibility

### Conversion Focus

**Strategic Elements:**
- Hero CTAs above the fold
- Multiple email capture points throughout page
- Testimonials from recognized figures
- Award badges and publication logos
- Video backgrounds for emotional connection
- Clear product/offering cards with strong CTAs
- Exit-intent popups for lead capture

---

## 13. Implementation Checklist

### Essential Elements for Landing Page

- [ ] **Hero Section**: Large headline, subheading, CTA, background video/image
- [ ] **Social Proof**: Logo cloud of publications and testimonials
- [ ] **Product/Offering Cards**: 3-4 offerings with images, descriptions, CTAs
- [ ] **Email Opt-In**: Prominent signup form with clear benefit statement
- [ ] **Testimonials**: 2-3 pull quotes with photos and attribution
- [ ] **Resource Section**: Related content or bonuses
- [ ] **Footer**: Links, social icons, copyright

### Design Quality Checks

- [ ] All text maintains minimum 4.5:1 contrast ratio
- [ ] Buttons have clear hover states
- [ ] Images have alt text
- [ ] Forms have proper labels
- [ ] Mobile view tested at 320px width
- [ ] Fonts loaded with fallbacks
- [ ] Images optimized and lazy-loaded
- [ ] Videos have appropriate overlays
- [ ] Spacing is consistent throughout
- [ ] Typography hierarchy is clear

### Conversion Optimization

- [ ] Primary CTA visible above the fold
- [ ] Multiple conversion points throughout page
- [ ] Social proof prominently displayed
- [ ] Clear value proposition in hero
- [ ] Testimonials from credible sources
- [ ] Urgency/scarcity elements if applicable
- [ ] Mobile-optimized CTA buttons
- [ ] Form fields minimized for quick signup

---

## Appendix: Color Replacement Strategy

### Converting Yellow/Warm Tones to Blue

Since you mentioned replacing yellow/warm tones with blue for your mentoring program:

```css
/* Original Warm Palette */
--color-gold-tan: #ad895b;
--color-warm-beige: #bca289;
--color-dusty-sage: #a39687;

/* Suggested Blue Replacements */
--color-primary-blue: #4a7c9e;      /* Deep ocean blue (replaces gold-tan) */
--color-light-blue: #89b4d1;        /* Soft sky blue (replaces warm-beige) */
--color-slate-blue: #6b8ca3;        /* Muted slate (replaces dusty-sage) */

/* Alternative Cool Palette */
--color-navy: #2c5f7c;              /* Rich navy for authority */
--color-teal: #4a8e8e;              /* Professional teal */
--color-powder-blue: #a8c6db;       /* Gentle powder blue */
```

**Application:**
- Replace all gold accent colors with primary blue
- Use light blue for badges and highlights
- Maintain dark charcoal for text and buttons (provides strong contrast with blues)
- Keep white/cream backgrounds for clean, professional look
- Use navy or deep blue for footer instead of black (optional)

---

## File Structure Reference

```
/design-system
  /fonts
    - joane-light.woff
    - joane-regular.woff
    - joane-semibold.woff
    - freight-big-pro-italic.woff
    - droid-serif.woff
    - montserrat.woff

  /css
    - variables.css         (Color, spacing, typography tokens)
    - base.css              (Reset, base styles)
    - typography.css        (Font definitions, text styles)
    - buttons.css           (All button variants)
    - forms.css             (Form components)
    - cards.css             (Card components)
    - navigation.css        (Header, footer, menus)
    - sections.css          (Hero, content sections, footers)
    - animations.css        (Transitions, hover effects)
    - utilities.css         (Helper classes)

  /images
    /hero
    /products
    /testimonials
    /logos
    /backgrounds

  /videos
    - hero-background.mp4
    - about-section.mp4
```

---

## Quick Reference Summary

**Key Colors:**
- Primary: #3a3f42 (dark charcoal)
- Accent: #ad895b (gold) → Replace with #4a7c9e (blue)
- Background: #ffffff (white) + rgba overlays

**Key Fonts:**
- Display: Joane Light 50px / 38px
- Body: Droid Serif 17px / 14px
- UI: Montserrat 12px uppercase

**Key Spacing:**
- Section: 80-100px padding (desktop)
- Element: 30-40px gaps
- Text: 16-24px margins

**Key Components:**
- Hero with video background
- Alternating product cards (rotated images)
- Pull quote testimonials
- Email opt-in with iPhone mockup
- Logo cloud social proof
- Dark footer

**Key Interactions:**
- 0.5s fade transitions
- Hover opacity to 0.7
- Image zoom to 110-180%
- Grayscale to color on hover

---

This design system provides everything needed to recreate the premium, conversion-focused aesthetic of Melissa Ambrosini's website while allowing for customization to match your mentoring program's brand identity.
