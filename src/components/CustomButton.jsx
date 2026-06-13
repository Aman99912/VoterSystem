import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, SIZES, FONTS, RADII, SHADOWS } from '../constants/theme';

/**
 * CustomButton
 * variants: 'primary' (navy, glow) | 'secondary' (saffron) | 'outline'
 */
const CustomButton = ({
  title,
  onPress,
  type = 'primary',
  style,
  textStyle,
  icon,
  loading = false,
  disabled = false,
}) => {
  const isPrimary = type === 'primary';
  const isSecondary = type === 'secondary';
  const isOutline = type === 'outline';

  const contentColor = isOutline ? COLORS.primary : COLORS.white;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        isPrimary && styles.primaryButton,
        isSecondary && styles.secondaryButton,
        isOutline && styles.outlineButton,
        (disabled || loading) && styles.disabled,
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.85}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color={contentColor} size="small" />
      ) : (
        <View style={styles.row}>
          {icon ? (
            <Icon name={icon} size={20} color={contentColor} style={styles.icon} />
          ) : null}
          <Text style={[styles.buttonText, { color: contentColor }, textStyle]}>
            {title}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: SIZES.extraLarge * 2.2,
    borderRadius: RADII.lg,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SIZES.large,
    width: '100%',
    marginVertical: SIZES.base,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: SIZES.base,
  },
  primaryButton: {
    backgroundColor: COLORS.primary,
    ...SHADOWS.medium,
  },
  secondaryButton: {
    backgroundColor: COLORS.secondary,
    ...SHADOWS.brand,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: COLORS.border,
  },
  disabled: {
    opacity: 0.55,
  },
  buttonText: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.bold,
    letterSpacing: 0.3,
  },
});

export default CustomButton;
