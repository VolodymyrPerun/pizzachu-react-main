import { v4 as uuidv4 } from 'uuid'
import { authAPI } from '../../../api/authAPI/authAPI'
import { usersAPI } from '../../../api/usersAPI/usersAPI'
import { refreshUserToken } from '../refreshReducer/thunks'
import { CUSTOM_ERRORS, TOKEN_ENUM } from '../../../constants'
import { profileAPI } from '../../../api/profileAPI/profileAPI'
import { checkAccessTokenPresent } from '../../../helpers/checkAccessTokenPresent'
import {
  setMyID,
  setIsAuth,
  setMeDates,
  setIsFetching,
  setIsSentMail,
  setLoginErrMsg,
  sendMailErrMsg,
  updateUserErrMsg,
  setIsProfileUpdate,
  setIsPasswordChanged,
  changePasswordErrMsg,
} from './actions'
//////////////////////////////////////////////////

export const authMe = () => async dispatch => {
  let tempId = localStorage.getItem('tempId')
  try {
    dispatch(setIsFetching(true))
    const token = checkAccessTokenPresent()
    if (token) {
      const meDates = await authAPI.authMe(token)

      dispatch(setMeDates(meDates.data))
      dispatch(setMyID(meDates.data.userId))
      dispatch(setIsAuth(true))
      dispatch(setIsFetching(false))
      localStorage.setItem('tempId', '')

    } else if (!tempId) {
      localStorage.setItem('tempId', uuidv4())
      dispatch(setIsFetching(false))

    } else {
      dispatch(setIsFetching(false))
    }
  } catch (e) {
    dispatch(setIsFetching(false))
    if (e.response.data.code === CUSTOM_ERRORS[4012].code) {
      dispatch(refreshUserToken())
      dispatch(authMe())
    }
  }
}

export const login = (email, password) => async dispatch => {
  try {
    dispatch(setIsFetching(true))

    const authResult = await authAPI.login(email, password)

    localStorage.getItem('tempId')
    localStorage.setItem('tempId', '')
    localStorage.setItem(TOKEN_ENUM.access_token,
      authResult.data[TOKEN_ENUM.access_token])
    localStorage.setItem(TOKEN_ENUM.refresh_token,
      authResult.data[TOKEN_ENUM.refresh_token])

    const token = checkAccessTokenPresent()
    const meDates = await authAPI.authMe(token)

    if (meDates) {
      dispatch(setMyID(meDates.data.userId))
      dispatch(setMeDates(meDates.data))
      dispatch(setIsAuth(true))
      dispatch(setIsFetching(false))
      dispatch(setLoginErrMsg(null))

    } else {
      setIsFetching(false)
    }
  } catch (e) {
    dispatch(setIsFetching(false))

    if (e.response.data.code) {
      dispatch(setLoginErrMsg(CUSTOM_ERRORS[e.response.data.code].message))
    }
  }
}

// export const loginAdmin = (email, password) => async dispatch => {
//
//     try {
//         dispatch(setIsFetching(true));
//
//         const authData = await adminAPI.authAdmin(email, password);
//
//         if (authData) {
//
//             localStorage.setItem(tokenEnum.access_token, authData.data[tokenEnum.access_token]);
//             localStorage.setItem(tokenEnum.refresh_token, authData.data[tokenEnum.refresh_token]);
//
//             const token = checkAccessTokenPresent();
//
//             const meDates = await adminAPI.adminInfo(token);
//
//             if (meDates) {
//                 dispatch(setMyID(meDates.data.id));
//                 dispatch(setMeDates(meDates.data));
//                 dispatch(setIsAuth(true));
//                 dispatch(setIsFetching(false));
//                 dispatch(setLoginAdminErrMsg(null))
//             } else {
//                 dispatch(setIsFetching(false))
//             }
//         }
//
//     } catch (e) {
//         dispatch(setIsFetching(false));
//
//         if (e.response.data.code) {
//             dispatch(setLoginAdminErrMsg(customErrors[e.response.data.code].message))
//         }
//     }
//
//
// };

export const logout = () => async dispatch => {
  try {
    const token = checkAccessTokenPresent()

    await authAPI.logoutClient(token)

    localStorage.removeItem(TOKEN_ENUM.access_token)
    localStorage.removeItem(TOKEN_ENUM.refresh_token)
    localStorage.setItem('tempId', uuidv4())

    dispatch(setIsAuth(false))
    dispatch(setMeDates(null))
  } catch (e) {}
}

export const changeUserPassword = (
  email, password, newPassword, repeatNewPassword) => async dispatch => {
  try {
    dispatch(setIsFetching(true))

    const token = checkAccessTokenPresent()

    if (token) {
      await authAPI.changePassword(
        token, email, password, newPassword, repeatNewPassword)

      dispatch(setIsPasswordChanged(true))
      dispatch(setIsFetching(false))
      dispatch(changePasswordErrMsg(null))

    } else {
      dispatch(setIsFetching(false))
    }
  } catch (e) {
    dispatch(setIsFetching(false))

    if (e.response.data.code) {
      dispatch(
        changePasswordErrMsg(CUSTOM_ERRORS[e.response.data.code].message))
    }
    if (e.response.data.code === CUSTOM_ERRORS[4012].code) {
      dispatch(refreshUserToken())
      dispatch(
        changeUserPassword(email, password, newPassword, repeatNewPassword))
    }

  }
}

export const sendEmailForChangeForgotPassword = email => async dispatch => {
  try {
    dispatch(setIsFetching(true))

    await authAPI.sendEmailForChangePassword(email)

    dispatch(setIsSentMail(true))
    dispatch(setIsFetching(false))
    dispatch(sendMailErrMsg(null))

  } catch (e) {
    dispatch(setIsFetching(false))

    if (e.response.data.code) {
      dispatch(sendMailErrMsg(CUSTOM_ERRORS[e.response.data.code].message))
    }
  }
}

export const updateUserDates = data => async dispatch => {
  try {
    dispatch(setIsProfileUpdate(false))

    const token = checkAccessTokenPresent()

    if (token) {
      await usersAPI.updateProfileInfo(data, token)

      const meDates = await authAPI.authMe(token)

      dispatch(setMeDates(meDates.data))
      dispatch(setIsProfileUpdate(true))

    } else {
      dispatch(setIsProfileUpdate(true))
    }

  } catch (e) {
    dispatch(setIsProfileUpdate(true))

    if (e.response.data.code) {
      dispatch(updateUserErrMsg(CUSTOM_ERRORS[4042].message))
    }

    if (e.response.data.code === CUSTOM_ERRORS[4012].code) {
      dispatch(refreshUserToken())
      dispatch(updateUserDates(data))
    }
  }
}

export const updateUserProfilePhoto = user_photo => async dispatch => {
  try {
    dispatch(setIsProfileUpdate(false))

    const token = checkAccessTokenPresent()

    if (token) {
      await profileAPI.updateProfilePhoto(user_photo, token)

      const meDates = await authAPI.authMe(token)

      dispatch(setMeDates(meDates.data))
      dispatch(updateUserErrMsg(null))
      dispatch(setIsProfileUpdate(true))

    } else {
      dispatch(setIsProfileUpdate(true))
    }

  } catch (e) {
    dispatch(setIsProfileUpdate(true))

    if (e.response.data.code) {
      dispatch(updateUserErrMsg(CUSTOM_ERRORS[e.response.data.code].message))
    }

    if (e.response.data.code === CUSTOM_ERRORS[4012].code) {
      dispatch(refreshUserToken())
      dispatch(updateUserProfilePhoto(user_photo))
    }
  }
}
