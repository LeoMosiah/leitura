import {
  RECEIVE_POSTS,
  ADD_POST,
  REMOVE_POST,
  TOGGLE_POST
} from "../actions/posts";
import _ from "lodash";

export default function posts(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return {
        ...state,
        ...action.posts
      };
    case ADD_POST:
      return {
        ...state,
        [action.post.id]: action.post
      };
    case REMOVE_POST:
      return _.omit(state, [action.id]);
    case TOGGLE_POST:
      return {
        ...state,
        [action.post.id]: {
          ...action.post,
          ["voteScore"]: action.post.voteScore + 1
        }
      };
    default:
      return state;
  }
}
