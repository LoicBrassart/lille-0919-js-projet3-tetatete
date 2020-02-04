import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/CauseInfos.scss";
import ProfileCard from "../components/ProfileCard";
import CampaignCard from "../components/CampaignCard";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const { apiCall } = require("../conf");

function CauseInfos(props) {
  const [association, setAssociation] = useState([]);
  const [tags, setTags] = useState([]);
  const [relatedCampaigns, setRelatedCampaigns] = useState([]);
  const [relatedDatas, setRelatedDatas] = useState(true);

  useEffect(() => {
    // get all associations/causes
    axios.get(`${apiCall}/association/${props.match.params.id}`).then(res => {
      setAssociation(res.data[0]);
      setTags(res.data[0].tagList);
    });
    // get all campaigns related to this cause
    axios
      .get(`${apiCall}/campaign?associationId=${props.match.params.id}`)
      .then(res => {
        if (res.data !== []) {
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
            contentStyle="yellowContent"
            mainStyle="ProfileCardYellow"
          />
        </div>
        <div className="content">
          <div className="tags">
            <ul>
              {tags.length === 0 ? (
                <li>
                  <p className="emptyTag">Pas de tags associés.</p>
                </li>
              ) : (
                tags.map(tag => {
                  return (
                    <li>
                      <img src={`/img/${tag}.png`} alt="" />
                    </li>
                  );
                })
              )}
            </ul>
          </div>

          <p className="resume">{association.resume}</p>
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
        {relatedCampaigns.length === 0 ? (
          <p className="emptyCards">Pas de liens disponibles.</p>
        ) : relatedCampaigns.length <= 3 && relatedCampaigns.length !== 0 ? (
          <Carousel itemWidth={400}>
            {relatedCampaigns.map(relatedCampaign => {
              return (
                <div>
                  <CampaignCard key={relatedCampaign.id} {...relatedCampaign} />
                </div>
              );
            })}
          </Carousel>
        ) : (
          <Carousel arrows itemWidth={400}>
            {relatedCampaigns.map(relatedCampaign => {
              return (
                <div>
                  <CampaignCard key={relatedCampaign.id} {...relatedCampaign} />
                </div>
              );
            })}
          </Carousel>
        )}
      </div>
    </div>
  );
}

export default CauseInfos;
