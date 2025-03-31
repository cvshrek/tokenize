import {Dimensions, PixelRatio, Platform} from 'react-native';

type Dimension = {
  width: number;
  height: number;
};

export const WINDOW_WIDTH = Dimensions.get('window').width;
export const WINDOW_HEIGHT = Dimensions.get('window').height;

// Iphone SE's dimensions
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 667;

export const horizontalScale = (size: number) =>
  (WINDOW_WIDTH / guidelineBaseWidth) * size;
export const verticalScale = (size: number) =>
  (WINDOW_HEIGHT / guidelineBaseHeight) * size;
export const scaleFont = (size: number) => {
  const newSize = horizontalScale(size);
  return Math.round(PixelRatio.getFontScale() * newSize);
};
export const moderateScale = (size: number, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

export const isIPhoneXSize = (dim: Dimension) =>
  dim.height === 812 || dim.width === 812;
export const isIPhoneXrSize = (dim: Dimension) =>
  dim.height === 896 || dim.width === 896;
export const isIPhone12Size = (dim: Dimension) =>
  dim.height === 844 || dim.width === 844;
export const isIPhone12ProSize = (dim: Dimension) =>
  dim.height === 926 || dim.width === 926;
export const isIPhone14Size = (dim: Dimension) =>
  dim.height === 852 || dim.width === 852;
export const isIPhone14ProSize = (dim: Dimension) =>
  dim.height === 932 || dim.width === 932;

export const isIphoneX = () => {
  const dim = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTV &&
    (isIPhoneXSize(dim) ||
      isIPhoneXrSize(dim) ||
      isIPhone12Size(dim) ||
      isIPhone12ProSize(dim) ||
      isIPhone14Size(dim) ||
      isIPhone14ProSize(dim))
  );
};
