import React from "react"
import { Link } from "react-router-dom"

import { BsLinkedin } from "react-icons/bs"
import { HiMail } from "react-icons/hi"

const Footer = () => {
  return (
    <div className="footer">
      <div className="adresse">
        <h2>ADRESSE</h2>
        <p>
          Chemin de Launay <br /> 78990 ELANCOURT
        </p>
      </div>
      <div className="contact">
        <h2>CONTACT</h2>
        <p>
          {/* &#40;33&#41;  */}
          06 85 75 65 15 <br />
          dynatech.conseil@gmail.com
        </p>
      </div>
      <div className="logos">
        <Link to="mailto:franck.lebreuil@dynatech-conseil.fr">
          <HiMail className="logo_mail" />
        </Link>{" "}
        <Link
          to="https://www.linkedin.com/in/florian-sirodot-54952025/"
          target="_blank"
        >
          <BsLinkedin className="logo_linkedin" />
        </Link>{" "}
      </div>
    </div>
  )
}

export default Footer
