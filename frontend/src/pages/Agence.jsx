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
        <div className="portraits_line_1">
          <div className="portrait1">
            <img src={franck} alt="portrait de franck" />
            <p>
              <span className="nom">Franck LEBREUIL, </span>
              Dirigeant de DYNATECH, réalise depuis 1995 des missions de
              Coordination SPS sur des opérations mobilisant jusqu'à 500
              personnes. Formateur de Coordonnateur SPS, son pouvoir de
              conviction est une force pour vos chantiers !
            </p>
          </div>
          <div className="portrait2">
            <img src={flo} alt="portrait de flo" />
            <p>
              <span className="nom">Christophe LAVENIR, </span>
              Directeur Général, réalise les missions administratives et
              fonctionnelles pour assurer le bon fonctionnement de la société.
            </p>
          </div>
        </div>
        <div className="portraits_line_2">
          <div className="portrait3">
            <img src={nathalie} alt="portrait de nathalie" />
            <p>
              <span className="nom">Florian SIRODOT, </span>Chef de Service QSE,
              exerce depuis 15 ans dans les métiers de la Qualité, Sécurité et
              Environnement.. Manager des consultants et également Coordonnateur
              SPS, sa maitrise des sujets opérationnels fait de lui un leader
              dans le domaine !
            </p>
          </div>
          <div className="portrait4">
            <img src={gerard} alt="portrait de gerard" />
            <p>
              <span className="nom">Karim BELAID, </span>Chef de Service QSE,
              exerce depuis 15 ans dans les métiers de la Qualité, Sécurité et
              Environnement.. Manager des consultants et également Coordonnateur
              SPS, sa maitrise des sujets opérationnels fait de lui un leader
              dans le domaine !{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Agence
