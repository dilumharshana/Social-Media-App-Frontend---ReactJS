import { ONLINE_FRIENDS_LOADED } from "../../actions/types";

export const onlineFriendsReducer = (state = null, action) => {
  switch (action.type) {
    case ONLINE_FRIENDS_LOADED:
      return action.payload;
  }
  return state;
};
