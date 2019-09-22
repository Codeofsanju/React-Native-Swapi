import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {Search, Results, SingleItem} from './components';
import { createAppContainer } from 'react-navigation';


import {Provider} from 'react-redux';
import store from './store';


const StackNav = createStackNavigator({
  Search: Search,
  Results: Results,
  SingleItem: SingleItem
}, {
  initialRouteName: 'Search',
  headerMode: Platform.OS === 'ios' ? 'float':'none',
  navigationOptions: {
    headerVisible: Platform.OS === 'ios',
  },
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'black',
      borderBottomColor: 'none'
    }
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