import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useSpring, animated } from "react-spring"
import { useInView } from "react-intersection-observer"

import photolidl from "../assets/images/imageprojet1.jpg"
import image1 from "../assets/images/imageprojet3.jpg"
import image2 from "../assets/images/imageprojet5.jpg"
import image3 from "../assets/images/imageprojet4.jpg"

import logo1 from "../assets/images/logo_icade.jpg"
import logo2 from "../assets/images/logo_nexity.png"
import logo3 from "../assets/images/logo_lidl.png"
import logo4 from "../assets/images/logo_unibail.png"
import logo5 from "../assets/images/logo_wo2.jpg"
import logo6 from "../assets/images/logo_vinci.png"
import logo7 from "../assets/images/logo_fayat.jpg"
import logo8 from "../assets/images/logo_adim.png"
import logo9 from "../assets/images/logo_terrot.png"
import logo10 from "../assets/images/logo_fontainebleau.png"
import logo11 from "../assets/images/logo_verrecchia.jpg"
import logo12 from "../assets/images/logo_bnp.jpg"
import logo13 from "../assets/images/logo_antea.png"
import logo14 from "../assets/images/logo_lorenz.jpg"
import logo15 from "../assets/images/logo_mandarin.png"
import logo16 from "../assets/images/logo_monoprix.jpg"
import logo17 from "../assets/images/logo_andra2.jpg"
import logo18 from "../assets/images/logo_oppic.png"
import logo19 from "../assets/images/logo_ramboll.png"
import logo20 from "../assets/images/logo_versailles.png"
import logo21 from "../assets/images/logo_covea.png"
import logo22 from "../assets/images/logo_arizona.jpg"
import logo23 from "../assets/images/logo_foncia.png"
import logo24 from "../assets/images/logo_idec.png"
import logo25 from "../assets/images/logo_caterpillar.png"
import logo26 from "../assets/images/logo_ffme.png"
import logo27 from "../assets/images/logo_cardinal.png"
import logo28 from "../assets/images/logo_eiffel.jpg"
import logo29 from "../assets/images/logo_isms.png"

function Number({ n, delay }) {
  const { ref, inView } = useInView()
  const { number } = useSpring({
    from: { number: 0 },
    number: inView ? n : 0,
    delay,
    config: { mass: 1, tension: 20, friction: 10 },
  })

  useEffect(() => {
    if (inView) {
      number.start()
    }
  }, [inView, number])

  return (
    <div className="numerotest">
      <animated.div ref={ref}>{number.to((n) => n.toFixed(0))}</animated.div>
    </div>
  )
}

const Avis = () => {
  const [avisIndex, setAvisIndex] = useState(0)
  const [avisContent, setAvisContent] = useState({
    image: image3,
    text: "Les conseils de DYNATECH ont été très utiles pour mieux prendre en compte les demandes de la CRAMIF et de l'Inspection du Travail au sujet du plomb",
    name: "Sarah - Directrice de Programmes",
  })

  const avis = [
    {
      image: image3,
      text: "Les conseils de DYNATECH ont été très utiles pour mieux prendre en compte les demandes de la CRAMIF et de l'Inspection du Travail au sujet du plomb",
      name: "Sarah - Directrice de Programmes",
    },
    {
      image: photolidl,
      text: "Je cherchais un Animateur Prévention Sécurité pour un chantier d'ampleur, DYNATECH m'a fait profiter de son réseau pour trouver rapidement le bon profil",
      name: "David, Responsable Prévention",
    },
    {
      image: image1,
      text: "Les coordonnateurs SPS de DYNATECH managent les entreprises des mes chantiers avec aisance et agilité, y compris avec fermeté lorsque cela est nécessaire",
      name: "Jean-Pierre - Gestionnaire technique",
    },
    {
      image: image2,
      text: "Toutes les interventions de DYNATECH sont utiles et impactantes, je comprends mieux le rôle d'un CSPS sur un chantier",
      name: "Mohamed, Directeur Opérationnel",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculer le prochain indice de l'avis
      const nextIndex = (avisIndex + 1) % avis.length
      setAvisIndex(nextIndex)
      setAvisContent(avis[nextIndex])
    }, 5000)

    return () => clearInterval(interval)
  }, [avisIndex])

  return (
    <div className="avis">
      <div className="avis_top">
        <div className="avis_texte">
          <p className="texte1">Découvrez nos projets </p>
          <p className="texte2">
            Depuis 15 ans, nous proposons à nos clients une expertise
            multi-secteurs reconnue, utile et efficace.
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
                <p className="card_text">{avisContent.text}</p>
                <p className="card_name">{avisContent.name}</p>
              </div>
            </div>
            <div className="card_right">
              <img src={avisContent.image} alt="photo d'un magasin" />
            </div>
          </div>
          <div className="avis_chiffres">
            <div className="avis_chiffres1">
              <Number n={250} delay={500} />
              <p>Clients accompagnés</p>
            </div>
            <div className="avis_chiffres2">
              <Number n={30} delay={1000} />
              <p>Années d'expérience et expertise</p>
            </div>
            <div className="avis_chiffres3">
              <Number n={63} delay={1500} />
              <p>Projets en France</p>
            </div>
          </div>
        </div>
      </div>
      <div className="avis_bottom">
        <div className="ligne-noire ligne-noire-top"></div>

        <div className="logo-container-wrapper">
          {" "}
          <div className="logo-container">
            <img src={logo1} alt="Logo 1" width="100" className="logodefile" />
            <img src={logo2} alt="Logo 2" width="100" className="logodefile" />
            <img src={logo3} alt="Logo 3" width="100" className="logodefile" />
            <img src={logo4} alt="Logo 4" width="100" className="logodefile" />
            <img src={logo5} alt="Logo 5" width="100" className="logodefile" />
            <img src={logo6} alt="Logo 6" width="100" className="logodefile" />
            <img src={logo7} alt="Logo 7" width="100" className="logodefile" />
            <img src={logo8} alt="Logo 8" width="100" className="logodefile" />
            <img src={logo9} alt="Logo 9" width="100" className="logodefile" />
            <img
              src={logo10}
              alt="Logo 10"
              width="100"
              className="logodefile"
            />
            <img
              src={logo11}
              alt="Logo 11"
              width="100"
              className="logodefile"
            />
            <img
              src={logo12}
              alt="Logo 12"
              width="100"
              className="logodefile"
            />
            <img
              src={logo13}
              alt="Logo 13"
              width="100"
              className="logodefile"
            />
            <img
              src={logo14}
              alt="Logo 14"
              width="100"
              className="logodefile"
            />
            <img
              src={logo15}
              alt="Logo 15"
              width="100"
              className="logodefile"
            />
            <img
              src={logo16}
              alt="Logo 16"
              width="100"
              className="logodefile"
            />
            <img
              src={logo17}
              alt="Logo 17"
              width="100"
              className="logodefile"
            />
            <img
              src={logo18}
              alt="Logo 18"
              width="100"
              className="logodefile"
            />
            <img
              src={logo19}
              alt="Logo 19"
              width="100"
              className="logodefile"
            />
            <img
              src={logo20}
              alt="Logo 20"
              width="100"
              className="logodefile"
            />
            <img
              src={logo21}
              alt="Logo 21"
              width="100"
              className="logodefile"
            />
            <img
              src={logo22}
              alt="Logo 22"
              width="100"
              className="logodefile"
            />
            <img
              src={logo23}
              alt="Logo 23"
              width="100"
              className="logodefile"
            />
            <img
              src={logo24}
              alt="Logo 24"
              width="100"
              className="logodefile"
            />
            <img
              src={logo25}
              alt="Logo 25"
              width="100"
              className="logodefile"
            />
            <img
              src={logo26}
              alt="Logo 26"
              width="100"
              className="logodefile"
            />
            <img
              src={logo27}
              alt="Logo 27"
              width="100"
              className="logodefile"
            />
            <img
              src={logo28}
              alt="Logo 28"
              width="100"
              className="logodefile"
            />
            <img
              src={logo29}
              alt="Logo 29"
              width="100"
              className="logodefile"
            />
          </div>
          <div className="ligne-noire ligne-noire-bottom"></div>
        </div>
      </div>
    </div>
  )
}

export default Avis
