import React, { useState } from 'react'
import data from './Data'


const MostRecovered = () => {

  const recovered = data().slice().sort((a, b) => b[5] - a[5])

  return (
    <table style={{ border: '5px solid black', width: "20vw", height: '40%' }}>
      <tbody>
        <tr style={{ border: '2px solid black', fontSize: "1.4rem" }}>
          <th>Country/Region</th>
          <th>Recovered</th>
        </tr>
        {recovered.slice(1, 6).map(data => {
          return (
            <tr key={Math.random()}>
              <th>{data[1]}{data[0] ? "(" + data[0] + ")" : null}</th>
              <th>{data[5]}</th>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default MostRecovered
