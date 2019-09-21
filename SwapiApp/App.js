import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, CreateAppContainer} from 'react-navigation-stack';
import Search from './components/Search';
import { createAppContainer } from 'react-navigation';

const StackNav = createStackNavigator({
  Search: Search
}, {
  initialRouteName: 'Search',
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false
  }
});

const App = createAppContainer(StackNav);

export default App;