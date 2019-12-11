import React from "react";
import CampaignCardSmall from "../components/CampaignCardSmall";
import "./styles/AmbassadorPage.scss";
import ProfileCardBig from "../components/ProfileCardBig";

function AmbassadorPage() {
  return (
    <div className="ambassadorPage">
      <div className="picAmbassador">
        <ProfileCardBig />
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </div>
      <p>Campagnes de Ambassadeur #01:</p>
      <div className="bottomCards">
        <CampaignCardSmall />
        <CampaignCardSmall />
        <CampaignCardSmall />
      </div>
    </div>
  );
}

export default AmbassadorPage;
