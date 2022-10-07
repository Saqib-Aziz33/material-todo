// import { NavLink } from "react-router-dom";
import {Box, Toolbar, AppBar, Typography, IconButton, Button} from "@mui/material"
import {FaBars} from "react-icons/fa"

function Header() {
  return (
    <Box>
      <AppBar color='secondary' position="static" sx={{mb: '2rem'}}>
        <Toolbar>
          <IconButton size='large' edge='start'>
            <FaBars color="#fff" />
          </IconButton>
          <Typography fontWeight={600}>Todos</Typography>
          <Button variant="outlined" sx={{color: 'white', borderColor: 'white', ml: 'auto'}}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Header;
