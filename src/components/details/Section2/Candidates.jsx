import React, { useContext } from 'react'
import CandidateAccordion from './CandidateAccordion'
import DetailsContext from '../../context/DetailsContext';

function Candidates() {
	const { selectedSeat } = useContext(DetailsContext);
	return (
		<div>
			<p className="candidate-title">Candidates</p>
			<section className="accordion accordion--radio">
				{Object.keys(selectedSeat).length > 0 &&
						<CandidateAccordion id={1} item={selectedSeat} />
				}
			</section>

		</div>
	)
}

export default Candidates