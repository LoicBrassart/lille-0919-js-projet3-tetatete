import React from "react";
import Hero from "../components/Hero";
import TagLine from "../components/TagLine";
import LearnMore from "../components/LearnMore";
import CampaignCard from "../components/CampaignCard";
import "./styles/Home.scss";

function Home() {
  return (
    <div className="Home">
      <Hero />
      <TagLine />
      <div className="HomeContainer">
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
      </div>
      <LearnMore />
    </div>
  );
}

export default Home;
