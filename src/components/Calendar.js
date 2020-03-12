import React, { useState } from 'react'
export let day = ''

const Calendar = () => {
  const [date, setDate] = useState('')
  day = `${date.slice(5, 10)}-2020`
  return (
    <div>
      <input type="date" min="2020-01-22" max="2020-03-11" onChange={e => setDate(e.target.value)} />
      <div style={{ display: 'flex', justifyContent: "center" }}>{date ? `Data from: ${day}` : null}</div>
    </div>
  )
}


export default Calendar