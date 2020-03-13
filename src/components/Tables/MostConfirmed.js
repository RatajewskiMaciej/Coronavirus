import React from 'react';
import data from './Data';


const MostConfirmed = () => (
	<table style={{ border: '5px solid black', width: '20vw', height: '40%' }}>
		<tbody>
			<tr style={{ border: '2px solid black', fontSize: '1.4rem' }}>
				<th>Country/Region</th>
				<th>Confirmed</th>
			</tr>
			{data().slice(1, 6).map((data) => (
				<tr key={Math.random()}>
					<th>{data[1]}{data[0] ? `(${data[0]})` : null}</th>
					<th>{data[3]}</th>
				</tr>
			))}
		</tbody>
	</table>
);

export default MostConfirmed;
