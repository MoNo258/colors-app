import {
  Card,
  CardContent
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
// import { displayConnection, displayDeviceType } from "src/utils";
import { useGlobalDispatch, useGlobalState } from "../../helpers";

type ColorDetailsProps = {
  propName?: string;
};
const ColorDetails: React.FC<ColorDetailsProps> = () => {
  const navigate = useNavigate();
  const dispatch = useGlobalDispatch();
  const colorDetails = useGlobalState(
    (state) => state.colorDetails.data.data
  );
  const isLoading = useGlobalState((state) => state.colorDetails.loading);
  const idParam = window.location.pathname;

  const [activeIndex, setActiveIndex] = React.useState(0);



 


  return (
    <Card >
      <CardContent>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "500px", fontSize: "18px" }}>
              <div >
              {/* <div loading={isLoading}> */}
                
                <span>
                  {colorDetails.name}
                </span>
              </div>
            </div>
          </div>
        </div>
        
      </CardContent>

      <div>
 
      </div>
     

    </Card>
  );
};
ColorDetails.displayName = "ColorDetails";
export default ColorDetails;
