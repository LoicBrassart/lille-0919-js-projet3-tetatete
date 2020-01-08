import React, { useState, useEffect } from "react";
import "./styles/Ambassadors.scss";
import FilterTab from "../components/FilterTab";
import ProfileCard from "../components/ProfileCard";
import axios from "axios";

function Ambassadors() {
  const [ambassadors, setAmbassadors] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/ambassador`)
      .then(res => {
        setAmbassadors(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [setAmbassadors]);

  return (
    <section className="Ambassadors">
      <FilterTab />
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
