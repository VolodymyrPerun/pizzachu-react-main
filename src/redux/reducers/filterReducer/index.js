import {SET_FILTER, SET_QUERY} from "./constants";

const initialState = {
    searchQuery: '',
    filterBy: 'price',
};

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_QUERY:
            return {
                ...state,
                searchQuery: action.payload,
            };
        case SET_FILTER:
            return {
                ...state,
                filterBy: action.payload,
            };
        default:
            return state;
    }
};

export default filterReducer;
