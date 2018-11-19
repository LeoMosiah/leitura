import { RECEIVE_POSTS, ADD_POST, REMOVE_POST } from "../actions/posts";

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
      return {
        ...state,
        ...state.posts.filter(post => post.id !== action.id)
      };
    default:
      return state;
  }
}
