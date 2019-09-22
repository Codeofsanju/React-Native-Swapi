import React, {Component} from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';


class CustomListView extends Component{
    render(){
        console.log(this.props.arr);
        return(
            <View style={styles.container}>
                <FlatList 
                    data={this.props.arr}
                    renderItem={({item}) => {
                        return (
                            <Text style={{color:'white'}}> {item.name || item.title}</Text>
                        );
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
        flexDirection: 'row'
    },
});



export default CustomListView;