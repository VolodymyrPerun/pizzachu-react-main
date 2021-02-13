import {
    TOGGLE_IS_FETCHING,
    SET_PRODUCT
} from './constants';


let initialState = {
    product: null,
    isFetching: true
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCT:
            return {
                ...state,
                product: action.payload

            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        default:
            return state;
    }
};

export default productsReducer;
