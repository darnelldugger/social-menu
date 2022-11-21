import { Typography, Box, Toolbar } from "@mui/material";
import ButtonSecondary from "./buttons/button-secondary.component";
import AppBar from '@mui/material/AppBar';



const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1, mb: 5 }}>
    <AppBar position="static" sx={{}} style={{ backgroundColor: '#ffffff' }}>
      <Toolbar>
        <Typography variant="h3" fontSize='30px' color='text.primary' component="div" sx={{ flexGrow: 1 }}>
          social menu
        </Typography>
        <ButtonSecondary />
      </Toolbar>
    </AppBar>
  </Box>
  );
};

export default NavBar;
