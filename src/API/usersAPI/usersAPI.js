import instance from '../../helpers/api'
import { AUTHORIZATION } from '../../constants/authConstants/header.enum'
//////////////////////////////////////////////////

export const usersAPI = {
  getUserByAccessToken (access_token) {
    return instance.get(`users`, {
      headers: {
        [AUTHORIZATION]: access_token,
      },
    })
  },
  updateProfileInfo (data, access_token) {
    return instance.put(`users/update-profile`, data, {
      headers: {
        [AUTHORIZATION]: access_token,
      },
    })
  },
}
