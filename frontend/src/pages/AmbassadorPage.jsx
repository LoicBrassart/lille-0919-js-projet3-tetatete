import React from "react";
import CampaignCardSmall from "../components/CampaignCardSmall";
import ProfileCardBig from "../components/ProfileCardBig";
import "./styles/AmbassadorPage.scss";

function AmbassadorPage() {
  return (
    <div className="AmbassadorPage center">
      <div className="causepage">
        <ProfileCardBig />
        <div className="elementscontainer">
          <div className="titleandlogo">
            <h3>Ambasadeur #01</h3>
            <ul>
              <li>
                <img
                  className="profileTag"
                  src="https://via.placeholder.com/50x50"
                  alt="..."
                />
              </li>
              <li>
                <img
                  className="profileTag"
                  src="https://via.placeholder.com/50x50"
                  alt="..."
                />
              </li>
              <li>
                <img
                  className="profileTag"
                  src="https://via.placeholder.com/50x50"
                  alt="..."
                />
              </li>
            </ul>
          </div>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            fugit, commodi eaque quod voluptatem labore, et, sapiente nisi
            inventore qui velit laboriosam expedita quasi veniam impedit vel
            tenetur ipsam earum.
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
