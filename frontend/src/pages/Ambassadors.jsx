import React, { useState, useEffect } from "react";
import "./styles/Ambassadors.scss";
import FilterTab from "../components/FilterTab";
import ProfileCard from "../components/ProfileCard";
import axios from "axios";
const { apiCall } = require("../conf");

function Ambassadors() {
  const [ambassadors, setAmbassadors] = useState([]);

  useEffect(() => {
    axios.get(`${apiCall}/ambassador`).then(res => {
      setAmbassadors(res.data);
    });
  }, []);

  return (
    <section className="Ambassadors">
      <div className="ambassadorsHero">
        <img src="img/monthAmbassador.jpg" alt="month ambassador" />
      </div>
      <FilterTab filterType="ambassadeurs" />
      <div className="center containerProfile">
        {ambassadors.map(ambassador => {
          return (
            <ProfileCard
              key={ambassador.id}
              id={ambassador.id}
              img={ambassador.img}
              url="ambassadors"
              name={`${ambassador.firstname} ${ambassador.lastname}`}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Ambassadors;
