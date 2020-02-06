import React from "react";
import "./styles/Hero.scss";

function Hero() {
  return (
    <div className="Hero">
      <div className="desktopHero">
        <img src="img/hero.jpg" alt="Hero desktop" className="overlay" />
        <h2 className="heroTitle">
          Fais toi plaisir <br /> pour la bonne cause !
        </h2>
      </div>
    </div>
  );
}

export default Hero;
