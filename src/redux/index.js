import { reducers } from './redux-store'
import thunkMiddleware from 'redux-thunk'
import { compose, createStore, applyMiddleware } from 'redux'
//////////////////////////////////////////////////

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store
