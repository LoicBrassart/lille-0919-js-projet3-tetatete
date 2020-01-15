import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import TagLine from "../components/TagLine";
import CampaignCard from "../components/CampaignCard";
import axios from "axios";
import "./styles/Home.scss";
const { apiCall } = require("../conf");

function Home() {
  const [campaignInfo, setCampaignInfo] = useState([]);

  useEffect(() => {
    axios.get(`${apiCall}/campaign/`).then(res => setCampaignInfo(res.data));
  }, []);

  return (
    <section className="Home">
      <Hero />
      <TagLine />
      <div className="cardContainer">
        {campaignInfo.map((campaign, key) => {
          return <CampaignCard key={key} campaignInfo={campaign} />;
        })}
      </div>
    </section>
  );
}

export default Home;
