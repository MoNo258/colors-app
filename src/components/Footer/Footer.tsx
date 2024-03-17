import ColorLensIcon from '@mui/icons-material/ColorLens';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { colorLensIconStyles, companyNameStyles, footerStyles } from './Footer.styles';

interface FooterProps {
    projectName: string;
}

const Footer: React.FC<FooterProps> = ({ projectName }) => {
    const theme = useTheme();
    return (
        <Box sx={footerStyles} display='flex' alignItems='center' >
            <ColorLensIcon
                sx={colorLensIconStyles} 
                color='primary'
            />
            <Typography
                variant="h3"
                noWrap
                component={NavLink}
                to="/"
                sx={companyNameStyles}
                color={theme.palette.primary.main}
            >
                {projectName}
            </Typography>
        </Box>
    );
};

export default Footer;
