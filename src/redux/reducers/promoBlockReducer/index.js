import { PRODUCT_TYPE } from '../../../constants'
import {
  SET_PRODUCTS,
  SET_PRODUCT_SIZE,
  SET_PRODUCTS_TYPE,
  TOGGLE_IS_FETCHING,
  SET_PRODUCTS_SECTION,
} from './constants'
//////////////////////////////////////////////////

let initialState = {
  size_id: 3,
  section: 14,
  products: [],
  isFetching: true,
  type: PRODUCT_TYPE.PIZZA,
}

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
        type: action.payload,
      }
    case SET_PRODUCTS_SECTION:
      return {
        ...state,
        section: action.payload,
      }
    case SET_PRODUCT_SIZE:
      return {
        ...state,
        size_id: action.payload,
      }
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      }
    default:
      return state
  }
}

export default productsReducer
