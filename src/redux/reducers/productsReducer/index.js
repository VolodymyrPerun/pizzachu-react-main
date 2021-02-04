import {
    TOGGLE_IS_FETCHING,
    SET_PRODUCTS,
    SET_PAGE_SIZE,
    SET_TOTAL_PRODUCTS_COUNT,
    SET_CURRENT_PAGE,
    SET_PRODUCTS_TYPE,
    SET_PRODUCTS_SECTION
} from './constants';


let initialState = {
    products: [],
    pageSize: 10,
    totalProductsCount: 0,
    currentPage: 1,
    isFetching: true,
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
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
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        case SET_TOTAL_PRODUCTS_COUNT:
            return {
                ...state,
                totalProductsCount: action.payload
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
