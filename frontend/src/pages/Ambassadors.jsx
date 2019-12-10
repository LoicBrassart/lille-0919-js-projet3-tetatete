import React from "react";
import FilterTab from "../components/FilterTab";
import "./styles/Ambassadors.scss";

function Ambassadors() {
  return (
    <div className="Ambassadors">
      <FilterTab filterType="Ambassadeurs" />
      <div className="AmbassadorsContainer"></div>
    </div>
  );
}

export default Ambassadors;
