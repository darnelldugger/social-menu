import { StyledButtonLogin } from "./button-login.styles";

const ButtonLogin = () => {
  return (
    <StyledButtonLogin variant="contained" size= 'small' sx={{  mr: 2, pr:4, pl:4 }}>
    Login
    </StyledButtonLogin>
  );
};

export default ButtonLogin;