import { LOAD_ONLINE_FRIENDS } from "../types";

export const getOnlineFriends = () => {
  return {
    type: LOAD_ONLINE_FRIENDS,
    payload: [
      {
        src: "img 1",
        name: "Ashan Silve",
      },
      { src: "img 2", name: "Kasun Rathnayaka" },
      { src: "img 2", name: "John Wick" },
      { src: "img 2", name: "Alex Petrson" },
      { src: "img 2", name: "Dilum Harshana" },
      { src: "img 2", name: "Eminem" },
    ],
  };
};
