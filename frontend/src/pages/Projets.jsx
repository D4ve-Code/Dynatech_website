import React, { useState, useEffect } from "react"

import imageprojets100 from "../assets/images/imageprojet100.jpg"
import imageprojets101 from "../assets/images/imageprojet101.jpg"
import imageprojets102 from "../assets/images/imageprojet102.jpg"
import imageprojets103 from "../assets/images/imageprojet103.jpg"
import imageprojets104 from "../assets/images/imageprojet104.jpg"
import imageprojets105 from "../assets/images/imageprojet105.jpg"
import imageprojets106 from "../assets/images/imageprojet106.jpg"
import imageprojets200 from "../assets/images/imageprojet200.jpg"
import imageprojets201 from "../assets/images/imageprojet201.jpg"
import imageprojets202 from "../assets/images/imageprojet202.jpg"
import imageprojets203 from "../assets/images/imageprojet203.jpg"
import imageprojets204 from "../assets/images/imageprojet204.jpg"
import imageprojets205 from "../assets/images/imageprojet205.jpg"
import imageprojets300 from "../assets/images/imageprojet300.jpg"
import imageprojets301 from "../assets/images/imageprojet301.jpg"
import imageprojets302 from "../assets/images/imageprojet302.jpg"

const Projets = () => {
  // Ajout d'un état local pour filtrer CC
  const [projectType, setProjectType] = useState("Tous") // État pour suivre le type de projet sélectionné

  useEffect(() => {
    window.scrollTo(0, 0)
    // Au chargement de la page, afficher tous les projets CC
    setProjectType("Tous")
  }, [])

  // Fonction pour changer le type de projet CC
  const handleProjectTypeChange = (type) => {
    setProjectType(type)
  }

  // Constante contenant les projets et leurs types CC
  const allProjects = [
    // * * * Projets Neufs (img commence par 100) * * * //
    {
      type: "Neufs",
      image: imageprojets100,
      title: "Nouveau CHU de Reims (51)",
      description: (
        <>
          Mission Animateur QSE pour le compte de GTM HALLE,
          <br />
          filiale de Vinci Construction France
          <br />
          Effectif chantier : 80 à 250 personnes
          <br />
          Montant des travaux : 141 m€
        </>
      ),
    },
    {
      type: "Neufs",
      image: imageprojets101,
      title: "Construction du campus LIDL à Chatenay-Malabry (92)",
      description: (
        <>
          Coordination SPS
          <br />
          Maître d'ouvrage : LIDL France
          <br />
          Architecte : Atelier M3
          <br />
          Montant des travaux : 180 m€
        </>
      ),
    },
    {
      type: "Neufs",
      image: imageprojets102,
      title: "Immeuble de bureaux LIGHTWELL à la Défense (92)",
      description: (
        <>
          Coordination SPS
          <br />
          Maître d'ouvrage : UNIBAIL - RODAMCO - WESTFIELD
          <br />
          Maitre d'oeuvre : BARTHELEMY GRINO
          <br />
          Montant des travaux : 62 m€
        </>
      ),
    },
    {
      type: "Neufs",
      image: imageprojets103,
      title: "Immeuble de bureaux ENVERGURE à Romainville (93)",
      description: (
        <>
          Coordination SPS
          <br />
          Maître d'ouvrage : SEMIIC PRO et ICADE
          <br />
          Maître d’œuvre : ARCHI5 PROD
          <br />
          Montant des travaux : 140 m€
        </>
      ),
    },
    {
      type: "Neufs",
      image: imageprojets104,
      title: "CENTRE POMPIDOU FRANCILIEN à Massy (91)",
      description: (
        <>
          Coordination SPS
          <br />
          Maître d'Ouvrage : ADIM ILE DE FRANCE
          <br />
          Maître d'oeuvre : PCA-Stream / Philippe Chiambaretta Architecte
          <br />
          Montant des travaux : 45 m€
        </>
      ),
    },
    {
      type: "Neufs",
      image: imageprojets105,
      title: "Plateforme logistique LIDL à Saint-Omer (62)",
      description: (
        <>
          Mission de management de la qualité pour Vinci Construction France
          <br />
          Maître d'Ouvrage : LIDL
          <br />
          Montant des travaux : 79 m€
        </>
      ),
    },
    {
      type: "Neufs",
      image: imageprojets106,
      title: "FAYAT BATIMENT IDF à Issy-les-Moulineaux (92)",
      description: (
        <>
          Mission de management de la prévention, qualité et environnement au
          niveau transversal sur l’ensemble des chantiers franciliens de
          l’entreprise
        </>
      ),
    },
    // * * * Projets Réhabilités lourds et rénovation (img commence par 200) * * * //
    {
      type: "Réhabilités lourds et rénovation",
      image: imageprojets200,
      title: "Immeuble de bureaux OLYMPIQUE - Paris 13",
      description: (
        <>
          Coordination SPS
          <br />
          Maître d'Ouvrage : Arizona
          <br />
          Maître d'oeuvre : Englemmann Architects
          <br />
          Rajouter « Montant des travaux : 17 m€
        </>
      ),
    },
    {
      type: "Réhabilités lourds et rénovation",
      image: imageprojets201,
      title: (
        <>
          Immeuble de bureaux TOUDIC
          <br />
          Paris 10
        </>
      ),
      description: (
        <>
          Coordination SPS
          <br />
          Maître d'oeuvre : THEOP
          <br />
          Architectes : B-ARCHITECTURE
          <br />
          Montant des travaux : 12 m€
        </>
      ),
    },
    {
      type: "Réhabilités lourds et rénovation",
      image: imageprojets202,
      title: "Immeuble de bureaux - Paris 11",
      description: (
        <>
          Coordination SPS
          <br />
          Maître d'Ouvrage : GROUPE TERROT
          <br />
          Architectes : DATA ARCHITECTES
          <br />
          Montant des travaux : 7,5 m€
        </>
      ),
    },
    {
      type: "Réhabilités lourds et rénovation",
      image: imageprojets203,
      title: "Maison d’éducation de la Légion d’Honneur à Saint-Denis (93)",
      description: (
        <>
          Rénovation de la toiture
          <br />
          Maître d'Ouvrage : GCLH
          <br />
          Architectes : PERROT&RICHARD
          <br />
          Montant des travaux : 1,5 m€
        </>
      ),
    },
    {
      type: "Réhabilités lourds et rénovation",
      image: imageprojets204,
      title: "Tour TRINITY à la Défense (92)",
      description: (
        <>
          Travaux d’aménagement de 2 étages
          <br />
          Maître d'Ouvrage : ALAIN AFFELOU
          <br />
          Assistance à Maîtrise d'Ouvrage : BNP PARIBAS REAL ESTATE
          <br />
          Montant des travaux : 2,3 m€
        </>
      ),
    },
    {
      type: "Réhabilités lourds et rénovation",
      image: imageprojets205,
      title: "Rénovation lourde en site urbain dense - Paris 11",
      description: (
        <>
          Mission de management de la prévention pour COVEA
          <br />
          Maître d'Ouvrage : COVEA
          <br />
          Montant des travaux : 38 m€
        </>
      ),
    },
    // * * * Projets Patrimoine et sous-terrain (img commence par 300) * * * //
    {
      type: "Patrimoine et sous-terrain",
      image: imageprojets300,
      title: "CHATEAU DE FONTAINEBLEAU (77)",
      description: (
        <>
          Accord cadre Coordination SPS
          <br />
          Maître d'ouvrage : OPPIC et EPCF
          <br />
          Montant des travaux : 10 m€ par an
        </>
      ),
    },
    {
      type: "Patrimoine et sous-terrain",
      image: imageprojets301,
      title: "Chantier LIGNE 16 Grand Paris",
      description: (
        <>
          Mission d'audit interne sécurité multisites en Seine-Saint-Denis
          <br />
          Entreprise auditée : WEBUILD
          <br />
          Client : RAMBOLL ENVIRON
        </>
      ),
    },
    {
      type: "Patrimoine et sous-terrain",
      image: imageprojets302,
      title: "Projet CIGEO",
      description: (
        <>
          Mission d'accompagnement HSE du MOE en phase APS
          <br />
          pour la rédaction des pièces sécurité
          <br />
          (PGC, DIUO, études des risques)
          <br />
          Maître d'ouvrage : ANDRA
          <br />
          Maître d'oeuvre : ANTEA GROUP
        </>
      ),
    },
    // Ajouter d'autres projets ici CC
  ]

  // Logique de filtrage CC
  const filteredProjects =
    projectType === "Tous"
      ? allProjects
      : allProjects.filter((project) => project.type === projectType)

  return (
    <div className="projets">
      <h1>Nos Projets</h1>
      {/* Utiliser des mots cliquables pour filtrer les projets */}
      <div className="sous_titres_filtres">
        <span
          onClick={() => handleProjectTypeChange("Neufs")}
          className={projectType === "Neufs" ? "selected" : ""}
        >
          Neufs
        </span>
        <span
          onClick={() =>
            handleProjectTypeChange("Réhabilités lourds et rénovation")
          }
          className={
            projectType === "Réhabilités lourds et rénovation" ? "selected" : ""
          }
        >
          Réhabilités lourds et rénovation
        </span>
        <span
          onClick={() => handleProjectTypeChange("Patrimoine et sous-terrain")}
          className={
            projectType === "Patrimoine et sous-terrain" ? "selected" : ""
          }
        >
          Patrimoine et sous-terrain
        </span>
      </div>
      {/* Fin de l'utilisation de mots cliquables */}

      {/* Affichez les projets filtrés */}
      <div className="projets_images">
        {filteredProjects.map((project, index) => (
          // Utilisez la classe .projets_images_item ici
          <div className={`projets_images_item`} key={index}>
            <img src={project.image} alt={`image du projet ${index + 1}`} />
            <p>
              <h3>{project.title}</h3> <br />
              <span>{project.description}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projets
