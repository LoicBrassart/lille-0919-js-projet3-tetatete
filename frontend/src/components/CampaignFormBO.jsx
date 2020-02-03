import React, { useState } from "react";
import "./styles/CampaignFormBO.scss";
import axios from "axios";
const { apiCall } = require("../conf");

export default function CampaingFormBO() {
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

  const handleSubmit = () => {
    const data = newCampaign;

    axios
      .post(`${apiCall}/campaign`, data)
      .then(res => {
        alert(res.data);
      })
      .catch(err => {
        alert(err);
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
        <div id="camp_name" className="container">
          <label>
            <input
              type="text"
              value={newCampaign.name}
              placeholder="Intutilé de la campagne"
              onChange={event => {
                setNewCampaign({
                  ...newCampaign,
                  name: event.target.value
                });
              }}
              required
            />
          </label>
        </div>

        <div id="camp_pic" className="container">
          <label>Illustration de la campagne :</label>
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

        <div id="camp_resume" className="container">
          <label>
            <textarea
              type="textarea"
              value={newCampaign.resume}
              placeholder="Description de la campagne"
              onChange={event => {
                setNewCampaign({
                  ...newCampaign,
                  resume: event.target.value
                });
              }}
              required
            />
          </label>
        </div>

        <div id="camp_start" className="container">
          <label>
            Début de la campagne :<p>Please enter strict syntax</p>
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
          </label>
        </div>

        <div id="camp_end" className="container">
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

        <div id="camp_date" className="container">
          <label>Campaign event date :</label>
          <input
            type="date"
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

        <div id="camp_value_1" className="container">
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

        <div id="camp_value_2" className="container">
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

        <div id="camp_value_3" className="container">
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

        <div id="camp_user_id" className="container">
          <label>Id user :</label>
          <input
            type="number"
            value={newCampaign.id_user}
            maxLength="2"
            onChange={event => {
              setNewCampaign({
                ...newCampaign,
                id_user: parseInt(event.target.value)
              });
            }}
          />
        </div>

        <div id="camp_amb_id" className="container">
          <label>Id ambassador :</label>
          <input
            type="number"
            value={newCampaign.id_ambassador}
            maxLength="2"
            onChange={event => {
              setNewCampaign({
                ...newCampaign,
                id_ambassador: parseInt(event.target.value)
              });
            }}
            required
          />
        </div>

        <div id="camp_ass_id" className="container">
          <label>Id association :</label>
          <input
            type="number"
            value={newCampaign.id_association}
            maxLength="2"
            onChange={event => {
              setNewCampaign({
                ...newCampaign,
                id_association: parseInt(event.target.value)
              });
            }}
            required
          />
        </div>

        <input type="submit" />
      </form>
    </div>
  );
}
