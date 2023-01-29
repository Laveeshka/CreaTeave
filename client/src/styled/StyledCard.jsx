import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export const StyledCard = styled(Card)(({ theme }) => ({
    border: `1px solid ${theme.palette.secondary.dark}`,
    backgroundColor: "transparent",
    borderBottomRightRadius: "1.5rem",
    borderTopLeftRadius: "1.5rem"
})
)