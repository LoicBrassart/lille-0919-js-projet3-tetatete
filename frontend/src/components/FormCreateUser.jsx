import React, { useState } from "react";
import "./styles/FormCreateUser.scss";
import axios from "axios";
const { apiCall } = require("../conf");

export default function FormCreateUser() {
  const [user, setUser] = useState({
    phone_number: "",
    password: "",
    email: "",
    canAdmin: false,
    canCreateContent: false
  });

  const handleSubmit = () => {
    const data = user;
    axios
      .post(`${apiCall}/auth`, data)
      .then(res => {
        alert(res.data);
      })
      .catch(err => {
        alert(err.response.data);
      });
  };

  return (
    <div className="CampaignFormBO">
      <h1>Create new user</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="container">
          <label>Phone number :</label>
          <input
            type="tel"
            value={user.phone_number}
            onChange={event => {
              setUser({
                ...user,
                phone_number: event.target.value
              });
            }}
            required
          />
        </div>

        <div className="container">
          <label>Password :</label>
          <input
            type="text"
            value={user.password}
            onChange={event => {
              setUser({
                ...user,
                password: event.target.value
              });
            }}
            required
          />
        </div>

        <div className="container">
          <label>Email :</label>
          <input
            type="email"
            value={user.email}
            onChange={event => {
              setUser({
                ...user,
                email: event.target.value
              });
            }}
            required
          />
        </div>

        <div className="container">
          <label>Law Admin :</label>
          <input
            type="checkbox"
            value={user.canAdmin}
            onChange={event => {
              setUser({
                ...user,
                canAdmin: !user.canAdmin
              });
            }}
          />
        </div>

        <div className="container">
          <label>Law Create Content :</label>
          <input
            type="checkbox"
            value={user.canCreateContent}
            onChange={event => {
              setUser({
                ...user,
                canCreateContent: !user.canCreateContent
              });
            }}
          />
        </div>

        <input type="submit" />
      </form>
    </div>
  );
}
