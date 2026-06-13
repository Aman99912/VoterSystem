import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, SHADOWS, SIZES, RADII } from '../constants/theme';

const Card = ({ children, style, onPress, activeOpacity = 0.85 }) => {
  if (onPress) {
    return (
      <TouchableOpacity
        style={[styles.card, style]}
        onPress={onPress}
        activeOpacity={activeOpacity}
      >
        {children}
      </TouchableOpacity>
    );
  }
  return <View style={[styles.card, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: RADII.lg,
    padding: SIZES.medium,
    marginBottom: SIZES.small,
    borderWidth: 1,
    borderColor: COLORS.border,
    ...SHADOWS.small,
  },
});

export default Card;
