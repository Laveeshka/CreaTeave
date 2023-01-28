import styled from "@emotion/styled";
import { Box } from "@mui/material";
import waves from "../assets/wavesOpacity.svg";

export const StyledAppBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main, 
    height: "100vh", 
    overflow:"scroll",
    '&::after': {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "15vh",
      overflow: "hidden",
      transform: "rotate(180deg)",
      content: '""',
      backgroundImage: `url(${waves})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom",
      backgroundSize: "cover",
      
    }
  })
  )