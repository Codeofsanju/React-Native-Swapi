import axios from 'axios';
import {promisifiedDataHelper} from './utils';
const baseUrl = 'https://swapi.co/api';


// ACTIONS
const GET_SEARCH_RESULTS = 'GET_SEARCH_RESULTS';
const GET_SECONDARY = 'GET_SECONDARY';
const GET_TERTIARY = 'GET_TERTIARY';
const CLEAR = 'CLEAR';
// ACTION CREATORS 
const getSearch = (data) => {
    return {
        type: GET_SEARCH_RESULTS,
        data
    };
};

const getSecondary = (data) => {
    return {
        type: GET_SECONDARY,
        data
    };
};

const getTertiary = (data) => {
    return {
        type: GET_TERTIARY,
        data
    };
};

export const clearStore = () => {
    return {
        type: CLEAR
    };
};


// THUNKS
export const getSearchThunk = (searchObj) => {
    const {section, searchQuery} = searchObj;
    return async (dispatch) => {
        try {
            const res = await axios.get(`${baseUrl}/${section}/?search=${searchQuery}`);
            //create action
            const action = getSearch(res.data);
            //dispatch
            dispatch(action);
            
            if(section === 'people'){
                res.data.results.map(async person => {
                    const films = await Promise.all(promisifiedDataHelper(person.films));
                    dispatch(getSecondary(films));
                });

                res.data.results.map(async person => {
                    const starships = await Promise.all(promisifiedDataHelper(person.starships));
                    dispatch(getTertiary(starships));
                });
            } else if(section === 'planets'){
                res.data.results.map(async planet => {
                    const films = await Promise.all(promisifiedDataHelper(planet.films));
                    dispatch(getSecondary(films));
                });
                res.data.results.map(async planet => {
                    const residents = await Promise.all(promisifiedDataHelper(planet.residents));
                    dispatch(getTertiary(residents));
                });
            } else {
                res.data.results.map(async starship => {
                    const films = await Promise.all(promisifiedDataHelper(starship.films));
                    dispatch(getSecondary(films));
                });
                res.data.results.map(async starship => {
                    const pilots = await Promise.all(promisifiedDataHelper(starship.pilots));
                    dispatch(getTertiary(pilots));
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
};




// REDUCER
const reducer = (state = {}, action) => {
    switch(action.type){
        case GET_SEARCH_RESULTS:
            return {...state, searchRes: action.data};
        case GET_SECONDARY:
            return {...state, secondaryData: action.data};

        case GET_TERTIARY:
            return {...state, ternaryData: action.data};

        case CLEAR: {
            return {};
        }
        default:
            return state;
    }
};

export default reducer;