import React from "react";
import { scaleRotate as BurgerMenu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./styles/NavBar.scss";

function NavBar() {
  const dispatch = useDispatch();

  return (
    <header className="NavBar">
      <nav className="desktopNav">
        <NavLink className="logo" activeClassName="active" exact to="/">
          <img className="meexLogo" src="/img/meexLogo.png" alt="" />
        </NavLink>

        <ul className="desktopMenu">
          <li>
            <NavLink
              id="campaigns"
              className="menu-item"
              activeClassName="active"
              to="/campaigns"
              onClick={
                (() => dispatch({ type: "AMB_ALL" })) &&
                (() => dispatch({ type: "ASS_ALL" }))
              }
            >
              Campagnes
            </NavLink>
          </li>

          <li>
            <NavLink
              id="ambassadors"
              className="menu-item"
              activeClassName="active"
              to="/ambassadors"
              onClick={
                (() => dispatch({ type: "AMB_ALL" })) &&
                (() => dispatch({ type: "ASS_ALL" }))
              }
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
              onClick={
                (() => dispatch({ type: "AMB_ALL" })) &&
                (() => dispatch({ type: "ASS_ALL" }))
              }
            >
              Causes soutenues
            </NavLink>
          </li>
        </ul>
      </nav>

      <BurgerMenu width={320}>
        <NavLink
          id="meetings"
          className="menu-item"
          activeClassName="bm-active"
          to="/campaigns"
          onClick={
            (() => dispatch({ type: "AMB_ALL" })) &&
            (() => dispatch({ type: "ASS_ALL" }))
          }
        >
          Campagnes
        </NavLink>

        <NavLink
          id="ambassadors"
          className="menu-item"
          activeClassName="bm-active"
          to="/ambassadors"
          onClick={
            (() => dispatch({ type: "AMB_ALL" })) &&
            (() => dispatch({ type: "ASS_ALL" }))
          }
        >
          Ambassadeurs
        </NavLink>

        <NavLink
          id="causes"
          className="menu-item"
          activeClassName="bm-active"
          to="/causes"
          onClick={
            (() => dispatch({ type: "AMB_ALL" })) &&
            (() => dispatch({ type: "ASS_ALL" }))
          }
        >
          Causes soutenues
        </NavLink>
      </BurgerMenu>
    </header>
  );
}

export default NavBar;
