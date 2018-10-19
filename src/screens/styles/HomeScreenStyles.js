import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../themes/';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.white,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  topContainer: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topTextContainer: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topTextStyle: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: Fonts.latoRegular,
  },
  selectedTextStyle: {
    fontSize: 14,
    color: Colors.selectedText,
    fontFamily: Fonts.latoRegular,
  },
  bottomContainer: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomTextStyle: {
    fontSize: 12,
    color: Colors.textColor,
    lineHeight: 12,
    fontFamily: Fonts.latoRegular,
  },
  pickerStyle: {
    height: 50,
    width: 150,
    justifyContent: 'center',
  },
  itemPickerStyle: {
    height: 50,
    width: 150,
  },
});
