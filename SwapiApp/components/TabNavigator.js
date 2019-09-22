import React, {Component} from 'react';
import { View, StyleSheet, Button, Text} from 'react-native';
import { connect } from 'react-redux';
import CustomListView from './CustomListView';

class TabNavigator extends Component{
    constructor(props){
        super(props);
        this.state = {
            active: 0
        };
        this.handleTabChange = this.handleTabChange.bind(this);
    }

    handleTabChange(index){
        this.setState({
            active: index
        });
    }

    render(){
        if(this.props.results && this.props.results.count < 1){
            return (
                <Text style={{color:'white'}}>No results for that!</Text>
            )
        } 
        else {
            return (
                <View>
                    <View style={styles.buttonContainer}>
                        {
                            this.props.labels.map((label,index)=> {
                                return (
                                    <Button onPress={() => this.handleTabChange(index)} key={label} title={label}/>
                                );
                            })
                        }
                    </View>
                    {
                        this.state.active === 0 && <CustomListView arr={this.props.results && this.props.results.results}/>
                    }
                    {
                        this.state.active === 1 && <CustomListView arr={this.props.secondary && this.props.secondary}/>
                    }
                    {
                        this.state.active === 2 && <CustomListView arr={this.props.ternary && this.props.ternary}/>
                    }
                </View>
            );
        }
    }
}
const styles = StyleSheet.create({
    buttonContainer: {
        display: "flex",
        flexDirection: 'row',
        backgroundColor: 'black' ,
        color: 'white'
    }
});


const mapStateToProps = (state) => {
    return {
        results: state.searchRes,
        secondary: state.secondaryData,
        ternary: state.ternaryData
    };
};

export default connect(mapStateToProps, null)(TabNavigator);