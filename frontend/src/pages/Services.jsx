import React from "react"

import imagecoordo from "../assets/images/moda.jpeg"
import imageformation from "../assets/images/formation.jpeg"
import imageconseil from "../assets/images/audit.jpg"

const Services = () => {
  return (
    <div className="services">
      <h1>Les services</h1>
      <div className="services_page">
        <p className="first_p">
          Une expertise de proximité adapté à vos besoins.
        </p>
        <div className="services_coordination">
          <div className="coordination_photo">
            <h3>Coordination SPS</h3>
            <img src={imagecoordo} alt="image de chantier" />
          </div>
          <p>
            S’assurer de l’intégration des dispositifs nécessaires à l’entretien
            ultérieur des ouvrages et équipements en toute sécurité. Limiter les
            risques liés à la coactivité des entreprises sur les projets
            industriels ou de bâtiment.
          </p>
        </div>
        <div className="service_formation">
          <div className="formation_photo">
            <h3>Formation au poste de travail</h3>
            <img src={imageformation} alt="image de formation" />
          </div>
          <p>
            Vous recherchez une formation ? Faites confiance à notre expérience
            et construisons ensemble votre projet formation.
          </p>
          <div className="liste_formation">
            <ul className="liste1">
              <h4>Formations obligatoires</h4>
              <li>AIPR</li>
              <li>CMR - Plomb</li>
              <li>Echafaudage</li>
              <li>Travaux en hauteur</li>
              <li>Etc.</li>
            </ul>
            <ul className="liste2">
              <h4>Formations complémentaires</h4>
              <li>Gestion des déchets</li>
              <li>Sécurité incendie</li>
              <li>Management HSE</li>
              <li>Etc.</li>
            </ul>
          </div>
        </div>
        <div className="services_conseil">
          <div className="conseil_photo">
            <h3>Conseils et Audit</h3>
            <img src={imageconseil} alt="image d'un audit" />
          </div>
          <p>
            Nous accompagnons depuis plusieurs années nos clients en conseils ou
            certifications. <br />
            Process managérial HSE
            <br />
            Process Qualité
            <br />
            ISO 9001
            <br />
            ISO 14001
            <br />
            OHSAS 18001
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services
