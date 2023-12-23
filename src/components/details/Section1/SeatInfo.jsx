import React, { useContext, useEffect } from 'react'
import Map from './Map'
import Parties from './Parties'
import CountNumbers from './CountNumbers'
import DetailsContext from '../../context/DetailsContext';

function SeatInfo() {
    const { selectedSeat, majorPerties } = useContext(DetailsContext);
    
    return (
        <div className="grid-x grid-margin-x grid-margin-y seatinfo">
            <div className="map cell medium-4 large-4 small-12" >
                <Map selectedSeat={selectedSeat} />
            </div>
            <div className="parties cell medium-4 large-4 small-12" >
                <Parties selectedSeat={selectedSeat} />
            </div>
            <div className="count_numbers cell medium-4 large-4 small-12" >
                <CountNumbers selectedSeat={selectedSeat} />
            </div>
        </div>
    )
}

export default SeatInfo