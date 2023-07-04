import React from "react"
import { Link } from "react-router-dom"

import Avis from "../components/Avis"
import Team from "../components/Team"

import imageprojets from "../assets/images/sama.jpg"
import imageservicecoordo from "../assets/images/moda.jpeg"
import imageserviceformation from "../assets/images/formation.jpeg"
import imageserviceaudit from "../assets/images/audit.jpg"

const Home = () => {
  return (
    <>
      <h1 className="home_title_top">
        Coordination SPS et Prévention des risques
        <br /> professionnels
      </h1>
      <div className="home">
        <div className="projets_section">
          <p>
            Depuis 17 ans, nous nous engageons aux côtés de nos clients, les
            accompagnant avec passion dans des missions variées, en quête
            constante de leur réussite.
          </p>
          <div className="projets_photo">
            <Link to="/projets">
              <h2>Les projets</h2>
              <img
                className="picture_projects"
                src={imageprojets}
                alt="image des projets"
              ></img>
            </Link>
          </div>
        </div>
        <div className="services_sections">
          <p>Une expersite de proximité adapté à vos besoins</p>
          <div className="services_cards">
            <div className="service_coordination">
              <h2>Coordination SPS</h2>
              <img src={imageservicecoordo} alt="photo de la MODA" />
            </div>
            <div className="service_formation">
              <h2>
                Formations au poste de <br /> travail
              </h2>
              <img src={imageserviceformation} alt="photo de formation" />
            </div>
            <div className="service_audit">
              <h2>Conseils & Audits</h2>
              <img src={imageserviceaudit} alt="photo de réunion" />
            </div>
          </div>
        </div>
        <Avis />
        <Team />
      </div>
    </>
  )
}

export default Home
