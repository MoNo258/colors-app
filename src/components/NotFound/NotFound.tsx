import { Box, Typography } from '@mui/material';
import Button from "@mui/material/Button";
import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface NotFoundProps {
    wrongParam: string;
    onResetNotFound: () => void;
}

const NotFound: React.FC<NotFoundProps> = ({ wrongParam, onResetNotFound }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const resetParams = () => {
        onResetNotFound();        
        navigate(`${location.pathname}?page=1`);
    };

    return (
        <Box textAlign="center" mt={10}>
            <Typography variant="h4" gutterBottom>
                Parameters Not Found
            </Typography>
            <Typography variant="body1" gutterBottom>
                {wrongParam}
            </Typography>

            <Typography variant="body1" gutterBottom>
                Reset your params: <Button onClick={resetParams}>Reset</Button>
            </Typography>
        </Box>
    );
};

export default NotFound;
