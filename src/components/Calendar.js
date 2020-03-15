import React, { useState } from 'react';
import { connect } from 'react-redux'
import { updateDate } from '../redux/actions'

const Calendar = ({ updateDate }) => {

	const [day, setDay] = useState('');


	return (
		<div>
			<input
				type="date"
				min="2020-01-22"
				max="2020-03-14"
				onChange={(e) => {
					setDay(e.target.value);
					updateDate(`${e.target.value.slice(5, 10)}-2020`)
				}}
			/>
			<div style={{
				display: 'flex',
				justifyContent: 'center'
			}}>
				{day === "-2020" || day == '' ?
					'Data from: 2020-01-22' :
					`Data from: ${day}`
				}
			</div>
		</div>
	);
};


export default connect(null, { updateDate })(Calendar);
