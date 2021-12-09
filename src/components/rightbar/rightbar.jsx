import { Grid, Box } from "@material-ui/core";
import { Adds } from "./addvertisements/adds";
import { OnlineFriends } from "../sidebar/onlineFriends/onlineFriends";

export const RightBar = (props) => {
  return (
    <>
      <Box mt={3}>
        <Grid container justifyContent="center">
          <Grid item>
            <Adds />
          </Grid>
        </Grid>
        <Box p={3}>
          <OnlineFriends />
        </Box>
      </Box>
    </>
  );
};
