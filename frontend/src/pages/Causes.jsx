import React from "react";
import FilterTab from "../components/FilterTab";
import "./styles/Causes.scss";

function Causes() {
  return (
    <div className="Causes">
      <FilterTab filterType="Causes" />
      <div className="CausesContainer"></div>
    </div>
  );
}

export default Causes;
