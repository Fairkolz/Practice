/**
 * Typed references to design token CSS custom properties.
 * Values are consumed via Tailwind classes or CSS var() references.
 */

export const tokens = {
  colors: {
    primary: "var(--color-primary-color)",
    onPrimary: "var(--color-on-primary-color)",
    primaryContainer: "var(--color-primary-container-color)",
    secondary: "var(--color-secondary-color)",
    onSecondary: "var(--color-on-secondary-color)",
    secondaryContainer: "var(--color-secondary-container-color)",
    tertiary: "var(--color-tertiary-color)",
    background: "var(--color-background-color)",
    onBackground: "var(--color-on-background-color)",
    surface: "var(--color-surface-color)",
    onSurface: "var(--color-on-surface-color)",
    surfaceVariant: "var(--color-surface-variant-color)",
    onSurfaceVariant: "var(--color-on-surface-variant-color)",
    outline: "var(--color-outline-color)",
    outlineVariant: "var(--color-outline-variant-color)",
  },
  spacing: {
    xs: "var(--spacing-2)",
    sm: "var(--spacing-4)",
    md: "var(--spacing-6)",
    lg: "var(--spacing-8)",
    xl: "var(--spacing-12)",
    "2xl": "var(--spacing-16)",
    "3xl": "var(--spacing-24)",
  },
  radius: {
    sm: "var(--radius-sm)",
    md: "var(--radius-md)",
    lg: "var(--radius-lg)",
    xl: "var(--radius-xl)",
    full: "var(--radius-full)",
  },
} as const;
