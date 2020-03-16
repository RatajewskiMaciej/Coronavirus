import React from 'react';
import { useSelector } from 'react-redux';


const MostRecovered = () => {
	const data = useSelector((state) => state.data);


	const recovered = data ? data.sort((a, b) => b[5] - a[5]) : null;

	return (
		<table style={{ border: '5px solid black', width: '20vw', height: '40%' }}>
			<tbody>
				<tr style={{ border: '2px solid black', fontSize: '1.4rem' }}>
					<th>Country/Region</th>
					<th>Recovered</th>
				</tr>
				{recovered.slice(1, 6).map((data) => (
					<tr key={Math.random()}>
						<th>{data.Country}{data.Province ? `(${data.Province})` : null}</th>
						<th>{data.Recovered}</th>
					</tr>
				))}
			</tbody>
		</table>
	);
};


export default MostRecovered;
