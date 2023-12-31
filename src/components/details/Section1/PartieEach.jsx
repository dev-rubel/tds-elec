import React from 'react'
import partieSymbol from '/symbol.png'

function PartieEach({item, candidateSymbol}) {
	const {key, name, symbol} = item
	return (
		<div className="each-partie">
			<div className="grid-x">
				<div className="cell medium-8 small-12">
					<p className="title">
						{name}
					</p>
				</div>
				<div className="cell medium-4 small-12 ">
					<img src={candidateSymbol} alt={name} className="symbol-img" onError={(e) => e.target.style.visibility='hidden' }  />
				</div>
			</div>
		</div>
	)
}

export default PartieEach