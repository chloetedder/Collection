import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import comments from "./commentsReducer";
import posts from "./postsReducer";

const rootReducer = combineReducers({
  posts,
  comments,
  routing: routerReducer
});

export default rootReducer;
