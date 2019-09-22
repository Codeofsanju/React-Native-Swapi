import axios from 'axios';
const baseUrl = 'https://swapi.co/api';


// ACTIONS
const GET_SEARCH_RESULTS = 'GET_SEARCH_RESULTS';
const GET_SECONDARY = 'GET_SECONDARY';
const GET_TERNARY = 'GET_TERNARY';
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

const getTernary = (data) => {
    return {
        type: GET_TERNARY,
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
                    const promisefilms = person.films.map(async endpoint => {
                        const movie = await axios.get(endpoint);
                        return movie.data;
                    });
                    const films = await Promise.all(promisefilms);
                    dispatch(getSecondary(films));
                });

                res.data.results.map(async person => {
                    const promiseStarShips = person.starships.map(async endpoint => {
                        const starship = await axios.get(endpoint);
                        return starship.data;
                    });
                    const starships = await Promise.all(promiseStarShips);
                    dispatch(getTernary(starships));
                });
            } 
        }catch (error) {
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

        case GET_TERNARY:
            return {...state, ternaryData: action.data};

        case CLEAR: {
            return {};
        }
        default:
            return state;
    }
};

export default reducer;