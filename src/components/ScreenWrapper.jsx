import React from 'react';
import { View, StyleSheet, StatusBar, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../constants/theme';

/**
 * ScreenWrapper
 * - When `headerColor` is set, that color fills the area behind the status bar
 *   so colored hero headers blend seamlessly into the system bar (and the
 *   status bar icons flip to light). This is what makes the top edge look
 *   intentional instead of leaving a stray white strip.
 * - Otherwise it behaves like a normal light screen with dark status icons.
 */
const ScreenWrapper = ({
  children,
  style,
  isWhite = false,
  headerColor = null,
}) => {
  const insets = useSafeAreaInsets();

  const bg = isWhite ? COLORS.white : COLORS.background;
  const topStripColor = headerColor || bg;
  const barStyle = headerColor ? 'light-content' : 'dark-content';

  return (
    <View style={[styles.container, { backgroundColor: bg }]}>
      <StatusBar
        barStyle={barStyle}
        backgroundColor="transparent"
        translucent={Platform.OS === 'android'}
      />
      {/* Colored strip behind the status bar */}
      <View style={{ height: insets.top, backgroundColor: topStripColor }} />
      <View style={[styles.content, style]}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});

export default ScreenWrapper;
