import React, { useContext, useEffect } from 'react'
import Map from './Map'
import Parties from './Parties'
import CountNumbers from './CountNumbers'
import DetailsContext from '../../context/DetailsContext';
import { motion as m } from "framer-motion";

function SeatInfo() {
    const { selectedSeat, mapSrc, mapSrcId } = useContext(DetailsContext);
    
    return (
        <m.div
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.75, ease: "easeInOut" }} 
        className="grid-x grid-margin-x grid-margin-y seatinfo">
            <div className="map cell medium-5 large-5 small-12 medium-offset-1" >
                <Map selectedSeat={selectedSeat} mapSrc={mapSrc} key={mapSrcId} divid={mapSrcId} />
            </div>
            <div className="parties cell medium-5 large-5 small-12" >
                <Parties selectedSeat={selectedSeat} />
            </div>
            {/* <div className="count_numbers cell medium-4 large-4 small-12" >
                <CountNumbers selectedSeat={selectedSeat} />
            </div> */}
            
        </m.div>
    )
}

export default SeatInfo