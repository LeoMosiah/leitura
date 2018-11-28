import {
  ADD_POST,
  DECREMENT_VOTESCORE,
  INCREMENT_VOTESCORE,
  RECEIVE_POSTS,
  REMOVE_POST,
  TOGGLE_POST,
  UPDATE_POST
} from "../actions/variables";
import {
  addPost,
  decrementVotescore,
  handleRemovePost,
  incrementVotescore,
  receivePosts,
  togglePost,
  updatePost
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
    case INCREMENT_VOTESCORE:
      return incrementVotescore(state, action);
    case DECREMENT_VOTESCORE:
      return decrementVotescore(state, action);
    case UPDATE_POST:
      return updatePost(state, action);
    default:
      return state;
  }
}
