import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '../../themes/';

export default StyleSheet.create({
  button: {
    height: 40,
    marginTop: 10,
    width: 158,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    // shadowColor: Colors.shadowColor,
  },
  bottomText: {
    fontSize: 11,
    color: Colors.textColor,
    lineHeight: 18,
  },
  iconStyle: {
    height: 15,
    width: 15,
    marginRight: 10,
  },
});
