import {
    TOGGLE_IS_FETCHING,
    SET_PRODUCTS,
    SET_PAGE_SIZE,
    SET_TOTAL_PRODUCTS_COUNT,
    SET_CURRENT_PAGE,
    SET_PRODUCTS_TYPE,
    SET_PRODUCTS_SECTION
} from './constants';


export const setProducts = products => ({type: SET_PRODUCTS, payload: products});
export const setProductsType = type => ({type: SET_PRODUCTS_TYPE, payload: type});
export const setProductsSection = section => ({type: SET_PRODUCTS_SECTION, payload: section});
export const setPageSize = pageSize => ({type: SET_PAGE_SIZE, payload: pageSize});
export const setCurrentPage = currentPage => ({type: SET_CURRENT_PAGE, payload: currentPage});
export const setTotalProductsCount = totalProductsCount => ({
    type: SET_TOTAL_PRODUCTS_COUNT,
    payload: totalProductsCount
});
export const setIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, payload: isFetching});
