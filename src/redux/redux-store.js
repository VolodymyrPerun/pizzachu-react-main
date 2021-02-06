import {combineReducers} from 'redux';
import appReducer from "./reducers/appReducer";
import authReducer from "./reducers/authReducer";
import dialogsReducer from './reducers/dialogsReducer';
import productsReducer from "./reducers/productsReducer";
import {reducer as formReducer} from 'redux-form';

export const reducers = combineReducers({
    messagesPage: dialogsReducer,
    productsPage: productsReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});
