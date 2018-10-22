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
    paddingHorizontal: Metrics.largeOffset,
    width: Metrics.screenWidth,
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
    lineHeight: 20,
    color: Colors.white,
    letterSpacing: -0.2,
    marginTop: Metrics.baseMargin,
    fontFamily: Fonts.regular,
  },
  buttonContainer: {
    marginBottom: Metrics.largeOffset * 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  logoContainer: {
    height: 64,
    width: Metrics.screenWidth - (Metrics.largeOffset * 2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoStyle: {
    height: 30,
    width: 180,
  },
});
