import { Card, CardMedia, makeStyles } from "@material-ui/core";
import kfc from "../../../assests/ads/kfc.jpg";

//styles
import { styles } from "./styles";

export const Adds = (props) => {
  const useStyles = makeStyles({
    root: {
      width: "330px",
    },
    media: {
      paddingTop: "80%",
    },
  });
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardMedia image={kfc} className={classes.media} />
      </Card>
    </>
  );
};
