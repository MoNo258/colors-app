import { Paper, Table as MUITable, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import { tableRowStyle } from './Table.styles';


interface TableProps {
  data: ColorDetails[] | ColorDetails;
  handleRowClick: (color: ColorDetails) => void;
}

const Table: React.FC<TableProps> = ({ data, handleRowClick }) => {
   

    return (
        <TableContainer component={Paper}>
            <MUITable aria-label="product table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Year</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Array.isArray(data) ? (
                        data.map((color) => (
                            <TableRow 
                                key={color.id} 
                                onClick={() => handleRowClick(color)} 
                                style={{ backgroundColor: color.color }}
                                sx={tableRowStyle}
                            >
                                <TableCell>{color.id}</TableCell>
                                <TableCell>{color.name}</TableCell>
                                <TableCell>{color.year}</TableCell>
                            </TableRow>
                    ))
                    ) : (data &&
                            <TableRow 
                                key={data.id}
                                onClick={() => handleRowClick(data)} 
                                style={{ backgroundColor: data.color }}
                                sx={tableRowStyle}
                            >
                                <TableCell>{data.id}</TableCell>
                                <TableCell>{data.name}</TableCell>
                                <TableCell>{data.year}</TableCell>
                            </TableRow>                            
                    )}
                </TableBody>
            </MUITable>
        </TableContainer>
    );
};

export default Table;
