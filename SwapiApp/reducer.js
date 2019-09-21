import axios from 'axios';
const baseUrl = 'https://swapi.co/api';


// ACTIONS
const GET_SEARCH_RESULTS = 'GET_SEARCH_RESULTS';

// ACTION CREATORS 
const getSearch = (data) => {
    return {
        type: GET_SEARCH_RESULTS,
        data
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
        default:
            return state;
    }
};

export default reducer;