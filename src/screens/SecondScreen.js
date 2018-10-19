import React from 'react';
import {
  ImageBackground,
  View,
  Text,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import styles from './styles/SecondScreenStyles';
import { Images, Colors, Metrics } from '../themes';
import Header from '../components/AppHeader';
import NumberInput from '../components/NumberInput';
import ButtonWithImage from '../components/ButtonWithImage';

const descriptionText = `Щоб впевнитися що ви особисто підключаєте Masterpass-гаманець, ми тимчасово
 заблокуємо 1 гривню на картці із цього гаманця. Після цього вам надійде СМС з кодом підтвердження (VCODE)
  на той номер, який ви вказали у банку під час отримання картки.`;
const buttonWithImage = 150;

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
    };
  }

  onPressConnect = () => {
    console.warn('onPress Connect');
  }

  onPressLater = () => {
    console.warn('onPress Later');
  }

  render() {
    const { navigation } = this.props;
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
        <KeyboardAwareScrollView contentContainerStyle={styles.contentContainer}>
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
                onPress={this.onPressLater}
                disabled={false}
                title="Не приходить SMS"
                buttonColor={Colors.transparent}
                textColor={Colors.lightGrey}
                imageSource={Images.group_icon}
                width={buttonWithImage}
              />
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
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SecondScreen);
