import React from "react";
import "./styles/Footer.scss";

function Footer() {
  return (
    <div className="Footer">
      <div className="leftContainer">
        <img src="" alt="logo site" />
      </div>
      <div className="midContainer">
        <p>Comment ça marche</p>
        <p>La charte étique</p>
        <p>Les mentions légales et CGU</p>
      </div>
      <div className="rightContainer">
        <p>Rejoigner-nous sur :</p>
        <div className="logoContainer">
          <img src="img/fcb_logo.svg" alt="Facebook" />
          <img src="img/twitter_logo.svg" alt="Twitter" />
          <img src="img/insta_logo.svg" alt="Instagram" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
