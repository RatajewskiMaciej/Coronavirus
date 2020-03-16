import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateDate } from '../redux/actions';

const Calendar = () => {
	const [day, setDay] = useState('');
	const dispatch = useDispatch();

	return (
		<div>
			<input
				type="date"
				min="2020-01-22"
				max="2020-03-15"
				onChange={(e) => {
					setDay(e.target.value);
					dispatch(updateDate(`${e.target.value.slice(5, 10)}-2020`));
				}}
			/>
			<div style={{
				display: 'flex',
				justifyContent: 'center',
			}}>
				{day === '-2020' || day === ''
					? 'Data day: 2020-01-22'
					: `Data day: ${day}`
				}
			</div>
		</div>
	);
};


export default Calendar;
