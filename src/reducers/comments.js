import {
  ADD_COMMENT,
  RECEIVE_COMMENTS,
  REMOVE_COMMENT,
  TOGGLE_COMMENT,
  UPDATE_COMMENT
} from "../actions/variables";
import {
  addComment,
  receiveComments,
  removeComment,
  toggleComment,
  updateComment
} from "./handlers";

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
    case UPDATE_COMMENT:
      return updateComment(state, action);
    default:
      return state;
  }
}
