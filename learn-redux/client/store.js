import { createStore, compose, applyMiddleware } from "redux";
import {
  syncHistoryWithStore,
  routerMiddleware,
  routerReducer
} from "react-router-redux";
import { browserHistory } from "react-router";
import { createBrowserHistory, createMemoryHistory } from "history";
import createHistory from "history/createBrowserHistory";

// import the root reducer
import rootReducer from "/Users/chloetedder/Documents/learn-redux/client/reducers/rootReducer.js";

import comments from "./data/comments";
import posts from "./data/posts";

// create an object for the default data
const defaultState = {
  posts,
  comments
};

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
export const history = createHistory();
const store = createStore(
  rootReducer,
  defaultState,
  applyMiddleware(routerMiddleware(history))
);
/*
if (module.hot) {
  module.hot.accept("./reducers", () => {
    const nextRootReducer = require("/Users/chloetedder/Documents/learn-redux/client/reducers/rootReducer.js")
      .default;
    store.replaceReducer(nextRootReducer);
  });
}
*/
export default store;
