import React, { useEffect } from "react"
import { Link } from "react-router-dom"

import Avis from "../components/Avis"
import Team from "../components/Team"

import imageprojets from "../assets/images/imageprojet102.jpg"

import imageserviceformation from "../assets/images/formation.jpeg"
import imageserviceaudit from "../assets/images/audit.jpg"

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <h1 className="home_title_top">
        Coordination SPS et conseil en management
        <br /> des risques professionnels
      </h1>
      <div className="home">
        <div className="services_sections">
          <p>
            DYNATECH est depuis 2010 une entreprise de conseil en prévention des
            risques professionnels principalement implantée dans le domaine de
            la construction, dont la vocation est de proposer à ses clients un
            accompagnement personnalisé dans la maîtrise des risques.
          </p>
          <div className="services_cards">
            <div className="service_coordination">
              <Link to="/services">
                {" "}
                <h2>Coordination SPS</h2>
                <img src={imageprojets} alt="photo de LIGHTWELL" />
              </Link>
            </div>
            <div className="service_prevention">
              <Link to="/services">
                {" "}
                <h2>
                  Management des risques <br /> professionnels
                </h2>
                <img src={imageserviceformation} alt="photo de formation" />
              </Link>
            </div>
            <div className="service_audit">
              <Link to="/services">
                <h2>Conseil, Formation et Audit</h2>
                <img src={imageserviceaudit} alt="photo de réunion" />
              </Link>
            </div>
          </div>
        </div>
        <div className="projets_section">
          <p>
            L’entreprise est dirigée par des professionnels de la coordination
            SPS, de l’animation QSE sur chantier et dans le management des
            ingénieurs QSE sur les sites d’implantation de ses clients
          </p>
          <div className="projets_photo">
            <Link to="/projets">
              <h2>Les projets</h2>
              <img
                className="picture_projects"
                src={imageprojets}
                alt="image des projets"
              />
            </Link>
          </div>
        </div>

        <Avis />
        <Team />
      </div>
    </>
  )
}

export default Home
