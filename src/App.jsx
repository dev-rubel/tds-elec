import Section1 from "./components/home/section1.jsx";
import Section2 from "./components/home/section2";
import Section3 from "./components/home/section3";
export default function App() {
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
