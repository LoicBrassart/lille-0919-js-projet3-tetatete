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

  console.log("---------");

  //stocker la date de fin
  let campaignEnd = moment(campaignInfo.time_end).format("X");
  let campaignEndLabel = moment(campaignInfo.time_end).fromNow();

  console.log("---CMPEND---");
  console.log(campaignEnd);
  console.log(campaignEndLabel);

  //stocker le rendu de la balise <p>
  const [cardStatus, setCardstatus] = useState("campagne terminée");

  // date de fin -48h
  let twoDaysBefore = moment(campaignInfo.time_end)
    .subtract(2, "days")
    .format("X");
  console.log("---2D---");
  console.log(twoDaysBefore);

  //stocker la date du jour format DD/MM/YYYY
  let getDate = Date.now();
  let dateOfTheDay = moment(getDate).format("X");
  console.log("---DD---");
  console.log(dateOfTheDay);

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
