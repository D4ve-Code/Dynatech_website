import React, { useEffect } from "react"

import imagecoordo from "../assets/images/moda.jpeg"
import imageformation from "../assets/images/formation.jpeg"
import imageconseil from "../assets/images/audit.jpg"

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="services">
      <h1>Nos services disponibles</h1>
      <div className="services_page">
        <p className="first_p">
          {/* Une expertise de proximité adapté à vos besoins. */}
        </p>
        <div className="services_coordination">
          <div className="coordination_photo">
            <h3>Coordination SPS</h3>
            <img src={imagecoordo} alt="image de chantier" />
          </div>
          <p>
            Notre équipe de Coordonnateurs SPS vous accompagne de la phase
            conception à la réalisation de tous vos projets de construction.
            Notre approche du métier centrée sur l'efficacité vous garantit des
            résultats rapides et visibles.
          </p>
        </div>
        <div className="service_formation">
          <div className="formation_photo">
            <h3>Management en prévention des risques</h3>
            <img src={imageformation} alt="image de formation" />
          </div>
          <p>
            Nous mettons à votre disposition des profils QSE adaptés à votre
            besoin{" "}
          </p>
          <div className="liste_formation">
            <div className="liste_left">
              {" "}
              <ul className="liste1">
                <h4>Anne-Sophie</h4>
                <li>29 ans</li>
                <li>Anime les réunions QSE</li>
                <li>Forme les sous-traitants au risque plomb</li>
                <li>Diplomate et sait gérer les conflits</li>
                <li>Force de proposition</li>
                <li>Excellentes capacités rédactionnelles</li>
              </ul>
              <ul className="liste2">
                <h4>Adrien</h4>
                <li>22 ans</li>
                <li>Accueille les nouveaux arrivants</li>
                <li>Réalise les causeries sécurité</li>
                <li>Formalise ses visites sécurités</li>
                <li>Analyse les incidents</li>
                <li>Très à l'aise sur le terrain</li>
                <li>Excellent relationnel</li>
              </ul>
            </div>
            <div className="liste_right">
              {" "}
              <ul className="liste3">
                <h4>Aymen</h4>
                <li>44 ans</li>
                <li>Rédige les procédures QSE</li>
                <li>Assure le reporting QSE</li>
                <li>Expert en certifications ISO</li>
                <li>Très autonome</li>
                <li>Loyal et fiable</li>
                <li>Rigoureux</li>
                <li>Analyse les travaux de désamiantage</li>
              </ul>{" "}
              <ul className="liste4">
                <h4>Laure</h4>
                <li>33 ans</li>
                <li>Maîtrise les modes opératoires de construction</li>
                <li>Bras droit du patron de chantier</li>
                <li>Persévérante</li>
                <li>Influente</li>
                <li>Dotée de sang-froid</li>
                <li>Met à jour le DUER</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services_conseil">
          <div className="conseil_photo">
            <h3>Conseil, Formations et Audits</h3>
            <img src={imageconseil} alt="image d'un audit" />
          </div>
          <p className="p_bullet">
            Nous réalisions des missions d'audits, de conseil et de formations
            "sur-mesure" en fonction de vos besoins :<br />
            <br />
            <ul>
              <li>Audit opérationnel sécurité</li>
              <li>Audit interne QSE</li>
              <li>Audit à blanc</li>
              <li>Audit des processus managériaux</li>
              <li>
                Formations techniques (élingage, permis feu, réalisation du
                DUERP, gestion de crise, ...)
              </li>
              <li>
                Formation sécurité à destination des Maîtres d'Ouvrages et
                membres des Comités de Direction (réglementation sécurité, rôles
                et responsabilité, délégations de pouvoirs, ...)
              </li>
              <li>
                Accompagnement des Maitres d’Œuvre et Entreprises Générales dans
                l’intégration des enjeux et aspects HSE dans les remises
                d’offre.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services
