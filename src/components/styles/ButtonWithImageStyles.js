import { StyleSheet } from 'react-native';
import { Colors, Fonts, Metrics } from '../../themes/';

export default StyleSheet.create({
  button: {
    height: Metrics.buttonHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomText: {
    fontSize: 11,
    color: Colors.textColor,
    lineHeight: 18,
    fontFamily: Fonts.bold,
  },
  buttonText: {
    fontFamily: Fonts.bold,
  },
  buttonTextDisabled: {
    opacity: 0.8,
  },
  iconStyle: {
    height: 15,
    width: 15,
    marginRight: 10,
  },
});
