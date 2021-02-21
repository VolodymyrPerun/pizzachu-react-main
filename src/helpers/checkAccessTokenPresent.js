import {TOKEN_ENUM} from '../constants';

export const checkAccessTokenPresent = () => {
    const token = localStorage.getItem(TOKEN_ENUM.access_token);

    if (!token) {
        return false
    }

    return token
};




