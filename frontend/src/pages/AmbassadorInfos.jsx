import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/AmbassadorInfos.scss";
import ProfileCard from "../components/ProfileCard";
const { apiCall } = require("../conf");

function AmbassadorInfos(props) {
  const [ambassador, setAmbassador] = useState([]);

  useEffect(() => {
    axios.get(`${apiCall}/ambassador/${props.match.params.id}`).then(res => {
      setAmbassador(res.data[0]);
    });
  }, [props.match.params.id]);

  return (
    <div className="AmbassadorsWrapper">
      <div className="AmbassadorInfos">
        <div className="photo">
          <ProfileCard
            id={ambassador.id}
            url="ambassadors"
            img={ambassador.img}
            name={`${ambassador.firstname} ${ambassador.lastname}`}
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

          <p>{ambassador.resume}</p>
        </div>
      </div>
      <p className="relatedTitle">
        Campagnes de {ambassador.firstname} {ambassador.lastname} :
      </p>
      <div className="AmbassadorsRelated"></div>
    </div>
  );
}

export default AmbassadorInfos;
