import React from "react";
import FormCreateUser from "../components/FormCreateUser";
import FormLoginBO from "../components/FormLoginBO";
import "./styles/HomeBO.scss";
import { useSelector } from "react-redux";

export default function HomeBO() {
  const isLogged = useSelector(state => state.isLogged);

  return (
    <div className="HomeBO">
      <FormCreateUser />}
    </div>
  );
}
