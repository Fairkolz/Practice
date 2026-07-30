/**
 * convert-tokens.js
 *
 * Reads the colour and typography JSON token files and converts them
 * into CSS custom properties, written to a single `design-tokens.css` file.
 *
 * Colour tokens:
 *   - Only the colour ROLES (color.light / color.dark) are converted.
 *   - Light roles go into :root, dark roles go into [data-theme="dark"].
 *   - Primitive tokens (spacing, borderRadius, shadows, elevation) from the
 *     colour file are also included as theme-agnostic variables in :root.
 *
 * Typography tokens:
 *   - Each composite style (e.g. displayLarge) is broken into individual
 *     CSS variables for font-family, font-size, font-weight, line-height,
 *     and letter-spacing.
 *
 * Usage:  node convert-tokens.js
 */

const fs = require("fs");
const path = require("path");

// ── Paths ────────────────────────────────────────────────────────────────────
const COLOR_FILE = path.join(__dirname, "Color.Tokens. Json");
const TYPO_FILE = path.join(__dirname, "forge-studio-typography.json");
const OUTPUT_FILE = path.join(__dirname, "design-tokens.css");

// ── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Convert a camelCase or PascalCase string to kebab-case.
 * e.g. "displayLarge" → "display-large", "bodyMedium" → "body-medium"
 */
function toKebab(str) {
  return str
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();
}

/**
 * Turn a flat object of { key: value } pairs into indented CSS variable
 * declarations.  prefix is prepended to each variable name.
 *
 * Example:
 *   flatTokensToCSSVars({ "primary-color": "hsl(…)" }, "color")
 *   → "  --color-primary-color: hsl(…);"
 */
function flatTokensToCSSVars(obj, prefix) {
  return Object.entries(obj)
    .map(([key, value]) => `  --${prefix}-${key}: ${value};`)
    .join("\n");
}

// ── Read source files ────────────────────────────────────────────────────────
let colorData, typoData;

try {
  colorData = JSON.parse(fs.readFileSync(COLOR_FILE, "utf-8"));
} catch (err) {
  console.error(`❌  Failed to read colour tokens: ${err.message}`);
  process.exit(1);
}

try {
  typoData = JSON.parse(fs.readFileSync(TYPO_FILE, "utf-8"));
} catch (err) {
  console.error(`❌  Failed to read typography tokens: ${err.message}`);
  process.exit(1);
}

// ── Build CSS sections ───────────────────────────────────────────────────────
const sections = [];

// ┌──────────────────────────────────────────────────────────────────────────┐
// │  1. COLOUR ROLES  (light → :root, dark → [data-theme="dark"])           │
// └──────────────────────────────────────────────────────────────────────────┘
const lightRoles = colorData.color?.light ?? {};
const darkRoles = colorData.color?.dark ?? {};

// Light colour roles — default theme
const lightVars = Object.entries(lightRoles)
  .map(([key, value]) => `  --color-${key}: ${value};`)
  .join("\n");

// Dark colour roles
const darkVars = Object.entries(darkRoles)
  .map(([key, value]) => `  --color-${key}: ${value};`)
  .join("\n");

// ┌──────────────────────────────────────────────────────────────────────────┐
// │  2. TYPOGRAPHY STYLES  (from forge-studio-typography.json)               │
// └──────────────────────────────────────────────────────────────────────────┘
const typoStyles = typoData.typography ?? {};
let typoVars = "";

for (const [styleName, props] of Object.entries(typoStyles)) {
  const kebab = toKebab(styleName); // e.g. "display-large"
  const unit = props.unit || "px";

  const lines = [];
  if (props.fontFamily != null)
    lines.push(`  --typo-${kebab}-font-family: "${props.fontFamily}", sans-serif;`);
  if (props.fontSize != null)
    lines.push(`  --typo-${kebab}-font-size: ${props.fontSize}${unit};`);
  if (props.fontWeight != null)
    lines.push(`  --typo-${kebab}-font-weight: ${props.fontWeight};`);
  if (props.lineHeight != null)
    lines.push(`  --typo-${kebab}-line-height: ${props.lineHeight}${unit};`);
  if (props.letterSpacing != null)
    lines.push(`  --typo-${kebab}-letter-spacing: ${props.letterSpacing}${unit};`);

  typoVars += lines.join("\n") + "\n\n";
}

// ┌──────────────────────────────────────────────────────────────────────────┐
// │  3. PRIMITIVE / UTILITY TOKENS  (spacing, radius, shadows, elevation)   │
// └──────────────────────────────────────────────────────────────────────────┘
const spacingVars = colorData.spacing
  ? flatTokensToCSSVars(colorData.spacing, "spacing".replace("spacing-", ""))
  : "";

// Remap keys so we don't double-prefix ("spacing-spacing-0")
const spacingClean = colorData.spacing
  ? Object.entries(colorData.spacing)
      .map(([key, value]) => `  --${key}: ${value};`)
      .join("\n")
  : "";

const radiusClean = colorData.borderRadius
  ? Object.entries(colorData.borderRadius)
      .map(([key, value]) => `  --${key}: ${value};`)
      .join("\n")
  : "";

const shadowClean = colorData.shadows
  ? Object.entries(colorData.shadows)
      .map(([key, value]) => `  --${key}: ${value};`)
      .join("\n")
  : "";

const elevationClean = colorData.elevation
  ? Object.entries(colorData.elevation)
      .map(([key, value]) => `  --${key}: ${value};`)
      .join("\n")
  : "";

// ── Assemble final CSS ──────────────────────────────────────────────────────
const css = `/* ============================================================
 *  Design Tokens  —  Auto-generated by convert-tokens.js
 *  Source:  Color.Tokens.Json  +  forge-studio-typography.json
 *  Generated: ${new Date().toISOString()}
 *
 *  DO NOT EDIT MANUALLY — re-run the script to regenerate.
 * ============================================================ */

/* ── Light Theme (default) ──────────────────────────────────── */
:root {

  /* — Colour Roles — */
${lightVars}

  /* — Typography — */
${typoVars.trimEnd()}

  /* — Spacing — */
${spacingClean}

  /* — Border Radius — */
${radiusClean}

  /* — Shadows — */
${shadowClean}

  /* — Elevation — */
${elevationClean}
}

/* ── Dark Theme ─────────────────────────────────────────────── */
[data-theme="dark"] {

  /* — Colour Roles — */
${darkVars}
}
`;

// ── Write output ─────────────────────────────────────────────────────────────
fs.writeFileSync(OUTPUT_FILE, css, "utf-8");
console.log(`✅  design-tokens.css generated successfully → ${OUTPUT_FILE}`);
