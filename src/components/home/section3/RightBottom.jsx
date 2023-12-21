import { useContext} from "react";
import TdsContext from "./../../context/DefaultContext";
export default function RightBottom({ parties }) {
  const { jsonData } = useContext(TdsContext);

  return (
    <div className="cell small-12 medium-12">
      <div className="card">
        <div className="card-section">
          <ul className="grid-x">
            {Object.keys(parties).length > 0 &&
              Object.entries(parties).map(([key, value]) => {
                let pertiName = jsonData.parties[value.toLowerCase()].name;
                return (
                  <li className="cell small-12 medium-6" key={key}>
                    {pertiName}
                  </li>
                );
              })}
          </ul>
        </div>
        {Object.keys(parties).length === 0 && (
          <p className="right-bottom-not-found">No Data Found</p>
        )}
      </div>
    </div>
  );
}
