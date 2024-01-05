import TopBanner from "../TopBanner";
import { ContextProvider } from "../context/DefaultContext";
import Section1 from "../home/section1";
import Section2 from "../home/section2";
import { useNavigation, Outlet } from "react-router-dom";
import { motion as m } from "framer-motion";

export default function Root() {
  const navigation = useNavigation();

  return (
    <>
      <ContextProvider>
        <m.div
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.75, ease: "easeInOut" }} 
          className="grid-container "
        >
          <TopBanner title="Test Title" />
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

          <div id="details" className={
            navigation.state === "loading" ? "loading" : ""
          }>
            <Outlet />
          </div>
        </m.div>
      </ContextProvider>
    </>
  );
}