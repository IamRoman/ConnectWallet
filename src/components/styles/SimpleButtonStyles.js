import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../themes/';

export default StyleSheet.create({
  button: {
    height: 40,
    marginTop: 10,
    width: 158,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
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
