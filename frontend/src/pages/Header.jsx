import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1>DYNATECH</h1>
      </Link>
      <div className="menu">
        <ul>
          <Link to="/projets">
            <li>Les projets</li>
          </Link>
          <li>Les services</li>
          <li>L'agence</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
