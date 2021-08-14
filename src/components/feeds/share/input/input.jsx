import { Box, Avatar, InputBase } from "@material-ui/core";
import profile from "../../../../assests/profile/profile.png";

export const PostCreator = () => {
  return (
    <Box display="flex" alignItems="center" pl={2} pt={2}>
      <Box>
        <Avatar src={profile} />
      </Box>
      <Box ml={3}>
        <InputBase placeholder="Whats on your mind .." />
      </Box>
    </Box>
  );
};
