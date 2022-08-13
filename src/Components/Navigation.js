import React from 'react'
import logo from "./logo.png"
import './Navbar.css'

function Navigation() {
  return (
    <div className='navbar'>
        <img src={logo} alt="website-logo" />
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">Info</a></li>
        </ul>
        <div>
            <input type="text" />
            <button>Search</button>
        </div>
    </div>  
  )
}

export default Navigation   