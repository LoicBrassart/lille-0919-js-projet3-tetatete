import React from "react";
import FilterTab from "../components/FilterTab";
import "./styles/Causes.scss";
import ProfileCard from "../components/ProfileCard";

function Causes() {
  return (
    <div className="Causes">
      <FilterTab filterType="Causes" />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <div className="CausesContainer"></div>
    </div>
  );
}

export default Causes;
