import {
  SET_MY_ID,
  SET_ME_INFO,
  SET_IS_AUTH,
  SET_IS_LOADING,
  SET_IS_SENT_MAIL,
  SEND_MAIL_ERR_MSG,
  SET_LOGIN_ERR_MSG,
  UPDATE_USER_ERR_MSG,
  SET_IS_PROFILE_UPDATE,
  SET_IS_RESET_PASSWORD,
  RESET_PASSWORD_ERR_MSG,
  SET_IS_PASSWORD_CHANGED,
  SET_LOGIN_ADMIN_ERR_MSG,
  CHANGE_PASSWORD_ERR_MSG,
} from './constants'
//////////////////////////////////////////////////

const initialState = {
  me: null,
  myID: null,
  isAuth: false,
  isSentMail: false,
  isFetching: false,
  loginErrMsg: null,
  sendMailErrMsg: null,
  isProfileUpdate: true,
  isResetPassword: false,
  updateUserErrMsg: null,
  loginAdminErrMsg: null,
  isPasswordChanged: false,
  resetPasswordErrMsg: null,
  changePasswordErrMsg: null,
}

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_ME_INFO:
      return {
        ...state,
        me: action.payload,
      }
    case SET_MY_ID:
      return {
        ...state,
        myID: action.payload,
      }
    case SET_IS_AUTH:
      return {
        ...state,
        isAuth: action.payload,
      }
    case SET_IS_PASSWORD_CHANGED:
      return {
        ...state,
        isPasswordChanged: action.payload,
      }
    case SET_IS_PROFILE_UPDATE:
      return {
        ...state,
        isProfileUpdate: action.payload,
      }
    case SET_IS_SENT_MAIL:
      return {
        ...state,
        isSentMail: action.payload,
      }
    case SET_IS_LOADING:
      return {
        ...state,
        isFetching: action.payload,
      }
    case SET_IS_RESET_PASSWORD:
      return {
        ...state,
        isResetPassword: action.payload,
      }
    case SET_LOGIN_ERR_MSG:
      return {
        ...state,
        loginErrMsg: action.payload,
      }
    case SET_LOGIN_ADMIN_ERR_MSG:
      return {
        ...state,
        loginAdminErrMsg: action.payload,
      }
    case CHANGE_PASSWORD_ERR_MSG:
      return {
        ...state,
        changePasswordErrMsg: action.payload,
      }
    case SEND_MAIL_ERR_MSG:
      return {
        ...state,
        sendMailErrMsg: action.payload,
      }
    case RESET_PASSWORD_ERR_MSG:
      return {
        ...state,
        resetPasswordErrMsg: action.payload,
      }
    case UPDATE_USER_ERR_MSG :
      return {
        ...state,
        updateUserPhotoErrMsg: action.payload,
      }
    default :
      return state
  }
}

export default authReducer
