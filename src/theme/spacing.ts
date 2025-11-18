export const spacing = {
  // Base spacing scale (4px base unit)
  xxxs: 2,
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
  xxxxl: 96,

  // Semantic spacing
  gutter: 16,          // Standard content padding
  gutterLarge: 24,     // Large content padding
  cardPadding: 16,     // Padding inside cards
  sectionGap: 24,      // Gap between sections
  listItemGap: 12,     // Gap between list items
  
  // Border radius
  radius: {
    none: 0,
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    full: 9999,
  },
} as const;
