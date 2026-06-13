import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, SIZES, FONTS, RADII } from '../constants/theme';

const CustomInput = ({
  placeholder,
  value,
  onChangeText,
  icon,
  secureTextEntry = false,
  keyboardType = 'default',
}) => {
  const [focused, setFocused] = useState(false);
  const [hidden, setHidden] = useState(secureTextEntry);

  return (
    <View
      style={[
        styles.container,
        focused && styles.containerFocused,
      ]}
    >
      {icon ? (
        <Icon
          name={icon}
          size={20}
          color={focused ? COLORS.primary : COLORS.textLight}
          style={styles.icon}
        />
      ) : null}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={COLORS.textMuted}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={hidden}
        keyboardType={keyboardType}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {secureTextEntry ? (
        <TouchableOpacity
          onPress={() => setHidden(prev => !prev)}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Icon
            name={hidden ? 'eye-off-outline' : 'eye-outline'}
            size={20}
            color={COLORS.textLight}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surfaceAlt,
    borderWidth: 1.5,
    borderColor: COLORS.border,
    borderRadius: RADII.lg,
    paddingHorizontal: SIZES.medium,
    height: SIZES.extraLarge * 2.2,
    marginVertical: SIZES.base,
  },
  containerFocused: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
  },
  icon: {
    marginRight: SIZES.small,
  },
  input: {
    flex: 1,
    height: '100%',
    color: COLORS.text,
    fontSize: SIZES.medium,
    fontFamily: FONTS.regular,
    padding: 0,
  },
});

export default CustomInput;
