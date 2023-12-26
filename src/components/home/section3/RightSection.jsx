import { useContext, useEffect, useState } from "react";
import RightBottom from "./RightBottom";
import RightTop from "./RightTop";
import TdsContext from "./../../context/DefaultContext";
import RightTopNotFound from "./RightTopNotFound";
export default function RightSection() {
  const { jsonData, selectedDistrict } = useContext(TdsContext);
  const [parties, setParties] = useState([]);

  useEffect(() => {
    setParties([]);
  }, [selectedDistrict]);

  const majorParties = (item) => {
    let tempPetrie = [];
    Object.entries(item.candidates).map(([kay, cadi]) => {
      if (jsonData.candidates[cadi] !== undefined) {
        let candidate_parte_key = jsonData.candidates[cadi].partie_key;
        let parte_key = jsonData.parties[candidate_parte_key].key;
        tempPetrie[parte_key] = parte_key;
        parties[parte_key] = parte_key;
      }
    });
    return tempPetrie;
  };

  return (
    <>
      {/* right top */}
      <div className="grid-x grid-margin-x right-top-section">
        {selectedDistrict.seats !== undefined &&
          Object.keys(selectedDistrict.seats).length !== 0 &&
          Object.entries(selectedDistrict.seats).map(([key, item]) => {
            let tempParte = majorParties(item);
            return <RightTop item={item} parties={tempParte} key={key} />;
          })}

        {/* right top not found */}
        <RightTopNotFound selectedDistrict={selectedDistrict} />
      </div>

      {/* right bottom */}
      <div className="grid-x right-bottom-section">
        <RightBottom parties={parties} />
      </div>
    </>
  );
}
