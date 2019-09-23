import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const IconsRow = props => {
  const { container, icon } = styles;
  return (
    <View style={container}>
      <FontAwesome
        style={icon}
        name="space-shuttle"
        color={props.active === 'starships' ? '#FFE81F' : 'white'}
        size={60}
      />
      <Ionicons
        style={icon}
        name="ios-people"
        color={props.active === 'people' ? '#FFE81F' : 'white'}
        size={60}
      />
      <Ionicons
        style={icon}
        name="md-planet"
        color={props.active === 'planets' ? '#FFE81F' : 'white'}
        size={60}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  icon: {
    padding: 20,
    paddingTop: 30,
    paddingBottom: 50,
  },
});

export default IconsRow;
