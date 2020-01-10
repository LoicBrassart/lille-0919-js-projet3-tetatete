import React, { useState, useEffect } from "react";
import "./styles/Causes.scss";
import FilterTab from "../components/FilterTab";
import ProfileCard from "../components/ProfileCard";
import axios from "axios";
const { apiCall } = require("./conf.js");

function Causes() {
  const [associations, setAssociations] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiCall}/association`)
      .then(res => {
        setAssociations(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [setAssociations]);
  return (
    <section className="Causes">
      <FilterTab />
      <div className="center containerCauses">
        {associations.map(association => {
          return (
            <ProfileCard
              id={association.id}
              key={association.id}
              url="causes"
              img={association.img}
              name={association.name}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Causes;
