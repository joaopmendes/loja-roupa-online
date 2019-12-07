import React from "react";

import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { CartReducer } from "./Cart/cart.reducer";

const reducers = {
  cart: CartReducer
};
const middleware = [thunk];
const store = createStore(combineReducers(reducers), composeWithDevTools(applyMiddleware(...middleware)));

export default ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
