import * as React from 'react';
import { View, StatusBar, NetInfo } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MainStack from '../navigation/MainNavigation';
import styles from './styles/RootContainerStyles';
import { Colors } from '../themes';
import { setNetworkIsConnected } from '../actions/network';
import MessageBanner from '../components/MessageBanner';

const { bannerErrorColor, white } = Colors;

class RootContainer extends React.Component {
  static propTypes = {
    setNetwork: PropTypes.func.isRequired,
    messageBannerIsVisible: PropTypes.bool.isRequired,
  };
  static defaultProps = {
  };

  componentDidMount() {
    NetInfo.isConnected.fetch().then((isConnected) => {
      this.props.setNetwork(isConnected); // first start
    });
    NetInfo.addEventListener(
      'connectionChange',
      this.handleConnectivityChange,
    );
  }

  componentWillUnmount() {
    NetInfo.removeEventListener(
      'connectionChange',
      this.handleConnectivityChange,
    );
  }

  handleConnectivityChange = (reach) => {
    const isConnected = (reach.type.toLowerCase() !== 'none' && reach.type.toLowerCase() !== 'unknown');
    this.props.setNetwork(isConnected);
  };

  render() {
    const { messageBannerIsVisible } = this.props;
    return (
      <View
        style={styles.applicationView}
      >
        <StatusBar
          barStyle="light-content"
          backgroundColor={Colors.mainLightThemeColor}
          translucent
        />
        <View style={styles.rootStackStyle}>
          <MainStack />
        </View>
        <View style={styles.messageBannerContainer}>
          <MessageBanner
            visible={messageBannerIsVisible}
            bannerColor={bannerErrorColor}
            textColor={white}
            text="Введено не вірний VCODE. Спробуйте знову."
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ appSettings: { messageBannerIsVisible } }) => ({
  messageBannerIsVisible,
});

const mapDispatchToProps = dispatch => ({
  setNetwork: isConnected => dispatch(setNetworkIsConnected(isConnected)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
