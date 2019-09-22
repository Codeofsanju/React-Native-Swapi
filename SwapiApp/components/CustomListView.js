import React, {Component} from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';


class CustomListView extends Component{
    render(){
        console.log(this.props.arr);
        return(
            <View>
            </View>
        )
    }
}




export default CustomListView;