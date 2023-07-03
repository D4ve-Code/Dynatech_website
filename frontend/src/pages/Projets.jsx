import React, { useEffect } from "react"

import imageprojets1 from "../assets/images/imageprojet1.jpg"
import imageprojets2 from "../assets/images/imageprojet2.jpg"
import imageprojets3 from "../assets/images/imageprojet3.jpg"
import imageprojets4 from "../assets/images/imageprojet4.jpg"
import imageprojets5 from "../assets/images/imageprojet5.jpg"

const Projets = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="projets">
      <h1>Nos Projets</h1>
      <div className="projets_images">
        <div className="projets_images_1">
          <img src={imageprojets1} alt="image du projet 1" />
          <p>
            <h3>Ancien siège de l'HUMA</h3> <br />
            Coordination SPS <br />
            Maître d'ouvrage : AVIVA // AMO : Théop <br />
            Architecte : B-archi
          </p>
        </div>
        <div className="projets_images_2">
          <img src={imageprojets2} alt="image du projet 2" />
        </div>
        <div className="projets_images_3">
          <img src={imageprojets3} alt="image du projet 3" />
        </div>
        <div className="projets_images_4">
          <img src={imageprojets4} alt="image du projet 4" />
        </div>
        <div className="projets_images_5">
          <img src={imageprojets5} alt="image du projet 5" />
        </div>
      </div>
    </div>
  )
}

export default Projets
