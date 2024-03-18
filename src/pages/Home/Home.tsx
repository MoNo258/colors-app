// import { useTheme } from '@mui/material';
import React from "react";
import { useNavigate } from "react-router-dom";
import ColorsTable from "../../components/ColorsTable/ColorsTable";
import { useGlobalDispatch, useGlobalState } from "../../helpers";
// import { ColorsDataAction } from "../../redux/ColorsData/ColorsData.slice";


const Home: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useGlobalDispatch();
    const colorsData = useGlobalState((state) => state.colorsData.colorsData);
    const isLoadingColors = useGlobalState((state) => state.colorsData.loading);
    // const isLoadingColors = true
    const colorsList = useGlobalState((state) => state.colorsData.colorsData.data);
    const errorColors = useGlobalState((state) => state.colorsData.error);

    const isLoadingColorDetails = useGlobalState((state) => state.colorDetails.loading);
    const errorColorDetails = useGlobalState((state) => state.colorDetails.error);

    const [activeItem, setActiveItem] = React.useState<string | undefined>(
        "devices"
    );


    const handleMenuItemClick = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        data: any
    ) => {
        console.log("clicked item:", data.name);
        setActiveItem(data.name);
    };

    return (
        <div className="home">
            <ColorsTable colors={colorsList} isLoading={isLoadingColors} />
        </div>
    );
};

export default Home;