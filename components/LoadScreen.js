import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default class LoadScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 1,
      initialDelay: 700,
      granularity: 10,
    };
  }

  componentWillMount() {
    slowlyFade(this);
  }

  render() {
    return (
      <View style={styles(this.state.opacity).container}>
        <Text style={styles().content}>CONTENT</Text>
      </View>
    );
  }
}

function slowlyFade(self) {
  if (self.state.opacity < 0) {
    self.state.opacity = 0;
  } else {
    if (self.state.initialDelay > 0) {
      self.state.initialDelay -= self.state.granularity;
    } else {
      self.state.opacity -= 0.1;
    }
    setTimeout(() => slowlyFade(self, 0), self.state.granularity);
  }

  self.forceUpdate();
}

var { width, height } = Dimensions.get('window');

const styles = (opacity) => { return StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: width,
    height: height,
    opacity: opacity || 0,
    backgroundColor: 'steelblue',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },

  content: {
    fontSize: 20,
  },
})}
