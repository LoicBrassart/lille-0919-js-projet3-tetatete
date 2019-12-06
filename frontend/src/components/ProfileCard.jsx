import React from "react";
import "./styles/ProfileCard.scss";

function ProfileCard() {
  return (
    <div className="profileCard">
      <img
        classname="profileImage"
        src="https://via.placeholder.com/300x300"
        alt="..."
      />

      <span className="gradientName" />

      <h2 className="profileName">Lorem Ipsum</h2>

      <img
        className="profileTag"
        src="https://via.placeholder.com/50x50"
        alt="..."
      />
    </div>
  );
}

export default ProfileCard;
