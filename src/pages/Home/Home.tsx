// import { useTheme } from '@mui/material';
import React from "react";
import { useNavigate } from "react-router-dom";
import ColorsTable from "../../components/ColorsTable/ColorsTable";
import { useGlobalDispatch, useGlobalState } from "../../helpers";
// import { ColorsDataAction } from "../../redux/ColorsData/ColorsData.slice";
import { ColorView } from "../ColorView";
import { NotFound } from "../NotFound";

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

    // console.log('II isLoadingColors',isLoadingColors);
    // console.log('II errorColors',errorColors);
    // console.log('VV isLoadingColorDetails',isLoadingColorDetails);
    // console.log('VV errorColorDetails',errorColorDetails);
    

    // React.useEffect(() => {
    //     dispatch(ColorsDataAction.fetchColorsData({}));
    // }, []);

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
            <div>ODSTEP</div>
            <ColorView/>
            <NotFound/>
        </div>
    );
};

export default Home;