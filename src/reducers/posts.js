import {
  RECEIVE_POSTS,
  ADD_POST,
  REMOVE_POST,
  TOGGLE_POST
} from "../actions/posts";
import _ from "lodash";

const handleRemovePost = (state, action) => {
  const clonedState = _.cloneDeep(state);
  delete clonedState[action.id];
  return clonedState;
};

const addPost = (state, action) => {
  let clonedState = _.cloneDeep(state);
  clonedState[action.post.id] = action.post;
  return clonedState;
};

const receivePosts = (state, action) => {
  let clonedState = _.cloneDeep(state);
  clonedState = action.posts;
  return clonedState;
};

const togglePost = (state, action) => {
  let clonedState = _.cloneDeep(state);
  clonedState[action.post.id].voteScore =
    action.option === "upVote"
      ? action.post.voteScore + 1
      : action.post.voteScore - 1;
  return clonedState;
};

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
    default:
      return state;
  }
}
