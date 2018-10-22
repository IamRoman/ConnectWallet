import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '../../themes/';

export default StyleSheet.create({
  container: {
    flex: 1,
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
    color: Colors.white,
    letterSpacing: -0.2,
    marginTop: Metrics.baseMargin,
    fontFamily: Fonts.regular,
    lineHeight: 20,
    textAlign: 'left',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
  },
  timerText: {
    fontSize: 13,
    color: Colors.timerColor,
    fontFamily: Fonts.regular,
  },
  timerIcon: {
    height: 20,
    width: 20,
    marginLeft: 4,
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
