import {combineReducers} from 'redux';
import appReducer from "./reducers/appReducer";
import authReducer from "./reducers/authReducer";
import dialogsReducer from './reducers/dialogsReducer';
import productsReducer from "./reducers/productsReducer";
import filterReducer from "./reducers/filterReducer";
import {reducer as formReducer} from 'redux-form';


export const reducers = combineReducers({
    messagesPage: dialogsReducer,
    productsPage: productsReducer,
    auth: authReducer,
    app: appReducer,
    filter: filterReducer,
    form: formReducer
});
