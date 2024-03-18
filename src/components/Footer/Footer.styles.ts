import { SxProps, Theme } from '@mui/system';

export const footerStyles: SxProps<Theme> = {
  backgroundColor: theme => theme.palette.background.paper,
  color: theme => theme.palette.text.secondary,
  padding: theme => theme.spacing(2),
  paddingTop: theme => theme.spacing(4),
};

export const colorLensIconStyles: SxProps<Theme> = {
  mr: 1,
  fontSize: { xs: '2rem', md: '3rem' }
};

export const companyNameStyles: SxProps<Theme> = {
  fontFamily: 'monospace',
  fontWeight: 700,
  fontSize: { xs: '2rem', md: '3rem' },
  letterSpacing: { xs: '.1rem', md: '.2rem' },
};