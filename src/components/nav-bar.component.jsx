import { Typography, Box, Toolbar } from "@mui/material";
import ButtonSecondary from "./buttons/button-secondary.component";
import AppBar from '@mui/material/AppBar';



const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1, mb: 5 }}>
      <AppBar position="static" sx={{ p: 1 }} style={{ backgroundColor: '#ffffff' }}>
        <Toolbar>
          <Typography variant="h4" fontSize='30px' color='text.primary' component="div" sx={{ flexGrow: 1 }}>
            <img
              src="https://res.cloudinary.com/nell1818/image/upload/v1678580542/MENUUI_1_fiabjv.png"
              height={45}
              alt="logo"
            />
          </Typography>
          <ButtonSecondary />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
