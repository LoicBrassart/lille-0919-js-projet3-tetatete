import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "moment/locale/fr";
import "./styles/CampaignCard.scss";

function CampaignCard({ campaign }) {
  return (
    <div className="campaignCard">
      <Link to={`/campaign/${campaign.id}`}>
        <img
          className="placeholder"
          src="./img/placeholderCampaignCard.png"
          alt={campaign.name}
        ></img>
        <h2 className="campaignTitle">{campaign.name} </h2>
        <p className="timer">{moment(`${campaign.time_end}`).fromNow()}</p>
        <p className="campaignDescription">{campaign.resume}</p>
        <a className="more_info" href="Button">
          <img src="/img/moreInfo.png" alt="more info"></img>
        </a>
      </Link>
    </div>
  );
}

export default CampaignCard;
