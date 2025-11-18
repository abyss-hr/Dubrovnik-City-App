# TODO List - Dubrovnik City App

## ✅ Completed Tasks

- [x] **Set up development build environment**
  - Installed expo-dev-client
  - Updated all dependencies
  - Configured app.json

- [x] **Create GitHub repository**
  - Repository: https://github.com/abyss-hr/Dubrovnik-City-App
  - Initial code pushed to main branch

- [x] **Implement Design Tokens System**
  - ✅ Created `/src/theme` folder with:
    - `colors.ts` - Light/dark color themes
    - `typography.ts` - H1-H4, body, caption, button variants
    - `spacing.ts` - Spacing scale and border radius
    - `shadows.ts` - Shadow styles for iOS/Android
  - ✅ Created `ThemeContext` for light/dark/system theme switching
  - ✅ Theme preference persists with AsyncStorage

- [x] **Create Reusable Components**
  - ✅ `Text` component with typography variants
  - ✅ `View` component with theme-aware backgrounds
  - ✅ `Button` component (primary, secondary, outline, ghost)
  - ✅ `Separator` component

- [x] **Build Example Pages**
  - ✅ Homepage with typography showcase, buttons, cards, links
  - ✅ Settings page with theme switcher (light/dark/system)

## 📋 Pending Tasks

- [ ] **Create duplicate/branch of the app**
  - Create a new branch for development work
  - Command: `git checkout -b feature-branch-name`

- [ ] **Push duplicate branch to GitHub**
  - Push the new branch to remote repository
  - Command: `git push -u origin feature-branch-name`

## 🎨 Design System Usage

All theming is controlled from one place:

```typescript
// Import components
import { Text, View, Button } from '@/src/components';

// Use typography variants
<Text variant="h1">Heading</Text>
<Text variant="body">Body text</Text>

// Use buttons
<Button title="Click me" variant="primary" />

// Change theme (in any component)
const { theme, setThemeMode } = useTheme();
setThemeMode('dark'); // or 'light', 'system'
```

---

_Last updated: 18. studenoga 2025._
