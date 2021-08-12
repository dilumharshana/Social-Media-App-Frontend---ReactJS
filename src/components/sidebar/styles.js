import { makeStyles } from "@material-ui/core";

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
  });
