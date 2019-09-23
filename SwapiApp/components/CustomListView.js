import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import CustomListItem from './CustomListItem';

class CustomListView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.arr}
          renderItem={({ item }) => {
            return <CustomListItem item={item} />;
          }}
          keyExtractor={item => item.name || item.title}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
});

export default CustomListView;
