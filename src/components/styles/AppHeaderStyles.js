import { StyleSheet } from 'react-native';
import { Colors } from '../../themes/';

export default StyleSheet.create({
  container: {
    height: 20,
    marginTop: 25,
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
  },
  rightContainer: {
    flex: 0.15,
    alignItems: 'center',
  },
  buttonStyle: {
    padding: 15,
  },
  iconStyle: {
    height: 12,
    width: 12,
  },
});
