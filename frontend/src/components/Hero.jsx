import React, { useState } from "react";
import "./styles/Hero.scss";

function Hero() {
  //Hooks for change display enter video or picture
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="Hero">
      <div className="desktopHero">
        {/*use ternary operator for showVideo*/}
        {showVideo ? (
          <video width="400" height="222" controls="controls">
            <source src="video.mp4" type="video/mp4" />
            <source src="video.webm" type="video/webm" />
          </video>
        ) : (
          <img
            src="https://via.placeholder.com/1712x749?text=Insert+Image"
            alt="Hero desktop"
          />
        )}
      </div>
      {/* picture for mobile and small tablet */}
      <img
        className="mobileHero"
        src="https://via.placeholder.com/719x719?text=Insert+Image"
        alt="Hero
        Mobile"
      />
    </div>
  );
}

export default Hero;
