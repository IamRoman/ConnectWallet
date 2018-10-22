import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

// Used via Metrics.baseMargin
const metrics = {
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  baseMargin: 16,
  largeOffset: 20,
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: Platform.OS === 'ios' ? 64 : 54,
  appHeaderHeight: 50,
  statusBarHeight: Platform.OS === 'ios' ? 20 : 0,
  buttonRadius: 4,
  inputHeight: 42,
  buttonHeight: 45,
  buttonWidth: 158,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50,
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 100,
  },
  tabsIcon: {
    height: 20,
    width: 20,
  },
  headerIcon: {
    height: 20,
    width: 20,
  },
};

export default metrics;
