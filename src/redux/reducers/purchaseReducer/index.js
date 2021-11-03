import { PAGE_DEFAULT } from '../../../constants'
import {
  SET_TEMP_ID,
  SET_PAGE_SIZE,
  SET_PURCHASES,
  SET_CURRENT_PAGE,
  TOGGLE_IS_FETCHING,
  SET_PURCHASE_ERR_MSG,
  SET_PURCHASE_SUCCESS,
  SET_PURCHASES_LENGTH,
  SET_TOTAL_PURCHASES_COUNT,
} from './constants'

const initialState = {
  total: 0,
  length: 0,
  tempId: null,
  purchases: [],
  isFetching: true,
  purchaseErrMsg: null,
  isPurchaseSuccess: null,
  pageSize: PAGE_DEFAULT.PAGE_SIZE,
  currentPage: PAGE_DEFAULT.CURRENT_PAGE,
}

const purchaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PURCHASES:
      return {
        ...state,
        purchases: action.payload,
      }
    case SET_TEMP_ID:
      return {
        ...state,
        tempId: action.payload,
      }
    case SET_TOTAL_PURCHASES_COUNT:
      return {
        ...state,
        total: action.payload,
      }
    case SET_PURCHASES_LENGTH:
      return {
        ...state,
        length: action.payload,
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      }
    case SET_PAGE_SIZE:
      return {
        ...state,
        pageSize: action.payload,
      }
    case SET_PURCHASE_ERR_MSG:
      return {
        ...state,
        purchaseErrMsg: action.payload,
      }
    case SET_PURCHASE_SUCCESS:
      return {
        ...state,
        isPurchaseSuccess: action.payload,
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

export default purchaseReducer
