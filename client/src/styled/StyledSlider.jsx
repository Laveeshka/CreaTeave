import styled from "@emotion/styled";
import Slider from "@mui/material/Slider";

export const StyledSlider = styled(Slider)(({ theme }) => ({
    color: theme.palette.secondary.light,

    '& .MuiSlider-markLabel': {
        color: theme.palette.primary.main,
        '&Active': {
            color: theme.palette.secondary.light
        }
      }
})
);