import {
  SET_TEMP_ID,
  SET_PAGE_SIZE,
  SET_PURCHASES,
  SET_CURRENT_PAGE,
  TOGGLE_IS_FETCHING,
  SET_PURCHASE_ERR_MSG,
  SET_PURCHASES_LENGTH,
  SET_PURCHASE_SUCCESS,
  SET_TOTAL_PURCHASES_COUNT,
} from './constants'
//////////////////////////////////////////////////

export const setTempId = payload => ({ type: SET_TEMP_ID, payload })
export const setPurchase = payload => ({ type: SET_PURCHASES, payload })
export const setPageSize = payload => ({ type: SET_PAGE_SIZE, payload })
export const setCurrentPage = payload => ({ type: SET_CURRENT_PAGE, payload })
export const setTotalPurchasesCount = payload => ({
  type: SET_TOTAL_PURCHASES_COUNT,
  payload,
})
export const setPurchasesLength = payload => ({
  type: SET_PURCHASES_LENGTH,
  payload,
})
export const setPurchaseErrMsg = payload => ({
  type: SET_PURCHASE_ERR_MSG,
  payload,
})
export const setIsFetching = isFetching => ({
  type: TOGGLE_IS_FETCHING,
  payload: isFetching,
})
export const setPurchaseSuccess = payload => ({
  type: SET_PURCHASE_SUCCESS,
  payload,
})


