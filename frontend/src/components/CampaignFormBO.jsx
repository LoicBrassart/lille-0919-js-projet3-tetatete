import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./styles/CampaignFormBO.scss";
import axios from "axios";
const { apiCall } = require("../conf");

export default function CampaingFormBO() {
  const userId = useSelector(state => state.dataJWT.user[0].id);
  const token = useSelector(state => state.dataJWT.token);

  const [newCampaign, setNewCampaign] = useState({
    name: "",
    img: null,
    resume: "",
    time_start: "",
    time_end: "",
    date_event: "",
    value1: 10,
    value2: 20,
    value3: 30,
    id_user: null,
    id_ambassador: null,
    id_association: null
  });

  const [ambassadors, setAmbassadors] = useState([]);

  const [associations, setAssociations] = useState([]);

  useEffect(() => {
    axios.get(`${apiCall}/ambassador`).then(res => {
      setAmbassadors(res.data);
    }, []);
    axios.get(`${apiCall}/association`).then(res => {
      setAssociations(res.data);
    });
  }, []);

  const handleSubmit = () => {
    const data = newCampaign;

    axios
      .post(`${apiCall}/campaign`, data, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        alert(res.data);
      })
      .catch(err => {
        alert(err.response.data);
      });
  };

  return (
    <div className="CampaignFormBO">
      <h1>Create new campaign</h1>
      <form
        enctype="multipart/form-data"
        onSubmit={e => {
          e.preventDefault();
          handleSubmit();
        }}
        id="form"
      >
        <div className="container">
          <label>Name of campaign :</label>
          <input
            type="text"
            value={newCampaign.name}
            onChange={event => {
              setNewCampaign({
                ...newCampaign,
                name: event.target.value,
                id_user: userId
              });
            }}
            required
          />
        </div>

        <div className="container">
          <label>Picture of campaign :</label>
          <input
            type="file"
            value={newCampaign.img}
            onChange={event => {
              setNewCampaign({
                ...newCampaign,
                img: event.target.value
              });
            }}
            required
          />
        </div>

        <div className="container">
          <label>Resume :</label>
          <textarea
            type="textarea"
            value={newCampaign.resume}
            onChange={event => {
              setNewCampaign({
                ...newCampaign,
                resume: event.target.value
              });
            }}
            required
          />
        </div>

        <div className="container">
          <label>Campaign start date :</label>
          <p>Please enter strict syntax</p>
          <span>ex: "2020-03-29 00:00:00"</span>
          <input
            type="datetime"
            placeholder="YYYY-MM-DD 00:00:00"
            value={newCampaign.time_start}
            onChange={event => {
              setNewCampaign({
                ...newCampaign,
                time_start: event.target.value
              });
            }}
            required
          />
        </div>

        <div className="container">
          <label>Campaign end date :</label>
          <p>Please enter strict syntax</p>
          <span>ex: "2020-03-29 00:00:00"</span>
          <input
            type="datetime"
            placeholder="YYYY-MM-DD 00:00:00"
            value={newCampaign.time_end}
            onChange={event => {
              setNewCampaign({
                ...newCampaign,
                time_end: event.target.value
              });
            }}
            required
          />
        </div>

        <div className="container">
          <label>Campaign event date :</label>
          <p>Please enter strict syntax</p>
          <span>ex: "2020-03-29 00:00:00"</span>
          <input
            type="datetime"
            placeholder="YYYY-MM-DD 00:00:00"
            value={newCampaign.date_event}
            onChange={event => {
              setNewCampaign({
                ...newCampaign,
                date_event: event.target.value
              });
            }}
            required
          />
        </div>

        <div className="container">
          <label>First donation value :</label>
          <input
            type="number"
            value={newCampaign.value1}
            onChange={event => {
              setNewCampaign({
                ...newCampaign,
                value1: parseInt(event.target.value)
              });
            }}
            required
          />
        </div>

        <div className="container">
          <label>Second donation value :</label>
          <input
            type="number"
            value={newCampaign.value2}
            onChange={event => {
              setNewCampaign({
                ...newCampaign,
                value2: parseInt(event.target.value)
              });
            }}
            required
          />
        </div>

        <div className="container">
          <label>Third donation value :</label>
          <input
            type="number"
            value={newCampaign.value3}
            onChange={event => {
              setNewCampaign({
                ...newCampaign,
                value3: parseInt(event.target.value)
              });
            }}
            required
          />
        </div>

        <div className="container">
          <label htmlFor="ambassadors">Id ambassador :</label>
          <select
            name="ambassadors"
            id="ambassadors"
            onChange={event => {
              setNewCampaign({
                ...newCampaign,
                id_association: parseInt(event.target.value)
              });
            }}
            required
          >
            <option value="">
              **********Selectionne l'Ambassadeur**************
            </option>
            {ambassadors.map(ambassador => {
              return (
                <option value={ambassador.id}>
                  {`${ambassador.firstname} ${ambassador.lastname}`}
                </option>
              );
            })}
          </select>
        </div>

        <div className="container">
          <label htmlFor="association">Id association :</label>
          <select
            name="association"
            id="association"
            onChange={event => {
              setNewCampaign({
                ...newCampaign,
                id_association: parseInt(event.target.value)
              });
            }}
            required
          >
            <option value="">
              **********Selectionne l'Association**************
            </option>
            {associations.map(association => {
              return <option value={association.id}>{association.name}</option>;
            })}
          </select>
        </div>

        <input type="submit" />
      </form>
    </div>
  );
}
