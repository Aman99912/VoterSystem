import { moderateScale, verticalScale } from '../utils/responsive';

/**
 * DPJ Design System
 * --------------------------------------------------------------------------
 * A single source of truth for colors, typography, spacing, radii and
 * elevation. Screens should never hardcode raw hex values or magic numbers —
 * pull everything from here so the UI stays consistent on every device.
 */

export const COLORS = {
  // Brand
  primary: '#0A2540', // Deep navy
  primaryLight: '#16386B',
  primaryDark: '#061A2E',
  secondary: '#F97316', // Saffron
  secondaryDark: '#EA580C',
  secondaryTint: '#FFF1E6',
  accent: '#15803D', // Green (completes the tricolor identity)
  accentTint: '#DCFCE7',

  // Surfaces
  background: '#F1F5F9',
  surface: '#FFFFFF',
  surfaceAlt: '#F8FAFC',
  white: '#FFFFFF',

  // Text
  text: '#0F172A', // slate-900
  textLight: '#64748B', // slate-500
  textMuted: '#94A3B8', // slate-400
  onPrimary: '#FFFFFF',

  // Lines
  border: '#E2E8F0',
  divider: '#EEF2F6',

  // Semantic
  success: '#16A34A',
  successTint: '#DCFCE7',
  warning: '#D97706',
  warningTint: '#FEF3C7',
  danger: '#EF4444',
  dangerTint: '#FEE2E2',
  info: '#0284C7',
  infoTint: '#E0F2FE',
  indigoTint: '#E0E7FF',

  // Misc
  whiteAlpha10: 'rgba(255,255,255,0.10)',
  whiteAlpha20: 'rgba(255,255,255,0.20)',
  whiteAlpha70: 'rgba(255,255,255,0.70)',
};

// Poppins is linked natively (see react-native.config.js + link manifest).
// Each weight is its own family — never pair these with `fontWeight`.
export const FONTS = {
  regular: 'Poppins-Regular',
  medium: 'Poppins-Medium',
  bold: 'Poppins-Bold',
};

// Spacing scale (kept backward-compatible with the original SIZES keys).
// moderateScale keeps proportions sensible from small phones to tablets.
export const SIZES = {
  base: moderateScale(8),
  small: moderateScale(12),
  font: moderateScale(14),
  medium: moderateScale(16),
  large: moderateScale(18),
  extraLarge: moderateScale(24),
};

// Standalone spacing tokens for new layout code.
export const SPACING = {
  xs: moderateScale(4),
  sm: moderateScale(8),
  md: moderateScale(12),
  lg: moderateScale(16),
  xl: moderateScale(20),
  xxl: moderateScale(24),
  xxxl: moderateScale(32),
  gutter: moderateScale(20), // standard screen side padding
};

// Type ramp — use with fontFamily from FONTS, not fontWeight.
export const FONT_SIZES = {
  caption: moderateScale(11),
  small: moderateScale(12),
  body: moderateScale(14),
  subtitle: moderateScale(16),
  title: moderateScale(18),
  h3: moderateScale(20),
  h2: moderateScale(24),
  h1: moderateScale(28),
};

export const RADII = {
  sm: moderateScale(8),
  md: moderateScale(12),
  lg: moderateScale(16),
  xl: moderateScale(20),
  pill: moderateScale(999),
};

export const SHADOWS = {
  // Subtle resting shadow for cards.
  small: {
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  // Raised surfaces (search bars, sheets).
  medium: {
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 14,
    elevation: 5,
  },
  // Floating elements (FAB, tab bar, hero headers).
  large: {
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.16,
    shadowRadius: 24,
    elevation: 12,
  },
  // Colored glow used under brand buttons / FABs.
  brand: {
    shadowColor: COLORS.secondary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 14,
    elevation: 8,
  },
};

export { verticalScale };
