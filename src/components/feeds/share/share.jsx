import { Grid, Box, Paper } from "@material-ui/core";

//components
import { PostCreator } from "./input/input";
import { Media } from "./media/media";
import { styles } from "./styles";

export const Share = (props) => {
  const useStyles = styles();
  const classes = useStyles();
  return (
    <Box mb={3} mt={1}>
      <Paper variant="filled" className={classes.shareContainer} elevation={1}>
        <PostCreator />
        <center>
          <hr style={{ width: "90%" }} />
        </center>
        <Media />
      </Paper>
    </Box>
  );
};
