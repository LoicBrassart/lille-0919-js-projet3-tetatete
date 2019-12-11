import React from "react";
import CampaignCard from "../components/CampaignCard";
import "./styles/Meetings.scss";

function Meetings() {
  return (
    <div className="Meetings">
      <div className="MeetingsContainer center">
        <div className="toggler">
          <div className="desc">
            <strong>Am Stram Gram...</strong>
            <p>Choisis qui tu veux rencontrer !</p>
          </div>
          <div className="toggle">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <div className="currentFilter">
              <p>Rencontres encore en jeu</p>
              <p>Rencontres passées</p>
            </div>
          </div>
        </div>

        <div className="cards">
          <CampaignCard />
          <CampaignCard />
          <CampaignCard />
          <CampaignCard />
          <CampaignCard />
          <CampaignCard />
        </div>
      </div>
    </div>
  );
}

export default Meetings;
