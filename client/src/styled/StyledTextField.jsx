import  TextField  from "@mui/material/TextField";
import styled from "@emotion/styled";

export const StyledTextField = styled(TextField)(({ theme }) => ({
    '& .Mui-focused': {
        color: theme.palette.secondary.light
    }
})
)
