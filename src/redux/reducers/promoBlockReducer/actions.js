import {
  SET_PRODUCTS,
  SET_PRODUCT_SIZE,
  SET_PRODUCTS_TYPE,
  TOGGLE_IS_FETCHING,
  SET_PRODUCTS_SECTION,
} from './constants'
//////////////////////////////////////////////////

export const setProducts = payload => ({ type: SET_PRODUCTS, payload })
export const setProductsType = payload => ({
  type: SET_PRODUCTS_TYPE,
  payload,
})
export const setProductsSection = payload => ({
  type: SET_PRODUCTS_SECTION,
  payload,
})
export const setProductSize = payload => ({ type: SET_PRODUCT_SIZE, payload })
export const setIsFetching = isFetching => ({
  type: TOGGLE_IS_FETCHING,
  payload: isFetching,
})
