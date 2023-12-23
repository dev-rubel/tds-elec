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
  const [bannerTitle, setBannerTitle] = useState('')

  const changeDivision = (item) => {
    // e.preventDefault();
    setSelectedDivision(item);
    let defautlDis = allJsonData.districts[item.districts[0]]; // select first default
    setSelectedDistrict(defautlDis);
  };


  const changeDistrict = (item) => {
    if (allJsonData.districts[item] !== undefined) {
      setSelectedDistrict(allJsonData.districts[item]);
      navigate(`/`);
    }
  };
  useEffect(() => {
    if (allJsonData) {
      setJsonData(allJsonData);
      changeDivision(allJsonData.divisions["dhaka"]);
    }
  }, [allJsonData]);

  return (
    <TdsContext.Provider
      value={{
        jsonData,
        setJsonData,
        changeDivision,
        changeDistrict,
        selectedDivision,
        selectedDistrict,
        bannerTitle, setBannerTitle
      }}
    >
      {children}
    </TdsContext.Provider>
  );
};
