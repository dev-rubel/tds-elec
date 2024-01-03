import { useContext, useEffect, useState } from "react";
import TdsContext from "./../../context/DefaultContext";
import { useLocation, useNavigate } from "react-router-dom";

export default function DistrictDropdown() {
  let navigate = useNavigate();
  const [districtName, setDistrictName] = useState("");
  const {
    jsonData, changeDistrict, selectedDistrict, districts, seatList, onDetailPage, selectedSeat
  } = useContext(TdsContext);

  useEffect(() => {
    if (selectedDistrict.key !== undefined) {
      setDistrictName(selectedDistrict.key.toLowerCase());
    }
  }, [selectedDistrict]);

  const changeSeat = (value) => {
    if(value.length > 0) {
      navigate(`seat/${value}`)
    }
  }

  return (
    <>
      <p>Search more on candidates, seats, & results</p>
      <div className="dropdown-section">
        <form>
          <div className="grid-x grid-margin-x grid-margin-y">
            <div className={`medium-offset-3 medium-7 cell`}>
              <div className="grid-x grid-margin-x grid-margin-y">
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
                              {jsonData.districts[value] !== undefined
                                ? jsonData.districts[value].name
                                : value}
                            </option>
                          );
                        })}
                    </select>
                  </label>
                </div>
                <div className={"medium-4 cell "+(!onDetailPage ? 'hide' : '')}>
                  <label>
                    <select
                      onChange={(e) => changeSeat(e.target.value)}
                      value={selectedSeat.key}
                    >
                      <option value="">Select</option>
                      {Object.keys(seatList).length > 0 &&
                        Object.entries(seatList).map((value, key) => {
                          return (
                            <option value={value[0]} key={value[0]}>
                              {value[1]}
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
