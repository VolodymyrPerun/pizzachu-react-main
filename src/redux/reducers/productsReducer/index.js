import { PAGE_DEFAULT, PRODUCT_TYPE } from '../../../constants'
import {
  SET_PRODUCTS,
  SET_PAGE_SIZE,
  SET_CURRENT_PAGE,
  SET_PRODUCT_SIZE,
  SET_PRODUCTS_TYPE,
  TOGGLE_IS_FETCHING,
  SET_PRODUCTS_SECTION,
  SET_TOTAL_PRODUCTS_COUNT,
} from './constants'
//////////////////////////////////////////////////

let initialState = {
  total: 0,
  products: [],
  section: null,
  isFetching: true,
  type: PRODUCT_TYPE.PIZZA,
  pageSize: PAGE_DEFAULT.PAGE_SIZE,
  size_id: PAGE_DEFAULT.PRODUCT_SIZE,
  currentPage: PAGE_DEFAULT.CURRENT_PAGE,
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
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      }
    case SET_TOTAL_PRODUCTS_COUNT:
      return {
        ...state,
        total: action.payload,
      }
    case SET_PAGE_SIZE:
      return {
        ...state,
        pageSize: action.payload,
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
