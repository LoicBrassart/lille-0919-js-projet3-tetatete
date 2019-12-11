import React from "react";
import CampaignCardSmall from "../components/CampaignCardSmall";

function PageAmbassador() {
  return (
    <div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
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

export default PageAmbassador;
