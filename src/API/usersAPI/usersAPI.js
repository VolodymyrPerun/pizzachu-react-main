import instance from '../../helpers/API';
import {HEADER_ENUM} from '../../constants';


export const usersAPI = {
    getUserByAccessToken(access_token) {
        return instance.get(`users`, {
            headers: {
                [HEADER_ENUM.AUTHORIZATION]: access_token
            }
        });
    }
};


