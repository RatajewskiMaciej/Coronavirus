import React, { useState } from 'react'
import Papa from 'papaparse'


const Data = () => {
  const [data, setData] = useState([])

  async function getData() {
    const response = await fetch("https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/03-10-2020.csv");
    const reader = response.body.getReader();
    const result = await reader.read(); // raw array
    const decoder = new TextDecoder('utf-8');
    const csv = decoder.decode(result.value);
    const results = Papa.parse(csv); // object with { data, errors, meta }
    const data = results.data;
    setData(data)
  }
  getData()
  return console.log(data)
}
export default Data
