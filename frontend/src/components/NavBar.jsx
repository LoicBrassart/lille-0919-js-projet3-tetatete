import React, { useState, useEffect } from "react";
import { scaleRotate as BurgerMenu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./styles/NavBar.scss";

function NavBar() {
  const dispatch = useDispatch();
  const [isBurgerOpen, isBurgerOpenUpdate] = useState(false);
  const isMenuOpen = state => {
    isBurgerOpenUpdate(state.isOpen);
    return state.isOpen;
  };

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
              onClick={() => dispatch({ type: "SWITCH", payload: null })}
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
              onClick={() => dispatch({ type: "SWITCH", payload: null })}
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
              onClick={() => dispatch({ type: "SWITCH", payload: null })}
            >
              Causes soutenues
            </NavLink>
          </li>
        </ul>
      </nav>

      <BurgerMenu width={320} isOpen={isBurgerOpen} onStateChange={isMenuOpen}>
        <NavLink
          id="meetings"
          className="menu-item"
          activeClassName="bm-active"
          to="/campaigns"
          onClick={
            (() => dispatch({ type: "SWITCH", payload: null })) &&
            (() => {
              isBurgerOpenUpdate(false);
            })
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
            (() => dispatch({ type: "SWITCH", payload: null })) &&
            (() => {
              isBurgerOpenUpdate(false);
            })
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
            (() => dispatch({ type: "SWITCH", payload: null })) &&
            (() => {
              isBurgerOpenUpdate(false);
            })
          }
        >
          Causes soutenues
        </NavLink>
      </BurgerMenu>
    </header>
  );
}

export default NavBar;
