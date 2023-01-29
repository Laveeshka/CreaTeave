import styled from "@emotion/styled";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

export const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
    color: theme.palette.secondary.main,
})
);

export const StyledSelect = styled(Select)(({ theme }) => ({
    color: theme.palette.secondary.light,
    '&:active': {
        border: `1px solid ${theme.palette.secondary.light}`
    },
    "& .MuiList": {
        backgroundColor: theme.palette.secondary.dark,
    }
})
)

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
        color: theme.palette.secondary.light,
        backgroundColor: theme.palette.secondary.dark,
        "&:hover": {
            backgroundColor: theme.palette.secondary.main,
        },
        "&:active": {
            backgroundColor: theme.palette.secondary.dark,
        },
        "&.Mui-selected": {
            backgroundColor: theme.palette.secondary.main,
            "&.Mui-focusVisible": { background: theme.palette.primary.main }
          }

   
})
);

