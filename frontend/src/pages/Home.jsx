import React, { useEffect } from "react";
import Hero from "../components/Hero";
import CampaignCard from "../components/CampaignCard";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import "./styles/Home.scss";
import LearnMore from "../components/LearnMore";
const { apiCall } = require("../conf");

export default function Home(props) {
  const campaignsInfo = useSelector(state => state.campaignsInfo);

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`${apiCall}/campaign?inProgress=true&limit=6`).then(res => {
      dispatch({ type: "GET_CAMPAIGNS_INFO", data: res.data });
    });
  }, [dispatch]);

  return (
    <section className="Home">
      <Hero />
      <div className="cardContainer">
        {campaignsInfo.map((campaign, key) => {
          return <CampaignCard key={key} {...campaign} />;
        })}
      </div>
      <LearnMore />
    </section>
  );
}
