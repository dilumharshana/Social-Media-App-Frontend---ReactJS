import { makeStyles } from "@material-ui/core";

export const styles = () => {
  return makeStyles({
    mediaNames: {
      color: "grey",
      fontSize: "16px",
    },
    mediaBox: {
      cursor: "pointer",
    },
    button: {
      backgroundColor: "#32c215",
      marginLeft: "auto",
      color: "white",
      fontFamily: "arial",
      "&:hover": {
        backgroundColor: "#1ea603",
      },
    },
  });
};
