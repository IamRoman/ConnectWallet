import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles/AppHeaderStyles';
import { Colors } from '../themes';

class AppHeader extends React.Component {
  static propTypes = {
    appSettings: PropTypes.object,
    onPressLeftIcon: PropTypes.func,
    onPressRightIcon: PropTypes.func,
    leftIcon: PropTypes.number,
    title: PropTypes.string,
    iconTintColor: PropTypes.string,
    rightIcon: PropTypes.number,
    rightIconDisabled: PropTypes.bool,
  };
  static defaultProps = {
    appSettings: {},
    onPressLeftIcon: () => {},
    onPressRightIcon: () => {},
    leftIcon: '',
    title: '',
    rightIcon: '',
    iconTintColor: '',
    rightIconDisabled: false,
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
      appSettings,
      leftIcon,
      title,
      rightIcon,
      iconTintColor,
      onPressLeftIcon,
      onPressRightIcon,
      rightIconDisabled,
    } = this.props;

    return (
      <View style={[styles.container,
        {
          backgroundColor: appSettings.isLightTheme
            ? Colors.mainLightThemeColor : Colors.bgHeaderDarkTheme,
        }]}
      >
        <View style={styles.leftContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => onPressLeftIcon()}
          >
            <Image
              resizeMode="contain"
              style={[styles.iconStyle, { tintColor: iconTintColor }]}
              source={leftIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.middleContainer}>
          <Text
            style={styles.textStyle}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {title}
          </Text>
        </View>
        <View style={styles.rightContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => (onPressRightIcon ? onPressRightIcon() : {})}
            disabled={rightIconDisabled === undefined ? false : rightIconDisabled}
          >
            <Image
              resizeMode="contain"
              style={[styles.iconStyle, { tintColor: iconTintColor }]}
              source={rightIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  appSettings: state.appSettings,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
