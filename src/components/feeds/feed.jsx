import { useEffect } from "react";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";
import "./style.css";

//actions
import { loadTimeLine } from "../../actions/Action-timeline";

//components
import { Share } from "./share/share";
import { Posts } from "./Posts/posts";

export const Feed = (props) => {
  //getting actions
  const dispatch = useDispatch();
  const settimeline = bindActionCreators(loadTimeLine, dispatch);

  //setting state
  const timelinePostList = useSelector((store) => store.timeline);

  useEffect(() => {
    settimeline();
  }, []);
  return (
    <div style={{ height: window.innerHeight, overflowY: "scroll" }}>
      <Grid container justifyContent="center">
        <Grid item>
          <Share />
        </Grid>
        <Grid item>
          {timelinePostList.map((post) => (
            <Posts post={post} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};
