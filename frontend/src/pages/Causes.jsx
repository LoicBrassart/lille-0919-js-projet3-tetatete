import React from "react";
import FilterTab from "../components/FilterTab";
import "./styles/Causes.scss";
import ProfileCard from "../components/ProfileCard";

function Causes() {
  return (
    <div className="Causes">
      <FilterTab filterType="Causes" />
      <div className="CausesContainer center">
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>
    </div>
  );
}

export default Causes;
