import React, { useContext, useEffect, useState } from 'react'
import partieSymbol from '/symbol.png'
import candidateImg from '/candi.png'
import TdsContext from '../../context/DefaultContext';

function CandidateAccordionEach({candidate}) {
  const [candidateObj, setCandidateObj] = useState({})
  const [candidatePartie, setCandidatePartie] = useState({})
  const { jsonData } = useContext(TdsContext);

  useEffect(() => {
    let candiObj = jsonData.candidates[candidate.key]
    let candiPartie = jsonData.parties[candiObj.partie_key]
    setCandidateObj(candiObj)
    setCandidatePartie(candiPartie)
  }, [candidate])

  return (
    <div className="cell medium-3 large-3 small-12">

      <div className="card">
        <div className="card-section">
          <div className="top">
            <img src={candidateImg.photo} className="candidate-img" alt={candidateImg.key} />
            <p className="candi-name">{candidateObj.name}</p>
            <p className="name">AL-led</p>
            <p className="partie">{candidatePartie.name}</p>
            <p className="symbol">{candidatePartie.symbol_name}</p>
            <img src={candidatePartie.symbol} className="symbol-img" alt={candidatePartie.key} style={{ maxWidth: '100px' }} />
          </div>
          <div className="bottom">
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