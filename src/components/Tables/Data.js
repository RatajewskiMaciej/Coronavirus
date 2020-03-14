import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { connect } from 'react-redux'


const data = (props) => {
	const [data, setData] = useState([]);


	useEffect(() => {
		getData();
		console.log(props)

	}, []);

	async function getData() {
		const response = await fetch(`https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/03-13-2020.csv`);
		const reader = response.body.getReader();
		const result = await reader.read(); // raw array
		const decoder = new TextDecoder('utf-8');
		const csv = decoder.decode(result.value);
		const results = Papa.parse(csv); // object with { data, errors, meta }
		const { data } = results;
		setData(data);
	}

	return data;
};

const mapStateToProps = state => ({
	date: state.date
})
connect(mapStateToProps, {})(data)

export default data;
