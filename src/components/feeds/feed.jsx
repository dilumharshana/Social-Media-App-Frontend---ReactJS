import { Grid } from "@material-ui/core";
import { Component } from "react";
import "./style.css";

//components
import { Share } from "./share/share";
import { Posts } from "./Posts/posts";

export class Feed extends Component {
  render() {
    return (
      <div style={{ height: window.innerHeight, overflowY: "scroll" }}>
        <Grid container justifyContent="center">
          <Grid item>
            <Share />
          </Grid>
          <Grid item>
            <Posts />
            <Posts />
            <Posts />
          </Grid>
        </Grid>
      </div>
    );
  }
}
