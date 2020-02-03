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
        alert(err);
      });
  };

  return (
    <div className="FormCreateAmbassador">
      <h1>Créer un nouvel Aambassadeur :</h1>
      <form
        enctype="multipart/form-data"
        onSubmit={e => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="container">
          <label htmlFor="firstname">
            <input
              type="text"
              id="firstname"
              value={ambass.firstname}
              placeholder="Prénom"
              onChange={event => {
                setAmbass({
                  ...ambass,
                  firstname: event.target.value
                });
              }}
              required
            />
          </label>
        </div>

        <div className="container">
          <label htmlFor="lastname">
            <input
              type="text"
              id="lastname"
              placeholder="Nom de famille"
              value={ambass.lastname}
              onChange={event => {
                setAmbass({
                  ...ambass,
                  lastname: event.target.value
                });
              }}
              required
            />
          </label>
        </div>

        <div className="container">
          <label htmlFor="resume">
            <textarea
              type="textarea"
              name="resume"
              value={ambass.resume}
              placeholder="Description"
              onChange={event => {
                setAmbass({
                  ...ambass,
                  resume: event.target.value
                });
              }}
            />
          </label>
        </div>

        <div className="container">
          <label htmlFor="img">
            Avatar :
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
          </label>
        </div>

        <div className="container">
          <p>Tags associés :</p>

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
        <button type="submit">Créer l'ambassadeur !</button>
      </form>
    </div>
  );
}
