import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

import CameraContainer from './CameraContainer';

import HiderTop from '../img/HiderTop.png';
import HiderBottom from '../img/HiderBottom.png';
import NavButtonLeft from '../img/NavButtonLeft.png';
import NavButtonRight from '../img/NavButtonRight.png';

const buttonHeight = 300;

export default class InteractionContainer extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <Hider type={HiderTop}/>
        <View style={styles.ButtonContainer}>
          <NavButton type={NavButtonLeft}/>
          <NavButton type={NavButtonRight}/>
        </View>
        <Hider type={HiderBottom}/>
        <CameraContainer style={styles.CameraContainer}/>
      </View>
    );
  }
}

class Hider extends Component {
  render() {
    return (
      <Image
        style={styles.Hider}
        source={this.props.type}
      />
    );
  }
}

class NavButton extends Component {
  render() {
    return (
      <Image
        style={styles.NavButton}
        source={this.props.type}
      />
    );
  }
}

var { width, height } = Dimensions.get('window');

var styles = StyleSheet.create({
  Container: {
    backgroundColor: 'orange',
    position: 'relative'
  },

  Hider: {
    width: width,
    height: width / 1000 * 126,
    resizeMode: 'contain'
  },

  ButtonContainer: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  NavButton: {
    height: buttonHeight,
    width: buttonHeight / 935 * 150,
    resizeMode: 'contain'
  },
})
