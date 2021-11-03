import { SET_USER, TOGGLE_IS_FETCHING } from './constants'
//////////////////////////////////////////////////

export const setUser = payload => ({ type: SET_USER, payload })
export const setIsFetching = isFetching => ({
  type: TOGGLE_IS_FETCHING,
  payload: isFetching,
})
