import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "./styles/CampaignCard.scss";
import "moment/locale/fr";

function CampaignCard({ campaignInfo }) {
  let campaignEnd = campaignInfo.time_end;
  const date = new Date();
  let dateOfTheDay = date.getDate();
  console.log(dateOfTheDay);

  return (
    <div className="campaignCard">
      <Link to={`/campaign/${campaignInfo.id}`}>
        <div className="firstContainer">
          <img
            className="campaignImg"
            src={campaignInfo.img}
            alt={campaignInfo.name}
          ></img>

          <p className="timer"> {moment(campaignEnd).fromNow()}</p>

          <div className="whiteLine"></div>
        </div>

        <div className="secondContainer">
          <h2 className="campaignTitle">{campaignInfo.name} </h2>

          <p className="fondationName">Nom de la fondation</p>

          <a className="more_info" href="Button">
            <p className="moreInfoText">en savoir plus</p>
            <img src="/img/moreInfo.png" alt="more info"></img>
          </a>
        </div>
      </Link>
    </div>
  );
}

export default CampaignCard;
