import {PRODUCT_TYPE} from '../../../constants';
import {
    TOGGLE_IS_FETCHING,
    SET_PRODUCTS,
    SET_PRODUCTS_TYPE,
    SET_PRODUCTS_SECTION,
    SET_PRODUCT_SIZE
} from './constants';


let initialState = {
    products: [],
    type: PRODUCT_TYPE.PIZZA,
    section: 14,
    size_id: 3,
    isFetching: true
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            }
        case SET_PRODUCTS_TYPE:
            return {
                ...state,
                type: action.payload
            }
        case SET_PRODUCTS_SECTION:
            return {
                ...state,
                section: action.payload
            }
        case SET_PRODUCT_SIZE:
            return {
                ...state,
                size_id: action.payload
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
