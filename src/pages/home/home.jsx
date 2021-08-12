import style from "./styles.css";
import { Grid } from "@material-ui/core";

//components
import { SideBar } from "../../components/sidebar/sidebar";
import { Feed } from "../../components/feeds/feed.jsx";
import { RightBar } from "../../components/rightbar/rightbar";

export const Home = (props) => {
  return (
    <>
      <Grid container>
        <Grid item lg={3}>
          <SideBar />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
          <Feed />
        </Grid>
        <Grid item lg={4}>
          <RightBar />
        </Grid>
      </Grid>
    </>
  );
};
