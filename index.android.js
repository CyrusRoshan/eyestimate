import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

import LoadScreen from './components/LoadScreen';
import MainScreen from './components/MainScreen';

export default class eyestimate extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        {/* <LoadScreen/> */}
        <MainScreen/>
      </View>
    );
  }
}

AppRegistry.registerComponent('eyestimate', () => eyestimate);
