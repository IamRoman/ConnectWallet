import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../themes/';

export default StyleSheet.create({
  container: {
    height: 46,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
  },
  leftContainer: {
    flex: 0.15,
    alignItems: 'center',
  },
  middleContainer: {
    flex: 0.7,
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 17,
    color: Colors.white,
    fontFamily: Fonts.latoBold,
  },
  rightContainer: {
    flex: 0.15,
    alignItems: 'center',
  },
  buttonStyle: {
    padding: 7,
  },
  iconStyle: {
    height: 25,
    width: 25,
  },
});
