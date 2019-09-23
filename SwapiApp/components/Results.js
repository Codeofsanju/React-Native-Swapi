import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import IconsRow from './iconsRow';
import TabNavigator from './TabNavigator';

class Results extends Component {
  render() {
    const { container } = styles;
    let labels = [];
    const toCheck = this.props.navigation.getParam('active');
    const banner = this.props.navigation.getParam('banner');
    if (toCheck === 'people') {
      labels = ['characters', 'films', 'starships'];
    } else if (toCheck === 'planets') {
      labels = ['planets', 'films', 'residents'];
    } else {
      labels = ['starships', 'films', 'pilots'];
    }
    return (
      <View style={container}>
        <IconsRow active={this.props.navigation.getParam('active')} />
        <Text style={{color:'white'}}>Everything {banner}</Text>
        <TabNavigator labels={labels} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    results: state.searchRes,
    secondary: state.secondaryData,
    ternary: state.ternaryData,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
  },
  iconContainer: {
    flex: 1,
  },
});

export default connect(
  mapStateToProps,
  null
)(Results);
