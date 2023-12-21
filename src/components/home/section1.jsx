import { useContext } from "react";
import TdsContext from "../context/DefaultContext";
import TopTotal from "./section1/TopTotal";

function Section1({ totalJson }) {
  const { jsonData } = useContext(TdsContext);
  return (
    <>
      <div className="grid-x grid-margin-x section1">
        {jsonData.total_count !== undefined &&
          jsonData.total_count.map((item, key) => (
            <TopTotal item={item} key={key} />
          ))}
      </div>
    </>
  );
}

export default Section1;
