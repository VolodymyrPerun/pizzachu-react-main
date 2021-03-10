import {refresh_token} from '../constants/authConstants/token.enum';

export const checkRefreshTokenPresent = () => {
    const token = localStorage.getItem(refresh_token);

    if (!token) {
        return  false
    }

    return token
};
