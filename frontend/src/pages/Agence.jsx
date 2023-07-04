import React, { useEffect } from "react"

import franck from "../assets/images/franck.jpg"
import flo from "../assets/images/flo.jpg"
import nathalie from "../assets/images/nathalie.jpg"
import gerard from "../assets/images/gerard.jpg"

const Agence = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="agence">
      <h1>L'agence</h1>
      <p className="first_p">
        L’équipe DYNATECH prouve au quotidien son engagement envers la qualité,
        la sécurité et votre satisfaction. Faites-nous confiance pour la
        réussite de vos projets.
      </p>
      <div className="portraits">
        <div className="portraits_line_1">
          <div className="portrait1">
            <img src={franck} alt="portrait de franck" />
            <p>
              <span className="nom">Franck LEBREUIL</span>, chef d'orchestre,
              CSPS de catégorie 1. En 2003, Franck a fondé DYNATECH pour
              soutenir les équipes du Château de FONTAINBLEAU lors de l'une des
              plus importantes rénovations du château. Depuis l’aventure
              continue !
            </p>
          </div>
          <div className="portrait2">
            <img src={flo} alt="portrait de flo" />
            <p>
              <span className="nom">Florian SIRODOT</span> occupe le poste de
              Responsable et Manager, ainsi que d'expert CSPS de catégorie 1.
              Après avoir réussi dans son parcours chez les majors du BTP, il
              accompagne l'ensemble de nos clients et se charge du développement
              de nos activités.
            </p>
          </div>
        </div>
        <div className="portraits_line_2">
          <div className="portrait3">
            <img src={nathalie} alt="portrait de nathalie" />
            <p>
              <span className="nom">Nathalie YUN</span> est notre experte en
              sécurité et CSPS de catégorie 2. Elle travaille en étroite
              collaboration avec nos clients sur leurs projets récents,
              contribuant ainsi à améliorer les compétences de leurs équipes en
              matière de santé, sécurité et environnement.
            </p>
          </div>
          <div className="portrait4">
            <img src={gerard} alt="portrait de gerard" />
            <p>
              <span className="nom">Gérard DION</span> notre "couteau suisse"
              QSE, est membre de notre équipe depuis 3 ans. Son expertise
              s'étend notamment à l'impact environnemental et aux certifications
              de type ISO, apportant ainsi une valeur ajoutée à nos services.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Agence
