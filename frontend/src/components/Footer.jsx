import React from "react";
import "./styles/Footer.scss";

function Footer() {
  return (
    <section className="Footer">
      <ul className="footerContainer">
        <li className="footerInfos">
          <ul>
            <li>Comment ça marche ?</li>
            <li>La charte étique</li>
            <li>Les mentions légales et CGU</li>
          </ul>
        </li>
        <li className="footerLogo">
          <a href="https://www.facebook.com/">
            <img
              src="https://via.placeholder.com/300x100?text=Logo+and+name+of+site"
              alt="site icon"
            />
          </a>
        </li>
        <li className="footerSocial">
          <p>Rejoigner-nous sur :</p>
          <ul>
            <li>
              <a>
                <img src="img/fcb_logo.svg" alt="Facebook" />
              </a>
            </li>
            <li>
              <a>
                <img src="img/twitter_logo.svg" alt="Twitter" />
              </a>
            </li>
            <li>
              <a>
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
