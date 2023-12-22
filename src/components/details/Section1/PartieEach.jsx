import React from 'react'
import partieSymbol from '/symbol.png'

function PartieEach() {
	return (
		<div className="each-partie">
			<div className="grid-x">
				<div className="cell medium-8 small-12">
					<p className="title">
						AWAMI LEAGE
					</p>
				</div>
				<div className="cell medium-4 small-12 ">
					<img src={partieSymbol} alt="symbol" className="symbol-img" />
				</div>
			</div>
		</div>
	)
}

export default PartieEach