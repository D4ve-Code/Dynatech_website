import React from "react"
import { Link } from "react-router-dom"

import logolidl from "../assets/images/logo_lidl.png"
import photolidl from "../assets/images/photo_lidl2.jpg"

const Avis = () => {
  return (
    <div className="avis">
      <div className="avis_texte">
        <p className="texte1">
          Découvrez nos clients privilégiés où confiance rime avec partenariat.
        </p>
        <p className="texte2">
          Depuis 17 ans, nous nous engageons aux côtés de nos clients, les
          accompagnant avec passion dans des missions variées, en quête
          constante de leur réussite
        </p>
        <Link to="/projets">
          {" "}
          <button className="button_fonction">Leurs projets</button>
        </Link>
      </div>
      <div className="avis_right">
        <div className="avis_card">
          <div className="card_left">
            <div className="card_left_image_text">
              <img src={logolidl} alt="image du logo" />
              <p className="card_text">
                "A nos côtés en mission CSPS pour un accompagnement
                personnalisé"
              </p>
              <p className="card_name">
                Mohamed El Tik, Directeur technique LIDL
              </p>
            </div>

            <div className="bullets">
              <div className="bullet1"></div>
              <div className="bullet2"></div>
              <div className="bullet3"></div>
              <div className="bullet4"></div>
            </div>
          </div>
          <div className="card_right">
            <img src={photolidl} alt="photo d'un magasin" />
          </div>
        </div>
        <div className="avis_chiffres">
          <div className="avis_chiffres1">
            <h3>75+</h3>
            <p>Clients accompagnés</p>
          </div>
          <div className="avis_chiffres2">
            <h3>20+</h3>
            <p>Années d'expérience et expertise</p>
          </div>
          <div className="avis_chiffres3">
            <h3>63</h3>
            <p>Projets en France</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Avis
