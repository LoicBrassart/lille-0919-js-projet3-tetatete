import React, { useState } from "react";
import "./styles/FormCreateCause.scss";
import axios from "axios";
const { apiCall } = require("../conf");

export default function FormCreateCause() {
  const [asso, setAsso] = useState({
    name: "",
    img: null,
    resume: "",
    website: "",
    id_tag: []
  });

  const data = asso;

  const handleSubmit = () => {
    console.log(data);
    axios
      .post(`${apiCall}/association`, data)
      .then(res => {
        console.log(`Booyah! ${res.data}`);
      })
      .catch(err => {
        console.log(`Nay! ${err}`);
      });
  };

  return (
    <div className="FormCreateCause">
      <h1>Create new asso</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <div className="container">
          <label htmlFor="name">Name of asso :</label>
          <input
            type="tel"
            name="name"
            value={asso.name}
            onChange={event => {
              setAsso({
                ...asso,
                name: event.target.value
              });
            }}
            required
          />
        </div>

        <div className="container">
          <label htmlFor="img">Picture :</label>
          <input
            type="file"
            name="img"
            value={asso.img}
            onChange={event => {
              setAsso({
                ...asso,
                img: event.target.value
              });
            }}
          />
        </div>

        <div className="container">
          <label htmlFor="resume">Resume :</label>
          <textarea
            type="textarea"
            name="resume"
            value={asso.resume}
            onChange={event => {
              setAsso({
                ...asso,
                resume: event.target.value
              });
            }}
          />
        </div>

        <div className="container">
          <label htmlFor="site">Website :</label>
          <input
            type="url"
            name="site"
            value={asso.website}
            onChange={event => {
              setAsso({
                ...asso,
                website: event.target.value
              });
            }}
          />
        </div>

        <div className="container">
          <p>Select tags of campaign :</p>
          <div className="allCheckbox">
            <div className="box1">
              <input
                type="checkbox"
                id="boxSante"
                name="choix1"
                value="1"
                onChange={event => {
                  setAsso({
                    ...asso,
                    id_tag: event.target.value
                  });
                }}
              />
              <label htmlFor="boxSante">Sante</label>
            </div>
            <div className="box1">
              <input
                type="checkbox"
                value={2}
                id="boxHumanitaire"
                name="choix2"
                onChange={event => {
                  setAsso({
                    ...asso,
                    id_tag: [event.target.value]
                  });
                }}
              />
              <label htmlFor="boxHumanitaire">Humanitaire</label>
            </div>
            <div className="box1">
              <input
                type="checkbox"
                value={3}
                id="boxCulture"
                name="choix3"
                onChange={event => {
                  setAsso({
                    ...asso,
                    id_tag: event.target.value
                  });
                }}
              />
              <label htmlFor="boxCulture">Culture</label>
            </div>
            <div className="box1">
              <input
                type="checkbox"
                value={4}
                id="boxSport"
                name="choix4"
                onChange={event => {
                  setAsso({
                    ...asso,
                    id_tag: event.target.value
                  });
                }}
              />
              <label htmlFor="boxSport">Sport</label>
            </div>
            <div className="box1">
              <input
                type="checkbox"
                value={5}
                id="boxEcologie"
                name="choix5"
                onChange={event => {
                  setAsso({
                    ...asso,
                    id_tag: event.target.value
                  });
                }}
              />
              <label htmlFor="boxEcologie">Écologie</label>
            </div>
            <div className="box1">
              <input
                type="checkbox"
                value={6}
                id="boxEducation"
                name="choix6"
                onChange={event => {
                  setAsso({
                    ...asso,
                    id_tag: event.target.value
                  });
                }}
              />
              <label htmlFor="boxEducation">Éducation</label>
            </div>
          </div>
        </div>
        <input type="submit" onClick={handleSubmit} />
      </form>
    </div>
  );
}
