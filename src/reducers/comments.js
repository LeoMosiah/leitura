import {
  RECEIVE_COMMENTS,
  ADD_COMMENT,
  TOGGLE_COMMENT,
  REMOVE_COMMENT
} from "../actions/comments";

import _ from "lodash";

const removeComment = (state, action) => {
  const clonedState = _.cloneDeep(state);
  delete clonedState[action.id];
  return clonedState;
};

const addComment = (state, action) => {
  let clonedState = _.cloneDeep(state);
  clonedState[action.comment.id] = action.comment;
  return clonedState;
};

const receiveComments = (state, action) => {
  let clonedState = _.cloneDeep(state);
  clonedState = action.comments;
  return clonedState;
};

const toggleComment = (state, action) => {
  let clonedState = _.cloneDeep(state);
  clonedState[action.comment.id].voteScore =
    action.option === "upVote"
      ? action.comment.voteScore + 1
      : action.comment.voteScore - 1;
  return clonedState;
};

export default function comments(state = {}, action) {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return receiveComments(state, action);
    case ADD_COMMENT:
      return addComment(state, action);
    case REMOVE_COMMENT:
      return removeComment(state, action);
    case TOGGLE_COMMENT:
      return toggleComment(state, action);
    default:
      return state;
  }
}
