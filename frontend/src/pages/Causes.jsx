import React from "react";
import FilterTab from "../components/FilterTab";
import "./styles/Causes.scss";
import ProfileCard from "../components/ProfileCard";
import { Link } from "react-router-dom";

function Causes() {
  return (
    <div className="Causes">
      <FilterTab filterType="Causes" />

      <div className="CausesContainer center">
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
    </div>
  );
}

export default Causes;
