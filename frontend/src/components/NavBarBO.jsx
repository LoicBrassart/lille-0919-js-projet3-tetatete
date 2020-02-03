import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Modali, { useModali } from "modali";

import "./styles/NavBar.scss";

function NavBarBO() {
  const isLogged = useSelector(state => state.isLogged);
  const [deconnectionModal, toggleDeconnectionModal] = useModali();
  const dispatch = useDispatch();

  return (
    <header className="NavBar NavBarBO">
      <nav className="desktopNav">
        <NavLink className="logo" activeClassName="active" exact to="/">
          <img className="meexLogo" src="/img/meexAdminLogo.png" alt="" />
        </NavLink>

        {isLogged ? (
          <React.Fragment>
            <button onClick={toggleDeconnectionModal}>Se Déconnecter</button>
            <Modali.Modal {...deconnectionModal}>
              <h3>Deconnexion: </h3>
              <p>Êtes-vous sûr ?</p>
              <a
                href="/"
                onClick={() => dispatch({ type: "DATAJWT", value: [] })}
              >
                Oui, se deconnecter.
              </a>
            </Modali.Modal>
          </React.Fragment>
        ) : (
          ""
        )}
      </nav>
    </header>
  );
}

export default NavBarBO;
