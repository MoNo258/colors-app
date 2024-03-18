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
    const [filterText, setFilterText] = useState<string>('');
    const [page, setPage] = useState<number>(1);
    const isLoadingColors = useGlobalState((state) => state.colorsData.loading);
    const colorsData = useGlobalState((state) => state.colorsData.colorsData.data);
    const totalPagesApi = useGlobalState((state) => state.colorsData.colorsData.total_pages);
    const totalItems = useGlobalState((state) => state.colorsData.colorsData.total);
    const itemsPerPage = 5;
    const isLoadingColorDetails = useGlobalState((state) => state.colorDetails.loading);
    const filteredColor = useGlobalState((state) => state.colorDetails.data);

    React.useEffect(() => {
        dispatch(ColorsDataAction.fetchColorsData({page, itemsPerPage, filterText} as FetchParams));
    }, [page, itemsPerPage]);

    React.useEffect(() => {
        dispatch(ColorDetailsAction.fetchColorDetails((Number(filterText))));
    }, [filterText]);


    React.useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const pageParam = queryParams.get('page');
        const filterParam = queryParams.get('id');
    
        if (pageParam) {
            setPage(Number(pageParam));
        }

        if (filterParam) {
            setFilterText((filterParam));
        }
    }, [location.search]);

    const handleRowClick = (color: ColorDetails) => {
        setSelectedColor(color);
    };

    const handleCloseModal = () => {
        setSelectedColor(null);
    };

    const extractPageAndIdNumbers = (url: string): { pageNumber: number | null, idNumber: number | null } => {
        const urlSearchParams = new URLSearchParams(url);
        const pageParam = urlSearchParams.get('page');
        const idParam = urlSearchParams.get('id');

        const pageNumber = pageParam ? Number(pageParam) : null;
        const idNumber = idParam ? Number(idParam) : null;

        return { pageNumber, idNumber };
    };

    React.useEffect(() => {
        (function() {
            const searchParams = new URLSearchParams(location.search);
            const { pageNumber, idNumber } = extractPageAndIdNumbers(searchParams.toString());
            
            if (Number(idNumber) > totalItems){
                navigate('/not-found')
                return;
            }
            if (Number(pageNumber) > totalPagesApi){
                navigate('/not-found')
                return;
            }
        })()
    }, [location.search, navigate, totalItems, totalPagesApi]);

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // Allow only numbers
        const filteredValue = event.target.value.replace(/[^\d]/g, '');
        setFilterText((filteredValue));
        const queryParams = new URLSearchParams(location.search);
        queryParams.set('id', filteredValue);
        navigate(`?${queryParams.toString()}`);
    };

    const handleChangePage = (event: React.ChangeEvent<unknown>, newPage: number) => {
        setPage(newPage);
        setFilterText('')
        const queryParams = new URLSearchParams(location.search);
        queryParams.set('id', '');
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
