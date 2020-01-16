import React, { useState } from "react";
import "./styles/FormCreateCause.scss";
import getCheckbox from "./getCheckbox";
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

  const handleSubmit = () => {
    const data = asso;

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
          <label>Name of asso :</label>
          <input
            type="tel"
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
          <label>Picture :</label>
          <input
            type="file"
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
          <label>Resume :</label>
          <textarea
            type="textarea"
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
          <label>Website :</label>
          <input
            type="url"
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
          <label>Select tags of campaign :</label>
          <div id="allCheckbox">
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
            <label for="boxSante">Sante</label>
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
            <label for="boxHumanitaire">Humanitaire</label>
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
            <label for="boxCulture">Culture</label>
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
            <label for="boxSport">Sport</label>
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
            <label for="boxEcologie">Écologie</label>
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
            <label for="boxEducation">Éducation</label>
          </div>
        </div>

        <input type="submit" onClick={handleSubmit()} />
      </form>
    </div>
  );
}
