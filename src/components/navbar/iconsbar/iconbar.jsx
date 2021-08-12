import { Box, Grid } from "@material-ui/core";
import { Chat, Person } from "@material-ui/icons";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Badge } from "@material-ui/core";

export const IconBar = () => {
  return (
    <Grid item xs={11} sm={11} md={6} lg={2}>
      <Box display="flex" flexDirection="row-reverse">
        <Box ml={4}>
          <NotificationsIcon />
        </Box>
        <Box ml={4}>
          <Badge badgeContent={4} color="secondary">
            <Chat />
          </Badge>
        </Box>
        <Box ml={4}>
          <Person />
        </Box>
      </Box>
    </Grid>
  );
};
