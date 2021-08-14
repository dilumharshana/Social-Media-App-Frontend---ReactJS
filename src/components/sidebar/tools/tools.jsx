import { useState } from "react";
//styling
import { Box, Grid, Button, Hidden } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.css";
import { styles } from "./styles";
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
  const defaultHeight = 300;
  const [heightis, setHeight] = useState(defaultHeight);

  // show more button height increaser
  const heightController = () =>
    heightis === defaultHeight ? setHeight(500) : setHeight(defaultHeight);

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
      <div style={{ height: heightis, overflow: "Hidden" }}>
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
        </Grid>
      </div>

      {/* //show more button */}

      <Box display="flex" ml={10} mt={2} mb={3}>
        <Button
          variant="content"
          onClick={() => heightController()}
          className={classes.showMoreBtn}
        >
          {heightis == defaultHeight ? "Show more ..." : "Show less ..."}
        </Button>
      </Box>
    </>
  );
};
