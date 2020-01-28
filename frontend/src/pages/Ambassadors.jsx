import React, { useState, useEffect } from "react";
import "./styles/Ambassadors.scss";
import FilterTab from "../components/FilterTab";
import ProfileCard from "../components/ProfileCard";
import axios from "axios";
import { useSelector } from "react-redux";
const { apiCall } = require("../conf");

function Ambassadors() {
  const [ambassadors, setAmbassadors] = useState([]);
  const filterAmbassadors = useSelector(state => state.filterAmbassadors);

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
      <FilterTab type="AMBASSADORS" />
      <div className="center containerProfile">
        {ambassadors
          .filter(ambassador => {
            if (filterAmbassadors === null) {
              return ambassador;
            } else {
              return ambassador.tagList.includes(filterAmbassadors);
            }
          })
          .map(ambassador => {
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
