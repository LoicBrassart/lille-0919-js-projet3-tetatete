import React from "react";
import "./styles/ProfileCard.scss";

function ProfileCard() {
  return (
    <div className="profileCard">
      <a href="...">
        <img
          classname="profileImage"
          src="https://via.placeholder.com/300x300"
          alt="..."
        />

        <span className="gradientName" />

        <h2 className="profileName">Lorem Ipsum</h2>
        <div className="profileTagContainer">
          <img
            className="profileTag"
            src="https://via.placeholder.com/50x50"
            alt="..."
          />
        </div>
      </a>
    </div>
  );
}

export default ProfileCard;
