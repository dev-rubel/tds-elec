import SeatInfo from "./Section1/SeatInfo";
import Candidates from "./Section2/Candidates";
import { DetailsContextProvider } from "../context/DetailsContext";
import { motion as m } from "framer-motion";

export default function Details() {
  return (
    <m.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.75, ease: "easeInOut" }} 
    >
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
    </m.div>
  );
}
