import React from 'react'
import CountNumberEach from './CountNumberEach'

function CountNumbers() {
	return (
		<div className="grid-x grid-margin-x">
			<div className="cell medium-12 large-12 small-12" >
				<CountNumberEach />
				<CountNumberEach />
				<CountNumberEach />
				<CountNumberEach />
			</div>
		</div>
	)
}

export default CountNumbers