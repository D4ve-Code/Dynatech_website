import React, { useState, useEffect } from "react"

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
    {
      type: "Neufs",
      image: imageprojets1,
      title: "Nouveau CHU de Reims",
      description: (
        <>
          Mission Animateur QSE pour le compte de GTM HALLE,
          <br />
          filiale de Vinci Construction France
          <br />
          Effectif chantier : 80 à 250 personnes
        </>
      ),
    },
    {
      type: "Neufs",
      image: imageprojets2,
      title: "Construction du campus Lidl",
      description: (
        <>
          Coordination SPS
          <br />
          Maître d'ouvrage : LIDL France
          <br />
          Architecte : Atelier M3
        </>
      ),
    },
    {
      type: "Neufs",
      image: imageprojets3,
      title: "Immeuble de bureaux LIGHTWELL à la Défense",
      description: (
        <>
          Coordination SPS
          <br />
          Maître d'ouvrage : UNIBAIL - RODAMCO - WESTFIELD
          <br />
          Maitre d'oeuvre : BARTHELEMY GRINO
        </>
      ),
    },
    {
      type: "Neufs",
      image: imageprojets4,
      title: "Immeuble de bureaux ENVERGURE à Romainville",
      description: (
        <>
          Coordination SPS
          <br />
          Maître d'ouvrage : UNIBAIL - RODAMCO - WESTFIELD
          <br />
          Maître d’œuvre : ARCHI5 PROD
        </>
      ),
    },
    {
      type: "Neufs",
      image: imageprojets5,
      title: "Centre Pompidou Francilien à Massy",
      description: (
        <>
          Coordination SPS
          <br />
          Maître d'Ouvrage : ADIM ILE DE FRANCE
          <br />
          Maître d'oeuvre : PCA-Stream / Philippe Chiambaretta Architecte
        </>
      ),
    },
    {
      type: "Réhabilités lourds et rénovation",
      image: imageprojets6,
      title: "Immeuble de bureaux OLYMPIQUE - Paris 13",
      description: (
        <>
          Coordination SPS
          <br />
          Maître d'Ouvrage : Arizona
          <br />
          Maître d'oeuvre : Englemmann Architects
        </>
      ),
    },
    {
      type: "Patrimoine et sous-terrain",
      image: imageprojets7,
      title: "Chateau de Fontainebleau",
      description: (
        <>
          Accord cadre Coordination SPS
          <br />
          Maître d'ouvrage : OPPIC et EPCF
        </>
      ),
    },
    {
      type: "Patrimoine et sous-terrain",
      image: imageprojets8,
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
      image: imageprojets9,
      title: "Projet CIGEO",
      description: (
        <>
          Mission d'accompagnement HSE du MOE en phase APS
          <br />
          pour la rédaction des pièces sécurité
          <br />
          (PGC, DIUO, études des risques)
          <br />
          Maître d'ouvrage : LIDL France
          <br />
          Architecte : Atelier M3
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
          <div className={`projets_images_${index + 1}`} key={index}>
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
