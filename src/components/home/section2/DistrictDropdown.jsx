import { useContext, useEffect, useState } from "react";
import TdsContext from "./../../context/DefaultContext";

export default function DistrictDropdown() {  
  const { 
    jsonData, changeDistrict, selectedDistrict, districts 
  } = useContext(TdsContext);
  
  const [districtName, setDistrictName] = useState("");  

  useEffect(() => {
    if (selectedDistrict.name !== undefined) {
      setDistrictName(selectedDistrict.name.toLowerCase());
    }
  }, [selectedDistrict]);

  return (
    <>
      <p>Search more on candidates, seats, & results</p>
      <div className="dropdown-section">
        <form>
          <div className="grid-x grid-margin-x">
            <div className="medium-offset-4 medium-7 cell">
              <div className="grid-x">
                <div className="medium-7 cell">
                  <label>
                    <select
                      onChange={(e) => changeDistrict(e.target.value)}
                      value={districtName}
                    >
                      <option value="">Select</option>
                      {districts.length > 0 &&
                        districts.map((value, key) => {
                          return (
                            <option value={value} key={key}>
                              {jsonData.districts[value].name !== undefined
                                ? jsonData.districts[value].name
                                : value}
                            </option>
                          );
                        })}
                    </select>
                  </label>
                </div>
                {/* <div className="cell medium-3 medium-offset-1">
                  <button className="button">GO</button>
                </div> */}
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
