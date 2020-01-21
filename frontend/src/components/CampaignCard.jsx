import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/CampaignCard.scss";

function CampaignCard({ campaignInfo }) {
  useEffect(() => {
    checkDate();
  });

  //stocker datediff, timediff & minuteRemaining
  let getDateDiff = campaignInfo.dateDiff;
  let getTimeDiff = parseInt(campaignInfo.timeDiff);

  let minuteRemaining = campaignInfo.minuteRemaining;

  //stocker le rendu de la balise <p>
  const [timeValue, setTimeValue] = useState(getDateDiff);
  const [cardStatus, setCardstatus] = useState("jours restants");

  //stocker classe campaignCard
  const [cardStyle, setCardStyle] = useState("campaignCardBlueCard");

  //checker les diffs de dates
  function checkDate() {
    if (getTimeDiff >= 720) {
      setTimeValue(Math.ceil(getDateDiff / 30));
      setCardstatus("mois restants");
    } else if (getTimeDiff <= 48 && getTimeDiff > 1) {
      setTimeValue(getTimeDiff);
      setCardstatus("heures restantes");
    } else if (getTimeDiff <= 1 && getTimeDiff > 0) {
      setTimeValue(Math.round(minuteRemaining));
      setCardstatus("minutes restantes");
      setCardStyle("campaignCardVioletCard");
    } else if (getTimeDiff <= 0) {
      setCardStyle("campaignCardRedCard");
      setCardstatus("campagne terminée");
    }
  }

  return (
    <div className={`${cardStyle} related self`}>
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
