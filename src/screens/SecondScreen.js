import React from 'react';
import {
  ImageBackground,
  View,
  Text,
  Image,
  Keyboard,
  Alert,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import moment from 'moment';

import styles from './styles/SecondScreenStyles';
import { Images, Colors, Metrics } from '../themes';
import Header from '../components/AppHeader';
import NumberInput from '../components/NumberInput';
import ButtonWithImage from '../components/ButtonWithImage';
import ButtonAnimated from '../components/ButtonAnimated';
import { setIsShowModal, triggerMessageBanner } from '../actions/appSettings';
import { fetchingLoginUser } from '../actions/authorization';
import ModalInformationAfterConnectWallet from '../components/ModalInformationAfterConnectWallet';
import { startTimer } from '../actions/timer';

const descriptionText = 'Щоб впевнитися що ви особисто підключаєте Masterpass-гаманець, ми тимчасово заблокуємо 1 гривню на картці із цього гаманця. Після цього вам надійде СМС з кодом підтвердження (VCODE) на той номер, який ви вказали у банку під час отримання картки.';
const simpleButtonWidth = 150;
const buttonWithImage = 150;
const testEmail = 'react@native.facebook.com';

const {
  lightGrey,
  simpleButtonColor,
  activeButtonTextColor,
  inactiveButtonTextColor,
} = Colors;

const { screenWidth, screenHeight } = Metrics;

const initialLeft = (screenWidth / 2) - (simpleButtonWidth / 2);
const initialTop = screenHeight / 4;


class SecondScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    triggerModal: PropTypes.func.isRequired,
    triggerBanner: PropTypes.func.isRequired,
    timerButtonIsActive: PropTypes.bool.isRequired,
    timerValue: PropTypes.number.isRequired,
    timerIsVisible: PropTypes.bool.isRequired,
    endValue: PropTypes.number.isRequired,
    timerStart: PropTypes.func.isRequired,
  };
  static defaultProps = {
  };

  constructor(props) {
    super(props);

    this.state = {
      key: '',
      scrollEnabled: false,
      isShowModal: false,
    };
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  onPressFailedMessage = () => {
    // Alert.alert('In development');
    const { timerStart } = this.props;
    timerStart();
  }

  onPressConnect = () => {
    const { triggerModal, triggerBanner } = this.props;
    const { key } = this.state;
    Keyboard.dismiss();
    if (key.length < 4) {
      Alert.alert(
        null,
        'Miнiмальне число символiв повинно бути не меньше чотирьох!',
      );
      return;
    }
    triggerModal(true);
    this.props.login(testEmail, key, (err) => {
      if (!err) {
        if (key === 'pistol') {
          triggerModal(false);
          this.setState({ isShowModal: true });
        } else {
          triggerModal(false);
          triggerBanner(true);
        }
      } else {
        Alert.alert(
          null,
          err,
          [{ text: 'OK', onPress: () => triggerModal(false) }],
          { cancelable: false },
        );
      }
    });
  }

  keyboardDidShow = () => {
    this.setState({ scrollEnabled: true });
  }

  keyboardDidHide = () => {
    this.setState({ scrollEnabled: false });
  }

  timerRender = () => {
    const { timerValue, endValue } = this.props;
    const value = moment.utc(endValue - timerValue).format('mm:ss');
    return (
      <View style={styles.timerContainer}>
        <Text style={styles.timerText}>{value}</Text>
        <Image
          resizeMode="contain"
          style={styles.timerIcon}
          source={Images.timer_icon}
        />
      </View>
    );
  }

  render() {
    const {
      navigation, triggerBanner, timerButtonIsActive,
      timerIsVisible,
    } = this.props;
    const { scrollEnabled, key } = this.state;
    const buttonAnimatedDisabled = key.length < 4;
    return (
      <ImageBackground
        source={Images.background_image}
        style={styles.container}
      >
        <Header
          leftIcon={Images.back_arrow}
          title=""
          rightIcon={null}
          iconTintColor={Colors.white}
          onPressLeftIcon={() => navigation.goBack(null)}
          onPressRightIcon={() => {}}
        />
        <KeyboardAwareScrollView
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
          scrollEnabled={scrollEnabled}
        >
          <View>
            <Text style={styles.headerTextStyle}>
              {'Підключення \nMasterpass-гаманця'}
            </Text>
            <Text style={styles.descriptionTextStyle}>
              {descriptionText}
            </Text>
            <NumberInput
              titleText=""
              onChangeText={(text) => {
                this.setState({ key: text });
                triggerBanner(false);
              }}
              onFocus={() => triggerBanner(false)}
              passwordFromScreen={key}
              mainColor={Colors.white}
              secondaryColor={Colors.white}
            />
            <View style={styles.rowContainer}>
              <ButtonWithImage
                onPress={this.onPressFailedMessage}
                disabled={!timerButtonIsActive}
                title="Не приходить SMS"
                buttonColor={Colors.transparent}
                textColor={Colors.lightGrey}
                imageSource={Images.group}
                width={buttonWithImage}
              />
              {
                timerIsVisible && this.timerRender()
              }
            </View>
          </View>
          <View>
            <View style={styles.logoContainer}>
              <Image
                resizeMode="contain"
                style={styles.logoStyle}
                source={Images.master_logo}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
        <View style={styles.animatedButtonContainer}>
          <ButtonAnimated
            disabled={buttonAnimatedDisabled}
            onPress={() => this.onPressConnect()}
            initialTopPosition={initialTop}
            initialLeftPosition={initialLeft}
            buttonColor={buttonAnimatedDisabled ? lightGrey : simpleButtonColor}
            textColor={buttonAnimatedDisabled ? inactiveButtonTextColor : activeButtonTextColor}
            width={simpleButtonWidth}
            title="Підключити"
          />
        </View>
        <ModalInformationAfterConnectWallet
          isShowModal={this.state.isShowModal}
          onPressConnect={() => this.setState({ isShowModal: false })}
        />
      </ImageBackground>
    );
  }
}

const mapStateToProps = ({
  timer: {
    timerButtonIsActive, timerValue, timerIsVisible, endValue,
  },
}) => ({
  timerButtonIsActive,
  timerValue,
  timerIsVisible,
  endValue,
});

const mapDispatchToProps = dispatch => ({
  triggerModal: isVisible => dispatch(setIsShowModal(isVisible)),
  login: (email, password, callback) =>
    dispatch(fetchingLoginUser(email, password, callback)),
  triggerBanner: isVisible => dispatch(triggerMessageBanner(isVisible)),
  timerStart: () => dispatch(startTimer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SecondScreen);
