import { useContext, useEffect } from "react";
import SeatInfo from "./Section1/SeatInfo";
import Candidates from "./Section2/Candidates";
import { DetailsContextProvider } from "../context/DetailsContext";

export default function Details() {
  return (
    <>
      <DetailsContextProvider>
        <div className="grid-x">
          <div className="cell medium-12 large-12 small-12">
            <SeatInfo />
          </div>
        </div>
        <div className="grid-x candidates-section">
          <div className="cell medium-12 large-12 small-12">
            <Candidates />
          </div>
        </div>
      </DetailsContextProvider>
    </>
  );
}
