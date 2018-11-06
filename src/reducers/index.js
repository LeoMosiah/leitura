import { combineReducers } from "redux";
import authedUser from "./authedUser";
import comments from "./comments";
import posts from "./posts";

export default combineReducers({
  authedUser,
  posts
});
