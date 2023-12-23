import React from 'react'

function CountNumberEach({icon, count, label}) {
	return (
		<div className="card">
			<div className="card-section section1-top">
				<section className="grid-x">
					<div className="cell medium-4 icon">
						<p>{icon}</p>
					</div>
					<div className="cell medium-8 text">
						<p>{label}</p>
						<p>{count}</p>
					</div>
				</section>
			</div>
		</div>
	)
}

export default CountNumberEach