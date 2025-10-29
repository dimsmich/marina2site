/**
 * Color Extraction Script for maggieedwards.com
 * Extracts complete color palette including blues, neutrals, and gradients
 */

const puppeteer = require('puppeteer');
const fs = require('fs');

async function extractColorSystem(url) {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    console.log(`Navigating to ${url}...`);
    await page.goto(url, { waitUntil: 'networkidle2' });

    // Extract all computed styles and colors
    const colorData = await page.evaluate(() => {
        const colors = new Set();
        const colorUsage = {};
        const gradients = new Set();

        // Helper to parse and normalize colors
        function normalizeColor(color) {
            if (!color || color === 'rgba(0, 0, 0, 0)' || color === 'transparent') return null;

            // Convert rgb/rgba to hex
            const rgb = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/);
            if (rgb) {
                const r = parseInt(rgb[1]).toString(16).padStart(2, '0');
                const g = parseInt(rgb[2]).toString(16).padStart(2, '0');
                const b = parseInt(rgb[3]).toString(16).padStart(2, '0');
                return `#${r}${g}${b}`.toUpperCase();
            }

            // Already hex
            if (color.startsWith('#')) {
                return color.toUpperCase();
            }

            return color;
        }

        // Extract colors from all elements
        const allElements = document.querySelectorAll('*');

        allElements.forEach(element => {
            const styles = window.getComputedStyle(element);
            const tagName = element.tagName.toLowerCase();
            const classList = Array.from(element.classList);
            const elementId = element.id || 'no-id';

            // Extract color properties
            const colorProps = [
                'color',
                'backgroundColor',
                'borderColor',
                'borderTopColor',
                'borderRightColor',
                'borderBottomColor',
                'borderLeftColor',
                'outlineColor',
                'textDecorationColor',
                'caretColor'
            ];

            colorProps.forEach(prop => {
                const value = styles[prop];
                const normalized = normalizeColor(value);

                if (normalized && normalized !== '#000000' && normalized !== '#FFFFFF') {
                    colors.add(normalized);

                    // Track usage
                    if (!colorUsage[normalized]) {
                        colorUsage[normalized] = {
                            count: 0,
                            usedIn: [],
                            properties: new Set()
                        };
                    }

                    colorUsage[normalized].count++;
                    colorUsage[normalized].properties.add(prop);

                    // Store sample usage
                    if (colorUsage[normalized].usedIn.length < 5) {
                        colorUsage[normalized].usedIn.push({
                            tag: tagName,
                            classes: classList,
                            property: prop
                        });
                    }
                }
            });

            // Extract gradients
            const bgImage = styles.backgroundImage;
            if (bgImage && bgImage.includes('gradient')) {
                gradients.add(bgImage);
            }
        });

        // Extract CSS variables
        const cssVariables = {};
        const rootStyles = getComputedStyle(document.documentElement);

        for (let i = 0; i < rootStyles.length; i++) {
            const prop = rootStyles[i];
            if (prop.startsWith('--')) {
                const value = rootStyles.getPropertyValue(prop).trim();
                if (value.includes('#') || value.includes('rgb')) {
                    cssVariables[prop] = value;
                }
            }
        }

        // Categorize colors
        function categorizeColor(hex) {
            const r = parseInt(hex.slice(1, 3), 16);
            const g = parseInt(hex.slice(3, 5), 16);
            const b = parseInt(hex.slice(5, 7), 16);

            // Calculate if it's blue-ish
            const isBlue = b > r && b > g;
            const blueDominance = b - Math.max(r, g);

            // Calculate luminance
            const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

            // Categorize
            if (Math.abs(r - g) < 10 && Math.abs(g - b) < 10 && Math.abs(r - b) < 10) {
                if (luminance > 0.9) return 'neutral-white';
                if (luminance < 0.1) return 'neutral-black';
                return 'neutral-gray';
            }

            if (isBlue && blueDominance > 30) {
                if (luminance > 0.7) return 'blue-light';
                if (luminance > 0.4) return 'blue-medium';
                return 'blue-dark';
            }

            return 'other';
        }

        const categorized = {};
        colors.forEach(color => {
            const category = categorizeColor(color);
            if (!categorized[category]) categorized[category] = [];
            categorized[category].push(color);
        });

        // Convert Sets to Arrays for JSON
        Object.keys(colorUsage).forEach(color => {
            colorUsage[color].properties = Array.from(colorUsage[color].properties);
        });

        return {
            allColors: Array.from(colors),
            colorUsage,
            categorized,
            gradients: Array.from(gradients),
            cssVariables,
            stats: {
                totalColors: colors.size,
                totalGradients: gradients.size,
                blueColors: (categorized['blue-light'] || []).length +
                           (categorized['blue-medium'] || []).length +
                           (categorized['blue-dark'] || []).length
            }
        };
    });

    // Take screenshot for visual reference
    await page.screenshot({
        path: 'design-extraction/maggieedwards-screenshot.png',
        fullPage: true
    });

    await browser.close();

    return colorData;
}

// Run extraction
(async () => {
    try {
        const colorSystem = await extractColorSystem('https://maggieedwards.com/');

        // Save raw data
        fs.writeFileSync(
            'design-extraction/color-data-raw.json',
            JSON.stringify(colorSystem, null, 2)
        );

        // Create formatted report
        const report = generateColorReport(colorSystem);
        fs.writeFileSync('design-extraction/COLOR-SYSTEM-REPORT.md', report);

        console.log('✅ Color extraction complete!');
        console.log(`📊 Total colors found: ${colorSystem.stats.totalColors}`);
        console.log(`🔵 Blue colors found: ${colorSystem.stats.blueColors}`);
        console.log(`🎨 Gradients found: ${colorSystem.stats.totalGradients}`);
        console.log(`\n📁 Files saved to design-extraction/`);

    } catch (error) {
        console.error('❌ Error:', error.message);
        process.exit(1);
    }
})();

function generateColorReport(data) {
    let report = `# Maggie Edwards Color System Analysis\n\n`;
    report += `**Extraction Date:** ${new Date().toISOString()}\n`;
    report += `**Source:** https://maggieedwards.com/\n\n`;

    report += `## Summary Statistics\n\n`;
    report += `- Total Unique Colors: ${data.stats.totalColors}\n`;
    report += `- Blue Colors: ${data.stats.blueColors}\n`;
    report += `- Gradients: ${data.stats.totalGradients}\n\n`;

    report += `---\n\n`;

    // Blue Color Palette
    report += `## 1. Blue Color Palette\n\n`;

    ['blue-dark', 'blue-medium', 'blue-light'].forEach(category => {
        if (data.categorized[category] && data.categorized[category].length > 0) {
            const label = category.replace('blue-', '').toUpperCase();
            report += `### ${label} Blues\n\n`;

            data.categorized[category].forEach(color => {
                const usage = data.colorUsage[color];
                report += `**${color}**\n`;
                report += `- Usage count: ${usage.count} elements\n`;
                report += `- Applied to: ${usage.properties.join(', ')}\n`;

                if (usage.usedIn.length > 0) {
                    report += `- Sample elements: `;
                    report += usage.usedIn.map(u => `<${u.tag}>`).join(', ');
                    report += `\n`;
                }
                report += `\n`;
            });
        }
    });

    // Neutral Colors
    report += `## 2. Neutral Colors\n\n`;

    ['neutral-white', 'neutral-gray', 'neutral-black'].forEach(category => {
        if (data.categorized[category] && data.categorized[category].length > 0) {
            const label = category.replace('neutral-', '').toUpperCase();
            report += `### ${label}s\n\n`;

            data.categorized[category].forEach(color => {
                const usage = data.colorUsage[color];
                report += `**${color}** (${usage.count} uses)\n`;
            });
            report += `\n`;
        }
    });

    // Gradients
    if (data.gradients.length > 0) {
        report += `## 3. Gradient Styles\n\n`;
        data.gradients.forEach((gradient, i) => {
            report += `### Gradient ${i + 1}\n\n`;
            report += `\`\`\`css\n${gradient}\n\`\`\`\n\n`;
        });
    }

    // CSS Variables
    if (Object.keys(data.cssVariables).length > 0) {
        report += `## 4. CSS Color Variables\n\n`;
        report += `\`\`\`css\n`;
        Object.entries(data.cssVariables).forEach(([key, value]) => {
            report += `${key}: ${value};\n`;
        });
        report += `\`\`\`\n\n`;
    }

    // Color Usage Patterns
    report += `## 5. Color Usage Patterns\n\n`;

    // Sort by usage count
    const sortedColors = Object.entries(data.colorUsage)
        .sort((a, b) => b[1].count - a[1].count)
        .slice(0, 10);

    report += `### Top 10 Most Used Colors\n\n`;
    report += `| Color | Uses | Primary Properties |\n`;
    report += `|-------|------|-------------------|\n`;

    sortedColors.forEach(([color, usage]) => {
        const props = usage.properties.slice(0, 3).join(', ');
        report += `| ${color} | ${usage.count} | ${props} |\n`;
    });

    report += `\n---\n\n`;
    report += `## Usage Guidelines\n\n`;
    report += `*Generated from actual website implementation*\n`;

    return report;
}
