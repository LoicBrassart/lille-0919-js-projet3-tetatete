import React from "react";
import CampaignInfo from "../components/CampaignInfo";
import "./styles/Campaign.scss";

export default function Campaign() {
  return (
    <div className="campaign">
      <div className="campaignContainer">
        <CampaignInfo />
        <div className="donationContainer center">
          <div>
            <h2>Je participe en donnant</h2>
          </div>
          <div>
            <button className="primaryButton">10€</button>
            <button className="primaryButton">20€</button>
            <button className="primaryButton">30€</button>
          </div>
          <div>
            <button className="secondaryButton">Je ne veux pas donner</button>
          </div>
        </div>
      </div>
    </div>
  );
}
