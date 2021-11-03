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
  SET_LOGIN_ADMIN_ERR_MSG,
  SET_IS_PASSWORD_CHANGED,
  CHANGE_PASSWORD_ERR_MSG,
} from './constants'
//////////////////////////////////////////////////

export const setMyID = payload => ({ type: SET_MY_ID, payload })
export const setMeDates = payload => ({ type: SET_ME_INFO, payload })
export const setIsAuth = payload => ({ type: SET_IS_AUTH, payload })
export const setIsPasswordChanged = payload => ({
  type: SET_IS_PASSWORD_CHANGED,
  payload,
})
export const setIsProfileUpdate = payload => ({
  type: SET_IS_PROFILE_UPDATE,
  payload,
})
export const setIsFetching = payload => ({ type: SET_IS_LOADING, payload })
export const setIsSentMail = payload => ({ type: SET_IS_SENT_MAIL, payload })
export const setIsResetPassword = payload => ({
  type: SET_IS_RESET_PASSWORD,
  payload,
})
export const setLoginErrMsg = payload => ({ type: SET_LOGIN_ERR_MSG, payload })
export const setLoginAdminErrMsg = payload => ({
  type: SET_LOGIN_ADMIN_ERR_MSG,
  payload,
})
export const changePasswordErrMsg = payload => ({
  type: CHANGE_PASSWORD_ERR_MSG,
  payload,
})
export const sendMailErrMsg = payload => ({ type: SEND_MAIL_ERR_MSG, payload })
export const resetPasswordErrMsg = payload => ({
  type: RESET_PASSWORD_ERR_MSG,
  payload,
})
export const updateUserErrMsg = payload => ({
  type: UPDATE_USER_ERR_MSG,
  payload,
})


