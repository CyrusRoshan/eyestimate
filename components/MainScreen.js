import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import ExitButton from './ExitButton';
// import SettingsButton from './SettingsButton';
import InteractionContainer from './InteractionContainer';
import InfoContainer from './InfoContainer';

export default class MainScreen extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        {/* <ExitButton/> */}
        {/* <SettingsButton/> */}
        <InteractionContainer style={{flex:1}}/>
        <InfoContainer style={{flex:1}}/>
      </View>
    );
  }
}
