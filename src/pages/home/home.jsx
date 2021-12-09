import style from "./styles.css";
import { Grid, Toolbar } from "@material-ui/core";

//components
import Navbar from "../../components/navbar/navbar";
import { SideBar } from "../../components/sidebar/sidebar";
import { Feed } from "../../components/feeds/feed";
import { LoadPages } from "../../components/pages/loadpages";
import { RightBar } from "../../components/rightbar/rightbar";

export const Home = (props) => {
  return (
    <>
      <Grid container>
        <Grid>
          <Navbar />
        </Grid>
        <Grid item lg={3} xl={3}>
          <Toolbar />
          <SideBar />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <Toolbar />

          <Feed />
        </Grid>
        <Grid lg={2} xl={2}>
          <Toolbar />
          <LoadPages />
        </Grid>
        <Grid item lg={3} xl={3}>
          <Toolbar />
          <RightBar />
        </Grid>
      </Grid>
    </>
  );
};
