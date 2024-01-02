import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TdsContext from "./DefaultContext";
const DetailsContext = createContext();
export default DetailsContext;

export const DetailsContextProvider = ({ children }) => {
  const location = useLocation();  
  const [mapSrc, setMapSrc] = useState('')
  const [mapSrcId, setMapSrcId] = useState('')

  const { jsonData, setBannerTitle, setSelectedDistrict, setSelectedDivision, selectedSeat, setSelectedSeat } = useContext(TdsContext);

  // get district from seat key
  const getDistrict = (seatKey) => {
    let selected;
    Object.entries(jsonData.districts).map((value, key) => {
      if(value[1].seats[seatKey] !== undefined) { // find seat from district
        selected = value[1]
      }
    })
    return selected
  }

  const getDivision = (distKey) => {
    let selected;
    Object.entries(jsonData.divisions).map((value, key) => {
      if(value[1].districts.includes(distKey)) { // find districts from division
        selected = value[1]
      }
    })
    return selected
  }

  useEffect(() => {
    if(Object.keys(jsonData).length > 0) {      
      let urlSegment = location.pathname.split("/").pop();
      let district = getDistrict(urlSegment)
      let division = getDivision(district.key)

      let map = `/sites/all/modules/custom/rsi_election/widgets/election2024/bd-svg/${division.name.toLowerCase()}/dist-${district.key.toLowerCase()}.svg`
      setMapSrc(map)
      setMapSrcId(urlSegment)
      
      let selectedSeat = district.seats[urlSegment];
      setSelectedDivision(division)
      setSelectedDistrict(district)
      setBannerTitle(selectedSeat.name);
      setSelectedSeat(selectedSeat)
    }
  }, [jsonData, location])

 

  return (
    <DetailsContext.Provider
      value={{
        selectedSeat, setSelectedSeat,
        mapSrc, setMapSrc,
        mapSrcId, setMapSrcId
      }}
    >
      {children}
    </DetailsContext.Provider>
  );
};
