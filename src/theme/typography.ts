import { TextStyle } from 'react-native';

export const typography = {
  // HEADINGS
  h1: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '700' as TextStyle['fontWeight'],
    letterSpacing: -0.5,
  },
  h2: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '600' as TextStyle['fontWeight'],
    letterSpacing: -0.3,
  },
  h3: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '600' as TextStyle['fontWeight'],
    letterSpacing: -0.2,
  },
  h4: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '600' as TextStyle['fontWeight'],
  },

  // BODY TEXT
  bodyLarge: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '400' as TextStyle['fontWeight'],
  },
  body: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '400' as TextStyle['fontWeight'],
  },
  bodySmall: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400' as TextStyle['fontWeight'],
  },

  // CAPTIONS / LABELS
  caption: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '500' as TextStyle['fontWeight'],
  },
  captionSmall: {
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '500' as TextStyle['fontWeight'],
  },

  // BUTTON TEXT
  button: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '600' as TextStyle['fontWeight'],
  },
  buttonSmall: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '600' as TextStyle['fontWeight'],
  },
} as const;

export type TypographyVariant = keyof typeof typography;
