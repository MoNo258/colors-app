import { SxProps, Theme } from '@mui/system';

export const boxModalStyle: SxProps<Theme> = {
    position: 'absolute', 
    top: { xs: '0', md: '50%' },
    right: { xs: '0', md: '50%' },
    transform: { xs: '0', md: 'translate(50%, -50%)' },
    width: { xs: '50%', md: '25rem' },
    height: { xs: '100%', md: 'auto' },
    bgcolor: 'background.paper', 
    boxShadow: 24, p: 4
};