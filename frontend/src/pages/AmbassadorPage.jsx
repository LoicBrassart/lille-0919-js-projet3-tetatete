import React from "react";
import CampaignCardSmall from "../components/CampaignCardSmall";
import ProfileCardBig from "../components/ProfileCardBig";
import "./styles/AmbassadorPage.scss";

function AmbassadorPage() {
  return (
    <div className="AmbassadorPage center">
      <div className="picAmbassador">
        <ProfileCardBig classname="picture" />
        <div id="ambassadorText">
          <h3>Ambassadeur #01</h3>
          <ul>
            <li>
              {" "}
              <img
                className="profileTag"
                src="https://via.placeholder.com/50x50"
                alt="..."
              />
            </li>
            <li>
              {" "}
              <img
                className="profileTag"
                src="https://via.placeholder.com/50x50"
                alt="..."
              />
            </li>
            <li>
              {" "}
              <img
                className="profileTag"
                src="https://via.placeholder.com/50x50"
                alt="..."
              />
            </li>
          </ul>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
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
