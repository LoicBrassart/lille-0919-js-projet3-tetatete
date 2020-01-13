import React from "react";
import "./styles/Ambassadors.scss";
import FilterTab from "../components/FilterTab";
import ProfileCard from "../components/ProfileCard";

function Ambassadors() {
  return (
    <section className="Ambassadors">
      <FilterTab />
      <div className="center containerProfile">
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

export default Ambassadors;
