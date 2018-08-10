import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class AnalyticsScreen extends Component {

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if(event.type === "NavBarButtonPress") {
      if(event.id === "sideDrawerToggle") {
        this.props.navigator.toggleDrawer({
          side: 'left'     
        });
      }
    }
  }

  render() {
    return (
      <View>
        <Text> Your AnalyticsScreen </Text>
      </View>
    )
  }
}