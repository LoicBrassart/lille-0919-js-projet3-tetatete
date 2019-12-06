import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/Navbar.scss";

function Navbar() {
  return (
    <nav>
      <div className="navbarContainer">
        <NavLink className="logoAndTitle" exact to="/">
          <p>tttt</p>
          <h1>TETATETE</h1>
        </NavLink>

        <div className="menu">
          <NavLink activeClassName="active" to="/meetings">
            Rencontres
          </NavLink>
          <NavLink activeClassName="active" to="/ambassadors">
            Ambassadeurs
          </NavLink>
          <NavLink activeClassName="active" to="/causes">
            Causes soutenues
          </NavLink>
          <NavLink activeClassName="active" to="/blog">
            Blog
          </NavLink>
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
