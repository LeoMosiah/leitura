import { generateUID, saveComment, deleteComment } from "../utils/api";

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const ADD_COMMENT = "ADD_COMMENT";
export const REMOVE_COMMENT = "REMOVE_POST";
export const TOGGLE_COMMENT = "TOGGLE_POST";

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
      timestamp: Date.now()
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
