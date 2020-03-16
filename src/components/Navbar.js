import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCountry } from '../redux/actions';


const Navbar = () => {
	const [value, setValue] = useState('');
	const [country, setCountry] = useState([]);
	const [index, setIndex] = useState([]);
	const data = useSelector((state) => state.data);
	const dispatch = useDispatch()
	const state = useSelector(state => state.country)

	useEffect(() => {
		data ? setCountry(data.map((item) => item.Country).filter((item) => item.includes(value))) : null;
		data ? setIndex(data.map((item) => item.Country).indexOf(value)) : null;
		data ? console.log(data.map((item) => item.Country).filter((item) => item.includes(state))) : null
	}, [value]);

	return (
		<>
			< nav >
				<div className="nav-wrapper grey">
					<form>
						<div className="input-field">
							<input
								id="search"
								type="search"
								autoComplete="off"
								placeholder="enter country"
								value={value}
								onChange={(e) => { e.preventDefault; setValue(e.target.value) }}
							/>
						</div>
					</form>
				</div>
			</nav >
			<ul>
				{value.length > 2 ? country.slice(0, 10).map((item) => (
					<li key={Math.random()}>
						<a
							href="#"
							onClick={() => { setValue(item), dispatch(updateCountry(item)) }} >
							{item === value ? null : item}
						</a>
					</li>
				)) : null}
			</ul>
			{data[index] ?
				<div>
					<span>Country: {data[index].Country}, </span>
					<span>Confirmed: {data[index].Confirmed}, </span>
					<span>Deaths: {data[index].Deaths}, </span>
					<span>Recovered: {data[index].Recovered}</span>
				</div> :
				null}
		</>
	);
};

export default Navbar;
