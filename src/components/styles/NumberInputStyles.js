import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '../../themes/';

export default StyleSheet.create({
  textInputStyle: {
    height: 40,
    width: Metrics.screenWidth - 40,
    borderBottomWidth: 1,
    borderColor: Colors.grey,
    fontSize: 14,
    // fontFamily: Fonts.latoRegular,
  },
  textForInput: {
    fontSize: 14,
    // fontFamily: Fonts.latoBold,
  },
  inputContainer: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
