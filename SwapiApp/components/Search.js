import React, {Component} from 'react';
import {Text, StyleSheet, TextInput, KeyboardAvoidingView} from 'react-native';
import {FontAwesome, Ionicons} from '@expo/vector-icons';
import { connect } from 'react-redux';
import {getSearchThunk} from '../reducer';


class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: '',
            input: '',
            error: false,
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
        const {selected, input} = this.state;
        if(selected === '' || input === '') this.setState({error: true});
        else {
            this.setState({error: false});
            this.props.getRes({'section': selected, 'searchQuery': input})
        };
    }
å
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
                    { 
                        this.state.error && <Text style={{color:'white'}}>Please fill whole form!</Text>
                    }
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


const mapDispatchToProps = (dispatch) => {
    return {
        getRes: (searchObj) => dispatch(getSearchThunk(searchObj))
    };
};

export default connect(null, mapDispatchToProps)(Search);