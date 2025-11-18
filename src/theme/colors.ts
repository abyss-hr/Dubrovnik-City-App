export const colors = {
  // Brand Colors
  primary: '#0a7ea4',
  primaryDark: '#096B8C',
  primaryLight: '#3D9FBF',
  
  secondary: '#FF6B6B',
  secondaryDark: '#E65555',
  secondaryLight: '#FF8787',

  // Accent Colors
  accent: '#FFD93D',
  accentDark: '#F0C929',
  accentLight: '#FFE066',

  // Semantic Colors
  success: '#4CAF50',
  error: '#F44336',
  warning: '#FF9800',
  info: '#2196F3',

  // Light Theme
  light: {
    // Text
    text: {
      primary: '#11181C',
      secondary: '#687076',
      tertiary: '#9BA1A6',
      disabled: '#C4C4C4',
      inverse: '#FFFFFF',
    },
    
    // Backgrounds
    background: {
      primary: '#FFFFFF',
      secondary: '#F8F9FA',
      tertiary: '#E9ECEF',
      card: '#FFFFFF',
      overlay: 'rgba(0, 0, 0, 0.5)',
    },
    
    // Borders
    border: {
      primary: '#E0E0E0',
      secondary: '#F0F0F0',
      focus: '#0a7ea4',
    },
    
    // Interactive
    interactive: {
      primary: '#0a7ea4',
      primaryHover: '#096B8C',
      primaryPressed: '#075A73',
      secondary: '#687076',
      disabled: '#E0E0E0',
    },
    
    // Icons
    icon: {
      primary: '#11181C',
      secondary: '#687076',
      tertiary: '#9BA1A6',
      disabled: '#C4C4C4',
      inverse: '#FFFFFF',
    },
  },

  // Dark Theme
  dark: {
    // Text
    text: {
      primary: '#ECEDEE',
      secondary: '#9BA1A6',
      tertiary: '#687076',
      disabled: '#4A4A4A',
      inverse: '#11181C',
    },
    
    // Backgrounds
    background: {
      primary: '#151718',
      secondary: '#1E1E1E',
      tertiary: '#2C2C2C',
      card: '#1E1E1E',
      overlay: 'rgba(0, 0, 0, 0.7)',
    },
    
    // Borders
    border: {
      primary: '#2C2C2C',
      secondary: '#3A3A3A',
      focus: '#3D9FBF',
    },
    
    // Interactive
    interactive: {
      primary: '#3D9FBF',
      primaryHover: '#4AAFCF',
      primaryPressed: '#5BC0DF',
      secondary: '#9BA1A6',
      disabled: '#2C2C2C',
    },
    
    // Icons
    icon: {
      primary: '#ECEDEE',
      secondary: '#9BA1A6',
      tertiary: '#687076',
      disabled: '#4A4A4A',
      inverse: '#11181C',
    },
  },
} as const;

export type ColorTheme = 'light' | 'dark';
