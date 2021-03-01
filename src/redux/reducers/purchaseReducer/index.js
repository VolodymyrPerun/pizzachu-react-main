import {
    SET_PURCHASE,
    SET_TEMP_ID
} from "./constants";


const initialState = {
    purchase: null,
    tempId: null
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PURCHASE:
            return {
                ...state,
                purchase: action.payload
            }
        case SET_TEMP_ID:
            return {
                ...state,
                tempId: action.payload
            }
        default:
            return state;
    }
};

export default cartReducer;
