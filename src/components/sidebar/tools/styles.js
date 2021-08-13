import { makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

export const styles = () =>
  makeStyles({
    quickItems: {
      "&:hover": {
        cursor: "pointer",
        color: "#c6cacc",
      },
    },
    listDecoration: {
      listStyle: "none",
    },
    hr: {
      width: "260px",
    },
    activeFriends: {
      color: "grey",
      fontSize: "14px",
    },
  });
