import { receiveCategories } from "./categories";
import { receivePosts } from "./posts";
import { receiveComments } from "./comments";
import { setAuthedUser } from "./authedUser";
import { getInitialData } from "../utils/api";

const AUTHED_ID = "leomosiah";

export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ posts, comments, categories }) => {
      dispatch(setAuthedUser(AUTHED_ID));
      dispatch(receiveCategories(categories));
      dispatch(receivePosts(posts));
      dispatch(receiveComments(comments));
    });
  };
}
