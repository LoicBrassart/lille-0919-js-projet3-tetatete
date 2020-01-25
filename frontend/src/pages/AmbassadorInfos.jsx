import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/AmbassadorInfos.scss";
import ProfileCard from "../components/ProfileCard";
import CampaignCard from "../components/CampaignCard";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const { apiCall } = require("../conf");

function AmbassadorInfos(props) {
  const [ambassador, setAmbassador] = useState([]);
  const [tags, setTags] = useState([]);
  const [relatedCampaigns, setRelatedCampaigns] = useState([]);
  const [relatedDatas, setRelatedDatas] = useState(true);

  useEffect(() => {
    // get all ambassador infos
    axios.get(`${apiCall}/ambassador/${props.match.params.id}`).then(res => {
      setAmbassador(res.data[0]);
      setTags(res.data[0].tagList);
    });
    // get all campaigns related to this ambassador
    axios
      .get(`${apiCall}/campaign?ambassadorId=${props.match.params.id}`)
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
    <div className="AmbassadorsWrapper">
      <div className="AmbassadorInfos">
        <div className="photo">
          <ProfileCard
            id={ambassador.id}
            url="ambassadors"
            img={ambassador.img}
            name={`${ambassador.firstname} ${ambassador.lastname}`}
            contentStyle="blueContent"
            mainStyle="ProfileCardBlue"
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

          <p className="resume">{ambassador.resume}</p>
        </div>
      </div>
      {relatedDatas ? (
        <p className="relatedTitle">
          Campagnes de {ambassador.firstname} {ambassador.lastname} :
        </p>
      ) : (
        <p className="relatedTitle">
          Pas de campagnes associées à {ambassador.firstname}{" "}
          {ambassador.lastname}.
        </p>
      )}

      <div className="AmbassadorsRelated">
        {relatedCampaigns.length === 0 ? (
          <p className="emptyCards">Pas de liens disponibles.</p>
        ) : relatedCampaigns.length <= 3 && relatedCampaigns.length != 0 ? (
          <Carousel itemWidth={400}>
            {relatedCampaigns.map(relatedCampaign => {
              return (
                <div>
                  <CampaignCard
                    key={relatedCampaign.id}
                    campaignInfo={relatedCampaign}
                  />
                </div>
              );
            })}
          </Carousel>
        ) : (
          <Carousel arrows itemWidth={400}>
            {relatedCampaigns.map(relatedCampaign => {
              return (
                <div>
                  <CampaignCard
                    key={relatedCampaign.id}
                    campaignInfo={relatedCampaign}
                  />
                </div>
              );
            })}
          </Carousel>
        )}
      </div>
    </div>
  );
}

export default AmbassadorInfos;
