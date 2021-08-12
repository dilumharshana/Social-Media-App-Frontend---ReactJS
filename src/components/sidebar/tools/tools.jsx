//styling
import { Box, Grid, Button } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.css";
import { styles } from "../styles";
import {
  AccountBox,
  AttachMoney,
  Attachment,
  Beenhere,
  Cake,
  Cast,
  Computer,
} from "@material-ui/icons";

export const Tools = (props) => {
  const icons = [
    { component: <AccountBox />, decs: "AccountBox" },
    { component: <AttachMoney />, decs: "AttachMoney" },
    { component: <Attachment />, decs: "Attachment" },
    { component: <Beenhere />, decs: "Beenhere" },
    { component: <Cake />, decs: "Cake" },
    { component: <Cast />, decs: "Cast" },
    { component: <AttachMoney />, decs: "AttachMoney" },
    { component: <Computer />, decs: "Computer" },
    { component: <Beenhere />, decs: "Beenhere" },
    { component: <Attachment />, decs: "Attachment" },
  ];

  const useStyles = styles();
  const classes = useStyles();

  return (
    <>
      <Grid>
        <ul className={classes.listDecoration}>
          {icons.map((icon) => (
            <li key={new Date()}>
              <Box display="flex" alignItems="center" m={1}>
                <Box p={1}>{icon.component}</Box>
                <Box className={classes.quickItems}>
                  <b>{icon.decs}</b>
                </Box>
              </Box>
            </li>
          ))}
        </ul>
        <Box justifyContent="center">
          <Button color="secondary">Show more</Button>
        </Box>
      </Grid>
      <hr />
    </>
  );
};
