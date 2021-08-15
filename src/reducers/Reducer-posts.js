import { LOAD_TIMELINE } from "../types";

export const loadPosts = (state = [], action) => {
  switch (action.type) {
    case LOAD_TIMELINE:
      return action.payload;
    default:
      return state;
  }
};
