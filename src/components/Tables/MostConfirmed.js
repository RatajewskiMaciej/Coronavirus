import React from 'react';
import { useSelector } from 'react-redux';


const MostConfirmed = () => {
	const data = useSelector((state) => state.data);


	return (
		<table style={{ border: '5px solid black', width: '20vw', height: '40%' }
		} >
			<tbody>
				<tr style={{ border: '2px solid black', fontSize: '1.4rem' }}>
					<th>Country/Region</th>
					<th>Confirmed</th>
				</tr>
				{data.slice(1, 6).map((data) => (
					<tr key={Math.random()}>
						<th>{data.Country}{data.Province ? `(${data.Province})` : null}</th>
						<th>{data.Confirmed}</th>
					</tr>
				))}
			</tbody>
		</table >
	);
};


export default MostConfirmed;
