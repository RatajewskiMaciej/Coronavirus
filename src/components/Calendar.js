import React, { useContext, useEffect } from 'react'
import CalendarContext from './calendarContext/context'

const Calendar = () => {
  const calendarContext = useContext(CalendarContext);
  let { day, updateDay } = calendarContext;
  day = `${day.slice(5, 10)}-2020`;
  useEffect(() => {
    console.log(day)
  }, [])
  return (
    <div>
      <input type="date" min="2020-01-22" max="2020-03-11" onChange={e => updateDay(e.target.value)} />
      <div style={{ display: 'flex', justifyContent: "center" }}>{day !== "-2020" ? `Data from: ${day}` : null}</div>
    </div>
  )
}


export default Calendar