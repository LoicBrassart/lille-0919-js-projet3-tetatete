import React from "react";
import "./styles/Footer.scss";

import { siteTitle } from "../conf";

function Footer() {
  return (
    <div className="Footer">
      <div className="leftContainer">
        {/*<img src="" alt="logo site" />*/}
        <p className="Logo">ttt</p>
        <span>{siteTitle}</span>
        <p>Presse :</p>
        <ul>
          <li>
            <img src="https://via.placeholder.com/40x40?text=Icon" alt="" />
          </li>
          <li>
            <img src="https://via.placeholder.com/40x40?text=Icon" alt="" />
          </li>
          <li>
            <img src="https://via.placeholder.com/40x40?text=Icon" alt="" />
          </li>
        </ul>
      </div>
      <div className="midContainer">
        <p>Comment ça marche ?</p>
        <p>La charte éthique.</p>
        <p>Les mentions légales et CGU.</p>
      </div>
      <div className="rightContainer">
        <p>Rejoignez-nous sur :</p>
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
