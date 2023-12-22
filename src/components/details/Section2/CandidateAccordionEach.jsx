import React from 'react'
import partieSymbol from '/symbol.png'
import candidateImg from '/candi.png'

function CandidateAccordionEach() {
  return (
    <div className="cell medium-3 large-3 small-12">

      <div className="card">
        <div className="card-section">
          <div className="top">
            <img src={candidateImg} className="candidate-img" alt="candidate-img" />
            <p className="candi-name">Salman Fazlur Rahman</p>
            <p className="name">AL-led</p>
            <p className="partie">AL</p>
            <p className="symbol">BOAT</p>
            <img src={partieSymbol} className="symbol-img" alt="symbol-img	" style={{ maxWidth: '100px' }} />
          </div>
          <hr />
          <div className="bottom">
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