import React, { useState } from "react";
import "./styles/Hero.scss";

function Hero() {
  //Hooks for change display enter video or picture
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="Hero">
      {showVideo ? (
        <div className="desktopHero">
          <video width="400" height="222" controls="controls">
            <source src="video.mp4" type="video/mp4" />
            <source src="video.webm" type="video/webm" />
          </video>
        </div>
      ) : (
        <div className="desktopHero">
          <img src="img/hero.jpg" alt="Hero desktop" className="overlay" />
          <h2 className="heroTitle">
            Fais toi plaisir <br /> pour la bonne cause !
          </h2>
        </div>
      )}
    </div>
  );
}

export default Hero;
