import React, { useState, useEffect } from "react";
import axios from "axios";
import Modali, { useModali } from "modali";
import CampaignCard from "../components/CampaignCard";
import "./styles/CampaignInfos.scss";
import moment from "moment";
const { apiCall } = require("../conf");

export default function CampaignInfos(props) {
  const [campaignInfo, setCampaignInfo] = useState([]);
  const [modalDonation, toggleModalDonation] = useModali({
    animated: true,
    title: "Merci d'entrer vos informations :"
  });

  const [donor, setDonor] = useState({
    email: "",
    phone_number: "",
    date: null,
    donation_value: 0,
    campaign_id: null,
    associationName: ""
  });

  const handleSubmit = () => {
    axios
      .post(`${apiCall}/donation`, donor)
      .then(res => {
        alert(res.donor);
      })
      .catch(err => {
        alert(err);
      });
  };

  useEffect(() => {
    axios
      .get(`${apiCall}/campaign/${props.match.params.id}`)
      .then(({ data }) => {
        setCampaignInfo(data[0]);
      });
  }, [props.match.params.id, donor.donation_value]);

  const nameAssociation = campaignInfo.associationName;
  const idCampaign = campaignInfo.id;
  const value1 = campaignInfo.value1;
  const value2 = campaignInfo.value2;
  const value3 = campaignInfo.value3;
  const allVal = [value1, value2, value3];

  return (
    <div className="CampaignInfos">
      <div className="campaignPresentation">
        <div className="campaignCard">
          <CampaignCard key={campaignInfo.id} {...campaignInfo} />​
        </div>
        <div className="campaignInfos">
          <h3>{campaignInfo.name}</h3>
          <p>
            Pour prouver ta valeur et soutenir{" "}
            <strong>{campaignInfo.associationName}</strong>.
          </p>
          <p>{campaignInfo.resume}</p>
          <p>
            Montant récolté:{" "}
            <strong>
              {campaignInfo.totalDonation === null
                ? "0"
                : campaignInfo.totalDonation}{" "}
              €
            </strong>
          </p>
        </div>
      </div>
      <hr />
      {parseInt(campaignInfo.timeDiff) <= 0 ? (
        <div className="resolvedDonation center">
          <p>
            Malheureusement, cette campagne est terminée et vous ne pouvez plus
            participer.
          </p>
        </div>
      ) : (
        <div className="campaignDonation center">
          <p>Je participe en donnant</p>
          <ul>
            {allVal.map(value => {
              return (
                <li>
                  <button
                    onClick={() => {
                      setDonor({
                        ...donor,
                        date: moment()
                          .format(moment.HTML5_FMT.DATETIME_LOCAL_SECONDS)
                          .replace("T", " "),
                        donation_value: value,
                        campaign_id: idCampaign,
                        associationName: nameAssociation
                      });
                      toggleModalDonation();
                    }}
                  >
                    {value}
                  </button>
                </li>
              );
            })}
            <li>
              <button
                onClick={() => {
                  setDonor({
                    ...donor,
                    date: moment()
                      .format(moment.HTML5_FMT.DATETIME_LOCAL_SECONDS)
                      .replace("T", " "),
                    donation_value: 0,
                    campaign_id: idCampaign,
                    associationName: nameAssociation
                  });
                  toggleModalDonation();
                }}
              >
                Je ne veux pas donner
              </button>
            </li>
          </ul>
        </div>
      )}

      <Modali.Modal {...modalDonation}>
        <div>
          <p>
            Veuillez remplir tout les champs ci-dessous afin de confirmer votre
            participation à la campagne <span>{campaignInfo.name}</span>
            {donor.donation_value < 1
              ? " !"
              : ` à hauteur de ${donor.donation_value}€ !`}
          </p>
          <form
            onSubmit={e => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <div className="container">
              <label htmlFor="email">
                <input
                  type="email"
                  id="email"
                  value={donor.email}
                  onChange={event => {
                    setDonor({
                      ...donor,
                      email: event.target.value
                    });
                  }}
                  placeholder="E-Mail."
                  required
                />
              </label>
            </div>
            <div className="container">
              <label htmlFor="tel">
                <input
                  type="tel"
                  id="tel"
                  value={donor.tel}
                  onChange={event => {
                    setDonor({
                      ...donor,
                      phone_number: event.target.value
                    });
                  }}
                  placeholder="Ex : 0634875634"
                  pattern="[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}"
                  required
                />
              </label>
            </div>
            <input type="submit" value="Partciper !" />
          </form>
        </div>
      </Modali.Modal>
    </div>
  );
}
