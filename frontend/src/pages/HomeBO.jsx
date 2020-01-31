import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./styles/HomeBO.scss";
import { Redirect } from "react-router-dom";
import Modali, { useModali } from "modali";
import FormCreateUser from "../components/FormCreateUser";
import FormCreateAmbassador from "../components/FormCreateAmbassador";
import FormCreateCause from "../components/FormCreateCause";
import CampaignFormBO from "../components/CampaignFormBO";

export default function HomeBO() {
  const isAdmin = useSelector(state => state.dataJWT.user[0].canAdmin);
  const isAssociation = useSelector(
    state => state.dataJWT.user[0].canCreateContent
  );
  const [campaignModal, toggleCampaignModal] = useModali();
  const [ambassadorModal, toggleAmbassadorModal] = useModali();
  const [causeModal, toggleCauseModal] = useModali();
  const [userModal, toggleUserModal] = useModali();

  return (
    <div className="HomeBO">
      {isAdmin === 1 ? (
        <React.Fragment>
          <p>
            Vous êtes bien connecté. Vous pouvez créer une/des campagne(s),
            ajouter un/des ambassadeur, ajouter une/des association(s), ainsi
            qu'un nouvel utilisateur.
          </p>

          <div className="modalButtons">
            <button onClick={toggleCampaignModal}>Campagne</button>
            <Modali.Modal {...campaignModal}>
              <div>
                <p>CREER CAMPAGNE</p>
                <CampaignFormBO />
              </div>
            </Modali.Modal>

            <button onClick={toggleAmbassadorModal}>Ambassadeur</button>
            <Modali.Modal {...ambassadorModal}>
              <div>
                <p>CREER AMBASSADEUR</p>
                <FormCreateAmbassador />
              </div>
            </Modali.Modal>

            <button onClick={toggleCauseModal}>Cause</button>
            <Modali.Modal {...causeModal}>
              <div>
                <p>CREER CAUSE</p>
                <FormCreateCause />
              </div>
            </Modali.Modal>

            <button onClick={toggleUserModal}>Utilisateur</button>
            <Modali.Modal {...userModal}>
              <div>
                <p>CREER UTILISATEUR</p>
                <FormCreateUser />
              </div>
            </Modali.Modal>
          </div>
        </React.Fragment>
      ) : isAdmin === 0 && isAssociation === 1 ? (
        <React.Fragment>
          <p>
            Vous êtes bien connecté. Vous pouvez ajouter un/des ambassadeurs et
            créer des campagnes.
          </p>
          <div className="modalButtons">
            <button onClick={toggleCampaignModal}>Campagne</button>
            <Modali.Modal {...campaignModal}>
              <div>
                <p>CREER CAMPAGNE</p>
                <CampaignFormBO />
              </div>
            </Modali.Modal>

            <button onClick={toggleAmbassadorModal}>Ambassadeur</button>
            <Modali.Modal {...ambassadorModal}>
              <div>
                <p>CREER AMBASSADEUR</p>
                <FormCreateAmbassador />
              </div>
            </Modali.Modal>
          </div>
        </React.Fragment>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
}
