import {
  SET_USER,
  SET_TEMP_ID,
  TOGGLE_IS_FETCHING,
  SET_REGISTER_ERR_MSG,
  SET_REGISTER_SUCCESS,
} from './constants'
//////////////////////////////////////////////////

export const setUser = payload => ({ type: SET_USER, payload })
export const setTempId = payload => ({ type: SET_TEMP_ID, payload })
export const setIsFetching = payload => ({ type: TOGGLE_IS_FETCHING, payload })
export const setRegisterErrMsg = payload => ({
  type: SET_REGISTER_ERR_MSG,
  payload,
})
export const setRegisterSuccess = payload => ({
  type: SET_REGISTER_SUCCESS,
  payload,
})


