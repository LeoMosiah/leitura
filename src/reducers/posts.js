import {
  ADD_POST,
  DECREMENT_COMMENTCOUNT,
  INCREMENT_COMMENTCOUNT,
  RECEIVE_POSTS,
  REMOVE_POST,
  TOGGLE_POST,
  UPDATE_POST,
  REORDER_POSTS
} from "../actions/variables";
import {
  addPost,
  decrementCommentcount,
  handleRemovePost,
  incrementCommentcount,
  receivePosts,
  togglePost,
  updatePost,
  reorderPosts
} from "./handlers";

export default function posts(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return receivePosts(state, action);
    case ADD_POST:
      return addPost(state, action);
    case REMOVE_POST:
      return handleRemovePost(state, action);
    case TOGGLE_POST:
      return togglePost(state, action);
    case INCREMENT_COMMENTCOUNT:
      return incrementCommentcount(state, action);
    case DECREMENT_COMMENTCOUNT:
      return decrementCommentcount(state, action);
    case UPDATE_POST:
      return updatePost(state, action);
    case REORDER_POSTS:
      return reorderPosts(state, action);
    default:
      return state;
  }
}
