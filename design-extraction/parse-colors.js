const fs = require('fs');

// Read all CSS files
const files = ['core.css', 'main.css', 'edits.css'];
const allCSS = files.map(f => {
    try {
        return fs.readFileSync(f, 'utf8');
    } catch (e) {
        return '';
    }
}).join('\n');

// Extract all colors
const hexColors = new Set();
const rgbaColors = new Set();
const colorUsage = {};

// Find hex colors
const hexMatches = allCSS.matchAll(/(#[0-9a-fA-F]{3,6})/g);
for (const match of hexMatches) {
    const color = match[1].toUpperCase();
    hexColors.add(color);
}

// Find rgba/rgb colors
const rgbaMatches = allCSS.matchAll(/rgba?\(([^)]+)\)/g);
for (const match of rgbaMatches) {
    rgbaColors.add(match[0]);
}

// Convert hex to RGB for analysis
function hexToRgb(hex) {
    // Handle 3-character hex codes
    if (hex.length === 4) {
        hex = '#' + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
    }

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

// Categorize colors
function categorizeColor(hex) {
    const rgb = hexToRgb(hex);
    if (!rgb) return 'invalid';

    const { r, g, b } = rgb;

    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // Calculate saturation
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const saturation = max === 0 ? 0 : (max - min) / max;

    // Neutrals (low saturation)
    if (saturation < 0.15) {
        if (luminance > 0.9) return 'neutral-white';
        if (luminance < 0.1) return 'neutral-black';
        if (luminance > 0.5) return 'neutral-gray-light';
        return 'neutral-gray-dark';
    }

    // Calculate hue dominance
    const rDom = r > g && r > b;
    const gDom = g > r && g > b;
    const bDom = b > r && b > g;

    // Blues - THE KEY COLORS WE NEED!
    if (bDom) {
        if (luminance < 0.2) return 'blue-dark';
        if (luminance < 0.5) return 'blue-medium';
        return 'blue-light';
    }

    // Greens/Teals
    if (gDom && b > r) {
        if (luminance > 0.7) return 'teal-light';
        return 'teal-medium';
    }

    // Warm accent colors
    if (rDom) {
        if (g > b) return 'accent-coral'; // Pinkish/coral
        return 'accent-red';
    }

    return 'other';
}

// Find context for each color
function findColorContext(color) {
    const contexts = [];
    const regex = new RegExp(`(\\w+-?\\w+)\\s*:\\s*[^;]*${color.replace('#', '\\#')}[^;]*;`, 'gi');
    const matches = allCSS.matchAll(regex);

    for (const match of matches) {
        contexts.push(match[1]);
    }

    return contexts;
}

// Organize colors
const categorized = {};
const blues = [];
const neutrals = [];
const accents = [];

for (const color of hexColors) {
    const category = categorizeColor(color);
    const contexts = findColorContext(color);

    if (!categorized[category]) {
        categorized[category] = [];
    }

    const colorData = {
        hex: color,
        rgb: hexToRgb(color),
        contexts: [...new Set(contexts)].slice(0, 10),
        usageCount: contexts.length
    };

    categorized[category].push(colorData);

    // Organize by type
    if (category.includes('blue')) blues.push(colorData);
    if (category.includes('neutral')) neutrals.push(colorData);
    if (category.includes('accent') || category.includes('teal')) accents.push(colorData);
}

// Generate report
let report = `# Maggie Edwards Complete Color System\n\n`;
report += `**Extraction Date:** ${new Date().toISOString()}\n`;
report += `**Source:** https://maggieedwards.com/\n`;
report += `**Total Unique Colors:** ${hexColors.size}\n\n`;

report += `---\n\n`;

// BLUES - THE PRIMARY FOCUS
report += `## 1. BLUE COLOR PALETTE (Primary Brand Colors)\n\n`;

const blueCategories = ['blue-dark', 'blue-medium', 'blue-light'];
blueCategories.forEach(cat => {
    if (categorized[cat]) {
        report += `### ${cat.replace('blue-', '').toUpperCase()} BLUES\n\n`;

        categorized[cat].sort((a, b) => b.usageCount - a.usageCount).forEach(color => {
            report += `#### ${color.hex}\n`;
            report += `- RGB: rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})\n`;
            report += `- Usage Count: ${color.usageCount} occurrences\n`;
            report += `- Applied to: ${color.contexts.slice(0, 5).join(', ') || 'N/A'}\n`;
            report += `\n`;
        });
        report += `\n`;
    }
});

// TEAL/CYAN ACCENTS
report += `## 2. TEAL/CYAN ACCENT COLORS\n\n`;

const tealCats = ['teal-light', 'teal-medium'];
tealCats.forEach(cat => {
    if (categorized[cat]) {
        report += `### ${cat.replace('teal-', '').toUpperCase()} TEALS\n\n`;

        categorized[cat].sort((a, b) => b.usageCount - a.usageCount).forEach(color => {
            report += `#### ${color.hex}\n`;
            report += `- RGB: rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})\n`;
            report += `- Usage Count: ${color.usageCount} occurrences\n`;
            report += `- Applied to: ${color.contexts.slice(0, 5).join(', ') || 'N/A'}\n`;
            report += `\n`;
        });
        report += `\n`;
    }
});

// WARM ACCENTS (Pink/Coral - might be used sparingly)
report += `## 3. WARM ACCENT COLORS (Coral/Pink)\n\n`;

const accentCats = ['accent-coral', 'accent-red'];
accentCats.forEach(cat => {
    if (categorized[cat]) {
        report += `### ${cat.replace('accent-', '').toUpperCase()}\n\n`;

        categorized[cat].sort((a, b) => b.usageCount - a.usageCount).forEach(color => {
            report += `#### ${color.hex}\n`;
            report += `- RGB: rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})\n`;
            report += `- Usage Count: ${color.usageCount} occurrences\n`;
            report += `- Applied to: ${color.contexts.slice(0, 5).join(', ') || 'N/A'}\n`;
            report += `\n`;
        });
        report += `\n`;
    }
});

// NEUTRALS
report += `## 4. NEUTRAL COLORS (Grays, Whites, Blacks)\n\n`;

const neutralCats = ['neutral-white', 'neutral-gray-light', 'neutral-gray-dark', 'neutral-black'];
neutralCats.forEach(cat => {
    if (categorized[cat]) {
        report += `### ${cat.replace('neutral-', '').toUpperCase().replace('-', ' ')}\n\n`;

        categorized[cat].sort((a, b) => b.usageCount - a.usageCount).forEach(color => {
            report += `- **${color.hex}** - rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}) - ${color.usageCount} uses\n`;
        });
        report += `\n`;
    }
});

// COLOR USAGE PATTERNS
report += `## 5. COLOR USAGE PATTERNS\n\n`;

// Top 15 most used colors
const allColors = [];
for (const cat in categorized) {
    allColors.push(...categorized[cat]);
}
allColors.sort((a, b) => b.usageCount - a.usageCount);

report += `### Top 15 Most Used Colors\n\n`;
report += `| Rank | Hex | RGB | Category | Uses | Primary Context |\n`;
report += `|------|-----|-----|----------|------|----------------|\n`;

allColors.slice(0, 15).forEach((color, i) => {
    const cat = Object.keys(categorized).find(k => categorized[k].includes(color));
    const primaryContext = color.contexts[0] || 'N/A';
    report += `| ${i + 1} | ${color.hex} | ${color.rgb.r},${color.rgb.g},${color.rgb.b} | ${cat} | ${color.usageCount} | ${primaryContext} |\n`;
});

report += `\n`;

// IMPLEMENTATION GUIDE
report += `## 6. IMPLEMENTATION GUIDE FOR MARINA PROJECT\n\n`;
report += `### Replace Warm Tones with Blue Tones\n\n`;
report += `This color system should replace Melissa Ambrosini's warm/yellow color scheme:\n\n`;

// Create mapping suggestions
const primaryBlue = blues.find(b => b.usageCount > 10) || blues[0];
const accentTeal = categorized['teal-light'] ? categorized['teal-light'][0] : null;
const accentCoral = categorized['accent-coral'] ? categorized['accent-coral'][0] : null;

if (primaryBlue) {
    report += `**Primary Brand Blue:** ${primaryBlue.hex}\n`;
    report += `- Use for: headers, navigation, primary buttons, key CTAs\n`;
    report += `- RGB: rgb(${primaryBlue.rgb.r}, ${primaryBlue.rgb.g}, ${primaryBlue.rgb.b})\n\n`;
}

if (accentTeal) {
    report += `**Accent Teal:** ${accentTeal.hex}\n`;
    report += `- Use for: hover states, links, highlights\n`;
    report += `- RGB: rgb(${accentTeal.rgb.r}, ${accentTeal.rgb.g}, ${accentTeal.rgb.b})\n\n`;
}

if (accentCoral) {
    report += `**Secondary Accent (Coral/Pink):** ${accentCoral.hex}\n`;
    report += `- Use for: underlines, decorative elements (use sparingly)\n`;
    report += `- RGB: rgb(${accentCoral.rgb.r}, ${accentCoral.rgb.g}, ${accentCoral.rgb.b})\n\n`;
}

report += `### CSS Variable Recommendations\n\n`;
report += `\`\`\`css\n`;
report += `:root {\n`;
if (primaryBlue) report += `  --color-primary: ${primaryBlue.hex};\n`;
if (accentTeal) report += `  --color-accent: ${accentTeal.hex};\n`;
if (accentCoral) report += `  --color-highlight: ${accentCoral.hex};\n`;

// Add neutrals
const whiteColor = categorized['neutral-white'] ? categorized['neutral-white'][0] : null;
const blackColor = categorized['neutral-black'] ? categorized['neutral-black'][0] : null;
const grayLight = categorized['neutral-gray-light'] ? categorized['neutral-gray-light'][0] : null;
const grayDark = categorized['neutral-gray-dark'] ? categorized['neutral-gray-dark'][0] : null;

if (whiteColor) report += `  --color-white: ${whiteColor.hex};\n`;
if (blackColor) report += `  --color-black: ${blackColor.hex};\n`;
if (grayLight) report += `  --color-gray-light: ${grayLight.hex};\n`;
if (grayDark) report += `  --color-gray-dark: ${grayDark.hex};\n`;

report += `}\n`;
report += `\`\`\`\n\n`;

// RGBA Colors
report += `## 7. RGBA/TRANSPARENCY COLORS\n\n`;
report += `Found ${rgbaColors.size} rgba/rgb color declarations:\n\n`;

const rgbaArray = Array.from(rgbaColors).slice(0, 20);
rgbaArray.forEach(color => {
    report += `- ${color}\n`;
});

if (rgbaColors.size > 20) {
    report += `\n... and ${rgbaColors.size - 20} more\n`;
}

// Save report
fs.writeFileSync('COLOR-SYSTEM-REPORT.md', report);

// Save JSON data
const jsonData = {
    extraction_date: new Date().toISOString(),
    source: 'https://maggieedwards.com/',
    total_colors: hexColors.size,
    categorized,
    top_colors: allColors.slice(0, 20),
    blues,
    neutrals,
    accents
};

fs.writeFileSync('color-data.json', JSON.stringify(jsonData, null, 2));

console.log('✅ Color extraction complete!');
console.log(`📊 Total colors: ${hexColors.size}`);
console.log(`🔵 Blue colors: ${blues.length}`);
console.log(`⚪ Neutral colors: ${neutrals.length}`);
console.log(`🎨 Accent colors: ${accents.length}`);
console.log(`\n📁 Files created:`);
console.log(`   - COLOR-SYSTEM-REPORT.md`);
console.log(`   - color-data.json`);
