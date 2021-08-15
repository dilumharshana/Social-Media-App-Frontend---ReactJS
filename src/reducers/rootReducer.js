import { combineReducers } from "redux";
import { onlineFriendsReducer } from "./Reducer-onlineFriends";
import { loadPosts } from "./Reducer-posts";

export const reducers = combineReducers({
  onlineFriends: onlineFriendsReducer,
  timeline: loadPosts,
});
