import { useContext, useEffect, useState } from "react";
import RightBottom from "./RightBottom";
import RightTop from "./RightTop";
import TdsContext from "./../../context/DefaultContext";
import RightTopNotFound from "./RightTopNotFound";
export default function RightSection() {
  const { jsonData, selectedDistrict } = useContext(TdsContext);
  const [parties, setPerties] = useState([]);

  useEffect(() => {
    setPerties([]);
  }, [selectedDistrict]);

  const majorPerties = (item) => {
    let tempPertie = [];
    Object.entries(item.candidates).map(([kay, candi]) => {
      if (jsonData.candidates[candi.key] !== undefined) {
        let candi_partie_key = jsonData.candidates[candi.key].partie_key;
        let partie_key = jsonData.parties[candi_partie_key].key;
        tempPertie[partie_key] = partie_key;
        parties[partie_key] = partie_key;
      }
    });
    return tempPertie;
  };

  return (
    <>
      {/* right top */}
      <div className="grid-x grid-margin-x right-top-section">
        {selectedDistrict.seats !== undefined &&
          Object.keys(selectedDistrict.seats).length !== 0 &&
          Object.entries(selectedDistrict.seats).map(([key, item]) => {
            let tempPertie = majorPerties(item);
            return <RightTop item={item} perties={tempPertie} key={key} />;
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
