import { createTheme } from "@mui/material/styles";
//default breakpoints are
    // xs, extra-small: 0px
    // sm, small: 600px
    // md, medium: 900px
    // lg, large: 1200px
    // xl, extra-large: 1536px

export const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
          main: '#f2c6bc',
          light: '#fee8e0',
          dark: '#5d4438',
        },
        secondary: {
          main: '#bb82b6',
          light: '#e6cfe6',
          dark: '#8b5d8c',
        },
        divider: '#4e342e',
        success: {
          main: '#69f0ae',
        },
        info: {
          main: '#448aff',
        },
        background: {
          default: '#f2c6bc',
          paper: '#f2c6bc',
        },
        text: {
            primary: 'rgba(45,7,7,0.87)',
            secondary: '#d7ccc8',
            disabled: '#616161',
            hint: '#a1887f',
          },
      }
})