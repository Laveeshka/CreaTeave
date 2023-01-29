import styled from "@emotion/styled";
import Button from "@mui/material/Button";

export const StyledButton = styled(Button)(({ theme }) => ({
    color: theme.palette.secondary.dark,
    backgroundColor: theme.palette.primary,
    borderRadius: "2rem",
    padding: "0.75rem 2rem",
    width: "max-content",
  }));

  export const StyledAppBarButton = styled(Button)(({ theme }) => ({
    color: theme.palette.secondary.dark,
    backgroundColor: theme.palette.primary,
    borderRadius: "2rem",
    padding: "0.5rem 1rem",
    width: "max-content",
  }));