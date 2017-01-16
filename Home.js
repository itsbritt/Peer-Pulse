import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.header}>Hello ___!</Text>
        </View>
      <View style={styles.navBar}>
       <TouchableHighlight onPress={() => {
         this.props.navigator.push({
           name: 'App',
           title: 'AppPage'
         })
         }}>
            <Image style={ styles.image } source={require('./images/home.psd')} />
       </TouchableHighlight>

       <TouchableHighlight onPress={() => {
         this.props.navigator.push({
           name: 'AddProject',
           title: 'AppProject'
         })
         }}>
            <Image style={ styles.image } source={require('./images/add.psd')} />
       </TouchableHighlight>

      </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  textContainer: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 100
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  header: {
    flexDirection: 'column',
    fontSize: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    height:50,
    width: 50,
    marginBottom: 10,
    marginLeft: 10,
  },
  navBar: {
    flexDirection: 'row',
    width: undefined,
    height: undefined,
    backgroundColor: 'transparent',
  },
});
