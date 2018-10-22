import React from 'react';
import {
  ImageBackground,
  View,
  Text,
  Image,
  Alert,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './styles/FirstScreenStyles';
import { Images, Colors } from '../themes';
import Header from '../components/AppHeader';
import SimpleButton from '../components/SimpleButton';
import ButtonWithImage from '../components/ButtonWithImage';
import ModalLoaderIndicator from '../components/ModalLoaderIndicator';
import { setIsShowModal } from '../actions/appSettings';
import { fetchingRegistrationUser } from '../actions/authorization';
import { startFiveSecondsTimer } from '../actions/timer';

const descriptionText = 'За номером 067 220 56 18 вже є гаманець! ' +
'Залишилось з’єднати його з додатком Мій Київстар, щоб поповнити рахунок.';
const simpleButtonWidth = 158;
const buttonWithImage = 110;
const testEmail = 'react@native.facebook.com';
const pass = 'pistol';

class FirstScreen extends React.Component {
  static propTypes = {
    triggerModal: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
    isShowModal: PropTypes.bool,
    startTimerForFiveSeconds: PropTypes.func.isRequired,
  };
  static defaultProps = {
    isShowModal: false,
  };

  onPressConnect = () => {
    const { navigation, triggerModal, startTimerForFiveSeconds } = this.props;
    startTimerForFiveSeconds();
    triggerModal(true);
    this.props.register(testEmail, pass, (err) => {
      if (!err) {
        triggerModal(false);
        navigation.navigate('Second');
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

  onPressLater = () => {
    Alert.alert('In development');
  }

  render() {
    const { isShowModal } = this.props;
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
          onPressLeftIcon={() => {}}
          onPressRightIcon={() => {}}
        />
        <View style={styles.contentContainer}>
          <View>
            <Text style={styles.headerTextStyle}>
              {'Підключення \nMasterpass-гаманця'}
            </Text>
            <Text style={styles.descriptionTextStyle}>
              {descriptionText}
            </Text>
          </View>
          <View>
            <View style={styles.buttonContainer}>
              <ButtonWithImage
                onPress={this.onPressLater}
                disabled={false}
                title="Пізніше"
                buttonColor={Colors.transparent}
                textColor={Colors.white}
                imageSource={Images.group}
                width={buttonWithImage}
              />
              <SimpleButton
                onPress={this.onPressConnect}
                disabled={false}
                title="З’єднати"
                buttonColor={Colors.simpleButtonColor}
                textColor={Colors.black}
                width={simpleButtonWidth}
              />
            </View>
            <View style={styles.logoContainer}>
              <Image
                resizeMode="contain"
                style={styles.logoStyle}
                source={Images.master_logo}
              />
            </View>
          </View>
        </View>
        <ModalLoaderIndicator
          isShowModal={isShowModal}
        />
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  isShowModal: state.appSettings.isShowModal,
});

const mapDispatchToProps = dispatch => ({
  triggerModal: isVisible => dispatch(setIsShowModal(isVisible)),
  register: (email, password, callback) =>
    dispatch(fetchingRegistrationUser(email, password, callback)),
  startTimerForFiveSeconds: () => dispatch(startFiveSecondsTimer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FirstScreen);
