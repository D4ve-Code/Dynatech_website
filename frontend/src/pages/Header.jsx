import React, { useState } from "react"
import { BiMenu } from "react-icons/bi"
import { RxCross2 } from "react-icons/rx"
import { Link } from "react-router-dom"

import logo from "../assets/images/LOGO.jpg"

const Header = () => {
  const handleClick = () => {
    window.scrollTo({
      top: document.querySelector(".footer_scroll").offsetTop,
      behavior: "smooth",
    })
  }

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="logo de l'entreprise" />
      </Link>
      <div className="menu-desktop">
        <ul>
          <Link to="/">
            <li>
              <a href="#" className="underline-hover-effect">
                Accueil
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
          <Link to="/projets">
            <li>
              <a href="#" className="underline-hover-effect">
                Les projets
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
      <div className="burgerMenu">
        <button className="buttonMenu" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <RxCross2 /> : <BiMenu />}
        </button>
        <nav>
          <div className="listMenuDiv">
            <ul
              className="listMenu"
              style={{ display: isOpen ? "block" : "none" }}
            >
              <Link to="/">
                <li
                  onClick={() => {
                    setIsOpen(false)
                  }}
                >
                  <a href="#">Accueil</a>
                </li>
              </Link>

              <Link to={"/services"}>
                <li
                  onClick={() => {
                    setIsOpen(false)
                  }}
                >
                  <a href="#">Nos services</a>
                </li>
              </Link>
              <Link to={"/projets"}>
                <li
                  onClick={() => {
                    setIsOpen(false)
                  }}
                >
                  <a href="#">Nos projets</a>
                </li>
              </Link>
              <Link to="/agence">
                <li
                  onClick={() => {
                    setIsOpen(false)
                  }}
                >
                  <a href="#">L'agence</a>
                </li>
              </Link>
              <Link to="/agence">
                <li
                  onClick={() => {
                    setIsOpen(false)
                    const element = document.getElementById("bottom_of_page")
                    if (element) {
                      window.scrollTo({
                        top: element.offsetTop,
                        behavior: "smooth",
                      })
                    }
                  }}
                >
                  <a href="#">Contact</a>
                </li>
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header
