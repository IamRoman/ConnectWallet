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

import styles from './styles/SecondScreenStyles';
import { Images, Colors, Metrics } from '../themes';
import Header from '../components/AppHeader';
import NumberInput from '../components/NumberInput';
import ButtonWithImage from '../components/ButtonWithImage';
import ButtonAnimated from '../components/ButtonAnimated';

const descriptionText = `Щоб впевнитися що ви особисто підключаєте Masterpass-гаманець, ми тимчасово
 заблокуємо 1 гривню на картці із цього гаманця. Після цього вам надійде СМС з кодом підтвердження (VCODE)
  на той номер, який ви вказали у банку під час отримання картки.`;
const simpleButtonWidth = 150;
const buttonWithImage = 150;

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
  };
  static defaultProps = {
  };

  constructor(props) {
    super(props);

    this.state = {
      key: '',
      scrollEnabled: false,
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
    Alert.alert('In development');
  }

  keyboardDidShow = () => {
    this.setState({ scrollEnabled: true });
  }

  keyboardDidHide = () => {
    this.setState({ scrollEnabled: false });
  }

  timerRender = () => {
    const time = 3.47;
    return (
      <View style={styles.timerContainer}>
        <Text style={styles.timerText}>{time}</Text>
        <Image
          resizeMode="contain"
          style={styles.timerIcon}
          source={Images.timer_icon}
        />
      </View>
    );
  }

  onPressConnect = () => {
    console.warn('onPress');
  }

  render() {
    const { navigation } = this.props;
    const { scrollEnabled } = this.state;
    const buttonAnimatedDisabled = false; // In development
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
              onChangeText={key => this.setState({ key })}
              passwordFromScreen={this.state.key}
              mainColor={Colors.white}
              secondaryColor={Colors.white}
            />
            <View style={styles.rowContainer}>
              <ButtonWithImage
                onPress={this.onPressFailedMessage}
                disabled={false}
                title="Не приходить SMS"
                buttonColor={Colors.transparent}
                textColor={Colors.lightGrey}
                imageSource={Images.group_icon}
                width={buttonWithImage}
              />
              {
                this.timerRender()
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
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SecondScreen);
