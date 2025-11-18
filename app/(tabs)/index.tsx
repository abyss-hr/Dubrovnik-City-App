import { Button, Separator, Text, View } from '@/src/components';
import { useTheme } from '@/src/contexts/ThemeContext';
import { colors } from '@/src/theme/colors';
import { shadows } from '@/src/theme/shadows';
import { spacing } from '@/src/theme/spacing';
import { router } from 'expo-router';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  const { theme } = useTheme();
  const themeColors = colors[theme];

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: themeColors.background.primary }]}
      contentContainerStyle={styles.content}
    >
      {/* Hero Section */}
      <View style={styles.hero}>
        <Text variant="h1" center>
          Welcome to Dubrovnik
        </Text>
        <Text variant="body" center color={themeColors.text.secondary} style={styles.subtitle}>
          Discover the Pearl of the Adriatic
        </Text>
      </View>

      <Separator spacing={1} />

      {/* Typography Examples Section */}
      <View style={styles.section}>
        <Text variant="h2">Typography System</Text>
        <View style={styles.sectionContent}>
          <Text variant="h3">This is H3 Heading</Text>
          <Text variant="h4">This is H4 Heading</Text>
          <Text variant="bodyLarge">
            This is large body text. Perfect for introductions and important paragraphs.
          </Text>
          <Text variant="body">
            This is regular body text. Use it for most of your content. It's designed for optimal
            readability.
          </Text>
          <Text variant="bodySmall" color={themeColors.text.secondary}>
            This is small body text. Great for secondary information.
          </Text>
          <Text variant="caption" color={themeColors.text.tertiary}>
            This is caption text • Used for labels and metadata
          </Text>
        </View>
      </View>

      <Separator spacing={1} />

      {/* Buttons Section */}
      <View style={styles.section}>
        <Text variant="h3">Buttons & Actions</Text>
        <View style={styles.sectionContent}>
          <Button
            title="Primary Button"
            variant="primary"
            onPress={() => alert('Primary button pressed')}
          />
          <Button
            title="Secondary Button"
            variant="secondary"
            onPress={() => alert('Secondary button pressed')}
          />
          <Button
            title="Outline Button"
            variant="outline"
            onPress={() => alert('Outline button pressed')}
          />
          <Button
            title="Ghost Button"
            variant="ghost"
            onPress={() => alert('Ghost button pressed')}
          />
          
          <View style={styles.buttonRow}>
            <View style={styles.buttonHalf}>
              <Button
                title="Small"
                size="small"
                variant="primary"
                onPress={() => alert('Small button')}
              />
            </View>
            <View style={styles.buttonHalf}>
              <Button
                title="Medium"
                size="medium"
                variant="primary"
                onPress={() => alert('Medium button')}
              />
            </View>
          </View>

          <Button
            title="Large Button"
            size="large"
            variant="primary"
            fullWidth
            onPress={() => alert('Large button pressed')}
          />
        </View>
      </View>

      <Separator spacing={1} />

      {/* Card Example */}
      <View style={styles.section}>
        <Text variant="h3">Card Components</Text>
        <View style={styles.sectionContent}>
          <View
            style={[
              styles.card,
              { backgroundColor: themeColors.background.card },
              shadows.md,
            ]}
          >
            <Text variant="h4">Featured Attraction</Text>
            <Text variant="body" style={styles.cardText}>
              Explore the historic city walls and enjoy breathtaking views of the Adriatic Sea.
            </Text>
            <Button
              title="Learn More"
              variant="primary"
              size="small"
              onPress={() => alert('Card action')}
            />
          </View>

          <View
            style={[
              styles.card,
              { backgroundColor: themeColors.background.card },
              shadows.md,
            ]}
          >
            <Text variant="h4">Local Events</Text>
            <Text variant="body" style={styles.cardText}>
              Check out the upcoming festivals and cultural events happening this month.
            </Text>
            <Button
              title="View Calendar"
              variant="outline"
              size="small"
              onPress={() => alert('Calendar action')}
            />
          </View>
        </View>
      </View>

      <Separator spacing={1} />

      {/* Links Section */}
      <View style={styles.section}>
        <Text variant="h3">Quick Links</Text>
        <View style={styles.sectionContent}>
          <TouchableOpacity
            style={styles.link}
            onPress={() => router.push('/explore')}
          >
            <Text variant="body" color={themeColors.interactive.primary}>
              → Explore Dubrovnik
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.link}
            onPress={() => alert('Navigate to Attractions')}
          >
            <Text variant="body" color={themeColors.interactive.primary}>
              → Top Attractions
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.link}
            onPress={() => alert('Navigate to Restaurants')}
          >
            <Text variant="body" color={themeColors.interactive.primary}>
              → Best Restaurants
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Separator spacing={1} />

      {/* Footer */}
      <View style={styles.footer}>
        <Text variant="caption" center color={themeColors.text.tertiary}>
          Dubrovnik City App • 2025
        </Text>
        <Text variant="captionSmall" center color={themeColors.text.tertiary}>
          All typography, colors, and spacing are controlled from one central theme
        </Text>
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
  hero: {
    paddingVertical: spacing.xxl,
    gap: spacing.sm,
  },
  subtitle: {
    marginTop: spacing.xs,
  },
  section: {
    paddingVertical: spacing.lg,
  },
  sectionContent: {
    marginTop: spacing.md,
    gap: spacing.md,
  },
  card: {
    padding: spacing.cardPadding,
    borderRadius: spacing.radius.lg,
    gap: spacing.sm,
  },
  cardText: {
    marginBottom: spacing.xs,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  buttonHalf: {
    flex: 1,
  },
  link: {
    paddingVertical: spacing.xs,
  },
  footer: {
    paddingVertical: spacing.xl,
    gap: spacing.xs,
  },
});
