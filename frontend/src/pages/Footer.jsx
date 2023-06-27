import React from "react";

import { BsLinkedin } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

const Footer = () => {
  return (
    <div>
      <div className="adresse">
        <h2>ADRESSE</h2>
        <p>
          Chemin de Launay <br /> 78990 ELANCOURT
        </p>
      </div>
      <div className="contact">
        <h2>CONTACT</h2>
        <p>
          +33 6 85 75 65 15 <br />
          dynatech.conseil@gmail.com
        </p>
      </div>
      <div className="logos">
        <HiMail />
        <BsLinkedin />
      </div>
    </div>
  );
};

export default Footer;
