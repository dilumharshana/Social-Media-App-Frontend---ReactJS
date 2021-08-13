import { combineReducers } from "redux";
import { onlineFriendsReducer } from "./Reducer-onlineFriends";

export const reducers = combineReducers({
  onlineFriends: onlineFriendsReducer,
});
