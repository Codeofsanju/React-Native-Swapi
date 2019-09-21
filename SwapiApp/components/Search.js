import React, {Component} from 'react';
import {Keyboard, StyleSheet, TextInput, KeyboardAvoidingView} from 'react-native';
import {FontAwesome, Ionicons} from '@expo/vector-icons';


export default class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: '',
            input: ''
        };
        this.onIconTap = this.onIconTap.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    onIconTap(name){
        this.setState({
            selected: name
        });
    }

    onInputChange(text){
        this.setState({
            input: text
        });
    }

    handleKeyDown(){
        // call redux thunk to hit star wars endpoint here and then put data on store
        console.log(this.state);
    }

    render(){
        const {container, input} = styles;
        return (
            <KeyboardAvoidingView style={container} behavior="padding" enabled>
                    <FontAwesome onPress={() => this.onIconTap('spaceships')}  name='space-shuttle' color={this.state.selected === 'spaceships' ? '#FFE81F':'white'} size={60}/> 
                    <Ionicons onPress={() => this.onIconTap('people')} name='ios-people' color={this.state.selected === 'people' ? '#FFE81F':'white'} size={60}/>
                    <Ionicons onPress={() => this.onIconTap('planets')} name='md-planet' color={this.state.selected === 'planets' ? '#FFE81F':'white'} size={60}/>
                    <TextInput style={input}
                        onChangeText={(text) => this.onInputChange(text)}
                        placeholder='Search'
                        placeholderTextColor='#FFE81F'
                        keyboardType='default'
                        returnKeyType='done'
                        onSubmitEditing = {() => this.handleKeyDown()}
                    />
            </KeyboardAvoidingView>
        );
    }
}


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


