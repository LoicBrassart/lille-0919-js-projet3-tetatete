import React, { useEffect } from "react";
import Hero from "../components/Hero";
import TagLine from "../components/TagLine";
import CampaignCard from "../components/CampaignCard";
import LearnMore from "../components/LearnMore";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import "./styles/Home.scss";
const { apiCall } = require("../conf");

function Home() {
  //const [campaignInfo, setCampaignInfo] = useState([]);
  const campaigns = useSelector(state => state.campaigns.campaignsInfos);
  const dispatch = useDispatch();

  /*useEffect(() => {
    getCampaignInfo();
  }, []);

  const getCampaignInfo = () => {
    axios.get(`${apiCall}/campaign/`).then(res => setCampaignInfo(res.data));
  };*/

  useEffect(() => {
    axios.get(`${apiCall}/campaign`).then(res => {
      dispatch({ type: "GET_CAMPAIGNS", data: res.data });
    });
  }, [dispatch]);

  console.log(campaigns);

  return (
    <section className="Home">
      <Hero />
      <TagLine />
      <div className="cardContainer">
        {campaigns.map(campaign => {
          return <CampaignCard campaign={campaign} />;
        })}
      </div>
      <LearnMore />
    </section>
  );
}

export default Home;
