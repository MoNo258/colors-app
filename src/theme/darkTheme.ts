import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#003A75',
        },
        secondary: {
            main: '#424242', // dark grey for main background
        },
        background: {
            default: '#424242', // dark grey for main background
            paper: '#616161', // lighter grey for paper elements
        },
        text: {
            primary: '#E0E0E0', // very light gray
            secondary: '#ffffff', // white
        },
    },
});

export default darkTheme;
