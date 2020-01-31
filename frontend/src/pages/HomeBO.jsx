import React from "react";
import { useSelector } from "react-redux";
import FormCreateUser from "../components/FormCreateUser";
import "./styles/HomeBO.scss";

export default function HomeBO() {
  const isAdmin = useSelector(state => state.dataJWT.user[0].canAdmin);

  return (
    <div className="HomeBO">
      {isAdmin === 1 ? (
        (<p>
          Vous êtes bien connecté. Vous pouvez créer une/des campagne(s),
          ajouter un/des ambassadeur et une/des association(s)
        </p>)(<FormCreateUser />)
      ) : (
        <p>
          Vous êtes bien connecté. Vous pouvez ajouter un ambassadeurs et créer
          des campagnes.
        </p>
      )}
    </div>
  );
}
