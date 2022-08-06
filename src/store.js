import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import transactionsReducer from './reducers/transactionsReducer'
import { combineReducers } from 'redux'

const reducers = combineReducers({
  transactions: transactionsReducer,
})

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const enhancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore(reducers, enhancer)

export default store
