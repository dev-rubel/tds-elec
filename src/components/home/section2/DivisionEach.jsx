import { useContext, useEffect, useState } from "react";
import TdsContext from "./../../context/DefaultContext";
import { Link } from "react-router-dom";
export default function DivisionEach({ item }) {
  const { changeDivision, selectedDivision } = useContext(TdsContext);
  const [activeDivision, setActiveDivision] = useState("");

  useEffect(() => {
    if (selectedDivision.name !== undefined) {
      let active =
        selectedDivision.name.toLowerCase() === item.name.toLowerCase()
          ? "active"
          : "";
      setActiveDivision(active);
    }
  }, [selectedDivision, item]);

  return (
    <>
      <div className="cell small-4 medium-auto">
        <div className="card">
          <Link to='/' onClick={() => changeDivision(item)}>
            <div className={"card-section " + activeDivision}>
              <p>{item.name}</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
