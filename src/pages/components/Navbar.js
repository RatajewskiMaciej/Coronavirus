import React, { useState } from 'react'
import data from './Tables/Data'

const Navbar = () => {

  const [value, setValue] = useState('')
  const [result, setResult] = useState([])

  const filter = () => {
    const array = data()
    for (let i = 0; i < array.length; i++) {
      if (i === array.length - 1) { break; }
      else {
        if (array[i][1] === value) {
          setResult(...result, array[i])
        }
        else { null }
      }
    }
  }
  filter()

  return (
    < nav >
      <div className="nav-wrapper grey">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              placeholder="enter country"
              value={value}
              onChange={e => { e.preventDefault; setValue(e.target.value) }}
            />
          </div>
        </form>
      </div>
    </nav >
  )
}

export default Navbar
