import React, { useState } from "react"
import { BiMenu } from "react-icons/bi"
import { RxCross2 } from "react-icons/rx"
import { Link } from "react-router-dom"

import logo from "../assets/images/LOGO.jpg"

const Header = () => {
  // ***** Mofifié par CC ***** //
  const handleClick = (event) => {
    event.preventDefault()
    window.scrollTo({
      top: document.querySelector(".footer_scroll").offsetTop,
      behavior: "smooth",
    })
  }

  const [isOpen, setIsOpen] = useState(false)

  // ***** Ajout CC ***** //
  const scrollToTop = (event) => {
    event.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="logo de l'entreprise" />
      </Link>
      <div className="menu-desktop">
        <ul>
          <li
            onClick={(event) => {
              scrollToTop(event)
            }}
          >
            <Link className="underline-hover-effect" to="/">
              Accueil
            </Link>
          </li>

          <li
            onClick={(event) => {
              scrollToTop(event)
            }}
          >
            <Link className="underline-hover-effect" to="/services">
              Les services
            </Link>
          </li>

          <li
            onClick={(event) => {
              scrollToTop(event)
            }}
          >
            <Link className="underline-hover-effect" to="/projets">
              Les projets
            </Link>
          </li>

          <li
            onClick={(event) => {
              scrollToTop(event)
            }}
          >
            <Link className="underline-hover-effect" to="/agence">
              L'agence
            </Link>
          </li>

          <li
            onClick={(event) => {
              handleClick(event)
            }}
          >
            <a className="underline-hover-effect" href="#">
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
              <li
                onClick={(event) => {
                  scrollToTop(event)
                  setIsOpen(false)
                }}
              >
                <Link to="/">Accueil</Link>
              </li>
              <li
                onClick={(event) => {
                  scrollToTop(event)
                  setIsOpen(false)
                }}
              >
                <Link to="/services">Nos services</Link>
              </li>
              <li
                onClick={(event) => {
                  scrollToTop(event)
                  setIsOpen(false)
                }}
              >
                <Link to="/projets">Nos projets</Link>
              </li>
              <li
                onClick={(event) => {
                  scrollToTop(event)
                  setIsOpen(false)
                }}
              >
                <Link to="/agence">L'agence</Link>
              </li>
              <li
                onClick={(event) => {
                  event.preventDefault()
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
                <Link to="#">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header
