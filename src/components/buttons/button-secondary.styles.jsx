import { Button } from "@mui/material";
import styled from "@emotion/styled";

export const StyledButtonSecondary = styled(Button)({
  borderRadius: "20px",
  padding: "12px 24px",
  borderColor: '#5e2791',
  fontWeight: '300',
  
  "&:hover": {
    color: "white",
    backgroundColor: "#172339",
  },
});
