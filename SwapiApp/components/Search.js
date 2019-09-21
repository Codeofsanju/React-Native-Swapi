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
        }, () => console.log(this.state));
    }

    onInputChange(text){
        this.setState({
            input: text
        }, () => console.log(this.state));
    }

    handleKeyDown(e){
        if(e.nativeEvent.key === 'Enter'){
            alert('hit');
            Keyboard.dismiss();
        }
    }


    render(){
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                    <FontAwesome onPress={() => this.onIconTap('spaceships')}  name='space-shuttle' color={this.state.selected === 'spaceships' ? '#FFE81F':'white'} size={60}/> 
                    <Ionicons onPress={() => this.onIconTap('people')} name='ios-people' color={this.state.selected === 'people' ? '#FFE81F':'white'} size={60}/>
                    <Ionicons onPress={() => this.onIconTap('planets')} name='md-planet' color={this.state.selected === 'planets' ? '#FFE81F':'white'} size={60}/>
                    <TextInput style={styles.input}
                        onChangeText={(text) => this.onInputChange(text)}
                        placeholder='Search'
                        placeholderTextColor='#FFE81F'
                        keyboardType='default'
                        returnKeyType='done'
                        onKeyPress={this.handleKeyDown}
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
        color: '#FFE81F'
    }
});


