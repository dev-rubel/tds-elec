import React, { createContext, useEffect, useState, useRef } from "react";
import allJsonData from "./../../assets/data.json";
const TdsContext = createContext();
export default TdsContext;

export const ContextProvider = ({ children }) => {
  const [jsonData, setJsonData] = useState({});
  const [selectedDivision, setSelectedDivision] = useState({});
  const [selectedDistrict, setSelectedDistrict] = useState({});

  const changeDivision = (item) => {
    // e.preventDefault();
    setSelectedDivision(item);
    // if (Object.keys(selectedDistrict).length !== 0) {
    let defautlDis = allJsonData.districts[item.data.districts[0]]; // select first default
    setSelectedDistrict(defautlDis);
    // }
  };
  const changeDistrict = (item) => {
    if (allJsonData.districts[item] !== undefined) {
      setSelectedDistrict(allJsonData.districts[item]);
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
      }}
    >
      {children}
    </TdsContext.Provider>
  );
};
