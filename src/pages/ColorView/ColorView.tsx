import { ButtonProps } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { useGlobalDispatch, useGlobalState } from "../../helpers";


const ColorView: React.FC = () => {
  const navigate = useNavigate();
  const idParam = window.location.pathname;
  const [isDeleted, setIsDeleted] = React.useState(false);
  const dispatch = useGlobalDispatch();
  const colorDetails = useGlobalState(
    (state) => state.colorDetails.data
  );
  const isLoading = useGlobalState((state) => state.colorDetails.loading);

  // React.useEffect(() => {
  //   dispatch(ColorDetailsAction.fetchColorDetails(Number(idParam.slice(1))));
  // }, []);

  const visitHomepage = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    data: ButtonProps
  ) => {
    navigate(`/`);
  };

  // console.log('views -> ColorView: navigate', navigate);
  // console.log('views -> ColorView: idParam', idParam);
  

  const sections = [
    { key: "Homepage", content: "Homepage", href: "/" },
    { key: "Color details", content: "Color details", active: true },
  ];

  return (
    <div className="userView">
      <div className="userView_card">
          {isLoading ? <Loader/> : <div>{colorDetails && colorDetails.data.color} {colorDetails && colorDetails.data.id}</div>}
      </div>
    </div>
  );
};

export default ColorView;
