import { LOAD_TIMELINE } from "../types";
import colombo from "../assests/timeline/colombo.jpg";
import wick from "../assests/timeline/wick.jpg";
import ella from "../assests/timeline/ella.jpg";
import kandy from "../assests/timeline/kandy.jpg";

export const loadTimeLine = () => {
  return {
    type: LOAD_TIMELINE,
    payload: [
      {
        id: 1,
        name: "Jhon Wick",
        action: "updated his profile picture",
        desc: "I'll come to you",
        image: wick,
        likes: "8k",
      },
      {
        id: 2,
        name: "Prasanna Herath",
        action: "feeking cool at Kandy",
        desc: "",
        image: kandy,
        likes: "578",
      },
      {
        id: 3,
        name: "Dilshan Ekanayeka",
        action: "",
        desc: "ella",
        image: ella,
        likes: "243",
      },
      {
        id: 4,
        name: "Shelly Nick",
        action: "Home",
        desc: "Freedom",
        image: colombo,
        likes: "1k",
      },
    ],
  };
};
