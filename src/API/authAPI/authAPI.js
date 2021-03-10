import instance from '../../helpers/API';
import {HEADER_ENUM} from "../../constants";


export const authAPI = {
    authMe(access_token) {
        return instance.get(`auth/me`, {
            headers: {
                [HEADER_ENUM.AUTHORIZATION]: access_token
            }
        });
    },
    login(email, password) {
        return instance.post(`auth/client`, {email, password});
    },
    loginAdmin(email, password) {
        return instance.post(`auth/admin`, {email, password});
    },
    loginSeller(email, password) {
        return instance.post(`auth/seller`, {email, password});
    },
    logoutClient: access_token => {

        return instance.post(`auth/logout-client`, {}, {
            headers: {
                [HEADER_ENUM.AUTHORIZATION]: access_token
            }
        })
    },

    changePassword: (access_token, data) => {

        return instance.put(`auth/password-change`, data, {
            headers: {
                [HEADER_ENUM.AUTHORIZATION]: access_token
            }
        })
    },
    sendEmailForChangePassword: data => {

        return instance.post('auth/password-refresh', data)

    },
    resetPassword: (data, token) => {

        return instance.put(`auth/password-refresh/${token}`, data)

    },
    refreshToken: (refresh_token) => {

        return instance.post(`auth/refresh`, {}, {
            headers: {
                [HEADER_ENUM.AUTHORIZATION]: refresh_token
            }
        })

    }
};




