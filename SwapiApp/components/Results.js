import React, {Component} from 'react';
import {View, Text, StyleSheet, ActivityIndicator, Button} from 'react-native';
import { connect } from 'react-redux';
import IconsRow from './iconsRow';
import TabNavigator from './TabNavigator';


class Results extends Component{
    render(){
        this.props.results && console.log('IN RESULTS: ', this.props.results);
        this.props.secondary && console.log(this.props.secondary);
        this.props.ternary && console.log(this.props.ternary);
        const {container, iconContainer} = styles; 
        // return this.props.results && this.props.secondary ? (
        //     <View style={container}>
        //     <IconsRow active={this.props.navigation.getParam('active')}/>
        //     { this.props.results.results.map(obj => {
        //             return <Text key={obj.url} style={{color:'white'}}>{obj.name}</Text>
        //         })
        //     } 
        //     {
        //         this.props.secondary.map(movie => {
        //             return <Text style={{color:'white'}} key={movie.episode_id}> {movie.title} </Text>
        //         })
        //     }
        //     </View>
        // ) :
        // (
        //     <View style={container}>
        //         <IconsRow active={this.props.navigation.getParam('active')}/>
        //         <ActivityIndicator size='large'/>
        //     </View>
        // );
        let labels = [];
        const toCheck = this.props.navigation.getParam('active')
        if(toCheck === 'people'){
            labels = ['characters', 'films', 'starships'];
        } else if(toCheck ==='planets'){
            labels = ['planets', 'films', 'residents']
        } else {
            labels = ['starships', 'films', 'pilots'];
        }
        return (
            <View style={container}>
                <IconsRow active={this.props.navigation.getParam('active')}/>
                <TabNavigator labels={labels}/>
            </View>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        results: state.searchRes,
        secondary: state.secondaryData,
        ternary: state.ternaryData
    };
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
    },
    iconContainer: {
        flex: 1
    }

});

export default connect(mapStateToProps, null)(Results);