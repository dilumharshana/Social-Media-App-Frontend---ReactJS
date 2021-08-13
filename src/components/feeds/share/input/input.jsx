import { Box, Avatar, InputBase } from "@material-ui/core";
import profile from "../../../../assests/profile/profile.png";

export const Input = () => {
  return (
    <Box display="flex" p={2} alignItems="center">
      <Box>
        <Avatar src={profile} />
      </Box>
      <Box ml={2}>
        <InputBase placeholder="whats on your mind .." />
      </Box>
    </Box>
  );
};
