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
              id="ambassadors"
              className="menu-item"
              activeClassName="active"
              to="/ambassadors"
            >
              Ambassadeurs
            </NavLink>
          </li>

          <li>
            <NavLink
              id="causes"
              className="menu-item"
              activeClassName="active"
              to="/causes"
            >
              Causes soutenues
            </NavLink>
          </li>

          <li>
            <NavLink
              id="blog"
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
          id="ambassadors"
          className="menu-item"
          activeClassName="bm-active"
          to="/ambassadors"
        >
          Ambassadeurs
        </NavLink>

        <NavLink
          id="causes"
          className="menu-item"
          activeClassName="bm-active"
          to="/causes"
        >
          Causes soutenues
        </NavLink>

        <NavLink
          id="blog"
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
