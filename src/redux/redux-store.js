import {combineReducers} from 'redux';
import app from "./reducers/appReducer";
import auth from "./reducers/authReducer";
import messagesPage from './reducers/dialogsReducer';
import productsPage from "./reducers/productsReducer";
import productPage from './reducers/productPageReducer';
import filter from "./reducers/filterReducer";
import promo from "./reducers/promoBlockReducer";
import cart from "./reducers/cartReducer";
import comments from "./reducers/commentReducer";
import users from "./reducers/usersReducer";
import purchase from "./reducers/purchaseReducer";
import registerClients from "./reducers/registerClientsReducer";
import {reducer as form} from 'redux-form';


export const reducers = combineReducers({
    registerClients,
    messagesPage,
    productsPage,
    productPage,
    comments,
    purchase,
    auth,
    app,
    filter,
    promo,
    cart,
    users,
    form
});
