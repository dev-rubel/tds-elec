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

  const pertiesList = (item) => {
    let tempPertie = [];
    item.candidates.map((candi, kay) => {
      if (jsonData.candidates[candi.key] !== undefined) {
        let partie_key = jsonData.candidates[candi.key].partie_key;
        let partie_key_key = jsonData.parties[partie_key].key;
        tempPertie[partie_key_key] = partie_key_key;
        parties[partie_key_key] = partie_key_key;
      }
    });
    return tempPertie;
  };

  return (
    <>
      {/* right top */}
      <div className="grid-x grid-margin-x right-top-section">
        {selectedDistrict.data !== undefined &&
          selectedDistrict.data.seats.length > 0 &&
          selectedDistrict.data.seats.map((item, key) => {
            let tempPertie = pertiesList(item);
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
