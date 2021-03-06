import _ from "lodash";
import { tranformArrayIntoMap } from "../utils/helper";

export const handleRemovePost = (state, action) => {
  const clonedState = _.cloneDeep(state);
  delete clonedState[action.id];
  return clonedState;
};

export const addPost = (state, action) => {
  let clonedState = _.cloneDeep(state);
  clonedState[action.post.id] = action.post;
  return clonedState;
};

export const receivePosts = (state, action) => {
  let clonedState = _.cloneDeep(state);
  clonedState = action.posts;
  return clonedState;
};

export const togglePost = (state, action) => {
  let clonedState = _.cloneDeep(state);
  clonedState[action.post.id].voteScore =
    action.option === "upVote"
      ? action.post.voteScore + 1
      : action.post.voteScore - 1;
  return clonedState;
};

export const incrementCommentcount = (state, action) => {
  let clonedState = _.cloneDeep(state);
  clonedState[action.post.id].commentCount = action.post.commentCount + 1;
  return clonedState;
};
export const decrementCommentcount = (state, action) => {
  let clonedState = _.cloneDeep(state);
  clonedState[action.post.id].commentCount = action.post.commentCount - 1;
  return clonedState;
};

export const updatePost = (state, action) => {
  let clonedState = _.cloneDeep(state);
  clonedState[action.post.id] = action.post;
  return clonedState;
};

export const removeComment = (state, action) => {
  const clonedState = _.cloneDeep(state);
  delete clonedState[action.id];
  return clonedState;
};

export const addComment = (state, action) => {
  let clonedState = _.cloneDeep(state);
  clonedState[action.comment.id] = action.comment;
  return clonedState;
};

export const receiveComments = (state, action) => {
  let clonedState = _.cloneDeep(state);
  clonedState = action.comments;
  return clonedState;
};

export const toggleComment = (state, action) => {
  let clonedState = _.cloneDeep(state);
  clonedState[action.comment.id].voteScore =
    action.option === "upVote"
      ? action.comment.voteScore + 1
      : action.comment.voteScore - 1;
  return clonedState;
};

export const updateComment = (state, action) => {
  let clonedState = _.cloneDeep(state);
  clonedState[action.comment.id] = action.comment;
  return clonedState;
};

export const reorderPosts = (state, action) => {
  let clonedState = _.cloneDeep(state);
  if (action.option) {
    return tranformArrayIntoMap(
      Object.values(clonedState).sort((a, b) => b.timestamp - a.timestamp)
    );
  } else {
    return tranformArrayIntoMap(
      Object.values(clonedState).sort((a, b) => a.timestamp - b.timestamp)
    );
  }
};
