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

      <Box display="flex" m={3}>
        <Button variant="filled" onClick={() => heightController()}>
          {" "}
          {heightis == defaultHeight ? "Show more ..." : "Show less ..."}
        </Button>
      </Box>

      {/* hr line*/}
      <Box pl={5} mb={2}>
        <hr className={classes.hr} />
        <Box className={classes.activeFriends}>Active friends</Box>
      </Box>
    </>
  );
};
