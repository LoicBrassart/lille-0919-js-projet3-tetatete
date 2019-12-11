import React from "react";
import FilterTab from "../components/FilterTab";
import "./styles/Ambassadors.scss";
import ProfileCard from "../components/ProfileCard";

function Ambassadors() {
  return (
    <div className="Ambassadors">
      <FilterTab filterType="Ambassadeurs" />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <div className="AmbassadorsContainer"></div>
    </div>
  );
}

export default Ambassadors;
