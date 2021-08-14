import { Badge, makeStyles } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

export const styles = () =>
  makeStyles((theam) => ({
    names: {
      fontFamily: "arial",
      margin: "10px",
      fontSize: "14px",
    },
    friendList: {
      listStyle: "none",
    },
    avatarSize: {
      width: theam.spacing(4),
      height: theam.spacing(4),
    },
  }));

//online badge
export const StyledBadge = withStyles(() => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px white`,
    "&::after": {
      // position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      borderRadius: "50%",
      animation: "$onlineBadge 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes onlineBadge": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);
