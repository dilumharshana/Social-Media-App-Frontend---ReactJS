import { LOAD_ONLINE_FRIENDS } from "../types";

export const onlineFriendsReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_ONLINE_FRIENDS:
      return action.payload;
    default:
      return state;
  }
};
