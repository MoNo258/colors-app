import { SxProps, Theme } from '@mui/system';

const baseColorLensIcon: SxProps<Theme> = {
    marginRight: 1,
};

export const colorLensIcon: SxProps<Theme> = {
    ...baseColorLensIcon,
    display: { xs: 'none', md: 'flex' }
};

export const colorLensIconMobile: SxProps<Theme> = {
    ...baseColorLensIcon,
    display: { xs: 'flex', md: 'none' }
};

const baseCompanyNameStyle: SxProps<Theme> = {
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: { xs: '.1rem', md: '.2rem' },
  color: 'inherit',
  textDecoration: 'none',
  flexGrow: 1,
};

export const companyNameStyle: SxProps<Theme> = {
  ...baseCompanyNameStyle,
  display: { xs: 'none', md: 'flex' },
};

export const companyNameStyleMobile: SxProps<Theme> = {
  ...baseCompanyNameStyle,
  display: { xs: 'flex', md: 'none' },
};
