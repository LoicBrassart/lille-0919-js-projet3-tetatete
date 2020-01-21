import React, { useState, useEffect } from "react";
import axios from "axios";
import ProfileCard from "../components/ProfileCard";
import CampaignCard from "../components/CampaignCard";
import "./styles/CauseInfos.scss";
const { apiCall } = require("../conf");

function CauseInfos(props) {
  const [association, setAssociation] = useState([]);
  const [relatedCampaigns, setRelatedCampaigns] = useState([]);
  const [relatedDatas, setRelatedDatas] = useState(true);

  useEffect(() => {
    axios.get(`${apiCall}/association/${props.match.params.id}`).then(res => {
      setAssociation(res.data[0]);
    });
    // get all campaigns related to this cause
    axios
      .get(`${apiCall}/campaign?associationId=${props.match.params.id}`)
      .then(res => {
        if (res.data != []) {
          setRelatedCampaigns(res.data);
          setRelatedDatas(true);
        } else {
          setRelatedDatas(false);
        }
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
      {relatedDatas ? (
        <p className="relatedTitle">Campagnes de {association.name} :</p>
      ) : (
        <p className="relatedTitle">
          Pas de campagnes associées à {association.name}.
        </p>
      )}
      <div className="CausesRelated">
        <ul>
          {relatedCampaigns.map(relatedCampaign => {
            return (
              <li>
                <CampaignCard
                  key={relatedCampaign.id}
                  campaignInfo={relatedCampaign}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default CauseInfos;
