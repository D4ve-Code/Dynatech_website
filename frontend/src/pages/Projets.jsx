import React, { useEffect } from "react"

import imageprojets1 from "../assets/images/imageprojet1.jpg"
import imageprojets2 from "../assets/images/imageprojet2.jpg"
import imageprojets3 from "../assets/images/imageprojet3.jpg"
import imageprojets4 from "../assets/images/imageprojet4.jpg"
import imageprojets5 from "../assets/images/imageprojet5.jpg"
import imageprojets6 from "../assets/images/imageprojet6.jpg"
import imageprojets7 from "../assets/images/imageprojet7.jpg"
import imageprojets8 from "../assets/images/imageprojet8.jpg"
import imageprojets9 from "../assets/images/imageprojet9.jpg"

const Projets = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="projets">
      <h1>Nos Projets</h1>
      <div className="projets_images">
        <div className="projets_images_1">
          <h3 className="projets_images_1_header">Travaux neufs</h3>
          <img src={imageprojets1} alt="image du projet 1" />
          <p>
            <h3>Nouveau CHU de Reims</h3> <br />
            <a>
              Mission Animateur QSE pour le compte de GTM HALLE, filiale de
              Vinci Construction France
            </a>
            <br />
            Effectif chantier : 80 à 250 personnes
            <br />
          </p>
        </div>
        <div className="projets_images_2">
          <img src={imageprojets2} alt="image du projet 2" />
          <p>
            <h3>Construction du campus Lidl</h3> <br />
            Coordination SPS <br />
            Maître d'ouvrage : LIDL France <br />
            Architecte : Atelier M3
          </p>
        </div>
        <div className="projets_images_3">
          <img src={imageprojets3} alt="image du projet 3" />
          <p>
            <h3>Immeuble de bureaux LIGHTWELL à la Défense</h3> <br />
            Coordination SPS <br />
            Maître d'ouvrage : UNIBAIL - RODAMCO - WESTFIELD <br />
            Maitre d'oeuvre : BARTHELEMY GRINO{" "}
          </p>
        </div>
        <div className="projets_images_4">
          <img src={imageprojets4} alt="image du projet 4" />
          <p>
            <h3>Immeuble de bureaux ENVERGURE à Romainville</h3> <br />
            Coordination SPS <br />
            Maîtres d'ouvrage : SEMIIC PRO et ICADE <br />
            Maître d’œuvre : ARCHI5 PROD
          </p>
        </div>
        <div className="projets_images_5">
          <img src={imageprojets5} alt="image du projet 5" />
          <p>
            <h3>Centre Pompidou Francilien à Massy</h3> <br />
            Coordination SPS <br />
            Maître d'Ouvrage : ADIM ILE DE FRANCE <br />
            Maître d'oeuvre : PCA-Stream / Philippe Chiambaretta Architecte
          </p>
        </div>
        <div className="projets_images_6">
          <h3 className="projets_images_1_header">
            Travaux réhabilités lourds et rénovation
          </h3>
          <img src={imageprojets6} alt="image du projet 6" />
          <p>
            <h3>Immeuble de bureaux OLYMPIQUE - Paris 13</h3> <br />
            Coordination SPS <br />
            Maître d'Ouvrage : Arizona <br />
            Maître d'oeuvre : Englemmann Architects
          </p>
        </div>
        <div className="projets_images_7">
          <h3 className="projets_images_1_header">
            Travaux patrimoine et sous-terrain
          </h3>
          <img src={imageprojets7} alt="image du projet 7" />
          <p>
            <h3>Chateau de Fontainebleau</h3> <br />
            Accord cadre Coordination SPS <br />
            Maître d'ouvrage : OPPIC et EPCF <br />
          </p>
        </div>
        <div className="projets_images_8">
          <img src={imageprojets8} alt="image du projet 8" />
          <p>
            <h3>Chantier LIGNE 16 Grand Paris</h3> <br />
            Mission d'audit interne sécurité multisites en Seine-Saint-Denis{" "}
            <br />
            Entreprise auditée : WEBUILD <br />
            Client : RAMBOLL ENVIRON
          </p>
        </div>{" "}
        <div className="projets_images_9">
          <img src={imageprojets9} alt="image du projet 9" />
          <p>
            <h3>Projet CIGEO</h3> <br />
            Mission d'accompagnement HSE du MOE en phase APS <br /> pour la
            rédaction des pièces sécurité (PGC, DIUO, études des risques)
            <br />
            Maître d'ouvrage : LIDL France <br />
            Architecte : Atelier M3
          </p>
        </div>{" "}
      </div>
    </div>
  )
}

export default Projets
