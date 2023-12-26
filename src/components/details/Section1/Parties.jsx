import React, { useContext, useEffect, useState } from 'react'
import PartieEach from './PartieEach'
import TdsContext from '../../context/DefaultContext';

function Parties({ selectedSeat }) {
	const [parties, setParties] = useState([]);
	const { jsonData } = useContext(TdsContext);

	const getPetrie = (key) => {
		let tempPetrie = '';
		if (jsonData.candidates[key] !== undefined) {
			let candi_partie_key = jsonData.candidates[key].partie_key;
			tempPetrie = jsonData.parties[candi_partie_key];
		}
		return tempPetrie;
	};

	return (
		<div>
			<p className="partie-title">MAJOR PARTIES</p>
			{selectedSeat !== undefined &&
				selectedSeat.candidates !== undefined &&
				selectedSeat.candidates.map((value, key) => {
					let parte = getPetrie(value)
					return <PartieEach key={key} item={parte} />
				})
			}
		</div>
	)
}

export default Parties