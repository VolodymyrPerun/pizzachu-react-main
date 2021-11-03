import { SET_PRODUCT, TOGGLE_IS_FETCHING } from './constants'
//////////////////////////////////////////////////

export const setProduct = payload => ({ type: SET_PRODUCT, payload })
export const setIsFetching = isFetching => ({
  type: TOGGLE_IS_FETCHING,
  payload: isFetching,
})
