import { SxProps, Theme } from '@mui/system';

export const tableRowStyle: SxProps<Theme> = {
    ":hover": {
        cursor: 'pointer',
    }
};

export const textFieldStyle: SxProps<Theme> = {
    width: '90%',
    margin: '1rem',
};

export const paginationStyle: SxProps<Theme> = {
    margin: '16px',
    display: 'flex', 
    justifyContent: 'center',
};