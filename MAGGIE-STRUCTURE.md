# Maggie Edwards Website - Complete Structure & Layout Analysis

## EXECUTIVE SUMMARY
maggieedwards.com is a sophisticated coaching website built with WordPress, using Foundation 5.5.3 framework with custom design system. The site features elegant typography, strategic use of imagery, and a refined color palette emphasizing deep navy (#112042) and coral/pink accent (#ff808b).

---

## 1. COMPLETE PAGE STRUCTURE (Top to Bottom)

### ASIDE: Takeover Navigation Menu
**Purpose:** Full-screen overlay navigation
**Structure:**
```
<aside class="takeover-nav">
  ├── Close button (SVG icon)
  ├── <div class="menu-container">
      ├── <div class="split">
          ├── Thumbnail image with CTA overlay
          │   └── "Let's Start Today" message
          └── Navigation links
              ├── Main menu (8 items)
              ├── Utility menu (4 items)
              └── Footer with logo + social icons
```

**Key Features:**
- Split-screen layout (image left, menu right)
- Gradient logo
- Social media icons (Instagram, Facebook, LinkedIn)
- "Let's Start Today" call-to-action overlay on image

---

### SECTION 1: Announcement Bar
**HTML:** `<section class="announcement">`
**Layout:** Full-width, dismissable banner
**Content Structure:**
```
Welcome [heading] + Offer message + CTA link + Close button
```
**Styling:**
- Background color: Likely light/teal based on design
- Fixed/sticky positioning
- Close icon in top-right

---

### SECTION 2: Header/Navigation
**HTML:** `<header class="header">`
**Layout:** Horizontal navigation with centered logo approach
**Structure:**
```
<header>
  └── <ul class="main">
      ├── Logo (SVG, responsive versions)
      ├── Primary nav links (About, Programs, Contact)
      ├── Hamburger menu ("More")
      ├── CTA button ("Today.")
      └── Social icons (Instagram, Facebook, LinkedIn)
```

**Navigation Items:**
1. Logo (Home link with dual SVG - desktop/mobile versions)
2. "About" - /my-story/
3. "Programs" - /programs/
4. "Contact" - /work-with-me/
5. "More" menu (hamburger)
6. "Today." button (CTA)
7. Social media icons

**Responsive Behavior:**
- `.show-for-large-up` - Desktop logo
- `.show-for-medium-down` - Mobile logo
- Hamburger menu for overflow items

---

### SECTION 3: Hero Section (Primary)
**HTML:** `<section class="hero page-block">`
**Layout Type:** Full-screen hero with background image + text overlay

**Structure:**
```
<section class="hero">
  ├── <picture> (responsive image with multiple sources)
  │   ├── Desktop: 1440x875px
  │   ├── Tablet: 1024x750px
  │   ├── Mobile: 640x900px (portrait)
  │   └── Small: 320x450px
  ├── <div class="overlay"> (gradient/color overlay)
  └── <div class="caption-container left">
      └── <div class="caption">
          ├── <h1>From overwhelm to <span class="cursive">empowerment</span></h1>
          └── <a class="button">Let's Start Today + Arrow SVG</a>
```

**Design Details:**
- Full viewport height image
- Text positioned left-aligned
- Cursive accent font (jennifer) for emphasis word
- Gradient overlay for text readability
- Responsive image sources (WebP + JPEG fallbacks)

---

### SECTION 4: Callout Bar
**HTML:** `<section class="callout-bar page-block">`
**Layout:** Two-column grid (50/50 split)

**Structure:**
```
<section class="callout-bar">
  └── <div class="row">
      ├── Column 1: "Receive Free Clarity Guide" (heading)
      └── Column 2:
          ├── Email signup button (envelope icon)
          └── Social media icons
```

**Content:**
- Left: Text heading
- Right: CTA button + social links
- Background: Likely light/accent color

---

### SECTION 5: Hero Section (Secondary - About)
**HTML:** `<section class="hero page-block">`
**Layout Type:** Split hero with image background + centered text box

**Structure:**
```
<section class="hero">
  ├── <picture> (full background image)
  └── <div class="caption-container"> (no left/right class = centered)
      └── <div class="box">
          ├── <h2>Hi, I'm Maggie</h2>
          ├── <p><strong>Performance Coach UK</strong></p>
          ├── <p>Bio paragraph (140 words)</p>
          ├── <a class="button">My Story</a>
          └── <a class="button">Start Today</a>
```

**Design Details:**
- Centered text box overlay
- White/light background box
- Dual CTA buttons
- Responsive image handling
- Box has padding and likely shadow/border

---

### SECTION 6: Horizontal Rule
**HTML:** `<hr>`
**Purpose:** Visual section separator

---

### SECTION 7: Quote/Testimonial Slider
**HTML:** `<section class="quote small page-block">`
**Layout:** Single column, full-width testimonial carousel

**Structure:**
```
<section class="quote">
  └── <div class="row">
      └── <div class="testimonial-slider">
          └── Multiple <blockquote> elements
              ├── <p>Testimonial text</p>
              └── <cite>Name - Title, Location</cite>
```

**Content Pattern:**
- 7 testimonials total
- Rotating/sliding carousel
- Quote marks styled in CSS
- Author attribution with title and location
- Examples:
  - "Sylvia - Photographer, UK"
  - "Dorothy - SQE Lawyer, UK"
  - "Lucia - Empathy Coach, UK"

**Design Details:**
- Large quote typography
- Centered text
- Slick carousel navigation (dots/arrows)
- Subtle animation between slides

---

### SECTION 8: Programs Slider
**HTML:** `<section class="slider-container page-block">`
**Layout Type:** Split-screen slider (image left, text right)

**Structure:**
```
<section class="slider-container">
  └── <div class="programs-slider">
      └── Multiple <div class="split"> slides
          ├── <div class="thumb-container">
          │   └── Image (560x595px)
          └── <div class="split-container">
              └── <div class="text-container">
                  ├── <span class="overline">Programs</span>
                  ├── <h3>Program Title</h3>
                  ├── <p>Description</p>
                  ├── <span class="vertical-line"></span>
                  ├── <span class="heading">Discover my</span>
                  └── <a class="text-button">Program Link</a>
```

**Programs Included:**
1. **Performance Coaching**
   - Target: Athletes, lawyers, students, salespeople, accountants, PE professionals
   - Link: /programs/individual-coaching-london/
   - Text button: "1:1 Coaching"

2. **Build Successful Online Business**
   - Target: Coaches and service providers
   - Link: /programs/life-coaching-for-coaches/
   - Text button: "Business Coaching"

**Slider Controls:**
```
<div class="slide-controls-container">
  └── <div class="slide-controls">
      └── <div class="slick-arrows">
          ├── <button class="prev"> (left arrow SVG)
          ├── <span>/</span>
          └── <button class="next"> (right arrow SVG)
```

**Design Details:**
- 50/50 split layout (image/text)
- Lazy loading images
- Vertical line separator
- Overline + heading + description + CTA pattern
- Arrow navigation below slider

---

### SECTION 9: Horizontal Rule
**HTML:** `<hr/>`

---

### SECTION 10: Callout Link Section
**HTML:** `<section class="callout-link background page-block">`
**Layout:** Single column, centered text CTA

**Structure:**
```
<section class="callout-link background">
  └── <div class="row">
      └── <div class="columns">
          ├── <span class="overline">I want to work with Maggie</span>
          ├── <span class="heading">Make it happen</span>
          └── <a class="text-button">Book your Consultation</a>
```

**Design Details:**
- Background color (light blue: #f7fcfe)
- Centered alignment
- Large typography
- Underline animation on button hover

---

### SECTION 11: Blog Feed Section
**HTML:** `<section class="feed page-block">`
**Layout:** Asymmetric grid (1/3 intro + 2/3 article grid)

**Structure:**
```
<section class="feed">
  └── <div class="row" data-equalizer>
      ├── <div class="large-4 columns"> (1/3 width)
      │   └── <div class="vertical-centering">
      │       ├── <span class="overline">My Blog</span>
      │       ├── <h3>Proven Strategies & Insights</h3>
      │       ├── <span class="vertical-line"></span>
      │       ├── <span class="heading">Explore my</span>
      │       └── <a class="text-button">Latest Articles</a>
      └── <div class="large-8 columns"> (2/3 width)
          └── <ul class="grid"> (2-column grid on medium+)
              └── Multiple <li> with <article class="grid-item">
                  ├── <div class="thumb-container">
                  │   └── Image link
                  └── <div class="text-container">
                      ├── <a class="category">Tag</a>
                      ├── <a class="title">Article Title</a>
                      └── <p>Excerpt</p>
```

**Article Examples:**
1. "Neuroplasticity uses" - Tag: Insight
2. "Determined" - Tag: The Mind

**Grid Structure:**
- Desktop: 2 columns (medium-block-grid-2)
- Mobile: 1 column (small-block-grid-1)
- Foundation equalizer for equal heights

---

### SECTION 12: Newsletter Hero
**HTML:** `<section class="hero page-block">`
**Layout Type:** Hero with left-aligned caption overlay

**Structure:**
```
<section class="hero">
  ├── <picture> (full background)
  └── <div class="caption-container left">
      └── <div class="caption">
          ├── <h3>Join Today & Get My <span class="cursive">Direction</span> Guide <u>Free</u></h3>
          └── <a class="button teal">Let's Start Today + Arrow SVG</a>
```

**Design Details:**
- Background image: callout-newsletter-large
- Teal button variant
- Underlined "Free" text
- Cursive "Direction" accent
- Left-aligned caption

---

### SECTION 13: Horizontal Rule
**HTML:** `<hr />`

---

### SECTION 14: Instagram Feed
**HTML:** `<section class="feed page-block">`
**Layout:** Single column with dynamic Instagram grid

**Structure:**
```
<section class="feed">
  └── <div class="row">
      └── <div class="columns">
          ├── <h3>Follow me on IG & Stay <span>Connected</span></h3>
          ├── <a class="text-button">@maggieedwards.coach (IG link)</a>
          ├── <ul class="grid" id="instgram-block"> (populated via JS)
          ├── <a id="instagram-load-more">Browse More (+ icon)</a>
          └── <div class="ajax-spinner"> (loading animation)
```

**Grid Structure:**
- Desktop: 3 columns (medium-block-grid-3)
- Mobile: 1 column (small-block-grid-1)
- AJAX load more functionality
- Dynamic content from Instagram API

**Loading Spinner:**
- 4 animated dots
- CSS animation with cubic-bezier timing

---

### SECTION 15: Footer
**HTML:** `<footer class="footer">`
**Layout:** Three-column grid with centered logo

**Structure:**
```
<footer class="footer">
  └── <div class="row">
      ├── <div class="medium-6 large-4 columns"> (Left)
      │   └── <ul class="menu">
      │       ├── Terms
      │       ├── Privacy Policy
      │       ├── Media
      │       └── Connect
      ├── <div class="large-4 columns"> (Center - desktop only)
      │   └── Logo (stacked SVG)
      └── <div class="medium-6 large-4 columns"> (Right)
          └── <div class="text-container">
              ├── <span class="heading">Get a Free Clarity Guide</span>
              └── <a class="button">Sign Up (envelope icon)</a>
  └── <span class="copyright">Copyright © 2025 + Site By They link</span>
```

**Footer Features:**
- Background: Dark navy (#112042)
- Background pattern: Butterfly SVG repeating pattern
- Text color: White
- Logo: Centered stacked version
- Responsive: 2-column on tablet, stacked on mobile

**Menu Items:**
1. Terms - /terms-life-coaching-london/
2. Privacy Policy - /privacy-policy/
3. Media - /bio/
4. Connect - /contact/

**Copyright:**
- Small uppercase text
- "Site By They" link in accent color (#eec3af)

---

## 2. OVERLAY COMPONENTS (Hidden by Default)

### Takeover Forms (Modal Overlays)

#### A. General Contact Form
**Class:** `.takeover-form.general`
**Trigger:** Multiple CTAs throughout site
**Fields:**
- First Name
- Last Name
- Email Address (required)
- Phone Number
- Message (textarea)
- reCAPTCHA
- Submit button

#### B. Media Inquiry Form
**Class:** `.takeover-form.media`
**Trigger:** Media-specific links
**Same field structure as general form**

#### C. Programs Form
**Class:** `.takeover-form.programs`
**Trigger:** "Today" buttons and program CTAs
**Same field structure**

#### D. Newsletter Modal
**ID:** `#newsletter-modal`
**Class:** `.modal.reveal-modal`
**Layout:** Split design (image left, form right)
**Form Fields:**
- First Name
- Last Name
- Email Address (required)
- Submit ("Sign Up")
**Integration:** MailChimp (gmail.us3.list-manage.com)

---

## 3. HTML STRUCTURE PATTERNS

### Foundation Grid System
```
<section class="[section-type] page-block">
  <div class="row">
    <div class="small-12 medium-6 large-4 columns">
      Content
    </div>
  </div>
</section>
```

**Grid Classes:**
- `small-12` - Full width on mobile
- `medium-6` - Half width on tablet (641px+)
- `large-4` - Third width on desktop (1025px+)
- `columns` - Foundation column wrapper

### Responsive Image Pattern
```html
<picture>
  <!-- WebP sources for modern browsers -->
  <source type="image/webp" media="(min-width: 1025px)" srcset="...">

  <!-- JPEG fallbacks -->
  <source type="image/jpeg" media="(min-width: 1025px)" srcset="...">

  <!-- 2x retina versions -->
  <source srcset="image-1x.jpg 1x, image-2x.jpg 2x">

  <!-- Default img tag -->
  <img src="default.jpg" alt="...">
</picture>
```

**Breakpoints Used:**
- 1025px+ (desktop)
- 641-1024px (tablet)
- 481-640px (large mobile)
- 321-480px (medium mobile)
- 0-320px (small mobile)

### Lazy Loading
```html
<img src="data:image/svg+xml,..."
     data-src="actual-image.jpg"
     class="lazyload">
```

### Button Patterns

#### Primary Button
```html
<a href="#" class="button">
  Text
  <svg class="icon">...</svg>
</a>
```

#### Text Button (Underline Style)
```html
<a href="#" class="text-button">
  Text
</a>
<!-- Pseudo-element :after creates animated underline -->
```

#### Icon-Only Button
```html
<a href="#" class="button">
  <svg class="icon">...</svg>
  <span class="show-for-sr">Screen Reader Text</span>
</a>
```

---

## 4. SECTION TYPES & VARIATIONS

### Hero Sections (3 variations found)

#### Type A: Full-Screen with Overlay Text
```
hero > picture + overlay + caption-container.left > caption
```
- Use: Primary hero
- Text: Left-aligned, large heading
- CTA: Primary button

#### Type B: Centered Box Overlay
```
hero > picture + caption-container > box
```
- Use: About section
- Text: Centered white box
- CTA: Multiple buttons

#### Type C: Newsletter Hero
```
hero > picture + caption-container.left > caption
```
- Use: Newsletter signup
- Text: Left-aligned
- CTA: Teal button variant

### Feed Sections (2 variations)

#### Type A: Asymmetric Grid
```
row > [4-column intro] + [8-column grid]
```
- Use: Blog feed
- Layout: 1/3 text + 2/3 cards

#### Type B: Single Column
```
row > [12-column centered] + grid
```
- Use: Instagram feed
- Layout: Centered heading + grid below

### Callout Sections (2 variations)

#### Type A: Callout Bar
```
row > [6-column text] + [6-column CTA]
```
- Use: Top of page
- Layout: Horizontal split

#### Type B: Callout Link
```
row > [12-column centered text + CTA]
```
- Use: Mid-page conversion
- Layout: Centered stacked

---

## 5. CONTENT ORGANIZATION PRINCIPLES

### Hierarchy Pattern:
1. **Overline** (uppercase, small, letter-spaced)
2. **Heading** (large, serif, bold)
3. **Description** (paragraph text)
4. **Vertical Line** (decorative separator)
5. **Sub-heading** (small accent text)
6. **CTA** (text button or primary button)

### Typography Hierarchy:
- **H1**: 56-80px (hero headings)
- **H2**: 42-62px (section headings)
- **H3**: 32-44px (sub-headings)
- **Overline**: 13-15px (uppercase labels)
- **Body**: 15-22px (paragraph text)
- **Buttons**: 20-36px (CTA text)

### Spacing System:
- **Section Padding**: 60-120px vertical
- **Element Margin**: 12px, 25px, 30px, 40px, 50px, 60px
- **Grid Gutters**: 15px (Foundation default)
- **Container Max Width**:
  - Default: 1140px
  - Wide: 1260px
  - Narrow: 720px, 800px, 900px, 920px

---

## 6. RESPONSIVE BEHAVIOR

### Breakpoint Strategy:
- **Mobile First**: Base styles for smallest screens
- **Progressive Enhancement**: Add complexity at larger sizes

### Key Breakpoints (Foundation):
- `small`: 0-640px
- `medium`: 641-1024px
- `large`: 1025-1440px
- `xlarge`: 1441px+

### Layout Transformations:

#### Desktop (1025px+)
- 3-column footer
- Horizontal navigation
- Split-screen sections (50/50)
- 2-3 column article grids

#### Tablet (641-1024px)
- 2-column footer
- Horizontal navigation (condensed)
- Split-screen sections maintained
- 2-column article grids

#### Mobile (0-640px)
- Single column layout
- Hamburger menu
- Stacked sections
- 1-column article grid
- Reduced font sizes (responsive typography)

### Responsive Typography:
- Viewport-based sizing (vw units) for large headings
- Pixel fallbacks for older browsers
- Media query adjustments at each breakpoint

---

## 7. ACCESSIBILITY FEATURES

### ARIA Implementation:
- `role="button"` on interactive elements
- `aria-label` on forms and buttons
- `aria-hidden="true"` on decorative elements
- `aria-invalid` on form inputs
- `aria-required` on required fields
- `aria-live` regions for dynamic content

### Screen Reader Support:
- `.show-for-sr` class for screen reader-only text
- Semantic HTML5 elements (header, nav, section, aside, footer)
- Alt text on all images
- Label elements for form inputs

### Keyboard Navigation:
- Focus states on interactive elements
- Tab order follows visual order
- Skip links (implicit in semantic structure)

---

## 8. PERFORMANCE OPTIMIZATIONS

### Image Strategy:
1. **Responsive Images**: Multiple sizes for different viewports
2. **Modern Formats**: WebP with JPEG fallbacks
3. **Lazy Loading**: Images load as they enter viewport
4. **Retina Support**: 2x images for high-DPI displays
5. **Proper Sizing**: Images sized to container dimensions

### Loading Strategy:
- **Critical CSS**: Inline styles in head (Foundation)
- **Deferred JS**: Scripts loaded after content
- **Font Loading**: Typekit CSS loaded early
- **AJAX Pagination**: Instagram feed loads on demand

### Code Splitting:
- Separate CSS files (core, main, edits)
- Vendor libraries (Foundation, Slick)
- Conditional loading (contact forms)

---

## 9. THIRD-PARTY INTEGRATIONS

### Forms & Email:
- **Contact Form 7** (WordPress plugin)
- **MailChimp** (newsletter signups)
- **reCAPTCHA** (spam protection)

### Analytics & Tracking:
- **Google Analytics** (UA-149177626-1)
- **Facebook Pixel** (ID: 318219299776411)

### Social Media:
- **Instagram API** (feed integration)
- **Social Sharing**: Direct links to profiles

### SEO:
- **Yoast SEO** (WordPress plugin)
- **Schema.org markup** (Organization, WebPage, BreadcrumbList)
- **Open Graph** tags (Facebook/social sharing)
- **Twitter Cards**

---

## 10. KEY TECHNICAL SPECIFICATIONS

### Framework & Libraries:
- **Foundation 5.5.3** (CSS framework)
- **jQuery 2.1.4** (JavaScript library)
- **Slick 1.6.0** (carousel/slider)
- **WordPress 6.8.3** (CMS)

### Fonts:
- **Begum** (serif) - Primary headings and body
- **Whitman Display** (serif) - Accent headings
- **Montserrat** (sans-serif) - Labels and overlines
- **Jennifer** (cursive) - Accent words
- **Caramello** (cursive) - Decorative

### Browser Support:
- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE Edge compatibility mode
- Mobile Safari and Chrome
- Progressive enhancement for older browsers

---

## SUMMARY: SECTION ORDER CHECKLIST

✓ 1. Takeover Navigation (overlay)
✓ 2. Announcement Bar
✓ 3. Header/Navigation
✓ 4. Hero Section (Primary - "From overwhelm to empowerment")
✓ 5. Callout Bar (Free Clarity Guide)
✓ 6. Hero Section (Secondary - "Hi, I'm Maggie")
✓ 7. Testimonial Slider
✓ 8. Programs Slider (2 slides)
✓ 9. Callout Link ("Make it happen")
✓ 10. Blog Feed (Asymmetric grid)
✓ 11. Newsletter Hero
✓ 12. Instagram Feed
✓ 13. Footer
✓ 14. Modal Forms (overlay, hidden)

---

## RECOMMENDATIONS FOR RUSSIAN RUNE SITE

### Structure to Replicate:
1. **Hero with dramatic imagery** - Essential first impression
2. **Introduction box overlay** - Personal connection with Marina
3. **Testimonials slider** - Social proof with Cyrillic names/locations
4. **Service sections** - Rune reading types (split-screen slider)
5. **Callout for booking** - Primary conversion point
6. **Instagram integration** - Visual social proof
7. **Footer with resources** - Navigation and signup

### Elements to Adapt:
- Replace "Performance Coaching" language with "Rune Readings" terminology
- Adjust testimonial content for divination/spiritual context
- Modify color palette (remove coral, emphasize blues/purples)
- Maintain elegant, professional tone while embracing mystical aesthetic
- Keep clean typography hierarchy
- Preserve responsive image strategy

### Elements to Enhance:
- Add rune symbol graphics/icons
- Include more mystical visual elements
- Consider darker, moodier color scheme
- Add rune meanings reference section
- Include sample reading formats
- Add FAQ section about rune readings

---

**Document Version:** 1.0
**Analysis Date:** 2025-10-26
**Source:** https://maggieedwards.com/
**Framework:** Foundation 5.5.3 + WordPress
