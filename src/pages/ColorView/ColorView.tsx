import { Button, ButtonProps, Card, CardContent } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalDispatch, useGlobalState } from "../../helpers";
import { ColorDetails, ColorDetailsAction } from "../../redux";


const ColorView: React.FC = () => {
  const navigate = useNavigate();
  const idParam = window.location.pathname;
  const [isDeleted, setIsDeleted] = React.useState(false);
  const dispatch = useGlobalDispatch();
  const colorDetails = useGlobalState(
    (state) => state.colorDetails.colorDetails
  );
  const isLoading = useGlobalState((state) => state.colorDetails.loading);

  React.useEffect(() => {
    dispatch(ColorDetailsAction.fetchColorDetails(Number(idParam.slice(1))));
  }, []);

  const visitHomepage = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    data: ButtonProps
  ) => {
    navigate(`/`);
  };

  const sections = [
    { key: "Homepage", content: "Homepage", href: "/" },
    { key: "Color details", content: "Color details", active: true },
  ];

  return (
    <div className="userView">
      <div className="userView_card">
        {!isDeleted ? (
          <ColorDetails />
        ) : (
          <Card >
            <CardContent>User is DELETED</CardContent>
            <CardContent>
              <Button
                // loading={isLoading}
                
                
                
               
              
                // onButtonClick={(e, data) => visitHomepage(e, data)}
              />
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ColorView;
