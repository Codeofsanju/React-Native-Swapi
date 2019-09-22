import React, {Component} from 'react';
import {TouchableHighlight, Text} from 'react-native';

class CustomListItem extends Component{
    constructor(props){
        super(props);
        this.handleSingleSelect = this.handleSingleSelect.bind(this);
    }
    handleSingleSelect(item){
        console.log(item);
    }
    render(){
        const {item} = this.props;
        return(
            <TouchableHighlight
                onPress={() => this.handleSingleSelect(item)}
            >
                <Text style={{color:'white'}}>{item.name || item.title}</Text>
            </TouchableHighlight>
        );
    }
}



export default CustomListItem;