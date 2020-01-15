import React from "react";
import { Link } from "react-router-dom";
import "./styles/CampaignCard.scss";

function CampaignCard({ campaignInfo }) {
  return (
    <div className="campaignCard">
      <Link to={`/campaign/${campaignInfo.id}`}>
        <img
          className="placeholder"
          src="./img/placeholderCampaignCard.png"
          alt={campaignInfo.name}
        ></img>
        <h2 className="campaignTitle">{campaignInfo.name} </h2>
        <p className="timer">{campaignInfo.time_end}</p>
        <p className="campaignDescription">{campaignInfo.resume}</p>
        <span className="more_info">
          <img src="/img/moreInfo.png" alt="more info"></img>
        </span>
      </Link>
    </div>
  );
}

export default CampaignCard;
