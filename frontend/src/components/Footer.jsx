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
              <button>Comment ça marche ?</button>
            </li>
            <li>
              <button>La charte éthique</button>
            </li>
            <li>
              <button>Les mentions légales et CGU</button>
            </li>
          </ul>
        </li>
        <li className="footerLogo">
          <Link to="/">
            <img
              src="https://via.placeholder.com/300x100?text=Logo+and+name+of+site"
              alt="site icon"
            />
          </Link>
        </li>
        <li className="footerSocial">
          <p>Rejoignez-nous sur :</p>
          <ul>
            <li>
              <a href="https://fr-fr.facebook.com/">
                <img src="img/fcb_logo.svg" alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/?lang=fr">
                <img src="img/twitter_logo.svg" alt="Twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <img src="img/insta_logo.svg" alt="Instagram" />
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
}

export default Footer;
