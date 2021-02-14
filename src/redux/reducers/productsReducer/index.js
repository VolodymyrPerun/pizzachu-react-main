import {PAGE_DEFAULT} from '../../../constants';
import {
    TOGGLE_IS_FETCHING,
    SET_PRODUCTS,
    SET_PAGE_SIZE,
    SET_TOTAL_PRODUCTS_COUNT,
    SET_CURRENT_PAGE,
    SET_PRODUCTS_TYPE,
    SET_PRODUCTS_SECTION,
    SET_PRODUCT_SIZE
} from './constants';


let initialState = {
    products: [],
    type: null,
    section: null,
    size: null,
    pageSize: PAGE_DEFAULT.PAGE_SIZE,
    total: 0,
    currentPage: PAGE_DEFAULT.CURRENT_PAGE,
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
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        case SET_TOTAL_PRODUCTS_COUNT:
            return {
                ...state,
                total: action.payload
            }
        case SET_PAGE_SIZE:
            return {
                ...state,
                pageSize: action.payload
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
