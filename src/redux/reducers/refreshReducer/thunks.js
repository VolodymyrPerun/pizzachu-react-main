import {CUSTOM_ERRORS} from "../../../constants";
import {checkRefreshTokenPresent} from "../../../helpers/checkRefreshTokenPresent";
import {authAPI} from "../../../API/authAPI/authAPI";
import {access_token, refresh_token} from "../../../constants/authConstants/token.enum";
import {checkAccessTokenPresent} from "../../../helpers/checkAccessTokenPresent";
import {setIsAuth, setMeDates, setMyID} from "../authReducer/actions";
import historyRout from "../../../helpers/history";
import {setRefreshLoading} from "./actions";

export const refreshUserToken = () => async dispatch => {

    try {
        dispatch(setRefreshLoading(true));


        const refreshToken = checkRefreshTokenPresent();

        const tokens = await authAPI.refreshToken(refreshToken);

        localStorage.setItem(access_token, tokens.data[access_token]);
        localStorage.setItem(refresh_token, tokens.data[refresh_token]);

        const token = checkAccessTokenPresent();


        const meDates = await authAPI.authMe(token);

        if (meDates) {
            dispatch(setMyID(meDates.data.id));
            dispatch(setMeDates(meDates.data));
            dispatch(setIsAuth(true));
            dispatch(setRefreshLoading(false));

        } else {
            setRefreshLoading(false);
        }

    } catch (e) {
        if (e.response.data.code && e.response.data.code === CUSTOM_ERRORS[4013].code) {
            dispatch(setRefreshLoading(false));

            localStorage.removeItem(access_token);
            localStorage.removeItem(refresh_token);
            dispatch(setIsAuth(false));
            dispatch(setMeDates(null));
            historyRout.push('/login');
        }
    }
};
