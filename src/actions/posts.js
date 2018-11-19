import { deletePost, generateUID, savePost } from "../utils/api";

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const ADD_POST = "ADD_POST";
export const REMOVE_POST = "REMOVE_POST";
export const TOGGLE_POST = "TOGGLE_POST";

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

export function togglePost(post) {
  return {
    type: TOGGLE_POST,
    post
  };
}

export function removePost(id) {
  return {
    type: REMOVE_POST,
    id
  };
}

export function handleAddPost(post) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const newPost = {
      ...post,
      author: authedUser,
      id: generateUID(),
      timestamp: Date.now()
    };
    return savePost(newPost).then(post => dispatch(addPost(post)));
  };
}

export function handleDeletePost(id) {
  return dispatch => {
    return deletePost(id).then(postId => dispatch(removePost(postId)));
  };
}
