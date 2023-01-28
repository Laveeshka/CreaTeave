import styled from "@emotion/styled";
import Button from "@mui/material/Button";

export const StyledButton = styled(Button)(({ theme }) => ({
    color: theme.palette.secondary.dark,
    backgroundColor: theme.palette.primary,
    borderRadius: "2rem",
    padding: "0.75rem 2rem",
    width: "max-content",
  }));