import { combineReducers } from "redux";
import authedUser from "./authedUser";
import comments from "./comments";
import posts from "./posts";
import categories from "./categories";

export default combineReducers({
  authedUser,
  posts,
  comments,
  categories
});
