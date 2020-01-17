import React, { useState, useEffect } from "react";
import CampaignCard from "../components/CampaignCard";
import axios from "axios";
import "./styles/CampaignsPage.scss";

const { apiCall } = require("../conf");

export default function CampaignPageById(props) {
  const [campaignInfo, setCampaignInfo] = useState([]);
  const [totalCampaign, setTotalCampaign] = useState([]);
  const [campaignStatus, setCampaignStatus] = useState("en cours");
  const [inprogressSelector, setInProgressSelector] = useState(false);
  const [doneSelector, setDoneSelector] = useState(false);
  const [campaignStateRoute, setCampaignStateRoute] = useState(
    `${apiCall}/campaign?inProgress=true`
  );

  useEffect(() => {
    axios.get(campaignStateRoute).then(res => setCampaignInfo(res.data));
    axios
      .get(`${apiCall}/campaign/total`)
      .then(res => setTotalCampaign(res.data[0]));
  }, []);

  return (
    <div className="campaignsPage">
      <div className="campaignHero">
        <img className="CampaignBanner" src="./img/campaignBanner.png"></img>
        <h2 className="campaignHerotagline">Lorem pour donner envie</h2>
      </div>

      <div className="topContent">
        <div className="SelectContent">
          <div className="inProgressCheckBox">
            <input type="checkbox" id="inProgressCampaignSelect" />
            <label id="inProgress" for="inProgress" aria-describedby="label">
              Rencontres en cours
            </label>
          </div>

          <div className="finishCheckBox">
            <input type="checkbox" id="finishCampaignSelect" />
            <label id="finish" for="finish" aria-describedby="label">
              Rencontres terminées
            </label>
          </div>
        </div>

        <div className="totalCampaign">
          <p className="totalCamp">{totalCampaign.total}</p>
          <p className="campaignStatus">
            campagnes <br /> {campaignStatus}
          </p>
        </div>
      </div>

      <div className="cardContainer">
        {campaignInfo.map((campaign, key) => {
          return <CampaignCard key={key} campaignInfo={campaign} />;
        })}
      </div>
    </div>
  );
}
