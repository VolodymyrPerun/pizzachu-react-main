import {SET_REGISTER_ERR_MSG, SET_REGISTER_SUCCESS, SET_TEMP_ID, SET_USER, TOGGLE_IS_FETCHING} from "./constants";


const initialState = {
    user: [],
    isRegisterSuccess: false,
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
        case SET_REGISTER_SUCCESS:
            return {
                ...state,
                isRegisterSuccess: action.payload
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
