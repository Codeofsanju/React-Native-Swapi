import axios from 'axios';
const baseUrl = 'https://swapi.co/api';


// ACTIONS
const GET_SEARCH_RESULTS = 'GET_SEARCH_RESULTS';
const GET_MOVIES = 'GET_MOVIES';
const CLEAR = 'CLEAR';
// ACTION CREATORS 
const getSearch = (data) => {
    return {
        type: GET_SEARCH_RESULTS,
        data
    };
};

const getMovies = (data) => {
    return {
        type: GET_MOVIES,
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
                    dispatch(getMovies(films));
                });
            } else dispatch(getMovies([]));
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
        case GET_MOVIES:
            return {...state, movies: action.data};

        case CLEAR: {
            return {};
        }
        default:
            return state;
    }
};

export default reducer;