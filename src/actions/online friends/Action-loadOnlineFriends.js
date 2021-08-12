import { ONLINE_FRIENDS_LOADED } from "../types";

export const getOnlineFriends = () => {
  return {
    type: ONLINE_FRIENDS_LOADED,
    payload: [
      {
        pic: "src",
        name: "kasun",
      },
      {
        pic: "src",
        name: "prashan",
      },
    ],
  };
};
