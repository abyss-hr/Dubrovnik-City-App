import React from 'react';
import { Text as RNText, TextProps as RNTextProps, StyleSheet } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

export type TextVariant = 
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'bodyLarge'
  | 'body'
  | 'bodySmall'
  | 'caption'
  | 'captionSmall'
  | 'button'
  | 'buttonSmall';

export interface TextProps extends RNTextProps {
  variant?: TextVariant;
  color?: string;
  center?: boolean;
  bold?: boolean;
  semibold?: boolean;
  medium?: boolean;
}

export function Text({
  variant = 'body',
  color,
  center = false,
  bold = false,
  semibold = false,
  medium = false,
  style,
  ...rest
}: TextProps) {
  const { theme: currentTheme } = useTheme();
  const themeColors = colors[currentTheme];

  const variantKey = variant as keyof typeof typography;
  const variantStyle = variantKey in typography ? typography[variantKey] : typography.body;
  const textColor = color || themeColors.text.primary;

  const fontWeightStyle = bold
    ? { fontWeight: '700' as const }
    : semibold
    ? { fontWeight: '600' as const }
    : medium
    ? { fontWeight: '500' as const }
    : undefined;

  return (
    <RNText
      style={[
        variantStyle as any,
        { color: textColor },
        center && styles.center,
        fontWeightStyle,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  center: {
    textAlign: 'center',
  },
});
