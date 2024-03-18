import { Box, Typography } from '@mui/material';
import { ButtonProps } from "@mui/material/Button";
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
    const navigate = useNavigate();
    const visitHomepage = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        data: ButtonProps
    ) => {
        navigate(`/`);
    };
    return (
        <Box textAlign="center" mt={10}>
            <Typography variant="h4" gutterBottom>
                Page Not Found
            </Typography>
            <Typography variant="body1" gutterBottom>
                The page you are looking for does not exist.
            </Typography>
            <Typography variant="body1" gutterBottom>
                Go back to <Link to="/">Home</Link>.
            </Typography>
        </Box>
  );
};

export default NotFound;
