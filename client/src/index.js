import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "./css/index.css";

import { getBoards } from "./actions";

import logger from "redux-logger";
import thunk from "redux-thunk";

import { djello } from "./reducers";

let store = createStore(djello, applyMiddleware(logger, thunk));

store.dispatch(getBoards(1));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
