import { savePost } from "../utils/api";
import { generateUUID } from "../utils/helper";
import {
  ADD_POST,
  DECREMENT_COMMENTCOUNT,
  INCREMENT_COMMENTCOUNT,
  RECEIVE_POSTS,
  REMOVE_POST,
  TOGGLE_POST,
  UPDATE_POST,
  REORDER_POSTS
} from "./variables";

export function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts
  };
}
export function addPost(post) {
  return {
    type: ADD_POST,
    post
  };
}

export function togglePost(post, option) {
  return {
    type: TOGGLE_POST,
    post,
    option
  };
}

export function removePost(id) {
  return {
    type: REMOVE_POST,
    id
  };
}

export function incrementCommentcount(post) {
  return {
    type: INCREMENT_COMMENTCOUNT,
    post
  };
}

export function decrementCommentcount(post) {
  return {
    type: DECREMENT_COMMENTCOUNT,
    post
  };
}

export function handleAddPost(post) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const newPost = {
      ...post,
      author: authedUser,
      id: generateUUID(),
      timestamp: Date.now(),
      voteScore: 0,
      commentCount: 0
    };
    return savePost(newPost).then(post => dispatch(addPost(newPost)));
  };
}

export function updatePost(post) {
  return {
    type: UPDATE_POST,
    post
  };
}

export function reorderPosts(posts, option) {
  return {
    type: REORDER_POSTS,
    posts,
    option: option
  };
}
