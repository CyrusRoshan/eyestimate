import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

export default class InfoContainer extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <Text>{'testing info container'}</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  Container: {
    backgroundColor: 'yellow',
    flex: 1,
    position: 'relative'
  },
})
