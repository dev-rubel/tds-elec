import React, { useContext, useEffect, useState } from 'react'
import PartieEach from './PartieEach'
import TdsContext from '../../context/DefaultContext';

function Parties({ selectedSeat }) {
	const [parties, setPerties] = useState([]);
	const { jsonData } = useContext(TdsContext);

	const getPertie = (key) => {
		let tempPertie = '';
		if (jsonData.candidates[key] !== undefined) {
			let candi_partie_key = jsonData.candidates[key].partie_key;
			tempPertie = jsonData.parties[candi_partie_key];
		}
		return tempPertie;
	};

	return (
		<div>
			<p className="partie-title">MAJOR PARTIES</p>
			{selectedSeat.candidates !== undefined &&
				selectedSeat.candidates.map((value, key) => {
					let partie = getPertie(value.key)
					return <PartieEach key={key} item={partie} />
				})
			}
		</div>
	)
}

export default Parties