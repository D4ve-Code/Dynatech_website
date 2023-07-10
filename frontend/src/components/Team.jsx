import React from "react"

import franck from "../assets/images/franck.jpg"
import flo from "../assets/images/flo.jpg"
import nathalie from "../assets/images/nathalie.jpg"
import gerard from "../assets/images/gerard.jpg"

const Team = () => {
  return (
    <div className="team">
      <p>
        L’équipe DYNATECH prouve au quotidien son engagement envers la qualité,
        la sécurité et votre satisfaction.
        <br />
        Faites-nous confiance pour la réussite de vos projets.
      </p>
      <div className="portraits">
        <div className="portraits_line_1">
          <div className="portrait1">
            <img src={franck} alt="portrait de franck" />
            <h2>
              Franck
              <br />
              LEBREUIL
            </h2>
          </div>
          <div className="portrait2">
            <img src={flo} alt="portrait de flo" />
            <h2>
              Florian
              <br />
              SIRODOT
            </h2>
          </div>
        </div>
        <div className="portraits_line_2">
          <div className="portrait3">
            <img src={nathalie} alt="portrait de nathalie" />
            <h2>
              Nathalie
              <br />
              YIN
            </h2>
          </div>
          <div className="portrait4">
            <img src={gerard} alt="portrait de gerard" />
            <h2>
              Gérard
              <br />
              DION
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
