import React from "react";
import { useSelector } from "react-redux";
import "./styles/HomeBO.scss";
import { Redirect, Link } from "react-router-dom";

export default function HomeBO(props) {
  const isAdmin = useSelector(state => state.dataJWT.user[0].canAdmin);
  const isAssociation = useSelector(
    state => state.dataJWT.user[0].canCreateContent
  );

  return (
    <div className="HomeBO">
      {isAdmin === 1 ? (
        <React.Fragment>
          <p>
            Vous êtes bien connecté. Vous pouvez créer une/des campagne(s),
            ajouter un/des ambassadeur, ajouter une/des association(s), ainsi
            qu'un nouvel utilisateur.
          </p>

          <div className="formsSelector">
            <Link to="/admin/campaigns">Campagnes</Link>
            <Link to="/admin/ambassadors">Ambassadeurs</Link>
            <Link to="/admin/causes">Causes</Link>
            <Link to="/admin/users">Utilisateurs</Link>
          </div>
        </React.Fragment>
      ) : isAdmin === 0 && isAssociation === 1 ? (
        <React.Fragment>
          <p>
            Vous êtes bien connecté. Vous pouvez ajouter un/des ambassadeurs et
            créer des campagnes.
          </p>
          <div className="formsSelector">
            <Link to="/admin/campaigns">Campagnes</Link>
            <Link to="/admin/ambassadors">Ambassadeurs</Link>
          </div>
        </React.Fragment>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
}
