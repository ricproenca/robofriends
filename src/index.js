import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
// import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import WhyDidYouUpdate from "why-did-you-update";

import "tachyons";
import "./index.css";

import App from "./containers/App";
import { searchRobots, requestRobots } from "./reducers";
import registerServiceWorker from "./registerServiceWorker";
import ErrorBoundary from "./components/ErrorBoundary";

WhyDidYouUpdate(React);

// const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots });
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware /*, logger*/)
);

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
