import React, { useState, useEffect, useContext } from 'react'
import Papa from 'papaparse'
import CalendarContext from '../calendarContext/context'

const data = () => {
  const [data, setData] = useState([])
  const calendarContext = useContext(CalendarContext);
  let { day } = calendarContext;

  useEffect(() => {
    getData()
    console.log(day)
  }, [])

  async function getData() {
    const response = await fetch(`https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/${day ? day : "03-11-2020"}.csv`);
    const reader = response.body.getReader();
    const result = await reader.read(); // raw array
    const decoder = new TextDecoder('utf-8');
    const csv = decoder.decode(result.value);
    const results = Papa.parse(csv); // object with { data, errors, meta }
    const data = results.data;
    setData(data)
  }

  return data
}
export default data
