import React from "react";
import ReactDOM from "react-dom";
import { legacy_createStore as createStore } from "redux";
import { applyMiddleware } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import thunk from "redux-thunk";
import { reducer } from "./reducers";
const store = createStore(reducer, applyMiddleware(thunk));
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
