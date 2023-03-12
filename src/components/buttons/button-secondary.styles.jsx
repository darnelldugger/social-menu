import { Button } from "@mui/material";
import styled from "@emotion/styled";

export const StyledButtonSecondary = styled(Button)({
  borderRadius: "30px",
  padding: "12px 24px",
  borderColor: '#38b6ff',
  fontWeight: '300',

  "&:hover": {
    color: "white",
    backgroundColor: "#38b6ff",
    borderColor: '#38b6ff',
  },
});
