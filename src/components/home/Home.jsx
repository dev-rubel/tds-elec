import { useContext, useEffect } from "react";
import Section3 from "./section3";
import TdsContext from "../context/DefaultContext";
export default function Home() {
  const { bannerTitle, setBannerTitle, selectedDistrict } = useContext(TdsContext);

  useEffect(() => {
    setBannerTitle('JS POLLS 2024');
  }, [])
  return (
    <>
      <div className="grid-x">
        <div className="cell medium-12 large-12 small-12">
          <Section3 />
        </div>
      </div>
    </>
  );
}
