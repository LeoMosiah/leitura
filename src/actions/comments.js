import { generateUID, saveComment } from "../utils/api";

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const ADD_COMMENT = "ADD_COMMENT";

export function receiveComments(comments) {
  return {
    type: RECEIVE_COMMENTS,
    comments
  };
}

function addComment(comment) {
  return {
    type: ADD_COMMENT,
    comment
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
