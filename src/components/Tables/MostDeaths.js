import React from 'react';
import { connect } from 'react-redux';

const MostDeaths = ({ data }) => {
	const deaths = data ? data.sort((a, b) => b[4] - a[4]) : null;

	return (
		<table style={{ border: '5px solid black', width: '20vw', height: '40%' }}>
			<tbody>
				<tr style={{ border: '2px solid black', fontSize: '1.4rem' }}>
					<th>Country/Region</th>
					<th>Deaths</th>
				</tr>
				{deaths.slice(1, 6).map((data) => (
					<tr key={Math.random()}>
						<th>{data[1]}{data[0] ? `(${data[0]})` : null}</th>
						<th>{data[4]}</th>
					</tr>
				))}
			</tbody>
		</table>
	);
};

const mapStateToProps = (state) => ({
	data: state.data,
});

export default connect(mapStateToProps, {})(MostDeaths);
