import MapSvg from "./section3/MapSvg";
import RightSection from "./section3/RightSection";

export default function Section3() {
  return (
    <>
      <div className="grid-x grid-margin-x grid-margin-y section3">
        {/* left section */}
        <div className="cell small-12 medium-6 left-section">
          <MapSvg />
        </div>
        {/* right section */}
        <div className="cell small-12 medium-6 right-section">
          <RightSection />
        </div>
      </div>
    </>
  );
}
