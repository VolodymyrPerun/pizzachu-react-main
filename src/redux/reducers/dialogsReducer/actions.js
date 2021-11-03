import { ADD_MESSAGE, TOGGLE_IS_FETCHING } from './constants'
//////////////////////////////////////////////////

export const setIsFetching = isFetching => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
})
export const addMessage = newMessageText => ({
  type: ADD_MESSAGE,
  newMessageText,
})
