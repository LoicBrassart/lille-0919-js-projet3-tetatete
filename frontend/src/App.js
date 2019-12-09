import React from "react";
import "./App.scss";
import InfoprofilePage from './components/InfoProfilePage';

const { siteTitle } = require("./conf.js");

function App() {
  return <div className="App">
    <InfoprofilePage />
  </div>;
}

export default App;
