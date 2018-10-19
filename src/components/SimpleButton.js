import React from 'react';
import _ from 'lodash';
import {
  Text,
  TouchableOpacity,
} from 'react-native';

import PropTypes from 'prop-types';
import styles from './styles/SimpleButtonStyles';
import { Metrics } from '../themes/';

class SimpleButton extends React.Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    title: PropTypes.string,
    buttonColor: PropTypes.string,
    textColor: PropTypes.string,
    width: PropTypes.number,
  };
  static defaultProps = {
    disabled: false,
    title: '',
    buttonColor: '',
    textColor: '',
    width: 158,
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  debounceClick = _.debounce(
    this.props.onPress,
    1000,
    {
      leading: true,
      trailing: false,
    },
  );

  render() {
    const {
      title,
      disabled,
      buttonColor,
      textColor,
      width,
    } = this.props;
    return (
      <TouchableOpacity
        disabled={disabled}
        style={[styles.button, { backgroundColor: buttonColor, width }]}
        onPress={this.debounceClick}
      >
        <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

export default (SimpleButton);
