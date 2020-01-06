import React from "react";

function Meetings() {
  return (
    <section className="Meetings">
      <div className="toggler">
        <div className="desc">
          <strong>Am Stram Gram...</strong>
          <p>Choisis qui tu veux rencontrer !</p>
        </div>
        <div className="toggle">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          <div className="currentFilter">
            <p>Rencontres encore en jeu</p>
            <p>Rencontres passées</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Meetings;
