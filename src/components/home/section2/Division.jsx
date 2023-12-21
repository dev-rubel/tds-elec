import { useContext } from "react";
import TdsContext from "./../../context/DefaultContext";
import DivisionEach from "./DivisionEach";
export default function Division() {
  const { jsonData } = useContext(TdsContext);
  return (
    <div className="grid-x grid-margin-x">
      {jsonData.divisions !== undefined &&
        Object.entries(jsonData.divisions).map(([key, value]) => {
          return <DivisionEach key={key} item={value} />;
        })}
    </div>
  );
}
