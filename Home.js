import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

export default class Home extends Component {
  render() {
    return <View>
      <Text style={styles.header}>Hello _____</Text>
    </View>
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
  header:{
    fontSize: 30,
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
