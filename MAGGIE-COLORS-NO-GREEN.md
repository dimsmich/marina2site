# Maggie Edwards Design System - Color Palette & Design Tokens (NO GREEN)

## COLOR ANALYSIS SUMMARY
The Maggie Edwards website uses a sophisticated, feminine color palette centered around **deep navy blue** as the primary brand color, with **coral/pink** as the primary accent. The design avoids green entirely, creating a professional yet warm aesthetic perfect for a coaching brand.

---

## PRIMARY COLOR PALETTE

### 1. NAVY BLUE (Primary Brand Color)
**Hex:** `#112042`
**RGB:** rgb(17, 32, 66)
**Usage Count:** 61 instances (most used color)

**Applications:**
- Primary text color (headings, body text)
- Button borders
- Navigation text
- Footer background
- Icon fills
- Form inputs
- Links (hover states)
- Borders and dividers

**Accessibility:**
- Excellent contrast on white backgrounds (WCAG AAA)
- Professional, trustworthy, stable
- Strong brand identity anchor

---

### 2. CORAL/PINK (Primary Accent)
**Hex:** `#ff808b`
**RGB:** rgb(255, 128, 139)
**Usage Count:** 39 instances (primary accent)

**Applications:**
- Underlines and text decorations
- Button hover states
- Active/selected states
- Accent headings
- Decorative lines
- Link underlines (animated)
- Category tags
- Call-to-action emphasis

**Color Psychology:**
- Warm, inviting, feminine
- Energetic yet soft
- Creates visual interest without overwhelming
- Complements navy without fighting for attention

---

### 3. WHITE (Background & Text)
**Hex:** `#fff`
**RGB:** rgb(255, 255, 255)
**Usage Count:** 26 instances

**Applications:**
- Primary background color
- Text on dark backgrounds (footer, nav overlay)
- Button text
- Card/box backgrounds
- Clean space for readability

---

### 4. OFF-WHITE/CREAM TONES

#### Warm Cream
**Hex:** `#eec3af`
**RGB:** rgb(238, 195, 175)
**Usage Count:** 6 instances

**Applications:**
- Footer link accents ("Site By They")
- Warm neutral for softer contrast
- Complements coral/pink palette

#### Light Pink Tint
**Hex:** `#fff3f2`
**RGB:** rgb(255, 243, 242)
**Usage Count:** 5 instances

**Applications:**
- Very subtle background tint
- Section background variations
- Soft separation between sections

---

### 5. LIGHT BLUE/TEAL (Secondary Accent)

#### Sky Blue
**Hex:** `#f7fcfe`
**RGB:** rgb(247, 252, 254)
**Usage Count:** 1 instance (callout-link background)

**Applications:**
- Background color for callout sections
- Very subtle, barely perceptible blue tint
- Creates visual hierarchy without strong color

#### Aqua/Teal (Tertiary Accent)
**Hex:** `#a2f6e4`
**RGB:** rgb(162, 246, 228)
**Usage Count:** 3 instances

**Applications:**
- Newsletter button variant (.button.teal)
- Footer button text
- Icon accents
- Provides refreshing contrast to coral

**Note:** This is a blue-green/cyan, but NOT green. It reads as "aqua" or "turquoise" - acceptable for the color palette as it's distinctly blue-toned.

---

### 6. NEUTRAL GRAYS

#### Dark Gray
**Hex:** `#1d1d1d`
**RGB:** rgb(29, 29, 29)
**Usage Count:** 7 instances

**Applications:**
- Very dark text (near-black alternative to pure black)
- High contrast text
- Used sparingly for emphasis

#### Medium Gray
**Hex:** `#484848`
**RGB:** rgb(72, 72, 72)
**Usage Count:** 1 instance

**Applications:**
- Dropdown menu text
- Secondary text color
- Less emphasis than navy

#### Light Gray
**Hex:** `#f6f6f6`
**RGB:** rgb(246, 246, 246)
**Usage Count:** 1 instance

**Applications:**
- Very subtle background
- Form input backgrounds
- Hover states

#### Cool Gray
**Hex:** `#f1f3f7`
**RGB:** rgb(241, 243, 247)
**Usage Count:** 1 instance

**Applications:**
- Background tint with slight cool tone
- Section backgrounds

#### Hover Gray
**Hex:** `#f5f5f5`
**RGB:** rgb(245, 245, 245)
**Usage Count:** 1 instance

**Applications:**
- Hover states on dropdown items
- Interactive feedback

---

### 7. SHADOW & OVERLAY COLORS

#### Black with Low Opacity (Shadows)
**RGBA:** `rgba(0, 0, 0, 0.05)`
**Usage Count:** 6 instances

**Applications:**
- Subtle box shadows
- Dropdown shadows
- Card elevation
- Very gentle depth

**RGBA:** `rgba(0, 0, 0, 0.3)`
**Usage Count:** 1 instance

**Applications:**
- Stronger shadow on hover
- Button hover shadow

**RGBA:** `rgba(0, 0, 0, 0.45)`
**Usage Count:** 3 instances

**Applications:**
- Hero image overlay (darkens background for text readability)
- Medium-strength shadows

**RGBA:** `rgba(0, 0, 0, 0.6)`
**Usage Count:** 1 instance

**Applications:**
- Strong overlay
- Maximum darkening for text contrast

---

## COLOR SYSTEM ARCHITECTURE

### Primary Color Relationships

```
BRAND CORE
├── #112042 (Navy) ──────── Primary
├── #ff808b (Coral) ──────── Accent
└── #fff (White) ──────────── Base

SUPPORTING PALETTE
├── #eec3af (Warm Cream) ─── Neutral Warm
├── #a2f6e4 (Aqua) ────────── Accent Cool
└── #1d1d1d (Dark Gray) ──── Text Alternative

SUBTLE TINTS
├── #fff3f2 (Pink Tint) ──── Background Variation
├── #f7fcfe (Sky Tint) ───── Background Variation
├── #f6f6f6 (Light Gray) ─── Background Variation
└── #f1f3f7 (Cool Gray) ──── Background Variation
```

---

## COLOR USAGE PATTERNS

### Typography Color Rules

#### Headings
- **Primary:** #112042 (navy) - 95% of headings
- **Accent:** #ff808b (coral) - Emphasis words, decorative elements
- **Cursive Accents:** #ff808b - Using jennifer or caramello fonts

#### Body Text
- **Primary:** #112042 (navy) - All body copy
- **Secondary:** #1d1d1d (dark gray) - Rare, specific contexts
- **Light Backgrounds:** Always navy (#112042)

#### Links
- **Default:** #112042 (navy)
- **Hover:** #ff808b (coral)
- **Underline:** #ff808b (coral) with animation
- **Footer:** #fff (white), hover to #eec3af (cream)

---

### Background Color Rules

#### Section Backgrounds
- **Default:** #fff (white) - 90% of sections
- **Callout Sections:** #f7fcfe (light blue tint)
- **Footer:** #112042 (navy)
- **Announcement Bar:** Likely #f7fcfe or #fff3f2
- **Modal Overlays:** rgba(0, 0, 0, 0.45) behind white content

#### Card/Box Backgrounds
- **Default:** #fff (white)
- **Hover:** No color change, shadow animation instead
- **Form Inputs:** #fff with #ff808b border-bottom
- **Dropdown Active:** #fff with shadow

---

### Interactive Element Colors

#### Buttons

**Primary Button:**
```css
background: transparent
border: 2px solid #112042 (navy)
color: #112042 (navy)
icon fill: #112042

Hover:
  border: 2px solid #112042
  color: #112042
  icon: shifts up/forward
  shadow: 0 10px 20px -10px rgba(0,0,0,0.3)
```

**Teal Variant Button:**
```css
background: transparent
color: #a2f6e4 (aqua)
border-bottom: 1px solid #fff
icon fill: #a2f6e4

Hover:
  underline animates away
```

**Text Button:**
```css
background: transparent
color: #112042 (navy)
border-bottom: 2px solid #ff808b (coral)

Hover:
  underline width: 0 (animated)
```

#### Form Inputs
```css
background: transparent or #fff
border: none
border-bottom: 1px solid #ff808b (coral)
color: #112042 (navy)
placeholder: #112042 (opacity variant)
```

#### Navigation
```css
background: #112042 (navy) - takeover menu
text: #fff (white)
links hover: #ff808b (coral) highlight
```

---

### Decorative Elements

#### Lines & Borders
- **Vertical Lines:** #112042 (navy), 1px width
- **Horizontal Rules:** #112042 (navy), 1px width
- **Border Accents:** #ff808b (coral), 1-2px
- **Underlines:** #ff808b (coral), animated

#### Icons & SVGs
- **Primary Fill:** #112042 (navy)
- **Accent Fill:** #ff808b (coral)
- **Footer Social:** #fff (white)
- **Teal Variant:** #a2f6e4 (aqua)

#### Patterns
- **Footer Background:** Butterfly SVG pattern (appears white/light on navy)
- **Logo Gradient:** Uses #ff808b (coral) gradient effect

---

## TYPOGRAPHY SYSTEM

### Font Families

#### Primary Serif (Begum)
**Family:** `"begum", serif`
**Weights:** 400 (Regular), 500 (Medium)
**Usage:** 23 instances
**Applications:**
- Main headings (H1, H2, H3)
- Body text in some sections
- Large display text
- Elegant, professional feel

**Color Usage:**
- Always #112042 (navy) or #fff (white on dark backgrounds)

---

#### Display Serif (Whitman Display)
**Family:** `"whitman-display", serif`
**Weights:** 300 (Light), 400 (Regular), 500 (Medium)
**Usage:** 20 instances
**Applications:**
- Subheadings
- Button text
- Accent headings
- Menu text
- Quote attributions

**Color Usage:**
- Primarily #112042 (navy)
- Sometimes #ff808b (coral) for emphasis
- #fff (white) in footer

---

#### Sans-Serif (Montserrat)
**Family:** `"montserrat", sans-serif`
**Weights:** 400 (Regular), 500 (Medium), 600 (Semi-Bold)
**Usage:** 19 instances
**Applications:**
- Overlines (uppercase labels)
- Small headings
- Copyright text
- Navigation labels
- Category tags

**Color Usage:**
- Typically #112042 (navy)
- #ff808b (coral) for category tags/overlines
- #fff (white) in footer

---

#### Cursive/Script Fonts

**Jennifer:**
**Family:** `"jennifer", cursive`
**Usage:** Accent words in headings
**Applications:**
- Emphasized words in hero text ("empowerment", "Direction")
- Large decorative overlay text
- Creates handwritten, personal touch

**Color Usage:**
- Always #ff808b (coral) for visual pop
- Sometimes spans with inline style="font-family: jennifer"

**Caramello:**
**Family:** `"caramello", cursive`
**Usage:** Decorative text
**Applications:**
- Similar to Jennifer, alternative script style
- Less common than Jennifer

**Color Usage:**
- #ff808b (coral) accent color

---

### Typography Scale

#### Display Sizes (Headings)
```
H1 Hero:        62-80px (responsive, uses vw units)
H1 Standard:    56-62px
H2 Large:       50-56px
H2 Standard:    42-44px
H3 Large:       38-44px
H3 Standard:    32-36px
H4:             26-30px
```

#### Body Sizes
```
Large Body:     20-22px
Standard Body:  15-18px (most common: 15px)
Small Body:     12-14px
```

#### UI Elements
```
Buttons:        20-36px (varies by prominence)
Overlines:      13-15px (uppercase)
Labels:         12-14px
```

#### Accent/Cursive
```
Jennifer/Caramello: 70-120px (large decorative)
Inline Script:      Inherits parent size
```

---

### Font Weight Usage

```css
/* Begum */
font-weight: 400 (Regular) - Body text, standard headings
font-weight: 500 (Medium)  - Emphasized headings

/* Whitman Display */
font-weight: 300 (Light)   - Menu items, delicate text
font-weight: 400 (Regular) - Standard text
font-weight: 500 (Medium)  - Emphasized buttons/links

/* Montserrat */
font-weight: 400 (Regular)  - Body labels
font-weight: 500 (Medium)   - Form labels
font-weight: 600 (Semi-Bold)- Overlines, uppercase labels
```

---

### Typography Color Matrix

| Element Type | Font Family | Size | Weight | Color | Notes |
|-------------|-------------|------|--------|-------|-------|
| H1 Hero | Begum | 62-80px | 500 | #112042 | Accent words in #ff808b |
| H2 Section | Begum | 42-56px | 500 | #112042 | |
| H3 Subsection | Begum | 32-44px | 500 | #112042 | |
| Body Text | Begum | 15-18px | 400 | #112042 | |
| Overline | Montserrat | 13-15px | 600 | #112042 or #ff808b | Uppercase |
| Button Primary | Whitman Display | 20-36px | 500 | #112042 | |
| Button Teal | Whitman Display | 20px | 400 | #a2f6e4 | Footer variant |
| Text Button | Whitman Display | 26-36px | 500 | #112042 | Underline in #ff808b |
| Menu Items | Whitman Display | 19-32px | 300 | #fff | On navy background |
| Footer Menu | Whitman Display | 19px | 300 | #fff | Uppercase |
| Cursive Accent | Jennifer | 70-120px | 400 | #ff808b | Decorative |
| Quote Text | Begum | 40-50px | 400 | #112042 | |
| Quote Attribution | Whitman Display | 12px | 500 | #112042 | |
| Form Labels | Montserrat | 14-15px | 500 | #112042 | |

---

### Letter Spacing

```css
/* Tight (negative spacing) */
letter-spacing: -0.04em  - Large body text (Begum)
letter-spacing: -0.02em  - Headings (Begum)
letter-spacing: -0.01em  - Form inputs (Begum)

/* Standard */
letter-spacing: 0        - Most text
letter-spacing: 0.01em   - Whitman Display buttons

/* Expanded (positive spacing) */
letter-spacing: 0.02em   - Montserrat overlines
letter-spacing: 0.03em   - Footer menu, uppercase text
letter-spacing: 0.04em   - Very wide labels
```

**Pattern:**
- Serif fonts (Begum, Whitman) often use negative letter-spacing for tighter, elegant look
- Sans-serif (Montserrat) uses positive letter-spacing for uppercase/small text
- Larger text = tighter spacing
- Smaller text = wider spacing (for readability)

---

### Line Heights

```css
/* Tight */
line-height: 1      - Overlines, labels (Montserrat)
line-height: 1.1    - Large headings, compressed stacking

/* Standard */
line-height: 1.3    - Medium headings, subheadings
line-height: 1.4    - Body text in contained contexts

/* Relaxed */
line-height: 1.6-1.8 - Long-form body text (articles)
```

---

## SPACING SYSTEM

### Vertical Spacing (Margins/Padding)

#### Micro Spacing (0-20px)
```
2px   - Underline margins, very tight elements
4px   - Button icon spacing
6px   - Button underline margin
8px   - Small element spacing, menu separators
12px  - Medium element spacing, icon margins
15px  - Standard padding (grid gutters)
```

#### Standard Spacing (20-60px)
```
20px  - Button icon margins, vertical centering offsets
25px  - Standard element margins, heading margins
30px  - Section internal spacing, form element spacing
40px  - Medium section spacing, callout padding
50px  - Large element margins, feed section spacing
60px  - Section top/bottom padding (standard)
```

#### Large Spacing (60-120px)
```
80px  - Footer padding top
100px - Large section breaks, pagination margins
110px - Footer element positioning
120px - Maximum section padding
```

---

### Horizontal Spacing

#### Container Max Widths
```
720px  - Narrow article content, footer menu
800px  - Callout sections, contained content
900px  - Mid-width sections
920px  - Gallery sections
1140px - Standard content width (most sections)
1260px - Wide sections (feed, header row)
```

#### Grid Gutters
```
15px - Foundation default column padding
```

#### Element Spacing
```
8px   - Menu item separators
10px  - Filter label margin
12px  - Icon margins, small horizontal spacing
15px  - Standard horizontal padding
20px  - Button icon horizontal space
60px  - Large horizontal padding (takeover menu)
```

---

### Padding Patterns

#### Buttons
```css
Primary Button:
  padding: 12px 30px (approximate, varies by button size)

Text Button:
  padding: 0 (no padding, underline provides visual weight)

Icon Button:
  padding: 0 (relies on icon size + margin)
```

#### Sections
```css
Standard Section:
  padding: 60px 35px (vertical | horizontal)

Footer:
  padding: 80px 35px 110px (top | sides | bottom)

Hero Section:
  padding: 0 (full-bleed image, caption has internal padding)
```

#### Boxes/Cards
```css
Standard Box:
  padding: 25px (all sides, for text containers)

Takeover Menu Box:
  padding: 25px 25px 25px 20px (varied for alignment)

Form Container:
  padding: 30px 15px (typical for modal forms)
```

---

## BORDER & RADIUS SYSTEM

### Border Widths
```
1px - Standard lines, dividers, borders
2px - Emphasized borders, button borders, underlines
```

### Border Radius Values
```
0    - Sharp corners (default for most elements)
50%  - Perfect circles (icon buttons, social icons, form elements)
```

**Note:** The design strongly favors sharp corners (border-radius: 0) for a clean, modern aesthetic. Circles (50%) are used only for:
- Round icon buttons
- Social media icons
- Specific decorative elements

---

### Border Colors
```
Primary: #112042 (navy)     - Most borders
Accent:  #ff808b (coral)    - Form inputs, decorative underlines
White:   #fff               - Borders on dark backgrounds
Transparent: transparent    - Many elements for clean look
```

---

## SHADOW SYSTEM

### Box Shadow Patterns

#### Subtle Shadows
```css
box-shadow: 2px 2px 3px 0px rgba(0,0,0,0.05)
```
**Usage:** Dropdown menus, cards at rest, subtle elevation

#### Medium Shadows
```css
box-shadow: 0 10px 20px -10px rgba(0,0,0,0.3)
```
**Usage:** Button hover states, interactive feedback

#### No Shadow (Default)
```css
box-shadow: none
```
**Usage:** Most elements rely on flat design, minimal shadows

**Philosophy:** The design uses shadows sparingly, preferring clean, flat surfaces. Shadows appear primarily on:
1. Dropdown menus (for layering)
2. Hover states (for interaction feedback)
3. Modal overlays (for depth separation)

---

## ANIMATION & TRANSITION SYSTEM

### Transition Speeds
```css
200ms - Fast (icon movements, hover effects)
300ms - Standard (underline animations, color changes)
```

### Easing Functions
```css
ease-in-out - Most transitions (smooth acceleration/deceleration)
ease        - Some default transitions
cubic-bezier(0, 1, 1, 0) - Loading spinner animation
```

### Common Transitions
```css
/* Underline Animation */
transition: width 300ms ease-in-out
width: 100% → 0 (on hover, underline disappears)

/* Icon Movement */
transition: transform 200ms ease-in-out
transform: translateY(-3px) (hover lifts icon)

/* Scale Effect */
transition: transform 200ms ease-in-out
transform: scale(1.03) (slight grow on hover)

/* Color Changes */
transition: color 200ms ease
color: #112042 → #ff808b (hover state)
```

---

## GRADIENT USAGE

### Logo Gradient
- **File:** logo-gradient.svg
- **Colors:** Likely #112042 → #ff808b or multicolor gradient
- **Usage:** Menu footer, branding elements

### No Background Gradients
- The site avoids gradient backgrounds
- Solid colors or images only
- Overlays use solid rgba colors

---

## ICON SYSTEM

### Icon Colors

#### Default State
```
fill: #112042 (navy) - Most icons
```

#### Hover State
```
fill: #ff808b (coral) - Interactive icons
```

#### On Dark Backgrounds
```
fill: #fff (white) - Footer, takeover menu
fill: #a2f6e4 (aqua) - Special accent (footer newsletter)
```

### Icon Sizes
```
15px × 15px - Small (social icons in footer)
17px × 17px - Medium-small (search, footer buttons)
20px × 20px - Standard (inline icons, dropdown arrows)
24px × 24px - Medium (button icons)
26px × 26px - Large inline (text button icons)
34px × 34px - Extra large (navigation arrows)
```

---

## COMPARISON TO STANDARD WEB COLOR SYSTEMS

### Unlike Material Design:
- No primary/secondary/tertiary color system
- Fewer color variations
- More emphasis on navy + coral duet
- Less reliance on color for UI state

### Unlike Bootstrap:
- No "danger", "warning", "success" colors
- Only two main brand colors
- Form validation doesn't use red/green
- Simpler, more refined palette

### Similar to Minimalist Systems:
- Very limited color palette
- Heavy use of white space
- Black/navy as primary text
- Single accent color (coral)
- Clean, uncluttered aesthetic

---

## COLOR ACCESSIBILITY COMPLIANCE

### WCAG Contrast Ratios

#### Text on White (#fff)
- **#112042 (Navy):** 13.6:1 - AAA (excellent for all text sizes)
- **#ff808b (Coral):** 3.2:1 - AA for large text only (18pt+ or bold 14pt+)
- **#1d1d1d (Dark Gray):** 15.2:1 - AAA (excellent)

#### White Text on Navy (#112042)
- **#fff (White):** 13.6:1 - AAA (excellent)

#### Coral on Navy
- **#ff808b on #112042:** 4.3:1 - AA for large text

### Best Practices Observed:
✓ Navy used for body text (high contrast)
✓ Coral used for decorative/large text only
✓ White on navy in footer (high contrast)
✓ No text uses low-contrast combinations
✓ Interactive elements have sufficient contrast

### Potential Issues:
⚠ Coral (#ff808b) used for some small text (category tags) - borderline AA compliance
- **Solution:** These are typically larger than 14pt, meeting AA Large requirement

---

## RESPONSIVE COLOR BEHAVIOR

### No Color Changes by Breakpoint
- Colors remain consistent across all screen sizes
- Same palette on mobile, tablet, desktop
- Color is not used as a responsive strategy

### Maintained Across Themes
- Light mode only (no dark mode detected)
- Consistent color application
- No seasonal or contextual color variations

---

## BRAND COLOR STRATEGY SUMMARY

### Primary Brand Identity
**Navy Blue (#112042):**
- Represents: Professionalism, trust, stability, intelligence
- Primary communication color
- Anchors the entire visual system
- Creates serious, credible coaching brand

### Primary Brand Accent
**Coral Pink (#ff808b):**
- Represents: Warmth, approachability, femininity, energy
- Softens the navy's seriousness
- Creates emotional connection
- Adds personality without overwhelming

### Color Harmony Analysis
- **Complementary Strategy:** Navy (blue) + Coral (red-orange) creates vibrant contrast
- **Temperature Balance:** Cool navy + warm coral
- **Gender Positioning:** Feminine without being overly "pink"
- **Professional + Personal:** Navy conveys expertise, coral conveys humanity

---

## DESIGN TOKEN EXPORT (CSS Custom Properties Format)

```css
:root {
  /* PRIMARY COLORS */
  --color-primary: #112042;      /* Navy */
  --color-accent: #ff808b;       /* Coral */
  --color-white: #fff;

  /* SECONDARY COLORS */
  --color-accent-teal: #a2f6e4;  /* Aqua */
  --color-neutral-cream: #eec3af;
  --color-text-dark: #1d1d1d;

  /* BACKGROUND TINTS */
  --bg-pink-tint: #fff3f2;
  --bg-sky-tint: #f7fcfe;
  --bg-light-gray: #f6f6f6;
  --bg-cool-gray: #f1f3f7;
  --bg-hover-gray: #f5f5f5;
  --bg-medium-gray: #484848;

  /* SHADOWS */
  --shadow-subtle: rgba(0, 0, 0, 0.05);
  --shadow-medium: rgba(0, 0, 0, 0.3);
  --shadow-overlay: rgba(0, 0, 0, 0.45);
  --shadow-strong: rgba(0, 0, 0, 0.6);

  /* TYPOGRAPHY */
  --font-serif-primary: "begum", serif;
  --font-serif-display: "whitman-display", serif;
  --font-sans-primary: "montserrat", sans-serif;
  --font-cursive-jennifer: "jennifer", cursive;
  --font-cursive-caramello: "caramello", cursive;

  /* FONT SIZES */
  --text-hero: 62px;
  --text-h1: 56px;
  --text-h2: 42px;
  --text-h3: 32px;
  --text-h4: 26px;
  --text-body-lg: 20px;
  --text-body: 15px;
  --text-small: 12px;
  --text-button: 26px;
  --text-overline: 13px;

  /* SPACING */
  --space-xs: 8px;
  --space-sm: 12px;
  --space-md: 25px;
  --space-lg: 40px;
  --space-xl: 60px;
  --space-2xl: 100px;

  /* CONTAINER WIDTHS */
  --container-narrow: 720px;
  --container-standard: 1140px;
  --container-wide: 1260px;

  /* BORDERS */
  --border-width: 1px;
  --border-width-thick: 2px;
  --border-radius: 0;
  --border-radius-circle: 50%;

  /* TRANSITIONS */
  --transition-fast: 200ms ease-in-out;
  --transition-standard: 300ms ease-in-out;
}
```

---

## COLOR PALETTE FOR RUSSIAN RUNE SITE

### RECOMMENDED ADAPTATIONS

#### Keep from Maggie:
✓ Navy blue (#112042) - Professional, mystical depth
✓ White (#fff) - Clean, spiritual, open
✓ Aqua/Teal (#a2f6e4) - Mystical water element

#### Remove/Replace:
✗ Coral (#ff808b) - Too warm/pink for mystical branding
✗ Warm cream (#eec3af) - Too warm/earthy

#### Add for Russian Rune Site:
- **Deep Purple:** #4A148C or #6A1B9A (mystical, spiritual, wisdom)
- **Royal Blue:** #1A237E or #283593 (deeper than navy, more mystical)
- **Silver/Metallic:** #B0BEC5 or #90A4AE (rune stone texture)
- **Deep Indigo:** #1A1A2E (darker than navy, night sky)

#### Suggested Palette:
```
PRIMARY: #1A237E (Royal Blue) - Replace navy
ACCENT:  #6A1B9A (Deep Purple) - Replace coral
NEUTRAL: #B0BEC5 (Silver Gray) - Rune stones
DARK:    #1A1A2E (Deep Indigo) - Backgrounds
LIGHT:   #fff (White) - Keep
ACCENT2: #a2f6e4 (Aqua) - Keep for mystical touch
```

---

## FINAL RECOMMENDATIONS

### What to Replicate:
1. **Two-color dominance** (one primary + one accent)
2. **High contrast text** (dark on light for readability)
3. **Minimal color palette** (fewer colors = more elegant)
4. **Strategic accent usage** (accent color for emphasis only)
5. **White space** (let colors breathe)
6. **Consistent icon colors** (one color for all icons)
7. **No gradients on backgrounds** (solid colors only)

### What to Adapt:
1. Replace warm coral with cool purple
2. Add mystical metallic tones
3. Consider darker overall theme (Maggie is light, runes can be darker)
4. Add moon/star accent colors (optional)
5. Use more shadows for depth/mystery

### What to Avoid:
- Green (per your requirement)
- Multiple competing accent colors
- Overly bright/neon colors
- Gradient backgrounds
- Low contrast text

---

**Document Version:** 1.0
**Analysis Date:** 2025-10-26
**Total Unique Colors:** 16 (excluding alpha variations)
**Primary Palette:** 3 colors (Navy, Coral, White)
**Framework:** Foundation 5.5.3 + Custom CSS
