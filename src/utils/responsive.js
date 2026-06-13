import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Guideline sizes are based on standard mobile device (e.g., iPhone X/11)
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const scale = size => (width / guidelineBaseWidth) * size;
export const verticalScale = size => (height / guidelineBaseHeight) * size;
export const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

export { width as windowWidth, height as windowHeight };
