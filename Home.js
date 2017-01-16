import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
       <TouchableHighlight style={ styles.imageContainer } onPress={() => {
         this.props.navigator.push({
           name: 'App',
           title: 'AppPage'
         })
         }}>
            <Image style={ styles.image } source={require('./images/home.psd')} />
       </TouchableHighlight>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:60
  },
  imageContainer: {
    height:128,
    width: 128,
    borderRadius: 64
  },
  image: {
    height:128,
    width: 128,
    borderRadius: 64
  },
  imageContainer2: {

  },
  navBar: {
    flexDirection: 'row',
    width: undefined,
    height: undefined,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: 350
  },
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
  navButton: {
  backgroundColor: '#292F36',
  height: 50,
  width: 50,
  justifyContent: 'flex-start',
  alignItems: 'flex-end',
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
