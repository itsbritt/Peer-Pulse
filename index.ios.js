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
  Navigator,
  View
} from 'react-native';

import App from './App';
import Home from './Home';

class Peer extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'Awesome Scene', index: 0 }}
        renderScene={(route, navigator) => {
          let TheComponent = App;
          if (route.name === 'Home') {
            TheComponent = Home
          }
          return <TheComponent navigator={navigator} />
        }
        }
      />
    )
  }
}

AppRegistry.registerComponent('Peer', () => Peer);
