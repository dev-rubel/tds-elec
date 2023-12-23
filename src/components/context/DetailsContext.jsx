import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TdsContext from "./DefaultContext";
const DetailsContext = createContext();
export default DetailsContext;

export const DetailsContextProvider = ({ children }) => {
  const location = useLocation();
  const [selectedSeat, setSelectedSeat] = useState('')
  const { jsonData, setBannerTitle, selectedDistrict } = useContext(TdsContext);

  useEffect(() => {   
    if(Object.keys(selectedDistrict).length > 0) {
      let urlSegment = location.pathname.split("/").pop();
      let selectedSeat = selectedDistrict.seats[urlSegment];
      setBannerTitle(selectedSeat.name);
      setSelectedSeat(selectedSeat)
    }
  }, [selectedDistrict])
 

  return (
    <DetailsContext.Provider
      value={{
        selectedSeat, setSelectedSeat
      }}
    >
      {children}
    </DetailsContext.Provider>
  );
};
