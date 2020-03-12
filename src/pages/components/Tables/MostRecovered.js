import React, { useState } from 'react'
import Papa from 'papaparse'

const MostRecovered = () => {
  const [data, setData] = useState([])

  async function getData() {
    const response = await fetch("https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/03-10-2020.csv");
    const reader = response.body.getReader();
    const result = await reader.read(); // raw array
    const decoder = new TextDecoder('utf-8');
    const csv = decoder.decode(result.value);
    const results = Papa.parse(csv); // object with { data, errors, meta }
    let data = results.data
    // data = data.reduce((a, b, i) => {
    //   if (a[i] === b[i]) { a = + b[i] }

    // })
    data = data.slice().sort((a, b) => b[5] - a[5])
    setData(data)
  }
  getData()
  return (
    <table style={{ border: '10px solid black' }}>
      <tbody>
        <tr style={{ border: '5px solid black', fontSize: "1.4rem" }}>
          <th>Country/Region</th>
          <th>Recovered</th>
        </tr>
        {data.slice(1, 6).map(data => {
          return (
            <tr key={Math.random()}>
              <th>{data[1]}</th>
              <th>{data[5]}</th>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default MostRecovered
