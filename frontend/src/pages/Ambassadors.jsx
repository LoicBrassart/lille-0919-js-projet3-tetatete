import React from "react";
import { Link } from "react-router-dom";
import FilterTab from "../components/FilterTab";
import ProfileCard from "../components/ProfileCard";

import "./styles/Ambassadors.scss";

function Ambassadors() {
  return (
    <div className="Ambassadors">
      <FilterTab filterType="Ambassadeurs" />
      <div className="AmbassadorsContainer center">
        <Link to="/ambassadorpage">
          <ProfileCard />
        </Link>

        <Link to="/ambassadorpage">
          <ProfileCard />
        </Link>

        <Link to="/ambassadorpage">
          <ProfileCard />
        </Link>

        <Link to="/ambassadorpage">
          <ProfileCard />
        </Link>

        <Link to="/ambassadorpage">
          <ProfileCard />
        </Link>

        <Link to="/ambassadorpage">
          <ProfileCard />
        </Link>
      </div>
    </div>
  );
}

export default Ambassadors;
