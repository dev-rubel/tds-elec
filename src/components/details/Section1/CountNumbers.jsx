import React from 'react'
import CountNumberEach from './CountNumberEach'

function CountNumbers({selectedSeat}) {
	return (
		<div className="grid-x grid-margin-x">
			<div className="cell medium-12 large-12 small-12" >
				<CountNumberEach icon={'icon'} count={selectedSeat.voter} label={'Total Voters'} />
				<CountNumberEach icon={'icon'} count={selectedSeat.male_voter} label={'Male Voters'} />
				<CountNumberEach icon={'icon'} count={selectedSeat.female_voter} label={'Female Voters'} />
				{/* <CountNumberEach icon={'icon'} count={selectedSeat._voter} label={'Seats'} /> */}
			</div>
		</div>
	)
}

export default CountNumbers