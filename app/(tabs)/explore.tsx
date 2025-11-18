import { ScrollView, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { Text, View, Separator } from '@/src/components';
import { spacing } from '@/src/theme/spacing';
import { colors } from '@/src/theme/colors';
import { shadows } from '@/src/theme/shadows';
import { useTheme } from '@/src/contexts/ThemeContext';

export default function SettingsScreen() {
  const { theme, themeMode, setThemeMode } = useTheme();
  const themeColors = colors[theme];

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: themeColors.background.primary }]}
      contentContainerStyle={styles.content}
    >
      <View style={styles.header}>
        <Text variant="h1">Settings</Text>
        <Text variant="body" color={themeColors.text.secondary}>
          Customize your app experience
        </Text>
      </View>

      <Separator spacing={1} />

      {/* Theme Settings */}
      <View style={styles.section}>
        <Text variant="h3">Appearance</Text>

        <View
          style={[
            styles.settingCard,
            { backgroundColor: themeColors.background.card },
            shadows.sm,
          ]}
        >
          <Text variant="h4">Theme Mode</Text>

          {/* Light Theme Option */}
          <TouchableOpacity
            style={[
              styles.themeOption,
              { borderColor: themeColors.border.primary },
              themeMode === 'light' && {
                borderColor: themeColors.interactive.primary,
                borderWidth: 2,
              },
            ]}
            onPress={() => setThemeMode('light')}
          >
            <View style={styles.themeOptionContent}>
              <View>
                <Text variant="body" semibold>
                  Light
                </Text>
                <Text variant="caption" color={themeColors.text.secondary}>
                  Always use light theme
                </Text>
              </View>
              <View
                style={[
                  styles.radioButton,
                  { borderColor: themeColors.border.primary },
                  themeMode === 'light' && {
                    borderColor: themeColors.interactive.primary,
                  },
                ]}
              >
                {themeMode === 'light' && (
                  <View
                    style={[
                      styles.radioButtonInner,
                      { backgroundColor: themeColors.interactive.primary },
                    ]}
                  />
                )}
              </View>
            </View>
          </TouchableOpacity>

          {/* Dark Theme Option */}
          <TouchableOpacity
            style={[
              styles.themeOption,
              { borderColor: themeColors.border.primary },
              themeMode === 'dark' && {
                borderColor: themeColors.interactive.primary,
                borderWidth: 2,
              },
            ]}
            onPress={() => setThemeMode('dark')}
          >
            <View style={styles.themeOptionContent}>
              <View>
                <Text variant="body" semibold>
                  Dark
                </Text>
                <Text variant="caption" color={themeColors.text.secondary}>
                  Always use dark theme
                </Text>
              </View>
              <View
                style={[
                  styles.radioButton,
                  { borderColor: themeColors.border.primary },
                  themeMode === 'dark' && {
                    borderColor: themeColors.interactive.primary,
                  },
                ]}
              >
                {themeMode === 'dark' && (
                  <View
                    style={[
                      styles.radioButtonInner,
                      { backgroundColor: themeColors.interactive.primary },
                    ]}
                  />
                )}
              </View>
            </View>
          </TouchableOpacity>

          {/* System Theme Option */}
          <TouchableOpacity
            style={[
              styles.themeOption,
              { borderColor: themeColors.border.primary },
              themeMode === 'system' && {
                borderColor: themeColors.interactive.primary,
                borderWidth: 2,
              },
            ]}
            onPress={() => setThemeMode('system')}
          >
            <View style={styles.themeOptionContent}>
              <View>
                <Text variant="body" semibold>
                  System
                </Text>
                <Text variant="caption" color={themeColors.text.secondary}>
                  Follow device settings
                </Text>
              </View>
              <View
                style={[
                  styles.radioButton,
                  { borderColor: themeColors.border.primary },
                  themeMode === 'system' && {
                    borderColor: themeColors.interactive.primary,
                  },
                ]}
              >
                {themeMode === 'system' && (
                  <View
                    style={[
                      styles.radioButtonInner,
                      { backgroundColor: themeColors.interactive.primary },
                    ]}
                  />
                )}
              </View>
            </View>
          </TouchableOpacity>

          <View style={styles.currentThemeInfo}>
            <Text variant="caption" color={themeColors.text.tertiary}>
              Current theme: {theme === 'light' ? '☀️ Light' : '🌙 Dark'}
            </Text>
          </View>
        </View>
      </View>

      <Separator spacing={1} />

      {/* Info Section */}
      <View style={styles.section}>
        <Text variant="h3">About Design System</Text>
        <View
          style={[
            styles.infoCard,
            { backgroundColor: themeColors.background.secondary },
          ]}
        >
          <Text variant="body">
            All typography, colors, spacing, and shadows are controlled from a central theme system.
          </Text>
          <Text variant="bodySmall" color={themeColors.text.secondary}>
            Changes made to the theme will reflect across the entire app instantly.
          </Text>
        </View>

        <View style={styles.themeFiles}>
          <Text variant="caption" color={themeColors.text.tertiary}>
            📁 Theme files:
          </Text>
          <Text variant="captionSmall" color={themeColors.text.tertiary}>
            • src/theme/colors.ts
          </Text>
          <Text variant="captionSmall" color={themeColors.text.tertiary}>
            • src/theme/typography.ts
          </Text>
          <Text variant="captionSmall" color={themeColors.text.tertiary}>
            • src/theme/spacing.ts
          </Text>
          <Text variant="captionSmall" color={themeColors.text.tertiary}>
            • src/theme/shadows.ts
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: spacing.gutter,
  },
  header: {
    paddingVertical: spacing.xl,
    gap: spacing.xs,
  },
  section: {
    paddingVertical: spacing.lg,
    gap: spacing.md,
  },
  settingCard: {
    padding: spacing.cardPadding,
    borderRadius: spacing.radius.lg,
    gap: spacing.md,
  },
  themeOption: {
    padding: spacing.md,
    borderRadius: spacing.radius.md,
    borderWidth: 1,
  },
  themeOptionContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  currentThemeInfo: {
    paddingTop: spacing.xs,
    alignItems: 'center',
  },
  infoCard: {
    padding: spacing.md,
    borderRadius: spacing.radius.md,
    gap: spacing.sm,
  },
  themeFiles: {
    gap: spacing.xxs,
  },
});

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
