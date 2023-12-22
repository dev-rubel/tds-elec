import React from 'react'
import Map from './Map'
import Parties from './Parties'
import CountNumbers from './CountNumbers'

function SeatInfo() {
  return (
    <div className="grid-container seatinfo">
        <div className="grid-x grid-margin-x grid-margin-y">
            <div className="map cell medium-4 large-4 small-12" >
                <Map />
            </div>
            <div className="parties cell medium-4 large-4 small-12" >
                <Parties />
            </div>
            <div className="count_numbers cell medium-4 large-4 small-12" >
                <CountNumbers />
            </div>
        </div>
    </div>
  )
}

export default SeatInfo