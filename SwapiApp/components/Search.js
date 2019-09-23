import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { getSearchThunk, clearStore } from '../reducer';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
      input: '',
      formError: false,
    };
    this.onIconTap = this.onIconTap.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    this.props.clear();
  }

  onIconTap(name) {
    this.setState({
      selected: name,
    });
  }

  onInputChange(text) {
    this.setState({
      input: text,
    });
  }

  handleKeyDown() {
    const { selected, input } = this.state;
    const { getRes, navigation } = this.props;
    if (selected === '' || input === '') this.setState({ formError: true });
    else {
      this.setState({ formError: false });
      getRes({ section: selected, searchQuery: input });
      navigation.navigate('Results', { active: this.state.selected, banner:this.state.input });
    }
  }

  render() {
    const { container, input } = styles;
    return (
      <KeyboardAvoidingView style={container} behavior="padding" enabled>
        <FontAwesome
          onPress={() => this.onIconTap('starships')}
          name="space-shuttle"
          color={this.state.selected === 'starships' ? '#FFE81F' : 'white'}
          size={60}
        />
        <Ionicons
          onPress={() => this.onIconTap('people')}
          name="ios-people"
          color={this.state.selected === 'people' ? '#FFE81F' : 'white'}
          size={60}
        />
        <Ionicons
          onPress={() => this.onIconTap('planets')}
          name="md-planet"
          color={this.state.selected === 'planets' ? '#FFE81F' : 'white'}
          size={60}
        />
        <TextInput
          style={input}
          onChangeText={text => this.onInputChange(text)}
          placeholder="Search"
          placeholderTextColor="#FFE81F"
          keyboardType="default"
          returnKeyType="done"
          onSubmitEditing={() => this.handleKeyDown()}
        />

        {this.state.formError && (
          <Text style={{ color: 'white' }}>Please fill whole form!</Text>
        )}
        {this.props.results && this.props.results.count === 0 && (
          <Text style={{ color: 'white' }}>No results for that search!</Text>
        )}
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
    color: 'white',
    width: '50%',
    borderWidth: 3,
    borderColor: '#242323',
    borderRadius: 25,
    textAlign: 'center',
    marginTop: '20%',
    backgroundColor: '#242323',
    height: 5,
    fontSize: 20,
  },
});

const mapDispatchToProps = dispatch => {
  return {
    getRes: searchObj => dispatch(getSearchThunk(searchObj)),
    clear: () => dispatch(clearStore),
  };
};
const mapStateToProps = state => {
  return {
    results: state.searchRes,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
