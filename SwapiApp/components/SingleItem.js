import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import { white } from 'ansi-colors';

const SingleItem = (props) => {
    const item = props.navigation.getParam('item');
    const {container, header, info} = styles;
    const {
            height, 
            population, 
            model, 
            mass, 
            rotation_period, 
            manufacturer,
            homeworld,
            orbital_period,
            crew,
            diameter,
            passengers,
            director,
            producer,
            release_date,
            birth_year
        }  = item;
    return (
        <View style={container}>
            <Text style={header}> {item.name || item.title}</Text>
            {
                height && <Text style={info}> Height: {height}</Text>
            }
            {
                population && <Text style={info}> Population: {population}</Text>
            }
            {
                model && <Text style={info}> Model: {model}</Text>
            }
            {
                mass && <Text style={info}> Mass: {mass}</Text>
            }
            {
                rotation_period && <Text style={info}> Rotational Period: {rotation_period}</Text>
            }
            {
                manufacturer && <Text style={info}> Manufacturer: {manufacturer}</Text>
            }

            {
                orbital_period && <Text style={info}> Orbital Perios: {orbital_period}</Text>
            }
            {
                crew && <Text style={info}> Crew: {crew} members</Text>
            }
            {
                diameter &&  <Text style={info}> Diameter: {diameter}</Text>
            }
            {
                passengers && <Text style={info}> Passengers: {passengers} passengers</Text>
            }
            {
                director && <Text style={info}> Director: {director}</Text>
            }
            {
                producer && <Text style={info}> Producer: {producer}</Text>
            }
            {
                release_date && <Text style={info}> Release Date: {release_date}</Text>
            }
            {
                birth_year && <Text style={info}> Birth Year: {birth_year}</Text>
            }
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    header: {
        fontSize: 30,
        color: "white"
    },
    info: {
        fontSize: 20,
        color: "white"
    }
});

export default SingleItem;