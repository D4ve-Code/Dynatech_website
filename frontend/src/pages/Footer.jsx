import React from "react"
import { Link } from "react-router-dom"

import { BsLinkedin } from "react-icons/bs"
import { HiMail } from "react-icons/hi"

const Footer = () => {
  return (
    <div id="bottom_of_page" className="footer">
      <div className="adresse">
        <h2>ADRESSE</h2>
        <p>
          8 ter Chemin de Launay <br /> 78990 ELANCOURT
        </p>
      </div>
      <div className="contact">
        <h2>CONTACT</h2>
        <p>
          01 34 62 60 13 <br />
          contact@dynatech.fr
        </p>
      </div>
      <div className="recrutement">
        <h2>RECRUTEMENT</h2>
        <p>contact@dynatech.fr </p>
      </div>
      <div className="logos">
        <Link to="mailto:franck.lebreuil@dynatech-conseil.fr">
          <HiMail className="logo_mail" />
        </Link>
        <Link
          to="https://www.linkedin.com/in/florian-sirodot-54952025/"
          target="_blank"
        >
          <BsLinkedin className="logo_linkedin" />
        </Link>
      </div>
    </div>
  )
}

export default Footer
