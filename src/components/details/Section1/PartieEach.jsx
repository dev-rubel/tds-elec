import React from 'react'

function PartieEach({item, candidate}) {
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
					<img src={candidate.photo} alt={name} className="symbol-img" onError={(e) => {
						e.target.style.visibility='hidden'
						let ele = document.getElementById(`party-symbol-name-${candidate.key}`)
						ele.classList.remove('hide')
					}} />
					<span className="party-symbol-name hide" id={`party-symbol-name-${candidate.key}`}>{candidate.symbol}</span>
				</div>
			</div>
		</div>
	)
}

export default PartieEach