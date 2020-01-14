import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./styles/Ambassadors.scss";
import FilterTab from "../components/FilterTab";
import ProfileCard from "../components/ProfileCard";
import axios from "axios";
const { apiCall } = require("../conf");

function Ambassadors() {
  //const [ambassadors, setAmbassadors] = useState([]);
  const ambassadorsInfos = useSelector(state => state.ambassadorsInfos);
  const dispatch = useDispatch();

  /*useEffect(() => {
    axios.get(`${apiCall}/ambassador`).then(res => {
      setAmbassadors(res.data);
    });
  }, [setAmbassadors]);*/

  useEffect(() => {
    axios.get(`${apiCall}/ambassador`).then(res => {
      dispatch({ type: "GET_AMBASADORS", data: res.data });
    });
  }, [dispatch]);

  return (
    <section className="Ambassadors">
      <FilterTab />
      <div className="center containerProfile">
        {ambassadorsInfos.map(ambassador => {
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
