import {
  GLOBAL_ERROR,
  TOGGLE_IS_FETCHING,
  INITIALIZED_SUCCESS,
} from './constants'
//////////////////////////////////////////////////

let initialState = {
  isFetching: true,
  globalError: null,
  initialized: false,
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      }
    case GLOBAL_ERROR:
      return {
        ...state,
        globalError: action.payload,
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

export default appReducer
