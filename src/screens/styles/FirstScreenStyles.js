import { StyleSheet } from 'react-native';
import { Colors, Fonts, Metrics } from '../../themes/';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.white,
  },
  contentContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  headerTextStyle: {
    fontSize: 24,
    color: Colors.white,
    letterSpacing: -0.2,
    fontFamily: Fonts.bold,
  },
  descriptionTextStyle: {
    fontSize: 15,
    color: Colors.white,
    letterSpacing: -0.2,
    marginTop: Metrics.baseMargin,
    fontFamily: Fonts.regular,
  },
  buttonContainer: {
    height: 120,
    width: Metrics.screenWidth * 0.9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    height: 35,
    width: Metrics.screenWidth * 0.9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoStyle: {
    height: 30,
    width: 180,
  },
});
