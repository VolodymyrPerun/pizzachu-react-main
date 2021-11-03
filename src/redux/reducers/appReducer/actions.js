import {
  GLOBAL_ERROR,
  TOGGLE_IS_FETCHING,
  INITIALIZED_SUCCESS,
} from './constants'
//////////////////////////////////////////////////

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS })
export const setGlobalError = payload => ({ type: GLOBAL_ERROR, payload })
export const setIsFetching = payload => ({ type: TOGGLE_IS_FETCHING, payload })
