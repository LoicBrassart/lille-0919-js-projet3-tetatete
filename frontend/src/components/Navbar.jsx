import React from "react";
import "./styles/Navbar.scss";

function Navbar() {
  return (
    <nav>
      <div className="navbarContainer">
        <div className="logoAndTitle">
          <p>tttt</p>
          <h1>TETATETE</h1>
        </div>

        <div className="menu">
          <p>Rencontres</p>
          <p>Ambassadeurs</p>
          <p>Causes soutenues</p>
          <p>Blog</p>
        </div>
      </div>

      <div className="mobileNavbar">
        <p>tttt</p>
        <h1>TETATETE</h1>
        <input className="burger" type="checkbox" />
      </div>
    </nav>
  );
}

export default Navbar;
