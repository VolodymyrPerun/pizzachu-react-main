import {
  SET_USER,
  SET_TEMP_ID,
  TOGGLE_IS_FETCHING,
  SET_REGISTER_ERR_MSG,
  SET_REGISTER_SUCCESS,
} from './constants'
//////////////////////////////////////////////////

const initialState = {
  user: [],
  tempId: null,
  isFetching: true,
  registerErrMsg: null,
  isRegisterSuccess: false,
}

const registerClientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      }
    case SET_TEMP_ID:
      return {
        ...state,
        tempId: action.payload,
      }
    case SET_REGISTER_ERR_MSG:
      return {
        ...state,
        registerErrMsg: action.payload,
      }
    case SET_REGISTER_SUCCESS:
      return {
        ...state,
        isRegisterSuccess: action.payload,
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

export default registerClientsReducer
