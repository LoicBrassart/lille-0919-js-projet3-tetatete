import React, { useState } from "react";
import "./styles/CampaignFormBO.scss";
import axios from "axios";
const { apiCall } = require("../conf");

export default function CampaingFormBO() {
  const [resetForm] = useState({
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
    console.log(data);
    axios
      .post(`${apiCall}/campaign`, data)
      .then(res => {
        alert(`Booyah! New campaign create`);
        console(res.data);
      })
      .catch(err => {
        console.log(`Nay ! New campaign not create`);
      });
  };

  return (
    <div className="CampaignFormBO">
      <h1>Create new campaign</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
        id="form"
      >
        <div className="container">
          <label>Name of campaign :</label>
          <input
            type="text"
            value={newCampaign.name}
            defaultValue={resetForm.name}
            onChange={event => {
              setNewCampaign({
                ...newCampaign,
                name: event.target.value
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
            defaultValue={resetForm.img}
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
            defaultValue={resetForm.resume}
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
            defaultValue={resetForm.time_start}
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
            defaultValue={resetForm.time_end}
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
          <input
            type="date"
            value={newCampaign.date_event}
            defaultValue={resetForm.date_event}
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
            defaultValue={resetForm.value1}
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
            defaultValue={resetForm.value2}
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
            defaultValue={resetForm.value3}
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
          <label>Id user :</label>
          <input
            type="number"
            value={newCampaign.id_user}
            defaultValue={resetForm.id_user}
            maxLength="2"
            onChange={event => {
              setNewCampaign({
                ...newCampaign,
                id_user: parseInt(event.target.value)
              });
            }}
          />
        </div>

        <div className="container">
          <label>Id ambassador :</label>
          <input
            type="number"
            value={newCampaign.id_ambassador}
            defaultValue={resetForm.id_ambassador}
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

        <div className="container">
          <label>Id association :</label>
          <input
            type="number"
            value={newCampaign.id_association}
            defaultValue={resetForm.id_association}
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

        <input type="submit" onClick={handleSubmit} />
      </form>
    </div>
  );
}
