import Section1 from "../home/section1";
import Section2 from "../home/section2";
import SeatInfo from "./Section1/SeatInfo";
import Candidates from "./Section2/Candidates";

export default function Details() {
  return (
    <>
      <div className="grid-container">
        <div className="grid-x">
          <div className="cell medium-12 large-12 small-12">
            <Section1 />
          </div>
        </div>
        <div className="grid-x">
          <div className="cell medium-12 large-12 small-12">
            <Section2 />
          </div>
        </div>
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
      </div>
    </>
  );
}
