import React from "react";
import ProfileCardBig from "../components/ProfileCardBig";
import "./styles/CausePage.scss";

function CausePage() {
  return (
    <div className="causepage">
      <ProfileCardBig />
      <div>
        <div className="titleandlogo">
          <h3>Association #01</h3>
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
        <button>Site Web</button>
      </div>
    </div>
  );
}

export default CausePage;
