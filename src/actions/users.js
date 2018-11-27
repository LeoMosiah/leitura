import { RECEIVE_USERS } from "./variables";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  };
}
