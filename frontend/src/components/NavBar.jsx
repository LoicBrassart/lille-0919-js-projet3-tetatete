import React from "react";
import { scaleRotate as BurgerMenu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import "./styles/NavBar.scss";

function NavBar() {
  return (
    <header className="NavBar">
      <nav className="desktopNav">
        <NavLink className="logo" activeClassName="active" exact to="/">
          TooTasty
          <img src="" alt="" />
        </NavLink>

        <ul className="desktopMenu">
          <li>
            <NavLink
              id="meetings"
              className="menu-item"
              activeClassName="active"
              to="/meetings"
            >
              Rencontres
            </NavLink>
          </li>

          <li>
            <NavLink
              id="meetings"
              className="menu-item"
              activeClassName="active"
              to="/ambassadors"
            >
              Ambassadors
            </NavLink>
          </li>

          <li>
            <NavLink
              id="meetings"
              className="menu-item"
              activeClassName="active"
              to="/causes"
            >
              Causes soutenues
            </NavLink>
          </li>

          <li>
            <NavLink
              id="meetings"
              className="menu-item"
              activeClassName="active"
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>

      <BurgerMenu width={320}>
        <NavLink
          id="meetings"
          className="menu-item"
          activeClassName="bm-active"
          to="/meetings"
        >
          Rencontres
        </NavLink>

        <NavLink
          id="meetings"
          className="menu-item"
          activeClassName="bm-active"
          to="/ambassadors"
        >
          Ambassadors
        </NavLink>

        <NavLink
          id="meetings"
          className="menu-item"
          activeClassName="bm-active"
          to="/causes"
        >
          Causes soutenues
        </NavLink>

        <NavLink
          id="meetings"
          className="menu-item"
          activeClassName="bm-active"
          to="/blog"
        >
          Blog
        </NavLink>
      </BurgerMenu>
    </header>
  );
}

export default NavBar;
