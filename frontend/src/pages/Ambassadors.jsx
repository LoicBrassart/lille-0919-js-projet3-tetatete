import React from "react";
import FilterTab from "../components/FilterTab";
import "./styles/Ambassadors.scss";
import ProfileCard from "../components/ProfileCard";

function Ambassadors() {
  return (
    <div className="Ambassadors">
      <FilterTab filterType="Ambassadeurs" />
      <div className="AmbassadorsContainer">
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

export default Ambassadors;
