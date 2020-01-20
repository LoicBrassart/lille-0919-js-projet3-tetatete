import React, { useState, useEffect } from "react";
import axios from "axios";
import ProfileCard from "../components/ProfileCard";
import "./styles/CauseInfos.scss";
const { apiCall } = require("../conf");

function CauseInfos(props) {
  const [association, setAssociation] = useState([]);

  useEffect(() => {
    axios.get(`${apiCall}/association/${props.match.params.id}`).then(res => {
      setAssociation(res.data[0]);
    });
  }, [props.match.params.id]);

  return (
    <div className="CausesWrapper">
      <div className="CausesInfos">
        <div className="photo">
          <ProfileCard
            id={association.id}
            url="causes"
            img={association.img}
            name={association.name}
            style="yellowContent"
            mainStyle="ProfileCardYellow"
          />
        </div>
        <div className="content">
          <div className="tags">
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

          <p>{association.resume}</p>
          <a
            target="_blank"
            href={association.website}
            rel="noopener noreferrer"
          >
            Site Web
          </a>
        </div>
      </div>
      <p className="relatedTitle">Campagnes de {association.name} :</p>
      <div className="CausesRelated"></div>
    </div>
  );
}

export default CauseInfos;
