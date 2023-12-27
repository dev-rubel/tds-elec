import React, { createContext, useEffect, useState, useRef } from "react";
import allJsonData from "./../../assets/data.json";
import { useNavigate } from "react-router-dom";
const TdsContext = createContext();
export default TdsContext;

export const ContextProvider = ({ children }) => {
  let navigate = useNavigate();
  const [jsonData, setJsonData] = useState({});
  const [selectedDivision, setSelectedDivision] = useState({});
  const [selectedDistrict, setSelectedDistrict] = useState({});
  const [districts, setDistricts] = useState({});
  const [bannerTitle, setBannerTitle] = useState('')

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

  return (
    <TdsContext.Provider
      value={{
        jsonData,
        setJsonData,
        changeDivision,
        changeDistrict,
        setSelectedDivision,
        setSelectedDistrict,
        selectedDivision,
        selectedDistrict,
        districts, setDistricts,
        bannerTitle, setBannerTitle
      }}
    >
      {children}
    </TdsContext.Provider>
  );
};
