import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import DonationButton from "../components/DonationButton";
import "./styles/CampaignPageById.scss";
const { apiCall } = require("../conf");

export default function CampaignPageById(props) {
  const campaignInfoById = useSelector(state => state.campaignInfoById);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`${apiCall}/campaign/${props.match.params.id}`).then(res => {
      dispatch({ type: "GET_CAMPAIGN_BY_ID", data: res.data[0] });
    });
  }, [props.match.params.id, dispatch]);

  return (
    <div className="campaignPage">
      <div className="infoProfilePage center">
        <img
          className="profileImage"
          src={campaignInfoById.img}
          alt={campaignInfoById.name}
        />
        ​
        <div className="infoContainer">
          <div className="firstContainer">
            <h2>{campaignInfoById.name}</h2>
            <div className="profileTag">
              <img src="https://via.placeholder.com/50x50" alt="Tag" />
              <img src="https://via.placeholder.com/50x50" alt="Tag" />
              <img src="https://via.placeholder.com/50x50" alt="Tag" />
            </div>
          </div>
          ​<p className="resumeInfoPage">{campaignInfoById.resume}</p>
        </div>
      </div>
      <div className="donationButton">
        <DonationButton
          value={campaignInfoById.value1 + " €"}
          action={"Je donne !"}
        />
        <DonationButton
          value={campaignInfoById.value2 + " €"}
          action={"Je donne !"}
        />
        <DonationButton
          value={campaignInfoById.value3 + " €"}
          action={"Je donne !"}
        />
        <DonationButton
          value="Je ne veux pas donner"
          action={"Je participe !"}
        />
      </div>
    </div>
  );
}
