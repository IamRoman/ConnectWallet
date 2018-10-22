import { StyleSheet, Platform } from 'react-native';
import { Colors, Metrics, Fonts } from '../../themes/';

const { OS } = Platform;

export default StyleSheet.create({
  textInputStyle: {
    top: OS === 'ios' ? 0 : -10,
    height: OS === 'ios' ? 30 : 40,
    marginTop: OS === 'ios' ? 0 : 10,
    width: Metrics.screenWidth - (Metrics.largeOffset * 2),
    borderBottomWidth: 2,
    borderColor: Colors.transparentWhite,
    fontSize: 14,
    fontFamily: Fonts.regular,
  },
  textForInput: {
    fontSize: 14,
    fontFamily: Fonts.bold,
  },
  inputContainer: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
