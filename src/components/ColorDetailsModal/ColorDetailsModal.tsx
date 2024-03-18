import { Box, Button, Modal, Typography } from '@mui/material';
import React from 'react';
import { boxModalStyle } from './ColorDetailsModal.styles';

interface ColorDetailsModalProps {
    open: boolean;
    onClose: () => void;
    color: ColorDetails | null;
}

const ColorDetailsModal: React.FC<ColorDetailsModalProps> = ({ open, onClose, color }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={boxModalStyle}>
                {color && (
                    <>
                        <Typography variant="h6" gutterBottom>
                            Product Details
                        </Typography>
                        <Typography variant="body1">
                            ID: {color.id}
                        </Typography>
                        <Typography variant="body1">
                            Name: {color.name}
                        </Typography>
                        <Typography variant="body1">
                            Year: {color.year}
                        </Typography>
                        <Typography variant="body1">
                            Color: {color.color}
                        </Typography>
                        <Typography variant="body1">
                            Pantone value: {color.pantone_value}
                        </Typography>
                        <Box display='flex' justifyContent='end'>
                            <Button onClick={onClose}>Close</Button>
                        </Box>
                    </>
                )}
            </Box>
        </Modal>
    );
};

export default ColorDetailsModal;
