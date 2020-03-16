import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';


const Navbar = () => {
	const [value, setValue] = useState('');
	const [country, setCountry] = useState([])
	const [index, setIndex] = useState([])
	const data = useSelector((state) => state.data);

	useEffect(() => {
		data ? setCountry(data.map((item) => item.Country).filter(item => item.includes(value))) : null;
		data ? setIndex(data.map((item) => item.Country).indexOf(value)) : null
		// console.log(index)
		// console.log(country)
		// console.log(data[index])
	}, [value])
	const onClick = (e) => { console.log(e.currentTarget.value) }

	return (
		<>
			< nav >
				<div className="nav-wrapper grey">
					<form>
						<div className="input-field">
							<input
								id="search"
								type="search"
								placeholder="enter country"
								value={value}
								onChange={(e) => { e.preventDefault; setValue(e.target.value); }}
							/>
						</div>
					</form>
				</div>
			</nav >
			<ul>
				{value.length > 2 ? country.slice(0, 10).map((item) => (
					<li key={Math.random()}><a href="#" onClick={onClick}>{item}</a></li>
				)) : null}
			</ul>
		</>
	);
};

export default Navbar;
