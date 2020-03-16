import React, { useState } from 'react';
import { useSelector } from 'react-redux';


const Navbar = () => {
	const [value, setValue] = useState('');
	// const data = useSelector((state) => state.data);


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

			</ul>
		</>
	);
};

export default Navbar;
