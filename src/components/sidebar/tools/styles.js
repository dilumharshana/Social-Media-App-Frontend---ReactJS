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
    hr: {
      width: "260px",
    },
    showMoreBtn: {
      backgroundColor: "#edeff2",
      opacity: "0.8",
      borderBottom: "1px solid #bebfc2",
    },
  });
