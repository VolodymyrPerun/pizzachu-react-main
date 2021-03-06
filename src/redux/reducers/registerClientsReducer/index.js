import {
    SET_USER,
    SET_TEMP_ID,
    TOGGLE_IS_FETCHING,
    SET_REGISTER_ERR_MSG
} from "./constants";


const initialState = {
    user: [],
    registerErrMsg: null,
    tempId: null,
    isFetching: true
};

const registerClientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload
            }
        case SET_TEMP_ID:
            return {
                ...state,
                tempId: action.payload
            }
        case SET_REGISTER_ERR_MSG:
            return {
                ...state,
                registerErrMsg: action.payload
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        default:
            return state;
    }
};

export default registerClientsReducer;
