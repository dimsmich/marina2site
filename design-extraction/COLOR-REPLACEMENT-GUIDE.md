# Color Replacement Guide: Melissa → Maggie

## Direct Color Mapping for Marina Project

This guide provides **exact color replacements** to transform the Marina project from Melissa Ambrosini's warm palette to Maggie Edwards' sophisticated blue system.

---

## Complete Color Mapping Table

### Primary Brand Colors

| Element | Melissa Ambrosini | Maggie Edwards | Notes |
|---------|-------------------|----------------|-------|
| **Primary Brand** | Yellow/Gold tones | **#112042** Navy | Main brand identity |
| **Headers** | Warm background | **#112042** Navy | All header backgrounds |
| **Navigation** | Warm bg | **#112042** Navy | Top nav, menus |
| **Footer** | Warm bg | **#112042** Navy | Footer background |

### Accent Colors

| Element | Melissa Ambrosini | Maggie Edwards | Notes |
|---------|-------------------|----------------|-------|
| **Primary Accent** | Orange/Coral | **#A2F6E4** Teal | Links, hover states |
| **Link Hover** | Warm orange | **#A2F6E4** Teal | All interactive states |
| **CTA Highlights** | Warm accent | **#A2F6E4** Teal | Call-to-action elements |
| **Icon Highlights** | Warm | **#A2F6E4** Teal | SVG fills, icon colors |

### Decorative Elements

| Element | Melissa Ambrosini | Maggie Edwards | Notes |
|---------|-------------------|----------------|-------|
| **Underlines** | Warm coral | **#FF808B** Pink | Heading underlines (1-2px) |
| **Borders** | Warm peach | **#FF808B** Pink | Decorative borders |
| **Dividers** | Warm tone | **#FF808B** Pink | Visual separators |
| **Soft Accents** | Peach/beige | **#EEC3AF** Soft Coral | Subtle decorative fills |

### Text Colors

| Element | Melissa Ambrosini | Maggie Edwards | Notes |
|---------|-------------------|----------------|-------|
| **Headings** | Warm black | **#112042** Navy | h1, h2, h3 |
| **Body Text** | Warm gray | **#1D1D1D** Cool Gray | Paragraphs, content |
| **Secondary Text** | Light warm | **#484848** Mid Gray | Captions, notes |
| **Text on Dark** | White/cream | **#FFFFFF** Pure White | Text on navy backgrounds |

### Backgrounds

| Element | Melissa Ambrosini | Maggie Edwards | Notes |
|---------|-------------------|----------------|-------|
| **Primary BG** | Warm white/cream | **#FFFFFF** White | Main backgrounds |
| **Secondary BG** | Light beige | **#FFF3F2** Off-White | Subtle sections |
| **Tertiary BG** | Warm gray | **#F1F3F7** Light Blue-Gray | Cards, panels |
| **Header BG** | Yellow/gold | **#112042** Navy | All headers |

---

## CSS Variable Replacement

### Find and Replace These Variables

```css
/* OLD - Melissa Ambrosini's warm palette */
:root {
  --color-primary: #F5D547;        /* Yellow/Gold */
  --color-accent: #FF6B35;         /* Warm Orange */
  --color-highlight: #FFBF69;      /* Peach */
  --color-text: #2D3142;           /* Warm Black */
  --color-bg: #FFF8F0;             /* Warm White */
}

/* NEW - Maggie Edwards' cool palette */
:root {
  --color-primary: #112042;        /* Navy Blue */
  --color-accent: #A2F6E4;         /* Teal */
  --color-highlight: #FF808B;      /* Coral Pink */
  --color-text: #1D1D1D;           /* Cool Gray */
  --color-bg: #FFFFFF;             /* Pure White */

  /* Additional variables */
  --color-primary-light: #162A56;  /* Light Navy */
  --color-accent-soft: #EEC3AF;    /* Soft Coral */
  --color-bg-subtle: #FFF3F2;      /* Off-White */
  --color-bg-gray: #F1F3F7;        /* Light Blue-Gray */
  --color-text-secondary: #484848; /* Mid Gray */
}
```

---

## Component-Specific Replacements

### Headers & Navigation

```css
/* OLD */
.header {
  background: #F5D547;  /* Yellow */
  color: #2D3142;       /* Dark text */
}

.nav-link:hover {
  color: #FF6B35;       /* Orange */
}

/* NEW */
.header {
  background: #112042;  /* Navy */
  color: #FFFFFF;       /* White */
}

.nav-link:hover {
  color: #A2F6E4;       /* Teal */
}
```

### Buttons

```css
/* OLD */
.button-primary {
  background: #F5D547;       /* Yellow */
  color: #2D3142;            /* Dark */
  border: 2px solid #F5D547;
}

.button-primary:hover {
  background: #FFBF69;       /* Peach */
}

/* NEW */
.button-primary {
  background: #112042;       /* Navy */
  color: #FFFFFF;            /* White */
  border: 2px solid #112042;
}

.button-primary:hover {
  background: transparent;
  color: #112042;            /* Navy */
  border-color: #A2F6E4;     /* Teal */
}
```

### Links

```css
/* OLD */
a {
  color: #FF6B35;                           /* Orange */
  border-bottom: 1px solid #FFBF69;         /* Peach */
}

a:hover {
  color: #F5D547;                           /* Yellow */
}

/* NEW */
a {
  color: #112042;                           /* Navy */
  border-bottom: 1px solid #A2F6E4;         /* Teal */
}

a:hover {
  color: #A2F6E4;                           /* Teal */
  border-bottom-color: transparent;
}
```

### Headings

```css
/* OLD */
h1, h2, h3 {
  color: #2D3142;                           /* Warm black */
  border-bottom: 2px solid #FFBF69;         /* Peach */
}

/* NEW */
h1, h2, h3 {
  color: #112042;                           /* Navy */
  border-bottom: 2px solid #FF808B;         /* Pink */
}
```

### Form Inputs

```css
/* OLD */
input, textarea {
  border: 2px solid #F5D547;    /* Yellow */
  color: #2D3142;                /* Warm black */
  background: #FFF8F0;           /* Warm white */
}

input:focus {
  border-color: #FF6B35;         /* Orange */
}

/* NEW */
input, textarea {
  border: 2px solid #112042;    /* Navy */
  color: #1D1D1D;                /* Cool gray */
  background: #FFFFFF;           /* White */
}

input:focus {
  border-color: #A2F6E4;         /* Teal */
}
```

### Cards & Panels

```css
/* OLD */
.card {
  background: #FFF8F0;           /* Warm white */
  border: 1px solid #FFBF69;     /* Peach */
}

.card-header {
  background: #F5D547;           /* Yellow */
  color: #2D3142;                /* Dark */
}

/* NEW */
.card {
  background: #FFFFFF;           /* White */
  border: 1px solid #F1F3F7;     /* Light gray */
}

.card-header {
  background: #112042;           /* Navy */
  color: #FFFFFF;                /* White */
}
```

---

## Gradient Replacements

### Hero Section Gradients

```css
/* OLD - Warm gradient */
.hero {
  background: linear-gradient(135deg,
    #F5D547 0%,
    #FFBF69 100%
  );
}

/* NEW - Cool gradient */
.hero {
  background: linear-gradient(135deg,
    #112042 0%,
    #162A56 50%,
    #A2F6E4 100%
  );
}
```

### Overlay Gradients

```css
/* OLD */
.overlay {
  background: linear-gradient(0deg,
    rgba(245, 213, 71, 0.8) 0%,
    rgba(255, 191, 105, 0.4) 100%
  );
}

/* NEW */
.overlay {
  background: linear-gradient(0deg,
    rgba(17, 32, 66, 0.8) 0%,
    rgba(17, 32, 66, 0.4) 100%
  );
}
```

---

## SVG Color Replacements

### Icon Fills

```css
/* OLD */
.icon {
  fill: #F5D547;        /* Yellow */
}

.icon:hover {
  fill: #FF6B35;        /* Orange */
}

/* NEW */
.icon {
  fill: #112042;        /* Navy */
}

.icon:hover {
  fill: #A2F6E4;        /* Teal */
}
```

---

## Shadow & Overlay Updates

### Box Shadows

```css
/* OLD - Warm shadows */
box-shadow: 0 4px 20px rgba(245, 213, 71, 0.3);

/* NEW - Neutral shadows */
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
```

### Dark Overlays

```css
/* Keep these as-is (neutral blacks) */
rgba(0, 0, 0, 0.3)   /* Light overlay */
rgba(0, 0, 0, 0.45)  /* Medium overlay */
rgba(0, 0, 0, 0.6)   /* Dark overlay */
```

---

## Typography Color Adjustments

### Font Colors by Element

```css
/* Body text */
body {
  color: #1D1D1D;      /* Cool gray instead of warm */
}

/* Headings */
h1, h2, h3, h4, h5, h6 {
  color: #112042;      /* Navy instead of warm black */
}

/* Links in content */
.content a {
  color: #112042;      /* Navy base */
}

.content a:hover {
  color: #A2F6E4;      /* Teal accent */
}

/* Blockquotes */
blockquote {
  border-left: 4px solid #FF808B;  /* Pink accent */
  color: #112042;                   /* Navy text */
}
```

---

## Brand Asset Updates

### Logo Color Adjustments

If your logo uses warm colors, consider creating variations:

1. **Primary Logo**: Navy (#112042) version
2. **Reversed Logo**: White (#FFFFFF) for dark backgrounds
3. **Accent Logo**: Teal (#A2F6E4) for special cases

---

## Testing Checklist

After replacement, verify:

- [ ] All headers use #112042 Navy
- [ ] All hover states use #A2F6E4 Teal
- [ ] All decorative underlines use #FF808B Pink
- [ ] Body text uses #1D1D1D Cool Gray
- [ ] Backgrounds use #FFFFFF White
- [ ] All contrast ratios meet WCAG AA/AAA
- [ ] SVG icons updated to new colors
- [ ] Form elements use Navy borders
- [ ] Buttons have Navy backgrounds
- [ ] Cards and panels use new neutrals

---

## Quick Find & Replace Guide

Use your code editor's find/replace feature:

### Hex Color Replacements

```
Find:    #F5D547    Replace:    #112042    (Yellow → Navy)
Find:    #FF6B35    Replace:    #A2F6E4    (Orange → Teal)
Find:    #FFBF69    Replace:    #FF808B    (Peach → Pink)
Find:    #2D3142    Replace:    #1D1D1D    (Warm Black → Cool Gray)
Find:    #FFF8F0    Replace:    #FFFFFF    (Warm White → Pure White)
```

**Note:** Always review replacements manually to ensure context is correct!

---

## Progressive Enhancement Strategy

Don't replace everything at once. Follow this order:

### Phase 1: Headers & Navigation
- Replace header backgrounds with Navy
- Update navigation links to Teal on hover
- Change logo to Navy version

### Phase 2: Typography
- Update heading colors to Navy
- Change body text to Cool Gray
- Add Pink underlines to key headings

### Phase 3: Interactive Elements
- Update button styles (Navy primary)
- Change link colors (Teal accents)
- Update form input borders (Navy)

### Phase 4: Backgrounds & Cards
- Replace warm backgrounds with White
- Update card styles with new neutrals
- Adjust subtle backgrounds to Off-White

### Phase 5: Polish & Testing
- Replace SVG icon colors
- Update gradients
- Test accessibility
- Final QA pass

---

## Troubleshooting Common Issues

### Issue: Colors look too cold

**Solution:** Ensure you're using the Pink/Coral accent (#FF808B) for decorative elements to add warmth.

### Issue: Not enough contrast

**Solution:** Use Pure White (#FFFFFF) backgrounds with Navy (#112042) or Dark Gray (#1D1D1D) text.

### Issue: Links not visible enough

**Solution:** Use Navy (#112042) for link text with Teal (#A2F6E4) underlines, then reverse on hover.

### Issue: Headers too dark

**Solution:** Correct! Navy (#112042) creates professional, grounded feel. Add Teal accents for energy.

---

## Final Verification

Run these checks before deployment:

1. **Color Contrast**: Use WebAIM Contrast Checker
   - Navy + White should be 14.2:1 ✓
   - Dark Gray + White should be 15.8:1 ✓

2. **Visual Consistency**: All primary elements use Navy
3. **Brand Alignment**: Professional, trustworthy, energetic
4. **Accessibility**: All text meets WCAG AA minimum
5. **Cross-Browser**: Test in Chrome, Firefox, Safari, Edge

---

**Ready to transform your color palette?**

Start with Phase 1, test thoroughly, then move to the next phase. The complete transformation from warm to cool will reposition your brand as more professional and sophisticated while maintaining approachability through strategic use of Teal and Pink accents.
