import { StyledButtonPrimary } from "./button-primary.styles";

const ButtonPrimary = () => {
  return (
    <StyledButtonPrimary variant="contained" sx={{ ml: { xs: 8, sm: 0, md: 0 }, }}>
      Request demo access
    </StyledButtonPrimary>
  );
};

export default ButtonPrimary;
