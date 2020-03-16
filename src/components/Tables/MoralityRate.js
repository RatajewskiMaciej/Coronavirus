import React from 'react';
import { useSelector } from 'react-redux';

const MoralityRate = () => {
	const data = useSelector((state) => state.data);

	const rate = data ? data.sort((a, b) => b[4] / b[3] - a[4] / a[3]) : null;

	return (
		<table style={{ border: '5px solid black', width: '20vw', height: '40%' }}>
			<tbody>
				<tr style={{ border: '2px solid black', fontSize: '1.4rem' }}>
					<th>Country/Region</th>
					<th>Morality Rate</th>
				</tr>
				{rate.slice(1, 6).map((data) => (
					<tr key={Math.random()}>
						<th>{data.Country}{data.Province ? `(${data.Province})` : null}</th>
						<th>{(data.Deaths / data.Confirmed * 100).toFixed(2)}%</th>
					</tr>
				))}
			</tbody>
		</table>
	);
};


export default MoralityRate;
