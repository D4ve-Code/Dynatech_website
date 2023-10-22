import React, { useEffect } from "react"

import franck from "../assets/images/franck.jpg"
import christophe from "../assets/images/christophe.jpg"
import florian from "../assets/images/florian.jpg"
import karim from "../assets/images/karim.jpg"

const Agence = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="agence">
      <h1>L'agence</h1>
      <p className="first_p">
        Nous faisons de notre proximité, notre disponibilité et notre
        implication des atouts majeurs pour répondre rapidement aux demandes nos
        clients. <br />
        DYNATECH, c'est le choix sécurité !
      </p>
      <div className="valeurs">
        <p># Partenariat</p>
        <p># Experience</p>
        <p># Accompagnement</p>
        <p># Valeur ajoutée</p>
      </div>

      <div className="portraits">
        <div className="portraits_line">
          <div className="divPortrait">
            <img className="imgPortrait" src={karim} alt="portrait de karim" />
            <p className="pres">
              <span className="nom">Karim BELAID, </span>Consultant QSE, réalise
              depuis 5 ans des missions d'ingénieur QSE et préventeur chantier
              pour le compte de Maître d'Ouvrage et entrepreneur du BTP. Homme
              de terrain, pédagogue et très impliqué dans le quotidien des
              chantiers, Karim est un élément incontournable !{" "}
            </p>
          </div>
        </div>

        <div className="portraits_line">
          <div className="divPortrait">
            <img
              className="imgPortrait"
              src={franck}
              alt="portrait de franck"
            />
            <p className="pres">
              <span className="nom">Franck LEBREUIL, </span>
              Dirigeant de DYNATECH, réalise depuis 1995 des missions de
              Coordination SPS sur des opérations mobilisant jusqu'à 500
              personnes. Formateur de Coordonnateur SPS, son pouvoir de
              conviction est une force pour vos chantiers !
            </p>
          </div>
          <div className="divPortrait">
            <img
              className="imgPortrait"
              src={christophe}
              alt="portrait de christophe"
            />
            <p className="pres">
              <span className="nom">Christophe LAVENIR, </span>
              Directeur Général, réalise les missions administratives et
              fonctionnelles pour assurer le bon fonctionnement de la société.
            </p>
          </div>
        </div>

        <div className="portraits_line">
          <div className="divPortrait">
            <img
              className="imgPortrait"
              src={florian}
              alt="portrait de florian"
            />
            <p className="pres">
              <span className="nom">Florian SIRODOT, </span>Chef de Service QSE,
              exerce depuis 15 ans dans les métiers de la Qualité, Sécurité et
              Environnement.. Manager des consultants et également Coordonnateur
              SPS, sa maitrise des sujets opérationnels fait de lui un leader
              dans le domaine !
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Agence
