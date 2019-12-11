import React from "react";
import "./styles/CampaignInfo.scss";

function InfoProfilePage() {
  return (
    <div className="infoProfilePage">
      <img
        classname="profileImage"
        src="https://via.placeholder.com/600x600"
        alt="..."
      />

      <div className="infoContainer">
        <div className="firstContainer">
          <h2>Lorem ipsum</h2>
          <div className="profileTag">
            <img src="https://via.placeholder.com/50x50" alt="..." />
            <img src="https://via.placeholder.com/50x50" alt="..." />
            <img src="https://via.placeholder.com/50x50" alt="..." />
          </div>
        </div>

        <p className="resumeInfoPage">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
          recusandae. Totam laboriosam, odio eveniet minima magnam deleniti!
          Neque explicabo corporis, quidem mollitia optio excepturi aspernatur
          non autem laudantium error sunt.Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Dolore, recusandae. Totam laboriosam,
          odio eveniet minima magnam deleniti! Neque explicabo corporis, quidem
          mollitia optio excepturi aspernatur non autem laudantium error sunt.
        </p>
      </div>
    </div>
  );
}

export default InfoProfilePage;
