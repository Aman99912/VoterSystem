import React from 'react';
import { TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { moderateScale, verticalScale } from '../utils/responsive';
import CText from './CText';

const Button = ({ 
  title, 
  onPress, 
  style, 
  textStyle, 
  disabled, 
  loading,
  variant = 'primary', // primary, secondary, outline
  ...props 
}) => {
  
  const getContainerStyle = () => {
    switch (variant) {
      case 'secondary':
        return styles.secondary;
      case 'outline':
        return styles.outline;
      case 'primary':
      default:
        return styles.primary;
    }
  };

  const getTextColor = () => {
    switch (variant) {
      case 'outline':
        return '#3498db';
      case 'secondary':
      case 'primary':
      default:
        return '#ffffff';
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        styles.container,
        getContainerStyle(),
        (disabled || loading) && styles.disabled,
        style,
      ]}
      activeOpacity={0.8}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={getTextColor()} size="small" />
      ) : (
        <CText
          variant="bold"
          size={16}
          color={getTextColor()}
          style={[styles.text, textStyle]}
        >
          {title}
        </CText>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: verticalScale(50),
    borderRadius: moderateScale(12),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: verticalScale(8),
    flexDirection: 'row',
  },
  primary: {
    backgroundColor: '#3498db',
  },
  secondary: {
    backgroundColor: '#2ecc71',
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: moderateScale(1.5),
    borderColor: '#3498db',
  },
  disabled: {
    opacity: 0.6,
  },
  text: {
    textAlign: 'center',
  },
});

export default Button;
