import Division from "./section2/Division";
import DistrictDropdown from "./section2/DistrictDropdown";

export default function Section2() {
  return (
    <>
      <div className="grid-x section2">
        <div className="section2-top">
          <Division />
        </div>
        <div className="section2-bottom">
          <DistrictDropdown />
        </div>
      </div>
    </>
  );
}
