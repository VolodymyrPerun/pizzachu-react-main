import {combineReducers} from 'redux';
import app from "./reducers/appReducer";
import auth from "./reducers/authReducer";
import messagesPage from './reducers/dialogsReducer';
import productsPage from "./reducers/productsReducer";
import productPage from './reducers/productPageReducer';
import filter from "./reducers/filterReducer";
import promo from "./reducers/promoBlockReducer";
import cart from "./reducers/cartReducer";
import {reducer as form} from 'redux-form';


export const reducers = combineReducers({
    messagesPage,
    productsPage,
    productPage,
    auth,
    app,
    filter,
    promo,
    cart,
    form
});
