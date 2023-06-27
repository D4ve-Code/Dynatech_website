import React from "react";

import franck from "../assets/images/franck.jpg";
import flo from "../assets/images/flo.jpg";
import nathalie from "../assets/images/nathalie.jpg";
import gerard from "../assets/images/gerard.jpg";

const Team = () => {
  return (
    <div>
      <p>
        L’équipe DYNATECH prouve au quotidien son engagement envers la qualité,
        la sécurité et votre satisfaction.Faites-nous confiance pour la réussite
        de vos projets.
      </p>
      <div className="portraits">
        {" "}
        <div className="portrait1">
          <img src={franck} alt="portrait de franck" />
          <h2>Franck LEBREUIL</h2>
        </div>
        <div className="portrait2">
          <img src={flo} alt="portrait de flo" />
          <h2>Florian SIRODOT</h2>
        </div>{" "}
        <div className="portrait3">
          <img src={nathalie} alt="portrait de nathalie" />
          <h2>Nathalie YIN</h2>
        </div>{" "}
        <div className="portrait4">
          <img src={gerard} alt="portrait de gerard" />
          <h2>Gérard DION</h2>
        </div>
      </div>
    </div>
  );
};

export default Team;
