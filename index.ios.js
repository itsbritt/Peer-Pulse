/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  View
} from 'react-native';

export default class Peer extends Component {
  render() {
    return (
        <Image source={require('./images/background.psd')} style={styles.container}>
          <Text style={styles.landingHeader}>
            Peer Pulse
          </Text>

      <TouchableHighlight style={styles.button}>
  <Text style={styles.buttonText}>get started</Text>
</TouchableHighlight>
</Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  landingHeader:{
    fontSize: 30,
    flex: 1,
    marginTop: 200,
  },
  button: {
  backgroundColor: '#292F36',
  height: 50,
  width: 150,
  marginBottom: 100,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 10,
},
buttonText: {
  color: 'white',
  fontSize: 20
},
});

AppRegistry.registerComponent('Peer', () => Peer);
