import { saveComment } from "../utils/api";
import { generateUUID } from "../utils/helper";
import {
  ADD_COMMENT,
  RECEIVE_COMMENTS,
  REMOVE_COMMENT,
  TOGGLE_COMMENT,
  UPDATE_COMMENT
} from "./variables";

export function receiveComments(comments) {
  return {
    type: RECEIVE_COMMENTS,
    comments
  };
}

export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    comment
  };
}

export function toggleComment(comment, option) {
  return {
    type: TOGGLE_COMMENT,
    comment,
    option
  };
}

export function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id
  };
}

export function handleAddComment(comment) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const newComment = {
      ...comment,
      author: authedUser,
      id: generateUUID(),
      timestamp: Date.now(),
      voteScore: 0
    };
    return saveComment(newComment).then(comment =>
      dispatch(addComment(comment))
    );
  };
}

export function updateComment(comment) {
  return {
    type: UPDATE_COMMENT,
    comment
  };
}
