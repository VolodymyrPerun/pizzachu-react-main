import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import app from './reducers/appReducer'
import auth from './reducers/authReducer'
import cart from './reducers/cartReducer'
import users from './reducers/usersReducer'
import filter from './reducers/filterReducer'
import promo from './reducers/promoBlockReducer'
import purchase from './reducers/purchaseReducer'
import comments from './reducers/commentsReducer'
import messagesPage from './reducers/dialogsReducer'
import productsPage from './reducers/productsReducer'
import productPage from './reducers/productPageReducer'
import productMark from './reducers/productMarkReducer'
import replyComments from './reducers/replyCommentsReducer'
import registerClients from './reducers/registerClientsReducer'
//////////////////////////////////////////////////

export const reducers = combineReducers({
    app,
    form,
    auth,
    cart,
    promo,
    users,
    filter,
    purchase,
    comments,
    productMark,
    productPage,
    messagesPage,
    productsPage,
    replyComments,
    registerClients,
})
