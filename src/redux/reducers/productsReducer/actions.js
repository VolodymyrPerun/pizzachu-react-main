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


export const setProducts = payload => ({type: SET_PRODUCTS, payload});
export const setProductsType = payload => ({type: SET_PRODUCTS_TYPE, payload});
export const setProductsSection = payload => ({type: SET_PRODUCTS_SECTION, payload});
export const setPageSize = payload => ({type: SET_PAGE_SIZE, payload});
export const setCurrentPage = payload => ({type: SET_CURRENT_PAGE, payload});
export const setTotalProductsCount = payload => ({type: SET_TOTAL_PRODUCTS_COUNT, payload});
export const setProductSize = payload => ({type: SET_PRODUCT_SIZE, payload});
export const setIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, payload: isFetching});
