import React from 'react';
import { View, StyleSheet } from 'react-native';
import { moderateScale } from '../utils/responsive';

const Card = ({ children, style, ...props }) => {
  return (
    <View style={[styles.card, style]} {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: moderateScale(16),
    padding: moderateScale(16),
    marginVertical: moderateScale(8),
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: moderateScale(2),
    },
    shadowOpacity: 0.1,
    shadowRadius: moderateScale(8),
    // Android elevation
    elevation: 4,
  },
});

export default Card;
