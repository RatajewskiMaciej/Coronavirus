import React from 'react';
import { connect } from 'react-redux'


const MostRecovered = ({ data }) => {
	const recovered = data ? data.sort((a, b) => b[5] - a[5]) : null;

	return (
		<>{
			data ?
				<table style={{ border: '5px solid black', width: '20vw', height: '40%' }}>
					<tbody>
						<tr style={{ border: '2px solid black', fontSize: '1.4rem' }}>
							<th>Country/Region</th>
							<th>Recovered</th>
						</tr>
						{recovered.slice(1, 6).map((data) => (
							<tr key={Math.random()}>
								<th>{data[1]}{data[0] ? `(${data[0]})` : null}</th>
								<th>{data[5]}</th>
							</tr>
						))}
					</tbody>
				</table>
				: null
		}
		</>
	);
};
const mapStateToProps = state => ({
	data: state.data
})

export default connect(mapStateToProps, {})(MostRecovered);

