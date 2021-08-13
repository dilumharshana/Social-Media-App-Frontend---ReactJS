import { AppBar, Grid, Box } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";

//components
import { BrandName } from "./brandname/brandname";
import { Searchbar } from "./search/search";
import { User } from "./user/user";
import { TopLinks } from "./links/links";
import { IconBar } from "./iconsbar/iconbar";

const NavBar = (props) => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Grid container alignItems="center">
            <BrandName />
            <Searchbar />
            <TopLinks />
            <IconBar />
            <User />
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
