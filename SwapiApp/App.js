import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {Search, Results} from './components';
import { createAppContainer } from 'react-navigation';


import {Provider, connect} from 'react-redux';
import store from './store';


const StackNav = createStackNavigator({
  Search: Search,
  Results: Results
}, {
  initialRouteName: 'Search',
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false
  }
});

const Navigation = createAppContainer(StackNav);

export default class App extends Component{
  render(){
    return (
      <Provider store={store}>
        <Navigation/>
      </Provider> 
    );
  }
}