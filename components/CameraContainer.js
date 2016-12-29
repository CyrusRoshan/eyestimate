import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

export default class CameraContainer extends Component {
  render() {
    return (
      <View style={styles.CameraContainer}>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  CameraContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1,
    backgroundColor: 'green'
  },
})
