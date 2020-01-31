import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import "./styles/FormLoginBO.scss";
const { apiCall } = require("../conf");

export default function FormLoginBO() {
  const dispatch = useDispatch();
  const [credentialsState, updateCredentialsState] = useState(true);
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = () => {
    axios
      .post(`${apiCall}/auth/login`, user)
      .then(res => {
        dispatch({ type: "DATAJWT", value: res.data });
      })
      .catch(() => {
        updateCredentialsState(false);
      });
  };

  return (
    <div className="FormLoginBO">
      <h1>Admin login</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        {!credentialsState && (
          <p className="warning">
            Veuillez réessayer, l'email ou le mot de passe sont incorrects
          </p>
        )}
        <div className="container">
          <label for="email">Email :</label>
          <input
            type="email"
            id="email"
            value={user.email}
            onChange={event => {
              updateCredentialsState(true);
              setUser({
                ...user,
                email: event.target.value
              });
            }}
            className={credentialsState ? "" : "warning"}
            required
          />
        </div>

        <div className="container">
          <label for="password">Password :</label>
          <input
            type="password"
            id="password"
            value={user.password}
            onChange={event => {
              updateCredentialsState(true);
              setUser({
                ...user,
                password: event.target.value
              });
            }}
            className={credentialsState ? "" : "warning"}
            required
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}
