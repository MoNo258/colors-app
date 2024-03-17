import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#dab600', // honey color
        },
        secondary: {
            main: '#f0f0f0', // lighter grey for main background
        },
        background: {
            default: '#f0f0f0', // lighter grey for main background
            paper: '#e0e0e0', // darker grey for paper elements
        },
        text: {
            primary: '#424242', // dark gray
            secondary: '#000000', // black
        },
    },
});

export default lightTheme;
