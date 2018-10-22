import { StyleSheet } from 'react-native';
import { Colors, Fonts, Metrics } from '../../themes/';

export default StyleSheet.create({
  container: {
    height: Metrics.appHeaderHeight,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
  },
  leftContainer: {
    width: 50,
    alignItems: 'center',
  },
  middleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 17,
    color: Colors.white,
    fontFamily: Fonts.regular,
  },
  rightContainer: {
    width: 50,
    alignItems: 'center',
  },
  buttonStyle: {
    padding: 15,
  },
  iconStyle: {
    height: 14,
    width: 14,
    marginLeft: 5,
  },
});
