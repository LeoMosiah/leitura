import { receiveUser } from "./users";
import { receivePosts } from "./posts";
import { receiveComments } from "./comments";
import { setAuthedUser } from "./authedUser";

const AUTHED_ID = "leomosiah";

export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ users, posts, comments }) => {
      dispatch(receiveUser(users));
      dispatch(receivePosts(posts));
      dispatch(receiveComments(comments));
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
}
