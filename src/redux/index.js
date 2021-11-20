import thunkMiddleware from 'redux-thunk'
import { compose, createStore, applyMiddleware } from 'redux'
import { reducers } from './redux-store'
//////////////////////////////////////////////////

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store
