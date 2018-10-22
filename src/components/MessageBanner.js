import React from 'react';
import {
  Animated,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { Fonts, Metrics } from '../themes';

const bannerHeight = 30;

const styles = StyleSheet.create({
  container: {
    height: bannerHeight,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: Metrics.statusBarHeight,
    left: 0,
    right: 0,
  },
  text: {
    fontFamily: Fonts.regular,
  },
});

export default class MessageBanner extends React.Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    bannerColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
  }

  componentWillReceiveProps(nextProps) {
    const { visible } = this.props;
    if (visible !== nextProps.visible && nextProps.visible) {
      this.animateToValue(1);
    } else if (visible !== nextProps.visible && !nextProps.visible) {
      this.animateToValue(0);
    }
  }

  animateToValue = (value) => {
    Animated.timing(this.animatedValue, {
      duration: 200,
      toValue: value,
    }).start();
  }

  render() {
    const {
      bannerColor,
      textColor,
      text,
    } = this.props;
    const animatedHeight = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, bannerHeight],
      extrapolate: 'clamp',
    });

    return (
      <Animated.View
        style={[
          styles.container,
          {
            height: animatedHeight,
            backgroundColor: bannerColor,
          },
        ]}
      >
        <Animated.Text
          style={[
            {
              color: textColor,
              opacity: this.animatedValue,
            },
            styles.text,
          ]}
        >
          {text}
        </Animated.Text>
      </Animated.View>
    );
  }
}
