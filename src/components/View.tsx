import React from 'react';
import { View as RNView, ViewProps as RNViewProps } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import { colors } from '../theme/colors';

export interface ViewProps extends RNViewProps {
  backgroundColor?: string;
}

export function View({ backgroundColor, style, ...rest }: ViewProps) {
  const { theme: currentTheme } = useTheme();
  const themeColors = colors[currentTheme];

  const bgColor = backgroundColor || themeColors.background.primary;

  return <RNView style={[{ backgroundColor: bgColor }, style]} {...rest} />;
}
