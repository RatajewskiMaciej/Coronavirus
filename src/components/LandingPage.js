import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { connect } from 'react-redux'
import MoralityRate from './Tables/MoralityRate';
import MostConfirmed from './Tables/MostConfirmed';
import MostDeaths from './Tables/MostDeaths';
import MostRecovered from './Tables/MostRecovered';
import { updateData } from '../redux/actions'


const LandingPage = ({ date, updateData }) => {

	useEffect(() => {
		getData();
	}, []);

	async function getData() {
		const response = await fetch(`https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/${date ? date : "01-22-2020"}.csv`);
		const reader = response.body.getReader();
		const result = await reader.read();
		const decoder = new TextDecoder('utf-8');
		const csv = decoder.decode(result.value);
		const results = Papa.parse(csv);
		const { data } = results;
		updateData(['dziala'])
	}

	return (
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
		</div>)
};
const mapStateToProps = state => ({
	date: state.date,
})

export default connect(mapStateToProps, { updateData })(LandingPage);
