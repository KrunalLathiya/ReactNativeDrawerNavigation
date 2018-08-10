import React, { Component } from 'react';
import { View, Text,Button } from 'react-native';
import startMainTab from './startMainTab';

export default class HomeScreen extends Component {

  onButtonPress = () => {
    startMainTab();
  }

  render() {
    return (
      <View>
        <Text>Home Screen</Text>
        <Button title="Tab Navigation" onPress = { this.onButtonPress } />
      </View>
    );
  }
}