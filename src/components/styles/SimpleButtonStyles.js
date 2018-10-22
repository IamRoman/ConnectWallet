import { StyleSheet } from 'react-native';
import { Colors, Fonts, Metrics } from '../../themes/';

export default StyleSheet.create({
  button: {
    height: Metrics.buttonHeight,
    width: Metrics.buttonWidth,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Metrics.buttonHeight / 2,
    shadowColor: Colors.shadowColor,
  },
  bottomText: {
    fontSize: 11,
    fontFamily: Fonts.regular,
    color: Colors.textColor,
    lineHeight: 18,
  },
  buttonText: {
    fontFamily: Fonts.bold,
  },
});
