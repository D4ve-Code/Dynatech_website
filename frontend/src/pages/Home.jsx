import React from "react";
import Avis from "../components/Avis";
import Team from "../components/Team";

import image_projets from "../assets/images/sama.jpg";
import image_service_coordo from "../assets/images/moda.jpeg";
import image_service_formation from "../assets/images/formation.jpeg";
import image_service_audit from "../assets/images/audit.jpg";

const Home = () => {
  return (
    <div>
      <h1>
        Coordination SPS et Prévention des risques <>professionnels</>
      </h1>

      <div className="projets-section">
        <p>
          Depuis 17 ans, nous nous engageons aux côtés de nos clients, les
          accompagnant avec passion dans des missions variées, en quête
          constante de leur réussite
        </p>
        <h2>Les projets</h2>{" "}
        <img
          className="picture-projects"
          src={image_projets}
          alt="image des projets"
        ></img>
      </div>
      <div className="services-sections">
        <p>Une expersite de proximité adapté à vos besoins</p>
        <div className="services-cards">
          {" "}
          <div>
            <h2>Coordination SPS</h2>
            <img src={image_service_coordo} alt="photo de la MODA" />
          </div>
          <div>
            <h2>Formations</h2>
            <img src={image_service_formation} alt="photo de la MODA" />
          </div>{" "}
          <div>
            <h2>Conseils & Audits</h2>
            <img src={image_service_audit} alt="photo de la MODA" />
          </div>
        </div>
      </div>
      <Avis />
      <Team />
    </div>
  );
};

export default Home;
