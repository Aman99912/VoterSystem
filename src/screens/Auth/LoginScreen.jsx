import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { COLORS, FONTS, SPACING, FONT_SIZES, RADII, SHADOWS } from '../../constants/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const LoginScreen = ({ navigation }) => {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.replace('Main');
  };

  return (
    <ScreenWrapper isWhite>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <Image
            source={require('../../../assets/images/loginscreen image.png')}
            style={styles.loginImage}
            resizeMode="contain"
          />

          <View style={styles.header}>
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>Login to manage your campaign</Text>
          </View>

          <View style={styles.formContainer}>
            <Text style={styles.label}>Mobile Number</Text>
            <CustomInput
              placeholder="+91 00000-00000"
              value={mobile}
              onChangeText={setMobile}
              keyboardType="phone-pad"
              icon="phone-outline"
            />

            <Text style={styles.label}>Password</Text>
            <CustomInput
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              icon="lock-outline"
            />

            <TouchableOpacity style={styles.forgotPassword} activeOpacity={0.7}>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>

            <CustomButton title="LOGIN" onPress={handleLogin} />

            <View style={styles.dividerContainer}>
              <View style={styles.divider} />
              <Text style={styles.dividerText}>or continue with</Text>
              <View style={styles.divider} />
            </View>

            <View style={styles.socialContainer}>
              <TouchableOpacity style={styles.socialBtn} activeOpacity={0.8}>
                <Image
                  source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png' }}
                  style={styles.googleLogo}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialBtn} activeOpacity={0.8}>
                <Icon name="facebook" size={26} color="#1877F2" />
              </TouchableOpacity>
            </View>

            <CustomButton
              title="Skip for now (Demo)"
              onPress={() => navigation.replace('Main')}
              type="outline"
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    padding: SPACING.xxl,
    justifyContent: 'center',
  },
  loginImage: {
    width: '60%',
    height: 130,
    alignSelf: 'center',
    marginBottom: SPACING.lg,
  },
  header: {
    alignItems: 'center',
    marginBottom: SPACING.xxl,
  },
  title: {
    fontSize: FONT_SIZES.h1,
    fontFamily: FONTS.bold,
    color: COLORS.text,
    marginBottom: SPACING.xs,
  },
  subtitle: {
    fontSize: FONT_SIZES.body,
    fontFamily: FONTS.regular,
    color: COLORS.textLight,
  },
  formContainer: {
    width: '100%',
  },
  label: {
    fontSize: FONT_SIZES.small,
    fontFamily: FONTS.medium,
    color: COLORS.text,
    marginBottom: SPACING.xs,
    marginTop: SPACING.sm,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: SPACING.lg,
    marginTop: SPACING.sm,
  },
  forgotText: {
    color: COLORS.secondary,
    fontSize: FONT_SIZES.small,
    fontFamily: FONTS.medium,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: SPACING.xl,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.border,
  },
  dividerText: {
    marginHorizontal: SPACING.md,
    color: COLORS.textLight,
    fontSize: FONT_SIZES.small,
    fontFamily: FONTS.regular,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: SPACING.lg,
    marginBottom: SPACING.xl,
  },
  socialBtn: {
    width: 58,
    height: 58,
    borderRadius: RADII.lg,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
    ...SHADOWS.small,
  },
  googleLogo: {
    width: 26,
    height: 26,
  },
});

export default LoginScreen;
