import React from "react";
import "./styles/Footer.scss";

function Footer() {
  return (
    <div id="footerContainer">
      <div id="leftContainer">
        <img src="" alt="logo site" />
      </div>
      <div id="midContainer">
        <p>Comment ça marche</p>
        <p>La charte étique</p>
        <p>Les mentions légales et CGU</p>
      </div>
      <div id="rightContainer">
        <p>Rejoigner-nous sur :</p>
        <div id="resLogo">
          <img src="" alt="Fcb" />
          <img src="" alt="Twitter" />
          <img src="" alt="Insta" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
