import {
    SET_PURCHASE,
    SET_TEMP_ID
} from "./constants";


export const setPurchase = payload => ({type: SET_PURCHASE, payload});
export const setTempId = payload => ({type: SET_TEMP_ID, payload});


