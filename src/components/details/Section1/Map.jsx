import React, { useEffect, useState } from 'react'
import districtPng from '/dis.png'

function Map({selectedSeat}) {
  const [mapSrc, setMapSrc] = useState('')
  useEffect(() => {
    if(selectedSeat !== undefined) {
      if(Object.keys(selectedSeat).length > 0) {
        setMapSrc(selectedSeat.svg_path)
      }
    }
  }, [selectedSeat])
  
  return (
    <>
        <img src={mapSrc} alt={mapSrc} />
    </>
  )
}

export default Map