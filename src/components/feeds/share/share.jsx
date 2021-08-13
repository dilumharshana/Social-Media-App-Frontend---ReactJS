import { Grid, Box, Paper } from "@material-ui/core";

//components
import { Input } from "./input/input";
import { Media } from "./media/media";
import { styles } from "./styles";

export const Share = (props) => {
  const useStyles = styles();
  const classes = useStyles();
  return (
    <Grid>
      <Grid item>
        <Box>
          <Paper
            variant="filled"
            className={classes.shareContainer}
            elevation={1}
            m={4}
            spacing={2}
          >
            <Input />
            <center>
              <hr style={{ width: "90%" }} />
            </center>
            <Media />
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};
