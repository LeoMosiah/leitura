import { generateUID, saveComment, deleteComment } from "../utils/api";

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const ADD_COMMENT = "ADD_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const TOGGLE_COMMENT = "TOGGLE_COMMENT";

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
      id: generateUID(),
      timestamp: Date.now(),
      voteScore: 0
    };
    return saveComment(newComment).then(comment =>
      dispatch(addComment(comment))
    );
  };
}

export function handleDeleteComment(id) {
  return dispatch => {
    return deleteComment(id).then(id => dispatch(removeComment(id)));
  };
}
