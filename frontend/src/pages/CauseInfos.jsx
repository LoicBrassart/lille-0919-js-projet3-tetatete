import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/CauseInfos.scss";
const { apiCall } = require("./conf.js");

function CauseInfos(props) {
  const [association, setAssociation] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiCall}/association/${props.match.params.id}`)
      .then(res => {
        setAssociation(res.data[0]);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [setAssociation]);

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
        <a href={association.website} target="blank">
          SITE WEB
        </a>
      </div>
    </div>
  );
}

export default CauseInfos;
