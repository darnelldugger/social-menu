import {  Box, Toolbar } from "@mui/material";
import ButtonSecondary from "./buttons/button-secondary.component";
import AppBar from '@mui/material/AppBar';



const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1, mb: 5 }}>
      <AppBar position="static" sx={{ p: 1 }} style={{ backgroundColor: '#ffffff' }}>
        <Toolbar>
          <img
            src="https://res.cloudinary.com/nell1818/image/upload/v1678580542/MENUUI_1_fiabjv.png"
            height={30}
            alt="logo"
          />
          <ButtonSecondary />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
