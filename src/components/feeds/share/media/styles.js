import { makeStyles } from "@material-ui/core";

export const styles = () => {
  return makeStyles({
    mediaNames: {
      color: "grey",
      fontSize: "16px",
    },
    button: {
      backgroundColor: "green",
      color: "white",
      fontFamily: "arial",
      "&:hoer": {
        backgroundColor: "green",
      },
    },
  });
};
