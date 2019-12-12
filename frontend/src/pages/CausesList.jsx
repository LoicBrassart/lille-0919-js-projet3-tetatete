import React from "react";
import FilterTab from "../components/FilterTab";
import ProfileCard from "../components/ProfileCard";
import { Link } from "react-router-dom";
import "./styles/Causes.scss";

function Causes() {
  return (
    <div className="causes">
      <FilterTab filterType="Causes" />
      <div className="causeContainer">
        <Link to="/causepage">
          <ProfileCard />
        </Link>
        <Link to="/causepage">
          <ProfileCard />
        </Link>
        <Link to="/causepage">
          <ProfileCard />
        </Link>
        <Link to="/causepage">
          <ProfileCard />
        </Link>
        <Link to="/causepage">
          <ProfileCard />
        </Link>
        <Link to="/causepage">
          <ProfileCard />
        </Link>
      </div>

      <div className="CausesContainer"></div>
    </div>
  );
}

export default Causes;
