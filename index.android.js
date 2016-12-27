import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import LoadScreen from './components/LoadScreen';

export default class eyestimate extends Component {
  render() {
    return (
      <View>
        <LoadScreen/>
      </View>
    );
  }
}

AppRegistry.registerComponent('eyestimate', () => eyestimate);
