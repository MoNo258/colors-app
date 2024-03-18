import { Box, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ColorDetailsModal from '../ColorDetailsModal/ColorDetailsModal';
import Loader from '../Loader/Loader';
import { paginationStyle, tableRowStyle, textFieldStyle } from './ColorsTable.styles';


interface ColorsTableProps {
  colors: ColorDetails[];
  isLoading: boolean;
}

const ColorsTable: React.FC<ColorsTableProps> = ({ colors, isLoading }) => {
    const [selectedColor, setSelectedColor] = useState<ColorDetails | null>(null);
    const [filterText, setFilterText] = useState<string>('');
    const [page, setPage] = useState<number>(1);
    const [clickedId, setClickedId] = useState<number | null>(null);
    const itemsPerPage = 5;

    const location = useLocation();
    // const history = useHistory();
    const navigate = useNavigate();
    console.log('location',location);
    console.log('location.search',location.search);
    console.log('navigate',navigate);
    console.log('filterText',filterText);
    console.log('page',page);
    console.log('clickedId',clickedId);
    

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const pageParam = searchParams.get('page');
        const idParam = clickedId?.toString();

        setPage(pageParam ? parseInt(pageParam) : 1);
        setFilterText(idParam || '');

        console.log('1 searchParams',searchParams);
        console.log('1 pageParam',pageParam);
        console.log('1 idParam',idParam);
        console.log('1 location.search',location.search);
        

    }, [location.search]);

    // useEffect(() => {
    //     const searchParams = new URLSearchParams();
    //     if (page !== 1) {
    //     searchParams.append('page', page.toString());
    //     }
    //     if (filterText !== '') {
    //     searchParams.append('id', filterText);
    //     }
    //     // history.push({ search: searchParams.toString() });
        
    //     console.log('2 searchParams',searchParams);
    //     console.log('2 page',page);
    //     console.log('2 filterText',filterText);

    //     navigate(searchParams.toString(), { replace: true })
    //     // navigate({
    //     //     // pathname: "listing",
    //     //     search: createSearchParams({
    //     //         page: page.toString(),
    //     //         id: '3'
    //     //     }).toString()
    //     // });

    // }, [page, filterText]);

    const handleRowClick = (color: ColorDetails) => {
        setSelectedColor(color);
        setClickedId(color.id)
    };

    const handleCloseModal = () => {
        setSelectedColor(null);
    };

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // Allow only numbers
        const filteredValue = event.target.value.replace(/[^\d]/g, '');
        setFilterText(filteredValue);
    };

    const handleChangePage = (event: React.ChangeEvent<unknown>, newPage: number) => {
        setPage(newPage);
    };

    const filteredColors = colors && colors.filter(color => color.id.toString().includes(filterText));

    const startIndex = (page - 1) * itemsPerPage;
    const paginatedColors = filteredColors && filteredColors.slice(startIndex, startIndex + itemsPerPage);


    return (
        <>
            {isLoading ? <Loader /> : (
                <Box 
                    display={'flex'} 
                    flexDirection='column' 
                    padding={1} 
                    justifyContent='center' 
                    alignItems='center'
                >
                    <TextField
                        label="Filter by ID"
                        value={filterText}
                        onChange={handleFilterChange}
                        inputProps={{ inputMode: 'numeric' }}
                        sx={textFieldStyle}
                    />
                
                    <TableContainer component={Paper}>
                        <Table aria-label="product table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Year</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {paginatedColors.map((color) => (
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
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Pagination
                        count={Math.ceil(filteredColors.length / itemsPerPage)}
                        page={page}
                        onChange={handleChangePage}
                        color="primary"
                        variant="outlined"
                        shape="rounded"
                        sx={paginationStyle}
                    />
                </Box>
            )}
            <ColorDetailsModal 
                open={selectedColor !== null} 
                onClose={handleCloseModal} 
                color={selectedColor} 
            />
        </>
    );
};

export default ColorsTable;
