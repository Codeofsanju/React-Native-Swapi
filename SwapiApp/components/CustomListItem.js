import React, { Component } from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

class CustomListItem extends Component {
  constructor(props) {
    super(props);
    this.handleSingleSelect = this.handleSingleSelect.bind(this);
  }
  handleSingleSelect(item) {
    const { navigation } = this.props;
    navigation.navigate('SingleItem', { item: item });
  }
  render() {
    const { item } = this.props;
    const { touchableItem, text } = styles;
    return (
      <TouchableHighlight
        style={touchableItem}
        onPress={() => this.handleSingleSelect(item)}
      >
        <Text style={text}>{item.name || item.title}</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  touchableItem: {
    borderWidth: 8,
    borderBottomColor: 'white',
    height: 60,
  },
  text: {
    color: 'white',
    fontSize: 30,
  },
});

export default withNavigation(CustomListItem);
