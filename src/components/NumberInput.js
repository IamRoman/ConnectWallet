import React from 'react';
import {
  Text,
  View,
  TextInput,
} from 'react-native';

import PropTypes from 'prop-types';
import styles from './styles/NumberInputStyles';

class NumberInput extends React.Component {
  static propTypes = {
    onChangeText: PropTypes.func,
    titleText: PropTypes.string,
    passwordFromScreen: PropTypes.string,
    mainColor: PropTypes.string,
    secondaryColor: PropTypes.string,
    textEditable: PropTypes.bool,
  };
  static defaultProps = {
    onChangeText: () => {},
    titleText: '',
    passwordFromScreen: '',
    mainColor: '',
    secondaryColor: '',
    textEditable: true,
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
      onChangeText,
      titleText,
      passwordFromScreen,
      mainColor,
      secondaryColor,
      textEditable,
    } = this.props;
    return (
      <View style={[styles.inputContainer, { borderColor: secondaryColor }]}>
        <Text style={[styles.textForInput, { color: mainColor }]}>{titleText}</Text>
        <TextInput
          keyboardType="numeric"
          style={[styles.textInputStyle, { color: secondaryColor }]}
          onChangeText={password => onChangeText(password)}
          value={passwordFromScreen}
          placeholder="Введіть VCODE c SMS "
          placeholderTextColor={secondaryColor}
          underlineColorAndroid="rgba(0,0,0,0)"
          editable={textEditable}
          maxLength={6}
          autoCorrect={false}
          autoCapitalize="none"
          // returnKeyType="done"
        />
      </View>
    );
  }
}

export default (NumberInput);
