import React from 'react'
import partieSymbol from '/symbol.png'

function PartieEach({item}) {
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
					<img src={symbol} alt={key} className="symbol-img" />
				</div>
			</div>
		</div>
	)
}

export default PartieEach