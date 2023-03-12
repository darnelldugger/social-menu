import { Button } from "@mui/material";
import styled from "@emotion/styled";

export const StyledButtonLogin = styled(Button)({
  borderRadius: "20px",
  backgroundImage: "none",
  transition: "all .3s",
  backgroundColor: '#5e2791',
  fontWeight: '700',


  "&:hover": {
    backgroundImage:
      "linear-gradient(135deg, #A060FF 0%, #CB30E3 49.21%, #7cc1ec 100%)",
    transition: "all .3s",
  },
});
