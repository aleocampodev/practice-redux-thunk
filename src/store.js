import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import transactionsReducer from "./reducers/transactionsReducer";
import { combineReducers } from "redux";
import reducerOcampo from "./reducers/reducerfantasy";
import notificationReducer from "./reducers/notificationsReducers";

const reducers = combineReducers({
  transactions: transactionsReducer,
  colors: reducerOcampo,
  notification: notificationReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducers, enhancer);

export default store;
