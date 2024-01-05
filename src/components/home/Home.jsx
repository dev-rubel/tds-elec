import { useContext, useEffect } from "react";
import Section3 from "./section3";
import TdsContext from "../context/DefaultContext";
import { motion as m } from "framer-motion";

export default function Home() {
  const { bannerTitle, setBannerTitle, selectedDistrict } = useContext(TdsContext);

  useEffect(() => {
    setBannerTitle('JS POLLS 2024');
  }, [])
  return (
    <>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeInOut" }} 
        className="grid-x"
      >
        <div className="cell medium-12 large-12 small-12">
          <Section3 />
        </div>
      </m.div>
    </>
  );
}
