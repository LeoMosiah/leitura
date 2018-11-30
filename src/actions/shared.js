import { receiveCategories } from "./categories";
import { receivePosts } from "./posts";
import { receiveComments } from "./comments";
import { getInitialData } from "../utils/api";
import { setAuthedUser } from "./authedUser";

export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ posts, comments, categories }) => {
      dispatch(setAuthedUser("LeoMosiah"));
      dispatch(receiveCategories(categories));
      dispatch(receivePosts(posts));
      dispatch(receiveComments(comments));
    });
  };
}
