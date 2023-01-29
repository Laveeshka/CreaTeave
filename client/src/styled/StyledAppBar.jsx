import styled from "@emotion/styled";
import AppBar from "@mui/material/AppBar";

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
    color: theme.palette.secondary.dark,
    borderBottomRightRadius: "2rem",
    position: "relative",
    '&::before': {
      content: '""',
      position: "absolute",
      backgroundColor: "transparent",
      top: "100%",
      left: 0,
      height: "4rem",
      width: "2rem",
      borderTopLeftRadius: "2rem",
      boxShadow: `0 -2rem 0 0 ${theme.palette.primary.main}`,
    }
  })
  );