import React, { useState, useEffect } from "react";
import axios from "axios";
import CampaignCard from "../components/CampaignCard";
import "./styles/CampaignInfos.scss";
const { apiCall } = require("../conf");

export default function CampaignInfos(props) {
  const [campaignInfo, setCampaignInfo] = useState([]);

  useEffect(() => {
    axios.get(`${apiCall}/campaign/${props.match.params.id}`).then(res => {
      setCampaignInfo(res.data[0]);
    });
  }, [props.match.params.id]);

  return (
    <div className="CampaignInfos">
      <div className="campaignPresentation">
        <div className="campaignCard">
          <CampaignCard campaignInfo={campaignInfo} />​
        </div>
        <div className="campaignInfos">
          <h3>{campaignInfo.name}</h3>
          <p>
            Pour prouver ta valeur et soutenir{" "}
            <strong>{campaignInfo.associationName}</strong>.
          </p>
          <p>{campaignInfo.resume}</p>
        </div>
      </div>
      <div className="campaignSlides"></div>
      <div className="campaignDonation center">
        <p>Je participe en donnant</p>
        <ul>
          <li>
            <button>{campaignInfo.value1}</button>
          </li>
          <li>
            <button>{campaignInfo.value2}</button>
          </li>
          <li>
            <button>{campaignInfo.value3}</button>
          </li>
          <li>
            <button>Je ne veux pas donner</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
