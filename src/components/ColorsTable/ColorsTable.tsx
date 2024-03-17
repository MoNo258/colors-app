import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import Loader from '../Loader/Loader';

interface ColorsTableProps {
  colors: ColorDetails[];
  isLoading: boolean;
}

const ColorsTable: React.FC<ColorsTableProps> = ({ colors, isLoading }) => {
    return (
        <>
            {isLoading ? <Loader /> : (
                <TableContainer component={Paper}>
                    <Table aria-label="product table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Year</TableCell>
                                <TableCell>Color</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {colors.map((color) => (
                                <TableRow key={color.id}>
                                    <TableCell>{color.id}</TableCell>
                                    <TableCell>{color.name}</TableCell>
                                    <TableCell>{color.year}</TableCell>
                                    <TableCell style={{ backgroundColor: color.color }}>{color.color}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </>
    );
};

export default ColorsTable;
