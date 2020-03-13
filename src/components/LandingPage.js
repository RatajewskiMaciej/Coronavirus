import React from 'react';
import MoralityRate from './Tables/MoralityRate';
import MostConfirmed from './Tables/MostConfirmed';
import MostDeaths from './Tables/MostDeaths';
import MostRecovered from './Tables/MostRecovered';


const LandingPage = () => (
	<div style={{
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		paddingTop: '50px',
		flexWrap: 'wrap',
	}}>
		<MostConfirmed />
		<MostDeaths />
		<MostRecovered />
		<MoralityRate />
	</div>
);

export default LandingPage;
