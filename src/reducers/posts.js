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
  return {
    ...state,
    [action.post.id]: action.post
  };
};

const receivePosts = (state, action) => {
  return {
    ...state,
    ...action.posts
  };
};

const togglePost = (state, action) => {
  return {
    ...state,
    [action.post.id]: {
      ...action.post,
      ["voteScore"]: 1
    }
  };
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
