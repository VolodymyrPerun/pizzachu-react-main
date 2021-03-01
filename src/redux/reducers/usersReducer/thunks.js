import {usersAPI} from "../../../API/usersAPI/usersAPI";
import {setIsFetching, setUser} from "./actions";
import {checkAccessTokenPresent} from "../../../helpers/checkAccessTokenPresent";


export const getUserFromAccessToken = () => async dispatch => {
    dispatch(setIsFetching(true));
    const token = checkAccessTokenPresent();
    if (token) {
        let response = await usersAPI.getUserByAccessToken(token);
        dispatch(setIsFetching(false));
        dispatch(setUser(response.data));
    }
};
