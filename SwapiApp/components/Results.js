import React, {Component} from 'react';
import {View} from 'react-native';
import { connect } from 'react-redux';


class Results extends Component{
    render(){
        console.log(this.props);
        return(
            <View>
                
            </View>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        results: state.searchRes
    };
};

export default connect(mapStateToProps, null)(Results);