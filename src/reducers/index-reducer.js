import { combineReducers } from "redux";

import { onlineFriendsReducer } from "./onlineFriends/Reducer-onlineFriends";

export const rootReducer = combineReducers({
  onlineFriendsList: onlineFriendsReducer,
});
