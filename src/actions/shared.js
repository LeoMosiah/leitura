import { receiveCategories } from "./categories";
import { receivePosts } from "./posts";
import { receiveComments } from "./comments";
import { getInitialData } from "../utils/api";
import { setAuthedUser } from "./authedUser";

export function handleInitialData() {
  return async dispatch => {
    const { categories, posts, comments } = await getInitialData();
    dispatch(setAuthedUser("Udacity"));
    dispatch(receiveCategories(categories));
    dispatch(receivePosts(posts));
    dispatch(receiveComments(comments));
  };
}
