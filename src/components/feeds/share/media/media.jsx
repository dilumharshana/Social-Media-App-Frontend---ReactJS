import { Box, Button } from "@material-ui/core";
import PhotoSizeSelectActualIcon from "@material-ui/icons/PhotoSizeSelectActual";
import LabelIcon from "@material-ui/icons/Label";
import LocationOn from "@material-ui/icons/LocationOn";
import EmojiEmotions from "@material-ui/icons/EmojiEmotions";
import FavoriteIcon from "@material-ui/icons/Favorite";

import { styles } from "./styles";

export const Media = () => {
  //styles
  const useStyles = styles();
  const classes = useStyles();

  return (
    <Box display="flex" pl={2} pb={3}>
      {/* media icons */}

      <Box
        display="flex"
        alignItems="center"
        className={classes.mediaBox}
        justifyContent="flex-end"
      >
        <Box mr={1}>
          <PhotoSizeSelectActualIcon style={{ color: "#e03f3f" }} />
        </Box>
        <Box className={classes.mediaNames}>Favourites</Box>
      </Box>
      <Box
        mr={2}
        display="flex"
        alignItems="center"
        className={classes.mediaBox}
      >
        <Box mr={1}>
          <LocationOn style={{ color: "#32c215" }} />
        </Box>
        <Box className={classes.mediaNames}>Location</Box>
      </Box>
      <Box
        mr={2}
        display="flex"
        alignItems="center"
        className={classes.mediaBox}
      >
        <Box mr={1}>
          <EmojiEmotions style={{ color: "#deaf14" }} />
        </Box>
        <Box className={classes.mediaNames}>Feelings</Box>
      </Box>

      {/* Share button */}

      <Box ml={4} mr={2}>
        <Button
          size="medium"
          className={classes.button}
          variant="text"
          endIcon={<FavoriteIcon variant="outlined" />}
        >
          Share
        </Button>
      </Box>
    </Box>
  );
};
