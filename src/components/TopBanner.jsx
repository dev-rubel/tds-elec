import React, { useContext } from 'react'
import TdsContext from './context/DefaultContext';

function TopBanner({ title }) {
  const { bannerTitle } = useContext(TdsContext);
  return (
    <div className="grid-x grid-margin-y top-banner text-center">
      <div className="cell auto">
        <h1 className="title">{bannerTitle}</h1>
      </div>
    </div>
  )
}

export default TopBanner