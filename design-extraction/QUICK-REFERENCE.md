# Maggie Edwards Color System - Quick Reference Card

## Essential Colors (Copy & Paste Ready)

### PRIMARY BRAND COLOR
```
Navy Blue: #112042
RGB: rgb(17, 32, 66)
```
**Use for:** Backgrounds, headers, navigation, primary buttons, headings

---

### PRIMARY ACCENT
```
Teal: #A2F6E4
RGB: rgb(162, 246, 228)
```
**Use for:** Hover states, links, highlights, interactive elements

---

### DECORATIVE ACCENT
```
Coral/Pink: #FF808B
RGB: rgb(255, 128, 139)
```
**Use for:** Thin underlines (1-2px), decorative borders, special highlights

---

### NEUTRAL COLORS
```
White: #FFFFFF
Dark Text: #1D1D1D
Off-White: #FFF3F2
Light Gray: #F1F3F7
```

---

## CSS Variables (Paste into :root)

```css
:root {
  /* Primary */
  --color-primary: #112042;
  --color-accent: #A2F6E4;
  --color-highlight: #FF808B;

  /* Neutrals */
  --color-white: #FFFFFF;
  --color-text: #1D1D1D;
  --color-bg-subtle: #FFF3F2;

  /* Shadows */
  --shadow: rgba(0, 0, 0, 0.3);
}
```

---

## Common Patterns

### Header
```css
background: #112042;
color: #FFFFFF;
```

### Button Primary
```css
background: #112042;
color: #FFFFFF;
border: 2px solid #112042;
```

### Button Hover
```css
background: transparent;
color: #112042;
border-color: #A2F6E4;
```

### Link
```css
color: #112042;
border-bottom: 1px solid #A2F6E4;
```

### Link Hover
```css
color: #A2F6E4;
```

### Heading Underline
```css
border-bottom: 2px solid #FF808B;
```

---

## Contrast Check

| Combination | Ratio | WCAG |
|-------------|-------|------|
| Navy + White | 14.2:1 | AAA ✓ |
| Dark Gray + White | 15.8:1 | AAA ✓ |
| Navy + Teal | 7.3:1 | AA ✓ |

---

## Color Temperature Scale

```
COOL ←――――――――――――――――→ WARM

#112042  #162A56  #A2F6E4  #EEC3AF  #FF808B
  Navy   Navy-Lt    Teal     Coral     Pink
```

**Strategy:** Keep cool-dominant (Navy + Teal = 80%), use warm accents sparingly (20%)

---

## Usage Frequency Guide

```
🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦  Navy #112042 (50%)
⬜⬜⬜⬜⬜⬜⬜⬜          White #FFFFFF (30%)
🟦🟦🟦                  Pink #FF808B (10%)
🟦🟦                    Teal #A2F6E4 (7%)
🟦                      Others (3%)
```

---

## Don't Forget!

- Navy is your foundation - use it everywhere
- Teal is your energy - use it for interactions
- Pink is decorative - use it as thin lines
- White is your space - don't be afraid of it
- High contrast = better accessibility

---

**Quick Implementation Checklist:**

- [ ] Replace warm backgrounds with #112042 Navy
- [ ] Change accent colors to #A2F6E4 Teal
- [ ] Update link hover states to use Teal
- [ ] Add thin #FF808B Pink underlines to headings
- [ ] Test all contrast ratios
- [ ] Replace button styles
- [ ] Update form input borders
- [ ] Check mobile responsive colors
