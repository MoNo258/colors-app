import ColorLensIcon from '@mui/icons-material/ColorLens';
import AppBar, { AppBarProps } from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Switch from '@mui/material/Switch';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../App';
import { colorLensIcon, colorLensIconMobile, companyNameStyle, companyNameStyleMobile } from './NavBar.styles';

interface NavBarProps extends AppBarProps {
    projectName: string;
}

const NavBar: React.FC<NavBarProps> = ({
    projectName
}) => {

    const { darkMode, toggleDarkMode } = React.useContext(ThemeContext);

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* DESKTOP: */}
                    <ColorLensIcon
                        fontSize="large"
                        sx={colorLensIcon}
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component={NavLink}
                        to="/"
                        sx={companyNameStyle}
                    >
                        {projectName}
                    </Typography>

                    { /* MOBILE: */}
                    <ColorLensIcon
                        fontSize="large"
                        sx={colorLensIconMobile}
                    />
                    <Typography
                        variant="h5"
                        noWrap
                        component={NavLink}
                        to="/"
                        sx={companyNameStyleMobile}
                    >
                        {projectName}
                    </Typography>

                    {/* DESKTOP & MOBILE */}
                    <Box>
                        <Tooltip title="Toggle dark mode">
                            <Switch
                                checked={darkMode}
                                onChange={toggleDarkMode}
                                data-testid="toggle-dark-mode"
                            />
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBar;
