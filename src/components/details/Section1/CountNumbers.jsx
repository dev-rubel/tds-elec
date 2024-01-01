import React from 'react'
import CountNumberEach from './CountNumberEach'

function CountNumbers({selectedSeat}) {
	return (
		<div className="grid-x grid-margin-x">
			<div className="cell medium-12 large-12 small-12" >
				<CountNumberEach icon={'/sites/all/modules/custom/rsi_election/widgets/election2024/top-total-section/total_voters2.png'} count={selectedSeat.voter} label={'Total Voters'} />
				<CountNumberEach icon={'/sites/all/modules/custom/rsi_election/widgets/election2024/top-total-section/total_voters2.png'} count={selectedSeat.male_voter} label={'Male Voters'} />
				<CountNumberEach icon={'/sites/all/modules/custom/rsi_election/widgets/election2024/top-total-section/total_voters2.png'} count={selectedSeat.female_voter} label={'Female Voters'} />
				{/* <CountNumberEach icon={'icon'} count={selectedSeat._voter} label={'Seats'} /> */}
			</div>
		</div>
	)
}

export default CountNumbers