import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useSpring, animated } from "react-spring"
import { useInView } from "react-intersection-observer"

import logolidl from "../assets/images/logo_lidl.png"
import photolidl from "../assets/images/photo_lidl2.jpg"
import image1 from "../assets/images/moda.jpeg"
import image2 from "../assets/images/sama.jpg"
import image3 from "../assets/images/imageprojet1.jpg"

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
    logo: logolidl,
    image: photolidl,
    text: "A nos côtés en mission CSPS pour un accompagnement personnalisé",
    name: "Mohamed El Tik, Directeur technique LIDL",
  })

  const avis = [
    {
      logo: logolidl,
      image: photolidl,
      text: "A nos côtés en mission CSPS pour un accompagnement personnalisé",
      name: "Mohamed El Tik, Directeur technique LIDL",
    },
    {
      logo: logolidl,
      image: image1,
      text: "Au top pour l'accompagnement HSE ",
      name: "Mohamed El Tik, Directeur technique LIDL",
    },
    {
      logo: logolidl,
      image: image2,
      text: "A nos côtés en mission CSPS pour un accompagnement personnalisé",
      name: "Mohamed El Tik, Directeur technique LIDL",
    },
    {
      logo: logolidl,
      image: image3,
      text: "A nos côtés en mission CSPS pour un accompagnement personnalisé",
      name: "Mohamed El Tik, Directeur technique LIDL",
    },
  ]

  switch (avisIndex) {
    case 0:
      document.querySelector(".bullet1").style.backgroundColor = "#FFC000"
      document.querySelector(".bullet2").style.backgroundColor = "#E5E5E5"
      document.querySelector(".bullet3").style.backgroundColor = "#E5E5E5"
      document.querySelector(".bullet4").style.backgroundColor = "#E5E5E5"
      break
    case 1:
      document.querySelector(".bullet1").style.backgroundColor = "#E5E5E5"
      document.querySelector(".bullet2").style.backgroundColor = "#FFC000"
      document.querySelector(".bullet3").style.backgroundColor = "#E5E5E5"
      document.querySelector(".bullet4").style.backgroundColor = "#E5E5E5"
      break
    case 2:
      document.querySelector(".bullet1").style.backgroundColor = "#E5E5E5"
      document.querySelector(".bullet2").style.backgroundColor = "#E5E5E5"
      document.querySelector(".bullet3").style.backgroundColor = "#FFC000"
      document.querySelector(".bullet4").style.backgroundColor = "#E5E5E5"
      break
    case 3:
      document.querySelector(".bullet1").style.backgroundColor = "#E5E5E5"
      document.querySelector(".bullet2").style.backgroundColor = "#E5E5E5"
      document.querySelector(".bullet3").style.backgroundColor = "#E5E5E5"
      document.querySelector(".bullet4").style.backgroundColor = "#FFC000"
      break
    default:
      break
  }

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculer le prochain indice de l'avis
      const nextIndex = (avisIndex + 1) % avis.length
      setAvisIndex(nextIndex)
      setAvisContent(avis[nextIndex])
    }, 2000)

    return () => clearInterval(interval)
  }, [avisIndex])

  const handleAvisClick = (index) => {
    setAvisIndex(index)
    setAvisContent(avis[index])
  }

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
        <Link to="/projets">
          {" "}
          <button className="button_fonction">Leurs projets</button>
        </Link>
      </div>
      <div className="avis_right">
        <div className="avis_card">
          <div className="card_left">
            <div className="card_left_image_text">
              <img src={avisContent.logo} alt="image du logo" />
              <p className="card_text">{avisContent.text}</p>
              <p className="card_name">{avisContent.name}</p>
            </div>

            <div className="bullets">
              <div className="bullet1" onClick={() => handleAvisClick(0)}></div>
              <div className="bullet2" onClick={() => handleAvisClick(1)}></div>
              <div className="bullet3" onClick={() => handleAvisClick(2)}></div>
              <div className="bullet4" onClick={() => handleAvisClick(3)}></div>
            </div>
          </div>
          <div className="card_right">
            <img src={avisContent.image} alt="photo d'un magasin" />
          </div>
        </div>
        <div className="avis_chiffres">
          <div className="avis_chiffres1">
            <Number n={75} delay={500} />
            <p>Clients accompagnés</p>
          </div>
          <div className="avis_chiffres2">
            <Number n={20} delay={1000} />
            <p>Années d'expérience et expertise</p>
          </div>
          <div className="avis_chiffres3">
            <Number n={63} delay={1500} />
            <p>Projets en France</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Avis
