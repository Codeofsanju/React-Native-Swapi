import React, {Component} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import { connect } from 'react-redux';
import IconsRow from './iconsRow';


class Results extends Component{
    render(){
        console.log('IN RESULTS: ', this.props.results);
        const {container} = styles; 
        return this.props.results ? (
            <View style={container}>
            <IconsRow active={this.props.navigation.getParam('active')}/>
            { this.props.results.results.map(obj => {
                    return (
                        <Text key={obj.url} style={{color:'white'}}>{obj.name}</Text>
                    );
                })
            } 
            </View>
        ) :
        (
            <View style={container}>
                <IconsRow active={this.props.navigation.getParam('active')}/>
                <ActivityIndicator size='large'/>
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