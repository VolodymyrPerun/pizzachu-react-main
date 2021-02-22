import {
    TOGGLE_IS_FETCHING,
    GLOBAL_ERROR,
    INITIALIZED_SUCCESS
} from './constants';


let initialState = {
    initialized: false,
    globalError: null,
    isFetching: true
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        case GLOBAL_ERROR:
            return {
                ...state,
                globalError: action.payload
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        default:
            return state;
    }
};

export default appReducer;
