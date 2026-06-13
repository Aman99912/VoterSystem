import React, { useEffect } from 'react';
import { TouchableOpacity, StyleSheet, BackHandler } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { moderateScale } from '../utils/responsive';
import CText from './CText';

const BackButton = ({ onPress, style, label = 'Back', ...props }) => {
  useEffect(() => {
    const backAction = () => {
      if (onPress) {
        onPress();
        return true; // Prevent default behavior
      }
      return false; // Let default behavior happen (exit app if at root)
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, [onPress]);

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      activeOpacity={0.7}
      {...props}
    >
      <Icon name="arrow-back" size={moderateScale(24)} color="#333" style={styles.icon} />
      <CText variant="medium" size={16} color="#333" style={styles.text}>
        {label}
      </CText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: moderateScale(8),
    paddingRight: moderateScale(16),
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  icon: {
    marginRight: moderateScale(4),
  },
  text: {
    textAlign: 'center',
  },
});

export default BackButton;
