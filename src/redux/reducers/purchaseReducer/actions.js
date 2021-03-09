import {
    SET_CURRENT_PAGE,
    SET_PAGE_SIZE,
    SET_PURCHASE_ERR_MSG, SET_PURCHASE_SUCCESS,
    SET_PURCHASES,
    SET_PURCHASES_LENGTH,
    SET_TEMP_ID,
    SET_TOTAL_PURCHASES_COUNT,
    TOGGLE_IS_FETCHING
} from "./constants";


export const setPurchase = payload => ({type: SET_PURCHASES, payload});
export const setTempId = payload => ({type: SET_TEMP_ID, payload});
export const setPageSize = payload => ({type: SET_PAGE_SIZE, payload});
export const setCurrentPage = payload => ({type: SET_CURRENT_PAGE, payload});
export const setTotalPurchasesCount = payload => ({type: SET_TOTAL_PURCHASES_COUNT, payload});
export const setPurchasesLength = payload => ({type: SET_PURCHASES_LENGTH, payload});
export const setPurchaseErrMsg = payload => ({type: SET_PURCHASE_ERR_MSG, payload});
export const setIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, payload: isFetching});
export const setPurchaseSuccess = payload => ({type: SET_PURCHASE_SUCCESS, payload});


