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
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 15,
  },
  timerText: {
    fontSize: 13,
    color: Colors.timerColor,
    fontFamily: Fonts.regular,
  },
  timerIcon: {
    height: 15,
    width: 15,
    marginLeft: 5,
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
