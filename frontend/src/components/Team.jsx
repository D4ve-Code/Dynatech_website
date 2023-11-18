import React from "react"

import franck from "../assets/images/franck.jpg"
import christophe from "../assets/images/christophe.jpg"
import florian from "../assets/images/florian.jpg"
import karim from "../assets/images/karim.jpg"

const Team = () => {
  return (
    <div className="team">
      <p>Notre équipe</p>
      <div className="portraits">
        <div className="portraits_line_1">
          <div className="portrait1">
            <img src={karim} alt="portrait de karim" />
            <h2>
              Karim BELAID
              <br />
              Consultant QSE
            </h2>
          </div>
          <div className="portrait2">
            <img src={christophe} alt="portrait de christophe" />
            <h2>
              Christophe LAVENIR
              <br />
              Directeur Général
            </h2>
          </div>
        </div>
        <div className="portraits_line_2">
          <div className="portrait3">
            <img src={franck} alt="portrait de franck" />
            <h2>
              Franck LEBREUIL
              <br />
              Président
            </h2>
          </div>
          <div className="portrait4">
            <img src={florian} alt="portrait de florian" />
            <h2>
              Florian SIRODOT
              <br />
              Chef de service QSE
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
