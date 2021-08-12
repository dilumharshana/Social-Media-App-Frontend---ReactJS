import { useEffect } from "react";
import { getOnlineFriends } from "../../../actions/online friends/Action-loadOnlineFriends";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Grid, Box, Avatar } from "@material-ui/core";

const OnlineFriends = (props) => {
  useEffect(() => {
    console.log(props);
    props.getOnlineFriends();
  }, []);

  //   if (props.OnlineFriends.length === 0) return <p> ...</p>;

  return (
    <>
      <Grid>
        <ul>
          {/* {props &&
            props.friends.map((friend) => (
              <li>
                <Box display="flex">
                  <Box>
                    <Avatar src={friend.pic} />
                  </Box>
                  <Box>
                    <p>{friend.name}</p>
                  </Box>
                </Box>
              </li>
            ))} */}
        </ul>
      </Grid>
    </>
  );
};

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ getOnlineFriends: getOnlineFriends }, dispatch);
}

function mapStateToProps(state) {
  return {
    friends: state.onlineFriendsList,
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(OnlineFriends);
