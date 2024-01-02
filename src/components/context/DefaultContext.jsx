import React, { createContext, useEffect, useState, useRef } from "react";
import allJsonData from "./../../assets/data.json";
import { useLocation, useNavigate } from "react-router-dom";
const TdsContext = createContext();
export default TdsContext;

export const ContextProvider = ({ children }) => {
  let navigate = useNavigate();
  const location = useLocation();
  const [jsonData, setJsonData] = useState({});
  const [selectedDivision, setSelectedDivision] = useState({});
  const [selectedDistrict, setSelectedDistrict] = useState({});
  const [districts, setDistricts] = useState({});
  const [seatList, setSeatList] = useState([])
  const [bannerTitle, setBannerTitle] = useState('')
  const [onDetailPage, setOnDetailPage] = useState(false)
  const [selectedSeat, setSelectedSeat] = useState('')

  const changeDivision = (item) => {
    // e.preventDefault();
    setSelectedDivision(item);
    let defaultDis = allJsonData.districts[item.districts[0]]; // select first default
    setSelectedDistrict(defaultDis);
  };


  const changeDistrict = (item) => {
    if (allJsonData.districts[item] !== undefined) {
      setSelectedDistrict(allJsonData.districts[item]);
      navigate(`/`);
    }
  };

  // set default
  useEffect(() => {
    if (allJsonData) {
      setJsonData(allJsonData);
      changeDivision(allJsonData.divisions["dhaka"]);
    }
  }, [allJsonData]);

  useEffect(() => {
    if (selectedDivision.districts !== undefined) {
      setDistricts(selectedDivision.districts);
    }
  }, [selectedDivision]);

  // for seatlist dropdown
  useEffect(() => {
    let urlSegment = location.pathname.split("/").pop();
    if (urlSegment.length > 0 && Object.keys(selectedDistrict).length > 0) {
      let tempSeatList = []
      Object.entries(selectedDistrict.seats).map((value) => {
        tempSeatList[value[0]] = value[1].name
      })
      setOnDetailPage(true)
      setSeatList(tempSeatList)
    }  else {
      setOnDetailPage(false)
    }
  }, [location, selectedDistrict]);

  return (
    <TdsContext.Provider
      value={{
        jsonData,
        setJsonData,
        changeDivision,
        changeDistrict,
        setSelectedDivision,
        setSelectedDistrict,
        seatList, setSeatList,
        selectedSeat, setSelectedSeat,
        selectedDivision,
        selectedDistrict,
        districts, setDistricts,
        bannerTitle, setBannerTitle,
        onDetailPage, setOnDetailPage
      }}
    >
      {children}
    </TdsContext.Provider>
  );
};
