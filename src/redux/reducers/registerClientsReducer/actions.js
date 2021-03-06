import {
    SET_USER,
    SET_TEMP_ID,
    TOGGLE_IS_FETCHING, SET_REGISTER_ERR_MSG,
} from "./constants";


export const setUser = payload => ({type: SET_USER, payload});
export const setTempId = payload => ({type: SET_TEMP_ID, payload});
export const setRegisterErrMsg = payload => ({type: SET_REGISTER_ERR_MSG, payload});
export const setIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, payload: isFetching});


