import { RECEIVE_CATEGORIES } from "./variables";

export function receiveCategories(categories) {
  return {
    type: RECEIVE_CATEGORIES,
    categories
  };
}
