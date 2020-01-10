import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/CauseInfos.scss";
const { apiCall } = require("../conf");

function CauseInfos(props) {
  const [association, setAssociation] = useState([]);

  useEffect(() => {
    axios.get(`${apiCall}/association/${props.match.params.id}`).then(res => {
      setAssociation(res.data[0]);
    });
  }, [setAssociation, props.match.params.id]);

  return (
    <div className="CauseInfos center">
      <div className="photo">
        <img src={association.img} alt="" className="associationPhoto" />
      </div>
      <div className="content">
        <div className="titleAndTags">
          <h3>{association.name}</h3>
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
        <a target="_blank" href={association.website} rel="noopener noreferrer">
          Site Web
        </a>
      </div>
    </div>
  );
}

export default CauseInfos;
