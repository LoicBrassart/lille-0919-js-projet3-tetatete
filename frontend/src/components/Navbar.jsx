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
        <img src="./img/burger-icon.png" alt="burger-icon" />
      </div>
    </nav>
  );
}

export default Navbar;
