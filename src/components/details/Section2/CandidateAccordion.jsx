import React from 'react'
import CandidateAccordionEach from './CandidateAccordionEach'


function CandidateAccordion({id}) {
	return (
		<div className="tab">
			<input type="radio" name={"accordion"} id={"rd"+id} />
			<label htmlFor={"rd"+id} className="tab__label">Accordion {id}</label>
			<div className="tab__content">

				<div className="grid-x grid-margin-x">

					<CandidateAccordionEach key={1}/>
					<CandidateAccordionEach key={2}/>
					<CandidateAccordionEach key={3}/>
					<CandidateAccordionEach key={4}/>

				</div>

			</div>
		</div>
	)
}

export default CandidateAccordion