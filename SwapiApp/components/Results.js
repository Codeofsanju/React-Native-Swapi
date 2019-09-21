import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { connect } from 'react-redux';


class Results extends Component{
    render(){
        console.log('IN RESULTS: ', this.props.results);
        const {container} = styles; 
        return(
            <View style={container}>
                <Text style={{color:'white'}}>Results screen</Text>
            </View>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        results: state.searchRes
    };
};


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    input: {
        color: '#FFE81F',
        width: '50%',
        borderWidth: 5,
        borderColor: 'white',
        borderRadius: 25,
        textAlign: "center",
        marginTop: '20%'
    },
    icon: {

    }
});

export default connect(mapStateToProps, null)(Results);