import {SET_USER_DATA, GET_CAPTCHA_URL_SUCCESS} from './constants';


let initialState = {
    userId: 2,//null
    email: 'email@com.ua',//null
    password: '11111qwertyQ',//null
    login: 'null',//null
    isAuth: true, //false!!!
    rememberMe: false,
    captchaUrl: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
};

export default authReducer;
