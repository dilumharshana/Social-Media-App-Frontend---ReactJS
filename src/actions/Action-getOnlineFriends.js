import { LOAD_ONLINE_FRIENDS } from "../types";

export const getOnlineFriends = () => {
  return {
    type: LOAD_ONLINE_FRIENDS,
    payload: [
      {
        src: "img 1",
        name: "kasun",
      },
      { src: "img 2", name: "prasanna" },
      { src: "img 2", name: "prasanna" },
      { src: "img 2", name: "prasanna" },
      { src: "img 2", name: "prasanna" },
      { src: "img 2", name: "prasanna" },
    ],
  };
};
