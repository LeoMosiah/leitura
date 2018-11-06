import { receiveUser } from "./users";
import { receivePosts } from "./posts";
import { receiveComments } from "./comments";
import { setAuthedUser } from "./authedUser";
import { getInitialData } from "../utils/api";

const AUTHED_ID = "leomosiah";

export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ posts, comments }) => {
      dispatch(receivePosts(posts));
      dispatch(setAuthedUser(AUTHED_ID));
      dispatch(receiveComments(comments));
    });
  };
}
