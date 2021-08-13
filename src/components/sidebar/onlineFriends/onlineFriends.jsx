import { useEffect } from "react";
import { Grid, Box, Avatar } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { getOnlineFriends } from "../../../actions/Action-getOnlineFriends";

import { styles } from "./styles";

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
            <Box display="flex" alignItems="center" mb={2}>
              <Box p={1}>
                <Avatar src={friend.pic} />
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
