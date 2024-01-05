import React, { useContext, useEffect, useState } from 'react'
import TdsContext from './context/DefaultContext';
import { useLocation } from 'react-router-dom';
import { motion as m } from "framer-motion";

function TopBanner({ title }) {
  const location = useLocation();
  const { bannerTitle, selectedSeat } = useContext(TdsContext);
  const [isDetailsPage, setIsDetailsPage] = useState(false)
  
  useEffect(() => {
    let urlSegment = location.pathname.split("/").pop();
    if (urlSegment.length > 0 && Object.keys(selectedSeat).length > 0) {
      setIsDetailsPage(true)
    } else {
      setIsDetailsPage(false)
    }
  }, [selectedSeat, location, isDetailsPage])
  
  return (
    <m.div
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.75, ease: "easeInOut" }} 
      className={"grid-x grid-margin-y top-banner text-center banner-img-" + (!isDetailsPage?'1':'2')}
    >
      <div className="cell auto">
        <h1 className={`title ${!isDetailsPage?'hide':''}`}>{bannerTitle}</h1>
      </div>
    </m.div>
  )
}

export default TopBanner