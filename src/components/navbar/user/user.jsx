import { Grid, Box } from "@material-ui/core";
import profile from "../../../assests/profile/profile.png";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export const User = (props) => {
  return (
    <Grid item xs={1} sm={1} md={1} lg={1}>
      <div>
        <Box flexDirection="row-reverse" display="flex">
          <Box>
            <Avatar src={profile} />
          </Box>
        </Box>
      </div>
    </Grid>
  );
};
