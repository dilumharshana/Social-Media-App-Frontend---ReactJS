import { Grid, Box, TextField, makeStyles, Button } from "@material-ui/core";
import { InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

export const Searchbar = (props) => {
  const useStyles = makeStyles((theame) => ({
    input: {
      color: "white",
      border: "1px solid #fff",
      borderRadius: "30px",
    },
  }));

  const classess = useStyles();

  return (
    <Grid
      item
      xs={12}
      xs={12}
      md={3}
      lg={4}
      xl={5}
      display="flex"
      justifyContent="center"
    >
      <div>
        <TextField
          size="small"
          variant="outlined"
          placeholder="Search for Friends..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="white" />
              </InputAdornment>
            ),
            className: classess.input,
          }}
        />
      </div>
    </Grid>
  );
};
