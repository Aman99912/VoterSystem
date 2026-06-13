import React, { useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, ImageBackground } from 'react-native';
import { COLORS } from '../../constants/theme';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulate loading and navigate to Login
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ImageBackground 
      source={require('../../../assets/images/splashScree.png')} 
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={COLORS.secondary} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderContainer: {
    position: 'absolute',
    bottom: 50,
  },
});

export default SplashScreen;
