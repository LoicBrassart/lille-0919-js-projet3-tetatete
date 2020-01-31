import React from "react";
import { scaleRotate as BurgerMenu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./styles/NavBar.scss";

function NavBar() {
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <header className="NavBar NavBarBO">
      <nav className="desktopNav">
        <NavLink className="logo" activeClassName="active" exact to="/">
          <img className="meexLogo" src="./img/meexAdminLogo.png" alt="" />
        </NavLink>

        {isLogged ? <button>Se Déconnecter</button> : ""}

        <ul className="desktopMenu">
          {/* <li>
            <NavLink
              id="meetings"
              className="menu-item"
              activeClassName="active"
              to="/admin/campaigns"
            >
              Campagnes
            </NavLink>
          </li>

          <li>
            <NavLink
              id="ambassadors"
              className="menu-item"
              activeClassName="active"
              to="/admin/ambassadors"
            >
              Ambassadeurs
            </NavLink>
          </li>

          <li>
            <NavLink
              id="causes"
              className="menu-item"
              activeClassName="active"
              to="/admin/causes"
            >
              Causes soutenues
            </NavLink>
          </li> */}
        </ul>
      </nav>

      {/* <BurgerMenu width={320} className="BurgerMenuBO">
        <NavLink
          id="meetings"
          className="menu-item"
          activeClassName="bm-active"
          to="/campaigns"
        >
          Campagnes
        </NavLink>

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
      </BurgerMenu> */}
    </header>
  );
}

export default NavBar;
