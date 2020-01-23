import React, { useState, useEffect } from "react";
import "./styles/Causes.scss";
import FilterTab from "../components/FilterTab";
import ProfileCard from "../components/ProfileCard";
import axios from "axios";
import { useSelector } from "react-redux";
const { apiCall } = require("../conf");

function Causes() {
  const [associations, setAssociations] = useState([]);
  const filterCauses = useSelector(state => state.filterCauses);

  useEffect(() => {
    axios.get(`${apiCall}/association`).then(res => {
      setAssociations(res.data);
    });
  }, []);

  return (
    <section className="Causes">
      <div className="causesHero">
        <img src="img/monthCause.jpg" alt="month cause" />
      </div>
      <FilterTab type="ASS_" />
      <div className="center containerCauses">
        {associations
          .filter(association => {
            if (filterCauses === null) {
              return association;
            } else {
              return association.tagList.includes(filterCauses);
            }
          })
          .map(association => {
            return (
              <ProfileCard
                id={association.id}
                key={association.id}
                url="causes"
                img={association.img}
                name={association.name}
                style="yellowContent"
                mainStyle="ProfileCardYellow"
              />
            );
          })}
      </div>
    </section>
  );
}

export default Causes;
