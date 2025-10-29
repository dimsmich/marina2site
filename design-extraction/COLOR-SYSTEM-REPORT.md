# Maggie Edwards Complete Color System

**Extraction Date:** 2025-10-26T20:30:50.773Z
**Source:** https://maggieedwards.com/
**Total Unique Colors:** 16

---

## 1. BLUE COLOR PALETTE (Primary Brand Colors)

### DARK BLUES

#### #112042
- RGB: rgb(17, 32, 66)
- Usage Count: 122 occurrences
- Applied to: background-color, color, transition, transform, height

#### #162A56
- RGB: rgb(22, 42, 86)
- Usage Count: 1 occurrences
- Applied to: border-bottom


## 2. TEAL/CYAN ACCENT COLORS

### LIGHT TEALS

#### #A2F6E4
- RGB: rgb(162, 246, 228)
- Usage Count: 16 occurrences
- Applied to: color, background-color, line-height, z-index, border-bottom


## 3. WARM ACCENT COLORS (Coral/Pink)

### CORAL

#### #EEC3AF
- RGB: rgb(238, 195, 175)
- Usage Count: 11 occurrences
- Applied to: fill, border-bottom, color, margin-top, letter-spacing

#### #F2D3C4
- RGB: rgb(242, 211, 196)
- Usage Count: 1 occurrences
- Applied to: color


### RED

#### #FF808B
- RGB: rgb(255, 128, 139)
- Usage Count: 48 occurrences
- Applied to: background-color, border-bottom, color, fill, transform

#### #ED1B35
- RGB: rgb(237, 27, 53)
- Usage Count: 4 occurrences
- Applied to: color


## 4. NEUTRAL COLORS (Grays, Whites, Blacks)

### WHITE

- **#FFF** - rgb(255, 255, 255) - 71 uses
- **#FFF3F2** - rgb(255, 243, 242) - 10 uses
- **#EEE** - rgb(238, 238, 238) - 2 uses
- **#F7FCFE** - rgb(247, 252, 254) - 1 uses
- **#F5F5F5** - rgb(245, 245, 245) - 1 uses
- **#F6F6F6** - rgb(246, 246, 246) - 1 uses
- **#F1F3F7** - rgb(241, 243, 247) - 1 uses

### GRAY DARK

- **#1D1D1D** - rgb(29, 29, 29) - 21 uses
- **#484848** - rgb(72, 72, 72) - 1 uses

## 5. COLOR USAGE PATTERNS

### Top 15 Most Used Colors

| Rank | Hex | RGB | Category | Uses | Primary Context |
|------|-----|-----|----------|------|----------------|
| 1 | #112042 | 17,32,66 | blue-dark | 122 | background-color |
| 2 | #FFF | 255,255,255 | neutral-white | 71 | color |
| 3 | #FF808B | 255,128,139 | accent-red | 48 | background-color |
| 4 | #1D1D1D | 29,29,29 | neutral-gray-dark | 21 | color |
| 5 | #A2F6E4 | 162,246,228 | teal-light | 16 | color |
| 6 | #EEC3AF | 238,195,175 | accent-coral | 11 | fill |
| 7 | #FFF3F2 | 255,243,242 | neutral-white | 10 | text-transform |
| 8 | #ED1B35 | 237,27,53 | accent-red | 4 | color |
| 9 | #EEE | 238,238,238 | neutral-white | 2 | border |
| 10 | #162A56 | 22,42,86 | blue-dark | 1 | border-bottom |
| 11 | #F2D3C4 | 242,211,196 | accent-coral | 1 | color |
| 12 | #F7FCFE | 247,252,254 | neutral-white | 1 | transition |
| 13 | #F5F5F5 | 245,245,245 | neutral-white | 1 | padding |
| 14 | #F6F6F6 | 246,246,246 | neutral-white | 1 | animation |
| 15 | #F1F3F7 | 241,243,247 | neutral-white | 1 | color |

## 6. IMPLEMENTATION GUIDE FOR MARINA PROJECT

### Replace Warm Tones with Blue Tones

This color system should replace Melissa Ambrosini's warm/yellow color scheme:

**Primary Brand Blue:** #112042
- Use for: headers, navigation, primary buttons, key CTAs
- RGB: rgb(17, 32, 66)

**Accent Teal:** #A2F6E4
- Use for: hover states, links, highlights
- RGB: rgb(162, 246, 228)

**Secondary Accent (Coral/Pink):** #EEC3AF
- Use for: underlines, decorative elements (use sparingly)
- RGB: rgb(238, 195, 175)

### CSS Variable Recommendations

```css
:root {
  --color-primary: #112042;
  --color-accent: #A2F6E4;
  --color-highlight: #EEC3AF;
  --color-white: #FFF;
  --color-gray-dark: #1D1D1D;
}
```

## 7. RGBA/TRANSPARENCY COLORS

Found 4 rgba/rgb color declarations:

- rgba(0,0,0,0.3)
- rgba(0,0,0,0.45)
- rgba(0,0,0,0.05)
- rgba(0,0,0,0.6)
