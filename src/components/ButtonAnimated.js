import React from 'react';
import {
  Animated,
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';
import PropTypes from 'prop-types';

import Metrics from '../themes/Metrics';
import { Fonts } from '../themes';

const { screenWidth } = Metrics;

const buttonHeight = 45;

const { OS } = Platform;

const styles = StyleSheet.create({
  container: {
    height: buttonHeight,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  text: {
    fontFamily: Fonts.bold,
  },
});

export default class ButtonAnimated extends React.Component {
  static propTypes = {
    disabled: PropTypes.bool.isRequired,
    onPress: PropTypes.func.isRequired,
    initialTopPosition: PropTypes.number.isRequired,
    initialLeftPosition: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    buttonColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);
    const { initialTopPosition } = props;
    this.animatedValue = new Animated.Value(0);
    this.animatedTopValue = new Animated.Value(initialTopPosition);
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow', this.keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener(OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide', this.keyboardDidHide);
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  keyboardDidShow = ({ endCoordinates }) => {
    const keyboardHeight = endCoordinates.height;
    this.animateToValue(1);
    this.animateTopToValue(keyboardHeight);
  }

  keyboardDidHide = () => {
    const { initialTopPosition } = this.props;
    this.animateToValue(0);
    this.animateTopToValue(initialTopPosition);
  }

  animateToValue = (value) => {
    Animated.timing(this.animatedValue, {
      duration: 200,
      toValue: value,
    }).start();
  }

  animateTopToValue = (value) => {
    Animated.timing(this.animatedTopValue, {
      duration: 200,
      toValue: value,
    }).start();
  }

  render() {
    const {
      onPress,
      initialLeftPosition,
      title,
      disabled,
      buttonColor,
      textColor,
      width,
    } = this.props;
    const animatedWidth = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [width, screenWidth],
      exgtrapolate: 'clamp',
    });
    const animatedBorderRadius = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [buttonHeight / 2, 0],
      exgtrapolate: 'clamp',
    });
    const animatedLeftPosition = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [initialLeftPosition, 0],
      exgtrapolate: 'clamp',
    });

    return (
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <Animated.View
          style={[
            styles.container,
            {
              width: animatedWidth,
              borderRadius: animatedBorderRadius,
              left: animatedLeftPosition,
              bottom: this.animatedTopValue,
              backgroundColor: buttonColor,
            },
          ]}
        >
          <Text
            style={[{
              color: textColor,
              },
              styles.text,
            ]}
          >
            {title}
          </Text>
        </Animated.View>
      </TouchableOpacity>
    );
  }
}
