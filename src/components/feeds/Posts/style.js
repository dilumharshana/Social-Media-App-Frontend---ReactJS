import { makeStyles } from "@material-ui/core";

export const styles = () =>
  makeStyles({
    root: {
      width: "460px",
    },
    media: {
      height: 0,
      paddingTop: "66%",
    },
    likes: {
      fontSize: "12px",
    },
    comments: {
      fontSize: "15px",
    },
    share: {
      color: "grey",
      marginLeft: "auto",
    },
    userName: {
      fontFamily: "arial",
      fontWeight: "bold",
    },
    optionBtn: {
      marginLeft: "auto",
    },
  });
