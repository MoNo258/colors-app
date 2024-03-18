import { Box, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGlobalDispatch, useGlobalState } from '../../helpers';
import { ColorDetailsAction } from '../../redux/ColorDetails/ColorDetails.slice';
import { ColorsDataAction } from '../../redux/ColorsData/ColorsData.slice';
import ColorDetailsModal from '../ColorDetailsModal/ColorDetailsModal';
import Loader from '../Loader/Loader';
import { paginationStyle, tableRowStyle, textFieldStyle } from './ColorsTable.styles';


interface ColorsTableProps {
  colors: ColorDetails[];
  isLoading: boolean;
}

const ColorsTable: React.FC<ColorsTableProps> = ({ colors, isLoading }) => {
    const dispatch = useGlobalDispatch();

    
    const [selectedColor, setSelectedColor] = useState<ColorDetails | null>(null);
    const [filterText, setFilterText] = useState<number>(0);
    const [page, setPage] = useState<number>(1);
    const isLoadingColors = useGlobalState((state) => state.colorsData.loading);
    const totalItems = useGlobalState((state) => state.colorsData.colorsData.total);
    const colorsData = useGlobalState((state) => state.colorsData.colorsData.data);
    const totalPagesApi = useGlobalState((state) => state.colorsData.colorsData.total_pages);
    const itemsPerPage = 9;
    const isLoadingColorDetails = useGlobalState((state) => state.colorDetails.loading);
    const filteredColor = useGlobalState((state) => state.colorDetails.data);

    const [clickedId, setClickedId] = useState<number | null>(null);


    React.useEffect(() => {
        dispatch(ColorsDataAction.fetchColorsData({page, itemsPerPage, filterText} as FetchParams));

        // setTotalPages(Math.ceil(totalItems / itemsPerPage));
    }, [page, itemsPerPage]);

    React.useEffect(() => {
        dispatch(ColorDetailsAction.fetchColorDetails((filterText)));
    }, [filterText]);


        console.log('filterText',filterText);
        console.log('page',page);
        // console.log('totalPages',totalPages);
        // console.log('totalPagesApi',totalPagesApi);
        console.log('totalItems',totalItems);
        // console.log('itemsPerPageApi',itemsPerPageApi);
        // console.log('products',products);
        console.log('colorsData',colorsData);
        console.log('clickedId',clickedId);



        console.log('isLoadingColorDetails',isLoadingColorDetails);
        console.log('filterText',filterText);
        console.log('isLoadingColorDetails',isLoadingColorDetails);
        console.log('filteredColor',filteredColor);
        console.log('filteredColor.color',filteredColor && filteredColor.data.color);
        console.log('filteredColor.id',filteredColor && filteredColor.data.id);
        console.log('filteredColor.name',filteredColor && filteredColor.data.name);


    const location = useLocation();
    // const history = useHistory();
    const navigate = useNavigate();
    // console.log('location',location);
    // console.log('location.search',location.search);
    // console.log('navigate',navigate);
    // console.log('filterText',filterText);
    // console.log('page',page);
    // console.log('clickedId',clickedId);
    

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
        setFilterText(Number(filteredValue));
        setPage(1);
    };

    const handleChangePage = (event: React.ChangeEvent<unknown>, newPage: number) => {
        setPage(newPage);
    };

    return (
        <>
            {isLoadingColors ? <Loader /> : colorsData && !filteredColor && (
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
                                {colorsData.map((color) => (
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
                        count={totalPagesApi}
                        page={page}
                        onChange={handleChangePage}
                        color="primary"
                        variant="outlined"
                        shape="rounded"
                        sx={paginationStyle}
                    />
                </Box>
            )}
            {isLoadingColorDetails ? <Loader/> : filteredColor && (
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
                                <TableRow 
                                    key={filteredColor.data.id}
                                    onClick={() => handleRowClick(filteredColor.data)} 
                                    style={{ backgroundColor: filteredColor.data.color }}
                                    sx={tableRowStyle}
                                >
                                    <TableCell>{filteredColor.data.id}</TableCell>
                                    <TableCell>{filteredColor.data.name}</TableCell>
                                    <TableCell>{filteredColor.data.year}</TableCell>
                                </TableRow>
                            </TableBody>     
                        </Table>
                    </TableContainer>
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
