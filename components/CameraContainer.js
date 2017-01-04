import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableHighlight } from 'react-native';

import Camera from 'react-native-camera';

export default class CameraContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Loading...'
    };
  }

  updateData() {
    this.camera.getZoom()
      .then((data) => {
        this.state.text = String(data);
        this.forceUpdate();
      })
  }

  updateFocus() {
    this.state.text = "FOCUSING";
    this.forceUpdate();
    this.camera.focusCenter()
      .then((data) => {
        this.state.text = String(data);
        this.forceUpdate();
      })
  }

  render() {
    return (
        <Camera style={styles.CameraContainer}
        ref={(cam) => {
          if (!this.camera) {
            this.camera = cam;
            this.camera.defaultOnFocusComponent = false;
          }
        }}
        aspect={Camera.constants.Aspect.fill}>
          <Text style={styles.Text}
          onPress={this.updateData.bind(this)}>
            {this.state.text}
          </Text>
        </Camera>
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
    zIndex: -10,
    backgroundColor: 'green'
  },

  Text: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
})
