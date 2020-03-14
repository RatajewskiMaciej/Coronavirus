import React, { useState } from 'react';
import { connect } from 'react-redux'
import { updateDate } from './redux/actions'

const Calendar = (props) => {

	const [day, setDay] = useState([]);

	return (
		<div>
			<input
				type="date"
				min="2020-01-22"
				max="2020-03-13"
				onChange={(e) => {
					setDay(e.target.value);
					props.updateDate(`${e.target.value.slice(5, 10)}-2020`)
				}}
			/>
			<div style={{
				display: 'flex',
				justifyContent: 'center'
			}}>
				{day !== '-2020' ?
					`Data from: ${day}` :
					null}
			</div>
		</div>
	);
};


export default connect(null, { updateDate })(Calendar);
