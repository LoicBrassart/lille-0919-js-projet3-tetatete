import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/CampaignCard.scss";
import "moment/locale/fr";

function CampaignCard({ campaignInfo }) {
  useEffect(() => {
    checkDate();
  });

  console.log("--------------------------");

  //stocker datediff et timediff
  let getDateDiff = campaignInfo.dateDiff;

  let getTimeDiff = parseInt(campaignInfo.timeDiff);

  //stocker le rendu de la balise <p>
  const [timeValue, setTimeValue] = useState(getDateDiff);
  const [cardStatus, setCardstatus] = useState("jours restants");

  //stocker classe campaignCard
  const [cardStyle, setCardStyle] = useState("campaignCard blueCard");

  //checker les diffs de dates
  function checkDate() {
    if (getTimeDiff <= 48 && getTimeDiff > 0) {
      setTimeValue(getTimeDiff);
      setCardstatus("heures restantes");
    } else if (getTimeDiff <= 0) {
      setCardStyle("campaignCard redCard");
      setCardstatus("campagne terminée");
    }
  }

  return (
    <div className={cardStyle}>
      <Link to={`/campaign/${campaignInfo.id}`}>
        <div className="firstContainer">
          <img
            className="campaignImg"
            src={campaignInfo.img}
            alt={campaignInfo.name}
          ></img>
          <div className="timer">
            <p className="timeValue">{timeValue}</p>
            <p className="cardStatus">{cardStatus}</p>
          </div>

          <div className="whiteLine"></div>
        </div>

        <div className="secondContainer">
          <h2 className="campaignTitle">{campaignInfo.name} </h2>

          <p className="fondationName">{campaignInfo.associationName}</p>

          <div className="moreInfo">
            <p className="moreInfoText">en savoir plus</p>
            <img
              className="moreInfoButton"
              src="/img/moreInfo.png"
              alt="more info"
            ></img>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CampaignCard;
