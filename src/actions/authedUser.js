import { SET_AUTHED_USER } from "./variables";

export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id
  };
}
