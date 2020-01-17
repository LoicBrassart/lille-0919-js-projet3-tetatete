import React, { useState } from "react";
import "./styles/FormCreateCause.scss";
import axios from "axios";
import CheckboxList from "../CheckboxList";
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
      .post(`${apiCall}/test`, data)
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
        enctype="multipart/form-data"
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
            {CheckboxList.map(({ id, value, label }) => {
              return (
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id={id}
                    value={value}
                    onChange={event => {
                      const tvalue = event.target.value;
                      const boxArr = [...asso.id_tag];

                      if (event.target.checked) boxArr.push(tvalue);
                      else {
                        const index = boxArr.indexOf(tvalue);
                        if (index !== -1) {
                          boxArr.splice(index, 1);
                        }
                      }
                      setAsso({ ...asso, id_tag: boxArr });
                    }}
                  />
                  <label htmlFor={id}>{label}</label>
                </div>
              );
            })}
          </div>
        </div>
        <input type="submit" onClick={handleSubmit} />
      </form>
    </div>
  );
}

{
  /* const boxArr = [...asso.id_tag];
                  const value = event.target.value;
                  const index = boxArr.findIndex(
                    checkbox => checkbox === value
                  );
                  if (index > -1) {
                    boxArr = [
                      ...boxArr.slice(0, index),
                      ...boxArr.slice(index + 1)
                    ];
                  } else {
                    boxArr.push(value);
                  }
                  setAsso({ id_tag: boxArr }); */
}
