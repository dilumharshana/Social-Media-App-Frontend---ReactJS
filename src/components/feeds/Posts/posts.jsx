import { useState } from "react";

import {
  Card,
  Avatar,
  CardMedia,
  Box,
  CardActions,
  IconButton,
} from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import wick from "../../../assests/timeline/wick.jpg";

//srtles
import { styles } from "./style";

export const Posts = (props) => {
  const [liked, setLiked] = useState(false);

  const useStyles = styles();
  const classes = useStyles();

  return (
    <Box mb={3}>
      <Card className={classes.root} elevation={5} key={props.post.id}>
        {/* card header */}

        <Box display="flex" alignItems="center" p={2}>
          <Box>
            <Avatar src={wick} />
          </Box>
          <Box className={classes.userName} ml={1}>
            {props.post.name}
          </Box>
          <Box className={classes.action} ml={1}>
            {props.post.action}
          </Box>
          <Box className={classes.optionBtn}>
            <IconButton>
              <MoreVert />
            </IconButton>
          </Box>
        </Box>

        <Box p={2}>{props.post.desc}</Box>

        {/* media */}
        <CardMedia
          image={props.post.image}
          className={classes.media}
          title="any ware"
        />

        {/* card action */}
        <CardActions disableSpacing>
          <IconButton
            onClick={() => (liked ? setLiked(false) : setLiked(true))}
          >
            {liked ? (
              <FavoriteIcon style={{ color: "#db2727" }} fontSize="medium" />
            ) : (
              <FavoriteBorderOutlinedIcon
                style={{ color: "#db2727" }}
                fontSize="medium"
              />
            )}
          </IconButton>
          <Box className={classes.likes} mr={2}>
            {liked ? `You and ${props.post.likes} others` : props.post.likes}
          </Box>
          <IconButton className={classes.comments}>
            <Box>
              {`2K `}
              <InsertCommentIcon />
            </Box>
          </IconButton>
          <Box className={classes.share} pr={2}>
            <IconButton>
              <ShareIcon />
            </IconButton>
          </Box>
        </CardActions>
      </Card>
    </Box>
  );
};
