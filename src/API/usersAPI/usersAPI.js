import instance from '../../helpers/API';
import {HEADER_ENUM} from '../../constants';


export const usersAPI = {
    getUserByAccessToken(access_token) {
        return instance.get(`users`, {
            headers: {
                [HEADER_ENUM.AUTHORIZATION]: access_token
            }
        });
    },
    updateProfileInfo(data, access_token) {
        return instance.put(`users/update-profile`, data, {
            headers: {
                [HEADER_ENUM.AUTHORIZATION]: access_token
            }
        });
    }
};


