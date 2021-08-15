import { Grid, Box, TextField, Button } from "@material-ui/core";

export const Login = () => {
  return (
    <Grid container justifyContent="center">
      <Grid
        item
        style={{
          width: "100%",
          height: "300px",
          border: "1px solid black",
          borderRadius: "10px",
        }}
      >
        <Box>
          <TextField />
          <TextField />
          <Button>login</Button>
        </Box>
      </Grid>
    </Grid>
  );
};
