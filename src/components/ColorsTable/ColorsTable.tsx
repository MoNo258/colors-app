import { Box, Pagination, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGlobalDispatch, useGlobalState } from '../../helpers';
import { ColorDetailsAction } from '../../redux/ColorDetails/ColorDetails.slice';
import { ColorsDataAction } from '../../redux/ColorsData/ColorsData.slice';
import ColorDetailsModal from '../ColorDetailsModal/ColorDetailsModal';
import Loader from '../Loader/Loader';
import Table from '../Table/Table';
import { paginationStyle, textFieldStyle } from './ColorsTable.styles';


interface ColorsTableProps {
  colors: ColorDetails[];
  isLoading: boolean;
}

const ColorsTable: React.FC<ColorsTableProps> = ({ colors, isLoading }) => {
    const dispatch = useGlobalDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const [selectedColor, setSelectedColor] = useState<ColorDetails | null>(null);
    const [filterText, setFilterText] = useState<number>(0);
    const [page, setPage] = useState<number>(1);
    const isLoadingColors = useGlobalState((state) => state.colorsData.loading);
    const colorsData = useGlobalState((state) => state.colorsData.colorsData.data);
    const totalPagesApi = useGlobalState((state) => state.colorsData.colorsData.total_pages);
    const itemsPerPage = 9;
    const isLoadingColorDetails = useGlobalState((state) => state.colorDetails.loading);
    const filteredColor = useGlobalState((state) => state.colorDetails.data);




    const errorColors = useGlobalState((state) => state.colorsData.error);
    const errorColorDetails = useGlobalState((state) => state.colorDetails.error);

    const [activeItem, setActiveItem] = React.useState<string | undefined>(
        "devices"
    );

            console.log('II isLoadingColors',isLoadingColors);
            console.log('II errorColors',errorColors);
            console.log('VV isLoadingColorDetails',isLoadingColorDetails);
            console.log('VV errorColorDetails',errorColorDetails);

    const [clickedId, setClickedId] = useState<number | null>(null);


    React.useEffect(() => {
        dispatch(ColorsDataAction.fetchColorsData({page, itemsPerPage, filterText} as FetchParams));
    }, [page, itemsPerPage]);

    React.useEffect(() => {
        dispatch(ColorDetailsAction.fetchColorDetails((filterText)));
    }, [filterText]);






    React.useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const pageParam = queryParams.get('page');
        const filterParam = queryParams.get('id');
    
        if (pageParam) {
            setPage(Number(pageParam));
        }

        if (filterParam) {
            setFilterText(Number(filterParam));
        }
    }, [location.search]);
    

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

        const queryParams = new URLSearchParams(location.search);
        queryParams.set('id', filteredValue);
        navigate(`?${queryParams.toString()}`);
    };

    const handleChangePage = (event: React.ChangeEvent<unknown>, newPage: number) => {
        setPage(newPage);

        const queryParams = new URLSearchParams(location.search);
        queryParams.set('page', String(newPage));
        navigate(`?${queryParams.toString()}`);
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
                        autoFocus
                    />
                    <Table
                        data={colorsData}
                        handleRowClick={handleRowClick}
                    />
                   
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
                    <Table
                        data={filteredColor && filteredColor['data']}
                        handleRowClick={handleRowClick}
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
