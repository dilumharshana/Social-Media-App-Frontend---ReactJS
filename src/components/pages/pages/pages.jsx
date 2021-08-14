import {
  Card,
  Avatar,
  CardMedia,
  Box,
  CardActions,
  Button,
} from "@material-ui/core";

import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";

import react from "../../../assests/pages/react.jpeg";

//srtles
import { styles } from "./style";

export const Pages = (props) => {
  const useStyles = styles();
  const classes = useStyles();

  return (
    <Box mb={4} mt={4} justifyContent="center">
      <Card className={classes.root}>
        {/* card header */}

        <Box display="flex" alignItems="center" p={2}>
          <Box>
            <Avatar src={react} />
          </Box>
          <Box className={classes.userName} ml={1}>
            Learn React
          </Box>
        </Box>

        {/* media */}
        <CardMedia image={react} className={classes.media} title="any ware" />

        {/* card action */}
        <Box display="flex" justifyContent="center" p={1}>
          <Box mr={1}>
            <Button startIcon={<ThumbUpAltIcon />} variant="outlined">
              LIKE PAGE
            </Button>
          </Box>
          <Box>
            <Button>Remove</Button>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};
