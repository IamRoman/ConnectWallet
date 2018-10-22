import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Modal,
} from 'react-native';
import PropTypes from 'prop-types';
import { Colors, Metrics, Fonts } from '../themes/';
import SimpleButton from '../components/SimpleButton';

const styles = StyleSheet.create({
  modalContainer: {
    height: Metrics.screenHeight,
    width: Metrics.screenWidth,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.modalBgColor,
  },
  modalContent: {
    height: Metrics.screenHeight * 0.35,
    width: Metrics.screenWidth * 0.90,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderRadius: 7,
  },
  headerText: {
    fontSize: 17,
    color: Colors.textColorForModal,
    fontFamily: Fonts.bold,
  },
  descriptionText: {
    fontSize: 13,
    marginVertical: 10,
    color: Colors.descriptionTextColorForModal,
    fontFamily: Fonts.regular,
  },
  buttonContainer: {
    marginTop: 7,
  },
});

const description = 'Тепер ви можете швидко поповнити рахунок' +
'своєю банківськую картою собі або близьким та друзям!';
const simpleButtonWidth = 170;

export default class extends React.Component {
  static propTypes = {
    isShowModal: PropTypes.bool,
    onPressConnect: PropTypes.func.isRequired,
  };
  static defaultProps = {
    isShowModal: false,
  };

  render() {
    const { isShowModal, onPressConnect } = this.props;
    return (
      <Modal
        animationType="fade"
        onRequestClose={() => null}
        transparent
        visible={isShowModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.headerText}>
              Гаманець успішно з’єднано!
            </Text>
            <Text style={styles.descriptionText}>
              {description}
            </Text>
            <View style={styles.buttonContainer}>
              <SimpleButton
                onPress={onPressConnect}
                disabled={false}
                title="Гаразд"
                buttonColor={Colors.simpleButtonColor}
                textColor={Colors.black}
                width={simpleButtonWidth}
              />
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}
