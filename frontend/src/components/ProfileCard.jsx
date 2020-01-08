import React from "react";
import { Link } from "react-router-dom";
import "./styles/ProfileCard.scss";

function ProfileCard(props) {
  return (
    <div className="profileCard">
      <Link to={`/${props.url}/${props.id}`}>
        <div className="profileContainer">
          <img className="profileImage" src={props.img} alt="..." />

          <span className="gradientName" />

          <h2 className="profileName">{props.name}</h2>
        </div>

        <div className="profileTagContainer">
          <img
            className="profileTag"
            src="https://via.placeholder.com/50x50"
            alt="..."
          />
        </div>
      </Link>
    </div>
  );
}

export default ProfileCard;
