import React from "react";
import { scaleRotate as BurgerMenu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import "./styles/NavBar.scss";

function NavBar() {
  return (
    <header className="NavBar NavBarBO">
      <nav className="desktopNav">
        <NavLink className="logo" activeClassName="active" exact to="/admin">
          <img className="meexLogo" src="./img/meexAdminLogo.png" alt="" />
        </NavLink>

        <ul className="desktopMenu">
          <li>
            <NavLink
              id="meetings"
              className="menu-item"
              activeClassName="active"
              to="/campaignsBO"
            >
              Campagnes
            </NavLink>
          </li>

          <li>
            <NavLink
              id="ambassadors"
              className="menu-item"
              activeClassName="active"
              to="/ambassadorsBO"
            >
              Ambassadeurs
            </NavLink>
          </li>

          <li>
            <NavLink
              id="causes"
              className="menu-item"
              activeClassName="active"
              to="/causesBO"
            >
              Causes soutenues
            </NavLink>
          </li>
        </ul>
      </nav>

      <BurgerMenu width={320} className="BurgerMenuBO">
        <NavLink
          id="meetings"
          className="menu-item"
          activeClassName="bm-active"
          to="/campaignsBO"
        >
          Campagnes
        </NavLink>

        <NavLink
          id="ambassadors"
          className="menu-item"
          activeClassName="bm-active"
          to="/ambassadorsBO"
        >
          Ambassadeurs
        </NavLink>

        <NavLink
          id="causes"
          className="menu-item"
          activeClassName="bm-active"
          to="/causesBO"
        >
          Causes soutenues
        </NavLink>
      </BurgerMenu>
    </header>
  );
}

export default NavBar;
