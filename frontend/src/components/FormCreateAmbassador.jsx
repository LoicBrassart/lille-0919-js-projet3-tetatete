import React, { useState } from "react";
import "./styles/FormCreateAmbassador.scss";
import axios from "axios";
import CheckboxList from "../CheckboxList";
const { apiCall } = require("../conf");

export default function FormCreateAmbassador() {
  const [ambass, setAmbass] = useState({
    firstname: "",
    lastname: "",
    resume: "",
    img: null,
    id_tag: []
  });

  const data = ambass;

  const handleSubmit = () => {
    axios
      .post(`${apiCall}/ambassador`, data)
      .then(res => {
        alert(res.data);
      })
      .catch(err => {
        alert(err.response.data);
      });
  };

  return (
    <div className="FormCreateAmbassador">
      <h1>Create new ambass</h1>
      <form
        enctype="multipart/form-data"
        onSubmit={e => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="container">
          <label htmlFor="firstname">Firstname :</label>
          <input
            type="text"
            id="firstname"
            value={ambass.firstname}
            onChange={event => {
              setAmbass({
                ...ambass,
                firstname: event.target.value
              });
            }}
            required
          />
        </div>

        <div className="container">
          <label htmlFor="lastname">Lastname :</label>
          <input
            type="text"
            id="lastname"
            value={ambass.lastname}
            onChange={event => {
              setAmbass({
                ...ambass,
                lastname: event.target.value
              });
            }}
            required
          />
        </div>

        <div className="container">
          <label htmlFor="resume">Resume :</label>
          <textarea
            type="textarea"
            name="resume"
            value={ambass.resume}
            onChange={event => {
              setAmbass({
                ...ambass,
                resume: event.target.value
              });
            }}
          />
        </div>

        <div className="container">
          <label htmlFor="img">Picture :</label>
          <input
            type="file"
            name="img"
            value={ambass.img}
            onChange={event => {
              setAmbass({
                ...ambass,
                img: event.target.value
              });
            }}
          />
        </div>

        <div className="container">
          <p>Select tags of campaign :</p>

          <div className="allCheckbox">
            {CheckboxList.map(({ id, value, label }) => {
              return (
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id={id}
                    value={value}
                    onChange={event => {
                      const tvalue = event.target.value;
                      const boxArr = [...ambass.id_tag];

                      if (event.target.checked) boxArr.push(parseInt(tvalue));
                      else {
                        const index = boxArr.indexOf(parseInt(tvalue));
                        if (index !== -1) {
                          boxArr.splice(index, 1);
                        }
                      }
                      setAmbass({ ...ambass, id_tag: boxArr });
                    }}
                  />
                  <label htmlFor={id}>{label}</label>
                </div>
              );
            })}
          </div>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}
