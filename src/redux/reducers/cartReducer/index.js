import {
  SET_CART,
  SET_TEMP_ID,
  SET_PRODUCT_ID,
  SET_PRODUCT_COUNT,
  SET_PRODUCTS_LENGTH,
  SET_TOTAL_PRODUCTS_SUM,
} from './constants'
//////////////////////////////////////////////////

const initialState = {
  cart: null,
  tempId: null,
  productId: null,
  productCount: 1,
  productsLength: 0,
  totalProductsSum: 0
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      return {
        ...state,
        cart: action.payload,
      }
    case SET_TEMP_ID:
      return {
        ...state,
        tempId: action.payload,
      }
    case SET_PRODUCT_ID:
      return {
        ...state,
        productId: action.payload,
      }
    case SET_PRODUCT_COUNT:
      return {
        ...state,
        productCount: action.payload,
      }
    case SET_PRODUCTS_LENGTH:
      return {
        ...state,
        productsLength: action.payload,
      }
    case SET_TOTAL_PRODUCTS_SUM:
      return {
        ...state,
        totalProductsSum: action.payload,
      }
    default:
      return state
  }
}

export default cartReducer
