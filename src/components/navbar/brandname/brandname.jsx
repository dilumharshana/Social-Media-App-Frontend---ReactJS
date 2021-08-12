import { Grid, makeStyles, Box } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

//name
export const BrandName = (props) => {
  return (
    <Grid item xs={12} sm={12} md={2} lg={3} xl={3}>
      <Box display="flex" flexDirection="row">
        <Box pr={1}>
          <FavoriteBorderIcon fontSize="large" />
        </Box>
        <Box>
          <Typography variant="h5">EvonSocial</Typography>
        </Box>
      </Box>
    </Grid>
  );
};
