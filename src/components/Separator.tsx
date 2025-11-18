import React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import { colors } from '../theme/colors';
import { View } from './View';

export interface SeparatorProps {
  spacing?: number;
  color?: string;
}

export function Separator({ spacing = 1, color }: SeparatorProps) {
  const { theme: currentTheme } = useTheme();
  const themeColors = colors[currentTheme];

  return (
    <View
      style={[
        styles.separator,
        {
          height: spacing,
          backgroundColor: color || themeColors.border.primary,
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  separator: {
    width: '100%',
  },
});
