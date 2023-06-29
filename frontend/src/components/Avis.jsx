import React from "react"

const avis = () => {
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
        <button>Leurs projets</button>
      </div>
      <div className="avis_right">
        <div className="avis_carou">
          <h1>ici ira le carousel des avis</h1>
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

export default avis
