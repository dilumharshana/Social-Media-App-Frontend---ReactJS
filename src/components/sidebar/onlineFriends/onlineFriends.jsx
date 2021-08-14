import { useEffect } from "react";
import { Grid, Box, Avatar } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import Badge from "@material-ui/core/Badge";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { getOnlineFriends } from "../../../actions/Action-getOnlineFriends";

import { styles, StyledBadge } from "./styles";

const OnlineFriends = (props) => {
  const useStyles = styles();
  const classes = useStyles();

  const onlineFriends = useSelector((store) => store.onlineFriends);
  const dispatch = useDispatch();

  const loadOnlineFriends = bindActionCreators(getOnlineFriends, dispatch);

  useEffect(() => {
    loadOnlineFriends();
  }, []);

  //   if (props.OnlineFriends.length === 0) return <p> ...</p>;

  return (
    <Grid>
      <ul className={classes.friendList}>
        {onlineFriends.map((friend) => (
          <li>
            <Box display="flex" alignItems="center">
              <Box p={1} pr={2}>
                <StyledBadge
                  overlap="circle"
                  variant="dot"
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                >
                  <Avatar src={friend.pic} className={classes.avatarSize} />
                </StyledBadge>
              </Box>
              <Box className={classes.names}>{friend.name}</Box>
            </Box>
          </li>
        ))}
      </ul>
    </Grid>
  );
};

export default OnlineFriends;
