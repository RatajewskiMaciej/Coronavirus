import React from 'react'

const Navbar = () => {
  return (

    <nav>
      <div className="nav-wrapper grey">
        <form>
          <div className="input-field">
            <input id="search" type="search" defaultValue="Enter COUNTRY/REGION" />
          </div>
        </form>
      </div>
    </nav>
  )
}

export default Navbar
