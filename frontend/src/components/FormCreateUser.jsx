import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./styles/FormCreateUser.scss";
import axios from "axios";
const { apiCall } = require("../conf");

export default function FormCreateUser() {
  const token = useSelector(state => state.dataJWT.token);

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
      .post(`${apiCall}/auth`, data, {
        headers: { Authorization: `Bearer ${token}` }
      })
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
          <label htmlFor="tel">Phone number :</label>
          <input
            id="tel"
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
          <label htmlFor="password">Password :</label>
          <input
            id="password"
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
          <label htmlFor="email">Email :</label>
          <input
            id="email"
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
          <label htmlFor="superAdmin">Peut tout créer (Admin)</label>
          <input
            id="superAdmin"
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
          <label htmlFor="admin">
            Peut créer des campaignes et ambassadeurs uniquement
            (Entreprises/Associations)
          </label>
          <input
            id="admin"
            type="checkbox"
            value={user.canCreateContent}
            onChange={() => {
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
