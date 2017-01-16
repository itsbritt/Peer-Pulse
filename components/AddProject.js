import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableHighlight } from 'react-native';

export default class AddProject extends Component {
  constructor (props){
    super(props);
    this.state = { text: 'Placeholder'};
  }
  render() {
    return (
      <View>
      <TextInput
        style={styles.formInput}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  formInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 50,
    paddingLeft: 10,
    paddingRight: 10,
  },
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
