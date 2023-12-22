import React from 'react'
import partieSymbol from '/symbol.png'
import candidateImg from '/candi.png'

function CandidateAccordion({id}) {
	return (
		<div className="tab">
			<input type="radio" name={"accordion"} id={"rd"+id} />
			<label htmlFor={"rd"+id} className="tab__label">Accordion {id}</label>
			<div className="tab__content">

				<div className="grid-x grid-margin-x">
					<div className="cell medium-4 large-4 small-12">

						<div className="card">
							<div className="card-section">
								<div className="top">
									<img src={candidateImg} className="candidate-img" alt="candidate-img" />
									<p className="name">AL-led</p>
									<p className="partie">AL</p>
									<p className="symbol">BOAT</p>
									<img src={partieSymbol} className="symbol-img" alt="symbol-img	" style={{maxWidth: '180px'}} />
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
				</div>

			</div>
		</div>
	)
}

export default CandidateAccordion