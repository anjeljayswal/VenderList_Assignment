import React from 'react'
import { NavLink } from 'react-router-dom'
import "./header.css"

const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <div className="left">
            <h1>A J</h1>
          </div>
          <div className="right">
            <ul>
              <li>
                <NavLink to="/">
                  Home
                </NavLink>
                <NavLink to="/login">
                  Login
                </NavLink>
                <NavLink to="/dashboard">
                  Dashboard
                </NavLink>
              </li>
              <li>
                <img src="/logo192.png" style={{width:"50px", borderRadius:"50px"}} alt="" />
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header
