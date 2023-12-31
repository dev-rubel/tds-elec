import React from 'react'
import CandidateAccordionEach from './CandidateAccordionEach'


function CandidateAccordion({id, item}) {
	return (
		<div className="tab">
			<input type="radio" name={"accordion"} id={"rd"+id} defaultChecked/>
			<label htmlFor={"rd"+id} className="tab__label">{item.name}</label>
			<div className="tab__content">

				<div className="grid-x grid-margin-x">
					{item.candidates.length > 0 && 
						item.candidates.map((value, key) => {
							return <CandidateAccordionEach key={key} candidate={value}/>
						})
					}

				</div>

			</div>
		</div>
	)
}

export default CandidateAccordion