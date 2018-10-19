import React from 'react';
import _ from 'lodash';
import {
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import PropTypes from 'prop-types';
import styles from './styles/ButtonWithImageStyles';
import { Metrics } from '../themes/';

class ButtonWithImage extends React.Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    title: PropTypes.string,
    buttonColor: PropTypes.string,
    textColor: PropTypes.string,
    imageSource: PropTypes.number.isRequired,
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
      imageSource,
      width,
    } = this.props;
    return (
      <TouchableOpacity
        disabled={disabled}
        style={[styles.button, { backgroundColor: buttonColor, width }]}
        onPress={this.debounceClick}
      >
        <Image
          resizeMode="contain"
          style={styles.iconStyle}
          source={imageSource}
        />
        <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

export default (ButtonWithImage);
