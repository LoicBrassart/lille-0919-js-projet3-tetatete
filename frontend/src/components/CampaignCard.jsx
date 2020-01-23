import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/CampaignCard.scss";

export default function CampaignCard({
  dateDiff,
  timeDiff,
  minuteRemaining,
  id,
  img,
  name,
  associationName
}) {
  //stocker datediff, timediff & minuteRemaining

  //stocker le rendu de la balise <p>
  const [timeValue, setTimeValue] = useState(dateDiff);
  const [cardStatus, setCardstatus] = useState("jours restants");

  //stocker classe campaignCard
  const [cardStyle, setCardStyle] = useState("campaignCardBlueCard");

  //checker les diffs de dates
  function checkDate() {
    const timeLeft = parseInt(timeDiff);
    if (timeLeft >= 720) {
      setCardStyle("campaignCardBlueCard");
      setTimeValue(Math.ceil(dateDiff / 30));
      setCardstatus("mois restants");
    } else if (timeLeft <= 720 && timeLeft > 48) {
      setCardStyle("campaignCardBlueCard");
      setTimeValue(dateDiff);
      setCardstatus("jours restants");
    } else if (timeLeft <= 48 && timeLeft > 1) {
      setCardStyle("campaignCardBlueCard");
      setTimeValue(timeLeft);
      setCardstatus("heures restantes");
    } else if (timeLeft <= 1 && timeLeft > 0) {
      setTimeValue(Math.round(minuteRemaining));
      setCardstatus("minutes restantes");
      setCardStyle("campaignCardVioletCard");
    } else if (timeLeft <= 0) {
      setCardStyle("campaignCardRedCard");
      setCardstatus("campagne terminée");
    }
  }

  useEffect(() => {
    checkDate();
  }, [timeDiff, dateDiff]);

  return (
    <div className={cardStyle}>
      <Link to={`/campaign/${id}`}>
        <div className="firstContainer">
          <img className="campaignImg" src={img} alt={name}></img>
          <div className="timer">
            <p className="timeValue">{timeValue}</p>
            <p className="cardStatus">{cardStatus}</p>
          </div>

          <div className="whiteLine"></div>
        </div>

        <div className="secondContainer">
          <h2 className="campaignTitle">{name} </h2>

          <p className="fondationName">{associationName}</p>

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
