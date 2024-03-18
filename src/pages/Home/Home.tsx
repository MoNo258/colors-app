// import { useTheme } from '@mui/material';
import React from "react";
import { useNavigate } from "react-router-dom";
import ColorsTable from "../../components/ColorsTable/ColorsTable";
import { useGlobalDispatch, useGlobalState } from "../../helpers";
// import { ColorsDataAction } from "../../redux/ColorsData/ColorsData.slice";
import { ColorView } from "../ColorView";

const Home: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useGlobalDispatch();
    const colorsData = useGlobalState((state) => state.colorsData.colorsData);
    const isLoadingColors = useGlobalState((state) => state.colorsData.loading);
    // const isLoadingColors = true
    const colorsList = useGlobalState((state) => state.colorsData.colorsData.data);

    const [activeItem, setActiveItem] = React.useState<string | undefined>(
        "devices"
    );

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
        </div>
    );
};

export default Home;