import React from "react";
import { useNavigate } from "react-router-dom";



import { useGlobalDispatch, useGlobalState } from "../../helpers";
import { ColorsDataAction } from "./ColorsData.slice";

type ColorsDataProps = {
  propName?: string;
};
const ColorsData: React.FC<ColorsDataProps> = () => {
  const dispatch = useGlobalDispatch();
  const navigate = useNavigate();
  const colorsData = useGlobalState((state) => state.colorsData.colorsData);
  const colorsList = useGlobalState((state) => state.colorsData.colorsData.data);
  const colorsDataPage = useGlobalState((state) => state.colorsData.colorsData.page);
  const colorsTotal = useGlobalState((state) => state.colorsData.colorsData.total);
  const isLoading = useGlobalState((state) => state.colorsData.loading);

  React.useEffect(() => {
    dispatch(ColorsDataAction.fetchColorsData());
  }, []);
  // React.useEffect(() => {
  //   const fechOnInterval = setInterval(() => {
  //     dispatch(ColorsListAction.fetchColors());
  //   }, 600000) 
  //   return () => clearInterval(fechOnInterval)
  // }, []);


  console.log('colorsData',colorsData);
  console.log('colorsList',colorsList);
  console.log('colorsDataPage',colorsDataPage);
  


  return (
    <div>
    
      
test
<div >
  {colorsList && colorsList.map(color=>(<div key={color.id}>
      <p>color: {color.color}</p>
      <p>id: {color.id}</p>
      <p>name: {color.name}</p>
      <p>pantone_value: {color.pantone_value}</p>
      <p>year: {color.year}</p>
  </div>))}
</div>

{colorsTotal}

  
       
   
    </div>)

};
ColorsData.displayName = "ColorsData";
export default ColorsData;
