import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const SingleItem = (props) => {
    const item = props.navigation.getParam('item');
    const {container, header} = styles;
    return (
        <View style={container}>
            <Text style={header}> {item.name || item.title}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    header: {
        color: 'white'
    }
});

export default SingleItem;