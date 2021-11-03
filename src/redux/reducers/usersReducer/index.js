import { SET_USER, TOGGLE_IS_FETCHING } from './constants'
//////////////////////////////////////////////////

let initialState = {
  user: {},
  users: [],
  userId: null,
  isFetching: true,
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
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

export default usersReducer
