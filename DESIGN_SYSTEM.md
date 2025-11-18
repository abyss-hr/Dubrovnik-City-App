# Design System Documentation

## 📁 Theme Structure

```
/src
  /theme
    ├── colors.ts      # Color tokens for light/dark themes
    ├── typography.ts  # Typography variants and font styles
    ├── spacing.ts     # Spacing scale and border radius
    ├── shadows.ts     # Shadow styles (iOS/Android)
    └── index.ts       # Main export
  /contexts
    └── ThemeContext.tsx  # Theme provider and hooks
  /components
    ├── Text.tsx       # Text component with variants
    ├── View.tsx       # View with theme-aware backgrounds
    ├── Button.tsx     # Button with multiple variants
    ├── Separator.tsx  # Divider line
    └── index.ts       # Component exports
```

## 🎨 Using the Design System

### Typography

```tsx
import { Text } from '@/src/components';

// Headings
<Text variant="h1">Main Title</Text>
<Text variant="h2">Section Title</Text>
<Text variant="h3">Subsection</Text>
<Text variant="h4">Small Heading</Text>

// Body text
<Text variant="bodyLarge">Large intro text</Text>
<Text variant="body">Regular paragraph</Text>
<Text variant="bodySmall">Small text</Text>

// Captions
<Text variant="caption">Label text</Text>
<Text variant="captionSmall">Tiny label</Text>

// Font weights
<Text variant="body" bold>Bold text</Text>
<Text variant="body" semibold>Semibold text</Text>
<Text variant="body" medium>Medium text</Text>

// Custom color
<Text variant="body" color="#FF0000">Red text</Text>

// Centered
<Text variant="h1" center>Centered heading</Text>
```

### Colors

```tsx
import { colors } from '@/src/theme/colors';
import { useTheme } from '@/src/contexts/ThemeContext';

function MyComponent() {
  const { theme } = useTheme(); // 'light' or 'dark'
  const themeColors = colors[theme];

  // Text colors
  themeColors.text.primary      // Main text color
  themeColors.text.secondary    // Secondary text
  themeColors.text.tertiary     // Tertiary/muted text
  themeColors.text.disabled     // Disabled state
  themeColors.text.inverse      // Inverse (white on dark, dark on light)

  // Background colors
  themeColors.background.primary    // Main background
  themeColors.background.secondary  // Secondary bg (lighter/darker)
  themeColors.background.tertiary   // Tertiary bg
  themeColors.background.card       // Card background
  themeColors.background.overlay    // Modal overlay

  // Border colors
  themeColors.border.primary    // Standard border
  themeColors.border.secondary  // Lighter border
  themeColors.border.focus      // Focused input

  // Interactive colors
  themeColors.interactive.primary        // Primary buttons/links
  themeColors.interactive.primaryHover   // Hover state
  themeColors.interactive.primaryPressed // Pressed state
  themeColors.interactive.disabled       // Disabled state

  // Icons
  themeColors.icon.primary   // Primary icon color
  themeColors.icon.secondary // Secondary icon
}
```

### Buttons

```tsx
import { Button } from '@/src/components';

// Variants
<Button title="Primary" variant="primary" onPress={() => {}} />
<Button title="Secondary" variant="secondary" onPress={() => {}} />
<Button title="Outline" variant="outline" onPress={() => {}} />
<Button title="Ghost" variant="ghost" onPress={() => {}} />

// Sizes
<Button title="Small" size="small" />
<Button title="Medium" size="medium" />
<Button title="Large" size="large" />

// Full width
<Button title="Full Width" fullWidth />

// Loading state
<Button title="Submit" loading={isLoading} />

// Disabled
<Button title="Disabled" disabled />
```

### Spacing

```tsx
import { spacing } from '@/src/theme/spacing';

// Use in styles
const styles = StyleSheet.create({
  container: {
    padding: spacing.md,        // 16px
    gap: spacing.sm,            // 12px
    marginTop: spacing.xl,      // 32px
  },
  card: {
    padding: spacing.cardPadding,       // 16px
    borderRadius: spacing.radius.lg,    // 16px
  }
});

// Available spacing
spacing.xxxs   // 2px
spacing.xxs    // 4px
spacing.xs     // 8px
spacing.sm     // 12px
spacing.md     // 16px
spacing.lg     // 24px
spacing.xl     // 32px
spacing.xxl    // 48px
spacing.xxxl   // 64px
spacing.xxxxl  // 96px

// Semantic spacing
spacing.gutter           // 16px - Standard content padding
spacing.gutterLarge      // 24px - Large content padding
spacing.cardPadding      // 16px - Padding inside cards
spacing.sectionGap       // 24px - Gap between sections
spacing.listItemGap      // 12px - Gap between list items

// Border radius
spacing.radius.none   // 0
spacing.radius.xs     // 4px
spacing.radius.sm     // 8px
spacing.radius.md     // 12px
spacing.radius.lg     // 16px
spacing.radius.xl     // 24px
spacing.radius.full   // 9999px (pill shape)
```

### Shadows

```tsx
import { shadows } from '@/src/theme/shadows';

const styles = StyleSheet.create({
  card: {
    ...shadows.sm,    // Small shadow
    ...shadows.md,    // Medium shadow
    ...shadows.lg,    // Large shadow
    ...shadows.xl,    // Extra large shadow
  }
});
```

### Theme Switching

```tsx
import { useTheme } from '@/src/contexts/ThemeContext';

function ThemeToggle() {
  const { theme, themeMode, setThemeMode } = useTheme();

  return (
    <>
      {/* Current theme: 'light' or 'dark' */}
      <Text>Current: {theme}</Text>

      {/* Current mode: 'light', 'dark', or 'system' */}
      <Text>Mode: {themeMode}</Text>

      {/* Change theme mode */}
      <Button title="Light" onPress={() => setThemeMode('light')} />
      <Button title="Dark" onPress={() => setThemeMode('dark')} />
      <Button title="System" onPress={() => setThemeMode('system')} />
    </>
  );
}
```

## 🔧 Customizing the Theme

### Adding New Colors

Edit `src/theme/colors.ts`:

```typescript
export const colors = {
  // Add brand colors
  brandBlue: '#0a7ea4',
  brandRed: '#FF6B6B',

  light: {
    text: {
      primary: '#11181C',
      // Add more text colors
    },
    // ... rest of light theme
  },
  dark: {
    // ... dark theme
  },
};
```

### Adding New Typography Variants

Edit `src/theme/typography.ts`:

```typescript
export const typography = {
  // Add custom variant
  headline: {
    fontSize: 40,
    lineHeight: 48,
    fontWeight: '800' as TextStyle['fontWeight'],
    letterSpacing: -1,
  },
  // ... rest of typography
};
```

Then use it:
```tsx
<Text variant="headline">Big Headline</Text>
```

### Modifying Existing Styles

All styles are in one place! Just edit the theme files and changes apply everywhere:

1. **Change heading sizes** → Edit `src/theme/typography.ts`
2. **Change primary color** → Edit `src/theme/colors.ts`
3. **Change spacing scale** → Edit `src/theme/spacing.ts`
4. **Change shadows** → Edit `src/theme/shadows.ts`

## 📱 Best Practices

1. **Always use theme colors** instead of hardcoded hex values
2. **Use typography variants** instead of inline fontSize/fontWeight
3. **Use spacing tokens** instead of magic numbers
4. **Use semantic names** (e.g., `text.primary` instead of `#000000`)
5. **Test both light and dark themes** before shipping

## 🎯 Benefits

- ✅ **Single source of truth** - Change once, update everywhere
- ✅ **Type-safe** - TypeScript autocomplete for all tokens
- ✅ **Consistent** - Same spacing/colors across entire app
- ✅ **Maintainable** - Easy to understand and modify
- ✅ **Scalable** - Add new tokens as needed
- ✅ **No dependencies** - Pure React Native/TypeScript
- ✅ **Persistent** - Theme preference saved with AsyncStorage

## 🚀 Quick Start

```tsx
import { Text, View, Button, Separator } from '@/src/components';
import { spacing } from '@/src/theme/spacing';
import { colors } from '@/src/theme/colors';
import { useTheme } from '@/src/contexts/ThemeContext';

export default function MyScreen() {
  const { theme } = useTheme();
  const themeColors = colors[theme];

  return (
    <View style={{ padding: spacing.gutter }}>
      <Text variant="h1">Welcome</Text>
      <Text variant="body" color={themeColors.text.secondary}>
        This is a themed screen
      </Text>
      <Separator />
      <Button title="Click me" variant="primary" onPress={() => {}} />
    </View>
  );
}
```

---

**Need help?** Check the example pages:
- Homepage: `app/(tabs)/index.tsx`
- Settings: `app/(tabs)/explore.tsx`
