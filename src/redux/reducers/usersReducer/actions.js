import {
    TOGGLE_IS_FETCHING,
    SET_USER
} from './constants';


export const setUser = payload => ({type: SET_USER, payload});
export const setIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, payload: isFetching});
