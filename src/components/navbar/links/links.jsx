import { Grid, Box } from "@material-ui/core";

import Bootstrap from "bootstrap/dist/css/bootstrap.css";
import styles from "./style.css";

export const TopLinks = () => {
  return (
    <Grid item lg={2} direction="row">
      <Box justifyContent="center" display="flex">
        <Box>
          <a className="navitem " href="#">
            Home
          </a>
        </Box>
        <Box>
          <a className="navitem" href="#">
            Timeline
          </a>
        </Box>
      </Box>
    </Grid>
  );
};
