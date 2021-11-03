import instance from '../../helpers/api'
import { HEADER_ENUM } from '../../constants'
//////////////////////////////////////////////////

export const authAPI = {
  authMe (access_token) {
    return instance.get(`auth/me`, {
      headers: {
        [HEADER_ENUM.AUTHORIZATION]: access_token,
      },
    })
  },
  login (email, password) {
    return instance.post(`auth/client`, { email, password })
  },
  loginAdmin (email, password) {
    return instance.post(`auth/admin`, { email, password })
  },
  loginSeller (email, password) {
    return instance.post(`auth/seller`, { email, password })
  },
  logoutClient: access_token => instance.post(`auth/logout-client`, {}, {
    headers: {
      [HEADER_ENUM.AUTHORIZATION]: access_token,
    },
  }),
  changePassword: (
    access_token, email, password, newPassword, repeatNewPassword) =>
    instance.put(
      `auth/client/password-change`,
      { email, password, newPassword, repeatNewPassword },
      {
        headers: {
          [HEADER_ENUM.AUTHORIZATION]: access_token,
        },
      }),
  sendEmailForChangePassword: email => instance.put(
    'auth/restore-password', { email },
  ),
  refreshToken: (refresh_token) => instance.post(
    `auth/refresh`, {}, {
      headers: {
        [HEADER_ENUM.AUTHORIZATION]: refresh_token,
      },
    }),
}
