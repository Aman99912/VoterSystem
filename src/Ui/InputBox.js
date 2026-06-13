import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { moderateScale, verticalScale } from '../utils/responsive';
import CText from './CText';

const InputBox = ({ 
  label, 
  error, 
  style, 
  inputStyle,
  ...props 
}) => {
  return (
    <View style={[styles.container, style]}>
      {label && (
        <CText variant="medium" size={12} color="#555" style={styles.label}>
          {label}
        </CText>
      )}
      <TextInput
        allowFontScaling={false}
        style={[styles.input, inputStyle, error && styles.inputError]}
        placeholderTextColor="#999"
        {...props}
      />
      {error && (
        <CText variant="regular" size={10} color="#e74c3c" style={styles.errorText}>
          {error}
        </CText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: verticalScale(8),
    width: '100%',
  },
  label: {
    marginBottom: verticalScale(4),
    marginLeft: moderateScale(4),
  },
  input: {
    fontFamily: 'Poppins-Regular',
    fontSize: moderateScale(14),
    color: '#333',
    backgroundColor: '#f5f6fa',
    borderRadius: moderateScale(12),
    paddingHorizontal: moderateScale(16),
    height: verticalScale(50),
    borderWidth: 1,
    borderColor: '#e1e8ee',
  },
  inputError: {
    borderColor: '#e74c3c',
  },
  errorText: {
    marginTop: verticalScale(4),
    marginLeft: moderateScale(4),
  },
});

export default InputBox;
