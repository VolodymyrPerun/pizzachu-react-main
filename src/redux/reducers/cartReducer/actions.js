import {
  SET_CART,
  SET_TEMP_ID,
  SET_PRODUCT_ID,
  SET_PRODUCT_COUNT,
  SET_PRODUCTS_LENGTH,
  SET_TOTAL_PRODUCTS_SUM,
} from './constants'
//////////////////////////////////////////////////

export const setCart = payload => ({ type: SET_CART, payload })
export const setProductCount = payload => ({
  type: SET_PRODUCT_COUNT,
  payload,
})
export const setProductId = payload => ({ type: SET_PRODUCT_ID, payload })
export const setTempId = payload => ({ type: SET_TEMP_ID, payload })
export const setProductsLength = payload => ({
  type: SET_PRODUCTS_LENGTH,
  payload,
})
export const setTotalProductsSum = payload => ({
  type: SET_TOTAL_PRODUCTS_SUM,
  payload,
})


