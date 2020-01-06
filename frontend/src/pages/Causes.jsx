import React from "react";
import "./styles/Causes.scss";
import FilterTab from "../components/FilterTab";
import ProfileCard from "../components/ProfileCard";

function Causes() {
  return (
    <section className="Causes">
      <FilterTab />
      <div className="center containerCauses">
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>
    </section>
  );
}

export default Causes;
