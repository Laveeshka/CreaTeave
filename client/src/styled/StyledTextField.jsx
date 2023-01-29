import  TextField  from "@mui/material/TextField";
import styled from "@emotion/styled";

export const StyledTextField = styled(TextField)(({ theme }) => ({
    '& .MuiInputBase-input': {
        color: theme.palette.secondary.main,
    },
    '& :focus': {
        color: theme.palette.secondary.light
    }
})
)
