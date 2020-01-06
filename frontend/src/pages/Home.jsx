import React from "react";
import Hero from "../components/Hero";
import TagLine from "../components/TagLine";
import CampaignCard from "../components/CampaignCard";
import LearnMore from "../components/LearnMore";
import "./styles/Home.scss";

function Home() {
  return (
    <section className="Home">
      <Hero />
      <TagLine />
      <div className="cardContainer">
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
        <CampaignCard />
      </div>
      <LearnMore />
    </section>
  );
}

export default Home;
