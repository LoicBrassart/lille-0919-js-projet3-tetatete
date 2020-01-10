import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import TagLine from "../components/TagLine";
import CampaignCard from "../components/CampaignCard";
import LearnMore from "../components/LearnMore";
import axios from "axios";
import "./styles/Home.scss";
const { apiCall } = require("../conf");

function Home() {
  const [campaignInfo, setCampaignInfo] = useState([]);

  useEffect(() => {
    getCampaignInfo();
  }, []);

  const getCampaignInfo = () => {
    axios
      .get(`${apiCall}/campaign/`)
      .then(res => setCampaignInfo(res.data))
      .catch(err => console.log(err));
  };

  return (
    <section className="Home">
      <Hero />
      <TagLine />
      <div className="cardContainer">
        {campaignInfo.map(campaign => {
          return <CampaignCard campaignInfo={campaign} />;
        })}
      </div>
      <LearnMore />
    </section>
  );
}

export default Home;
