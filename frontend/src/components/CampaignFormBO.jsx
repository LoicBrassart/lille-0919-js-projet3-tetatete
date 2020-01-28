import React, { useState, useEffect } from "react";
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

  const [ambassadorsInfosBO, setAmbassadorsInfosBO] = useState([]);
  const [associationInfosBO, setAssociationInfosBO] = useState([]);

  useEffect(() => {
    axios.get(`${apiCall}/ambassador`).then(res => {
      setAmbassadorsInfosBO(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`${apiCall}/association`).then(res => {
      setAssociationInfosBO(res.data);
    });
  }, []);

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
        <div className="container">
          <label htmlFor="name">Name of campaign :</label>
          <input
            id="name"
            type="text"
            value={newCampaign.name}
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
          <label htmlFor="img">Picture of campaign :</label>
          <input
            id="img"
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
          <label htmlFor="resume">Resume :</label>
          <textarea
            id="resume"
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
          <label htmlFor="startDate">Campaign start date :</label>
          <p>Please enter strict syntax</p>
          <span>ex: "2020-03-29 00:00:00"</span>
          <input
            id="startDate"
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
          <label htmlFor="endDate">Campaign end date :</label>
          <p>Please enter strict syntax</p>
          <span>ex: "2020-03-29 00:00:00"</span>
          <input
            id="endDate"
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
          <label htmlFor="eventDate">Campaign event date :</label>
          <p>Please enter strict syntax</p>
          <span>ex: "2020-03-29 00:00:00"</span>
          <input
            id="eventDate"
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
          <label htmlFor="don1">First donation value :</label>
          <input
            id="don1"
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
          <label htmlFor="don2">Second donation value :</label>
          <input
            id="don2"
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
          <label htmlFor="don3">Third donation value :</label>
          <input7
            id="don3"
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
            id="ambassadors"
            onChange={event => {
              setNewCampaign({
                ...newCampaign,
                id_ambassador: parseInt(event.target.value)
              });
            }}
            required
          >
            <option value="">
              ***********************Select Ambassadeur***********************
            </option>
            {ambassadorsInfosBO.map(ambassadors => {
              return (
                <option value={ambassadors.id}>
                  {ambassadors.firstname} {ambassadors.lastname}
                </option>
              );
            })}
          </select>
        </div>

        <div className="container">
          <label htmlFor="association">Id association :</label>
          <select
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
              ***********************Select Association***********************
            </option>
            {associationInfosBO.map(association => {
              return <option value={association.id}>{association.name}</option>;
            })}
          </select>
        </div>

        <input type="submit" />
      </form>
    </div>
  );
}
