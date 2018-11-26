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

export function handleAddPost(post) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const newPost = {
      ...post,
      author: authedUser,
      id: generateUID(),
      timestamp: Date.now(),
      voteScore: 0,
      commentCount: 0
    };
    return savePost(newPost).then(post => dispatch(addPost(newPost)));
  };
}

export async function handleDeletePost(id) {
  return async dispatch => {
    await deletePost(id);
    dispatch(removePost(id));
  };
}
