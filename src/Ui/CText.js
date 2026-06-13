import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { moderateScale } from '../utils/responsive';

const CText = ({ 
  children, 
  style, 
  variant = 'regular', // regular, medium, bold
  size = 14,
  color = '#333333',
  numberOfLines,
  ...props 
}) => {
  const getFontFamily = () => {
    switch (variant) {
      case 'bold':
        return 'Poppins-Bold';
      case 'medium':
        return 'Poppins-Medium';
      case 'regular':
      default:
        return 'Poppins-Regular';
    }
  };

  return (
    <Text
      allowFontScaling={false}
      numberOfLines={numberOfLines}
      style={[
        styles.text,
        {
          fontFamily: getFontFamily(),
          fontSize: moderateScale(size),
          color: color,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
});

export default CText;
