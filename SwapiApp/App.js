import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, CreateAppContainer} from 'react-navigation-stack';
import Search from './components/Search';
import { createAppContainer } from 'react-navigation';


import {Provider, connect} from 'react-redux';
import store from './store';


const StackNav = createStackNavigator({
  Search: Search
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