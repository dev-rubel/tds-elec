import React from 'react'
import CandidateAccordion from './CandidateAccordion'

function Candidates() {
	return (
		<div>
			<p className="candidate-title">Candidates</p>
			<section className="accordion accordion--radio">
				<CandidateAccordion id={1} />
				<CandidateAccordion id={2} />
			</section>

		</div>
	)
}

export default Candidates