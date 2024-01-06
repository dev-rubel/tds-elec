import { useContext } from "react";
import TdsContext from "./../../context/DefaultContext";
export default function RightBottom({ parties, checkIfExceptionExist }) {
  const { jsonData } = useContext(TdsContext);

  const getPartieName = (name) => {
    let temp;
    if (name.length > 3 && name.split(" ").length > 1) {
      // string & word length
      let tname = name.replaceAll("_", " ");
      let matches = tname.match(/\b(\w)/g); // ['J','S','O','N']
      let acronym = matches.join(""); // JSON
      temp = acronym.toUpperCase();
      return `${name} (${checkIfExceptionExist(temp)})`;
    }
    if (name.length > 3) {
      temp = name.substring(0, 3).toUpperCase();
      return `${name} (${checkIfExceptionExist(temp)})`;
    }
    return name;
  };

  return (
    <>
      <div className="cell small-12 medium-12">
        <div className="card">
          <div className="card-section">
            <ul className="grid-x">
              {Object.keys(parties).length > 0 &&
                Object.entries(parties).map(([key, value]) => {
                  let pertiName = jsonData.parties[value.toLowerCase()].name;
                  return (
                    <li className="cell small-12 medium-6" key={key}>
                      {getPartieName(pertiName)}
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

      <div className="cell small-12 medium-12">
        <a href="https://www.facebook.com/DailyStarNews" target="_blank">
          {" "}
          <img
            src="https://tds-images.thedailystar.net/sites/default/files/uploads/2024/01/07/fb-elecbanner.png"
            alt="Election Banner"
          />
        </a>
      </div>
    </>
  );
}
