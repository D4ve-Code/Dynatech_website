import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
  const handleClick = () => {
    window.scrollTo({
      top: document.querySelector(".footer_scroll").offsetTop,
      behavior: "smooth",
    })
  }
  return (
    <div className="header">
      <Link to="/">
        <h1>DYNATECH</h1>
      </Link>
      <div className="menu">
        <ul>
          <Link to="/projets">
            <li>
              <a href="#" className="underline-hover-effect">
                Les projets
              </a>
            </li>
          </Link>
          <Link to="/services">
            <li>
              <a href="#" className="underline-hover-effect">
                Les services
              </a>
            </li>
          </Link>
          <Link to="/agence">
            <li>
              <a href="#" className="underline-hover-effect">
                L'agence
              </a>
            </li>
          </Link>
          <li onClick={handleClick}>
            {" "}
            <a href="#" className="underline-hover-effect">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
