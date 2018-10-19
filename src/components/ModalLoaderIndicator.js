import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Modal,
} from 'react-native';
import PropTypes from 'prop-types';
import { Colors, Metrics } from '../themes/';

const styles = StyleSheet.create({
  modalContent: {
    height: Metrics.screenHeight,
    width: Metrics.screenWidth,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.modalBgColor,
  },
});

export default class extends React.Component {
  static propTypes = {
    isShowModal: PropTypes.bool,
  };
  static defaultProps = {
    isShowModal: false,
  };

  render() {
    const { isShowModal } = this.props;
    return (
      <Modal
        animationType="slide"
        onRequestClose={() => null}
        transparent
        visible={isShowModal}
      >
        <View style={styles.modalContent}>
          <ActivityIndicator />
        </View>
      </Modal>
    );
  }
}
