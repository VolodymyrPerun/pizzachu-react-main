import {GLOBAL_ERROR, INITIALIZED_SUCCESS, TOGGLE_IS_FETCHING} from './constants';


export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});
export const setGlobalError = payload => ({type: GLOBAL_ERROR, payload});
export const setIsFetching = payload => ({type: TOGGLE_IS_FETCHING, payload});
