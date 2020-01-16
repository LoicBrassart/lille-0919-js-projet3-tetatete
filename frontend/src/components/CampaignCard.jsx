import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "./styles/CampaignCard.scss";
import "moment/locale/fr";

function CampaignCard({ campaignInfo }) {
  useEffect(() => {
    checkDate();
  });
  //stocker class campaignCard
  const [cardStyle, setCardStyle] = useState("campaignCard redCard");

  //stocker la date de fin
  let campaignEnd = moment(campaignInfo.time_end).format("X");
  let campaignEndLabel = moment(campaignInfo.time_end).fromNow();

  //stocker le rendu de la balise <p>
  const [cardStatus, setCardstatus] = useState("campagne terminée");

  // date de fin -48h
  let twoDaysBefore = moment(campaignInfo.time_end)
    .subtract(2, "days")
    .format("X");

  //stocker la date du jour format "X" timestamp
  let getDate = Date.now();
  let dateOfTheDay = moment(getDate).format("X");

  // checker les diff de dates-------------------------
  function checkDate() {
    if (dateOfTheDay < twoDaysBefore) {
      setCardStyle("campaignCard blueCard");
      setCardstatus("se termine " + campaignEndLabel);
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

          <p className="timer">{cardStatus}</p>

          <div className="whiteLine"></div>
        </div>

        <div className="secondContainer">
          <h2 className="campaignTitle">{campaignInfo.name} </h2>

          <p className="fondationName">Nom de la fondation</p>

          <a className="moreInfo" href="Button">
            <p className="moreInfoText">en savoir plus</p>
            <img
              className="moreInfoButton"
              src="/img/moreInfo.png"
              alt="more info"
            ></img>
          </a>
        </div>
      </Link>
    </div>
  );
}

export default CampaignCard;
