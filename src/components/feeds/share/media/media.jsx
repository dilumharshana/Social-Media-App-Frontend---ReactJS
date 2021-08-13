import { Box, Button } from "@material-ui/core";
import PhotoSizeSelectActualIcon from "@material-ui/icons/PhotoSizeSelectActual";
import LabelIcon from "@material-ui/icons/Label";
import LocationOn from "@material-ui/icons/LocationOn";
import EmojiEmotions from "@material-ui/icons/EmojiEmotions";

import { styles } from "./styles";

export const Media = () => {
  //styles
  const useStyles = styles();
  const classes = useStyles();

  return (
    <Box display="flex" p={2}>
      {/* media icons */}

      <Box mr={2} display="flex" alignItems="center">
        <Box mr={1}>
          <PhotoSizeSelectActualIcon />
        </Box>
        <Box className={classes.mediaNames}>Photo or video</Box>
      </Box>
      <Box mr={2} display="flex" alignItems="center">
        <Box mr={1}>
          <LabelIcon />
        </Box>
        <Box className={classes.mediaNames}>Tag</Box>
      </Box>
      <Box mr={2} display="flex" alignItems="center">
        <Box mr={1}>
          <LocationOn />
        </Box>
        <Box className={classes.mediaNames}>Location</Box>
      </Box>
      <Box mr={2} display="flex" alignItems="center">
        <Box mr={1}>
          <EmojiEmotions />
        </Box>
        <Box className={classes.mediaNames}>Feelings</Box>
      </Box>

      {/* Share button */}

      <Box ml={7}>
        <Button size="large" variant="outlined" className={classes.button}>
          Share
        </Button>
      </Box>
    </Box>
  );
};
