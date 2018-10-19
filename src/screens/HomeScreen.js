import React from 'react';
import { View, Text } from 'react-native';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles/HomeScreenStyles';
import { Colors, Metrics } from '../themes';

class HomeScreen extends React.Component {
  static propTypes = {
  };
  static defaultProps = {
  };

  render() {
    return (
      <View
        style={styles.container}
      >
        <Text>HomeScreen</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
