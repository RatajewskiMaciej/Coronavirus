import React from 'react';
import { useSelector } from 'react-redux';

const MostDeaths = () => {
	const data = useSelector((state) => state.data);

	const deaths = data ? data.sort((a, b) => b.Deaths - a.Deaths) : null;

	return (
		<table style={{ border: '5px solid black', width: '20vw', height: '40%' }}>
			<tbody>
				<tr style={{ border: '2px solid black', fontSize: '1.4rem' }}>
					<th>Country/Region</th>
					<th>Deaths</th>
				</tr>
				{deaths.slice(1, 6).map((data) => (
					<tr key={Math.random()}>
						<th>{data.Country}{data.Province ? `(${data.Province})` : null}</th>
						<th>{data.Deaths}</th>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default MostDeaths;
