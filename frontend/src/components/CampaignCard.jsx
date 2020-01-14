import React, { useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "./styles/CampaignCard.scss";
import "moment/locale/fr";

function CampaignCard({ campaignInfo }) {
  //stocker class campaignCard
  const [cardStyle, setCardStyle] = useState("blue");

  console.log("---");

  //stocker la date de fin
  const campaignEnd = campaignInfo.time_end;
  console.log(campaignEnd);

  // -48h
  const twoDaysBefore = moment(campaignInfo.time_end)
    .subtract(2, "days")
    .format("DD-MM-YYYY");
  console.log(twoDaysBefore);

  //stocker la date du jour format DD/MM/YYYY
  let getDate = Date.now();
  let dateOfTheDay = moment(getDate).format("DD-MM-YYYY");
  console.log(dateOfTheDay);

  function checkDate() {
    if (dateOfTheDay > twoDaysBefore) {
    }
  }

  return (
    <div className="campaignCard {blueCard}">
      <Link to={`/campaign/${campaignInfo.id}`}>
        <div className="firstContainer">
          <img
            className="campaignImg"
            src={campaignInfo.img}
            alt={campaignInfo.name}
          ></img>

          <p className="timer">{moment(campaignEnd).fromNow()}</p>

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
