import { Tools } from "./tools/tools";
import OnlineFriends from "./onlineFriends/onlineFriends";

import "./styles.css";

export const SideBar = (props) => {
  return (
    <div style={{ height: window.innerHeight, overflowY: "scroll" }}>
      <Tools />
      <OnlineFriends />
    </div>
  );
};
