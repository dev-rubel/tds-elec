import React, { useContext, useEffect, useState } from 'react'
import TdsContext from '../../context/DefaultContext';

function CandidateAccordionEach({candidate}) {
  const [candidateObj, setCandidateObj] = useState({})
  const [candidateParte, setCandidateParte] = useState({})
  const { jsonData } = useContext(TdsContext);

  useEffect(() => {
    let candidateObj = jsonData.candidates[candidate]
    let candidateParte = jsonData.parties[candidateObj.partie_key]
    setCandidateObj(candidateObj)
    setCandidateParte(candidateParte)
  }, [candidate])

  return (
    <div className="cell medium-3 large-3 small-12">

      <div className="card">
        <div className="card-section">
          <div className="top">
            <img src={''} className="candidate-img" alt={''} />
            <p className="candi-name">{candidateObj.name}</p>
            {/* <p className="name">AL-led</p> */}
            <p className="partie">{candidateParte.name}</p>
            <p className="symbol">{candidateObj.symbol}</p>
            <img 
              src={candidateObj.photo} 
              className="symbol-img" 
              style={{ maxWidth: '100px' }} 
              alt={candidateParte.key} 
              onError={(e) => e.target.style.visibility='hidden' } 
            />
          </div>
          <div className="bottom hide">
            <hr />
            <p className="result">Result:</p>
            <p className="voat_ount">Vote: 1111</p>
            <p className="center_counter">Centres Counted: 1111</p>
            <p className="status">WINNER</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CandidateAccordionEach