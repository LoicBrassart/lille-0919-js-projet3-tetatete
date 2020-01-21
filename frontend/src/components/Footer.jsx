import React from "react";
import { Link } from "react-router-dom";
import "./styles/Footer.scss";

function Footer() {
  return (
    <section className="Footer">
      <ul className="footerContainer">
        <li className="footerInfos">
          <ul>
            <li>
              <a>Comment ça marche ?</a>
            </li>
            <li>
              <a>La charte éthique</a>
            </li>
            <li>
              <a>Les mentions légales et CGU</a>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
        </li>
        <li className="footerLogo">
          <Link to="/">
            <img src="./img/meexLogo.png" alt="site icon" />
          </Link>
        </li>
        <li className="socialMed">
          <p>Rejoignez-nous sur :</p>
          <ul>
            <li>
              <a href="https://fr-fr.facebook.com/">
                <img src="img/fcbLogo.svg" alt="Fcb" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/?lang=fr">
                <img src="img/twitterLogo.svg" alt="Twit" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <img src="img/instaLogo.svg" alt="Instg" />
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
}

export default Footer;
