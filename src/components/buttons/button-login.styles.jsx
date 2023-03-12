import { Button } from "@mui/material";
import styled from "@emotion/styled";

export const StyledButtonLogin = styled(Button)({
  borderRadius: "30px",
  backgroundImage: "none",
  transition: "all .3s",
  backgroundColor: '#5e2791',
  fontWeight: '700',
  borderWidth: 2,
  color: 'white',


  "&:hover": {
    backgroundColor: 'white',
    transition: "all .3s",
    borderColor: '#5e2791',
    color: '#5e2791',
    borderWidth: 2,
    
  },
});
