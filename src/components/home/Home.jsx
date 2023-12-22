import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
export default function Home() {
  return (
    <>
      <div className="grid-container ">
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
            <Section3 />
          </div>
        </div>
      </div>
    </>
  );
}
