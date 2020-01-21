import React, { useState, useEffect } from "react";
import "./styles/Ambassadors.scss";
import FilterTab from "../components/FilterTab";
import ProfileCard from "../components/ProfileCard";
import axios from "axios";
import { useSelector } from "react-redux";
const { apiCall } = require("../conf");

function Ambassadors() {
  const [ambassadors, setAmbassadors] = useState([]);
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    axios.get(`${apiCall}/ambassador`).then(res => {
      setAmbassadors(res.data);
    });
  }, []);

  return (
    <section className="Ambassadors">
      <FilterTab />
      <div className="center containerProfile">
        {ambassadors
          .filter(ambassadors => {
            if (filter === null) {
              return ambassadors;
            } else {
              return ambassadors.tagList === filter;
            }
          })
          .map(ambassador => {
            return (
              <ProfileCard
                key={ambassador.id}
                id={ambassador.id}
                img={ambassador.img}
                url="ambassadors"
                style="blueContent"
                mainStyle="ProfileCardBlue"
                name={`${ambassador.firstname} ${ambassador.lastname}`}
              />
            );
          })}
      </div>
    </section>
  );
}

export default Ambassadors;
